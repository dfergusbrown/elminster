import { Col, Container, Row, Button } from "reactstrap";
import oldWizard from "../images/oldwizard.png"
// import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
import { useState } from "react";


const Intro = () => {
    
    const [tutorOpen, setTutor] = useState(true)
    const closeTutor = () => {
        setTutor(state => !state)
    }

    const props = useSpring({
        height: tutorOpen ? "300px" : "150px",
        width: tutorOpen ? "300px" : "150px"
    })

    const props2 = useSpring({
        fontSize: tutorOpen ? "3em" : "1.5em"
    })


    return (
        <Container className="pt-5">
            <Row className="mt-2">
                    <Col className="d-flex justify-content-end align-items-center">
                        <animated.div style={props} className="wizard" />
                    </Col>
                    <Col>
                        <animated.div className="introtext" style={props2}>What's that? You don't know what class to choose for your DND campaign?  
                            <br/><br/>Well, answer me this...
                        </animated.div>

                    </Col>
            </Row>
            {/* <Link to="/Inside/QuizGame"> */}
                <Button className="button-intro" onClick={closeTutor}>CONTINUE</Button>
            {/* </Link> */}
        </Container>
    )
}

export default Intro;