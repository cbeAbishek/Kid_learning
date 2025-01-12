import { Row, Col, Card } from "react-bootstrap";

import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

import "./games.css";

function Games() {
  return (
    <div>
      <Navbar />
      <Row style={{ padding:'20px' }}>
        <Col className="md-col-6 p-4">
          <Card >
            <Card.Body>
              <Card.Title>General Knowledge Test</Card.Title>
              <Card.Text>
              General Knowledge (GK) questions suitable for 5-year-olds test with timer and score.
              </Card.Text>
              <a href="/kids-learning/#/game1" className="btn" >Let's Play GK Game</a>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-col-6 p-4">
          {/* <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Game 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a href="/kids-learning/#/game2" className="btn" >Let's Play Mind Game</a>
            </Card.Body>
          </Card> */}
        </Col>
        <Col className="md-col-6 p-4">
        {/* <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Game 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn">Let's Start Game</button>
            </Card.Body>
          </Card> */}
        </Col>
        {/* <Col className="md-col-6 p-4">
        <Card >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Game 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn">Let's Start Game</button>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
      <Footer/>
    </div>
  );
}

export default Games;
