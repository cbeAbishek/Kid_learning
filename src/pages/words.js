import {React, useState} from 'react';
import {Container,Tab,Tabs,Row,Col,Card,Accordion} from 'react-bootstrap';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import GeneralWords from '../Data/words.json';
import Color from '../Data/Color.json';
import States from '../Data/States.js';
// import Plants from '../Data/Plants.json';
import Flower from '../Data/Flower.js';
import Months from '../Data/Months.json';
import Days from '../Data/Days.json';
import PlanetsList from '../Data/Planets.js';
import './about.css';

import Speech from "./Speech/Speech";


function ControlledTabs() {
    const [key, setKey] = useState('Flower');
      
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="General Words">
        <br/>
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Top 100 general Words. 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Row> 
            {
                GeneralWords.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col card-style"  >
                        <Speech text={variant.val}>
                        <Card.Title>
                            {variant.val}
                        </Card.Title>
                        </Speech>
                    </Col>
                  ))
            }    
      </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
       
        </Tab>
        {/* <Tab eventKey="Animals" title="Animals">
        <br/>       
        </Tab> */}
        {/* <Tab eventKey="Birds" title="Birds">
         <br/>
            <Flower/>
        </Tab> */}
        <Tab eventKey="Flower" title="Flower" >
         <br/>
            <Flower/>
        </Tab>
        <Tab eventKey="planets" title="Planets" >
         <br/>            
            <PlanetsList/>         
        </Tab>
        <Tab eventKey="Months" title="Months" >
        <br/>
        <Row> 
            {
                Months.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                     <Speech text={variant.val}>   
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem'}}>
                        <Card.Title>
                        {idx+1}. {variant.val}
                            </Card.Title>
                         
                       </Card.Body>
                    </Card> 
                    </Speech>
                    </Col>
                  ))
            }    
        </Row>
        </Tab>
        <Tab eventKey="Days" title="Days" >
        <br/>
        <Row> 
            {
                Days.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                     <Speech text={variant.val}>   
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem'}}>
                        <Card.Title>
                            {idx+1}. {variant.val}
                            </Card.Title>                         
                       </Card.Body>
                    </Card>
                    </Speech> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Colors" title="Colors">
            <br/>
        <Row> 
            {
                Color.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                        <Speech text={variant.val}>
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem', display:'flex',direction:'row'}}>                    
                        
                        <Card style={{width:'70px',borderRadius:'50px', backgroundColor: variant.val}}>
                               <Card.Body>
                                   
                                </Card.Body> 
                          </Card>
                          <Card.Title style={{paddingLeft:'2rem'}}>
                            {variant.val}
                            </Card.Title>
                         
                       </Card.Body>
                    </Card> 
                    </Speech>
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="states" title="States">
         <br/>            
            <States/>         
        </Tab>        
      </Tabs>
    );
  }

function Words() {
  return (
    <div>    
        <Navbar/>
        
            <br/>        
        <Container>
            <br/>
            <ControlledTabs style={{Color:'red'}}/>           
        </Container>

        <Footer/>
    </div>
  );
}

export default Words;
