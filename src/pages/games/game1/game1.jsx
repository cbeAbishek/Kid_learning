import React, { useEffect, useState } from "react";
import { useHistory} from 'react-router-dom';
import Timer from "./timer/Timer";

import "./game1.css";
import { Row, Col,Button,Card } from "react-bootstrap";

const Game1 = () => {

  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();
  const [option4, setOption4] = useState();

  const [variantOp1, setVariantOp1] = useState('ans-btn');
  const [variantOp2, setVariantOp2] = useState('ans-btn');
  const [variantOp3, setVariantOp3] = useState('ans-btn');
  const [variantOp4, setVariantOp4] = useState('ans-btn');
    
  const [nextButtonEnable, setNextButtonEnable] = useState(false);
  const [ButtonEnable, setButtonEnable] = useState(false);

  const [totalQuestionCount, setTotalQuestionCount] = useState(0);
  const [correctQuestionCount, setCorrectQuestionCount] = useState(0);
  const [timeRemain, setTimeRemain] = useState(true);
  
    useEffect(()=>{
        createQuestion();
    },[])

    const history = useHistory();
    
    const navigateToGames = () =>{
            history.push('/game');
    }

    const createQuestion = () =>{
        // let op1 = Math.floor(Math.random() * 10 + 1); // Example for numbers 1 to 10
        // let op2 = Math.floor(Math.random() * 10 + 1); // Example for numbers 1 to 10
        
        setTotalQuestionCount(totalQuestionCount + 1);
        const d = new Date();
        let seconds = d.getSeconds();

        // General Knowledge Questions based on seconds
        if(seconds < 10){
            setQuestion('What color is the sky?');
            const ans = 'Blue';
            setAnswer(ans);
            setOption1('Blue');        
            setOption2('Green');        
            setOption3('Red');        
            setOption4('Yellow');
        }else if( 10 > seconds && seconds < 20){
            setQuestion('Which animal says Meow?');
            const ans = 'Cat';
            setAnswer(ans);
            setOption1('Dog');        
            setOption2('Lion');        
            setOption3('Cat');        
            setOption4('Elephant');
        }else if( 21 > seconds && seconds < 30){
            setQuestion('How many legs do a spider have?');
            const ans = '8';
            setAnswer(ans);
            setOption1('6');        
            setOption2('8');        
            setOption3('10');        
            setOption4('4');
        }else if( 31 > seconds && seconds < 40){
            setQuestion('What is the color of a banana?');
            const ans = 'Yellow';
            setAnswer(ans);
            setOption1('Yellow');        
            setOption2('Green');        
            setOption3('Blue');        
            setOption4('Red');
        }else if( 40 > seconds && seconds < 50){
            setQuestion('What is the name of the planet we live on?');
            const ans = 'Earth';
            setAnswer(ans);
            setOption1('Earth');        
            setOption2('Mars');        
            setOption3('Jupiter');        
            setOption4('Saturn');
        }
        else if( 50 > seconds && seconds < 55){
            setQuestion('What animal is known as the king of the jungle?');
            const ans = 'Lion';
            setAnswer(ans);
            setOption1('Lion');        
            setOption2('Tiger');        
            setOption3('Elephant');        
            setOption4('Giraffe');
        }
        else {
            setQuestion('What shape has four sides?');
            const ans = 'Square';
            setAnswer(ans);
            setOption1('Circle');        
            setOption2('Square');        
            setOption3('Triangle');        
            setOption4('Rectangle');
        }

        setNextButtonEnable(false); 
        setButtonEnable(false);

        setVariantOp1('ans-btn');
        setVariantOp2('ans-btn');
        setVariantOp3('ans-btn');
        setVariantOp4('ans-btn');
    }

    const checkAnswer = (ans, option)=>{
       
        if(option === 'option1'){
            if(ans === answer){
                setCorrectQuestionCount(correctQuestionCount + 1);
                setVariantOp1('correct-ans-btn');
            }else{
                setVariantOp1('wrong-ans-btn');
            }
        }else if(option === 'option2'){
            if(ans === answer){
                setCorrectQuestionCount(correctQuestionCount + 1);
                setVariantOp2('correct-ans-btn');
            }else{
                setVariantOp2('wrong-ans-btn');
            }
        }else if(option === 'option3'){
            if(ans === answer){
                setCorrectQuestionCount(correctQuestionCount + 1);
                setVariantOp3('correct-ans-btn');
            }else{
                setVariantOp3('wrong-ans-btn');
            }
        }else if(option === 'option4'){
            if(ans === answer){
                setCorrectQuestionCount(correctQuestionCount + 1);
                setVariantOp4('correct-ans-btn');
            }else{
                setVariantOp4('wrong-ans-btn');
            }
        }
        
        setButtonEnable(true);
        setNextButtonEnable(true);
    }


  return (
    <div>
      <Row>
        <Col className="sm-col-4 sm-hide">
          <h1 className="pt-4" style={{font: 'small-caps bold 34px/1 sans-serif'}}>General Knowledge-GK TestGame</h1>
    
        </Col>
        <Col className="sm-col-4">
            <Timer setTimeRemain={setTimeRemain} />      
        </Col>
      </Row>
      <div className="justify-content-md-left p-md-5 p-lg-5 p-sm-2">      
      { timeRemain ?
      (<div className="jumbotron" style={{font: 'small-caps bold 24px/1 sans-serif', color:'rgba(33, 33, 34, 0.856)'}}>
        <div className="mb-2" >{'Q. '}{ question} = _________ </div>
        <Row>
          <Col xs={12} md={6} className="p-2">
          {'A)'} <button disabled={ButtonEnable} className={variantOp1} onClick={()=>checkAnswer(option1,'option1')}>
          {option1}
          </button>
          {/* <button className="bg-green"> a) {option1} </button> */}
          </Col>
          <Col xs={12} md={6} className="p-2 ">
           {'B)'} <button disabled={ButtonEnable}  className={variantOp2} onClick={()=>checkAnswer(option2,'option2')}>
            {option2}   
            </button>
          </Col>
          <Col xs={12} md={6} className="p-2">
          {'C)'} <button disabled={ButtonEnable} className={variantOp3} onClick={()=>checkAnswer(option3, 'option3')}>
            {option3}   
            </button>
          </Col>
          <Col xs={12} md={6} className="p-2 ">
          {'D)'} <button className={variantOp4} disabled={ButtonEnable} onClick={()=>checkAnswer(option4,'option4')}>
            {option4}   
            </button>
          </Col>
        </Row>
       <div style={{marginLeft:'40px', font: 'small-caps bold 24px/1 sans-serif'}}>
       { nextButtonEnable ? (
        <Button variant="warning" onClick={()=>createQuestion()}>
            Next
            </Button>) : null
            }        
        </div> 
      </div>) : (
          <Card>             
            <Card.Body className="text-center">
                <Card.Title style={{fontWeight:700}}>Score Summary</Card.Title>
                <br/>
                <Card.Text>
                Total Questions : <span style={{color:'black', fontWeight:800}}>{ totalQuestionCount }</span>   <br/>
                Correct Questions : <span style={{color:'black', fontWeight:800}}>{ correctQuestionCount } </span><br/>
                Score : <span style={{color:'black', fontWeight:800}}>{ (correctQuestionCount / totalQuestionCount)*100 } {' %'}</span>
                </Card.Text>
                <br/>
                <Button variant="info" onClick={ navigateToGames }>Play More Games</Button>
            </Card.Body>
        </Card>
      )
      }
      </div>
    </div>
  );
};

export default Game1;
