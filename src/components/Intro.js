import { Col, Container, Row, Button } from "reactstrap";
import oldWizard from "../images/oldwizard.png"
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <Container>
            <Row className="introcard">
                <Col>
                    <p className="introtext">What's that? You don't know what class to choose for your DND campaign?  <br/><br/>Well, answer me this...</p>
                    <Link to="/Inside/QuizGame">
                        <Button>Next</Button>
                    </Link>
                </Col>
                <Col>
                    <img src={oldWizard}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;