import { Col, Container, Row, Button } from "reactstrap";
import oldWizard from "../images/oldwizard.png"
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <Container>
            <Row className="introcard">
                <Col>
                    <p className="introtext">Whats that? You dont know what class to choose for your DND campaign?  
                        <br/><br/>Well answer me this...
                    </p>
                    <Link to="/Inside/QuizGame">
                        <Button className="button-intro">CONTINUE</Button>
                    </Link>
                </Col>
                <Col>
                    <img src={oldWizard} className="rounded"alt="Old Wizard sitting down in his cottage"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Intro;