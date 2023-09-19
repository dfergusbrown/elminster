import { Container, Row, Col} from "reactstrap";
import TarotCard from "./TarotCard";



const QuizGame = () => {



    return(
        <Container>
            <Row className="cardset" />
            <Row className="cardset">
                <Col className="offset-2">
                    <TarotCard props=""/>
                </Col>
                <Col>
                    <TarotCard />
                </Col>
                <Col>
                    <TarotCard />
                </Col>
                <Col>
                </Col>
            </Row>
            <Row className="cardset">
                <Col className="offset-2">
                    <TarotCard />
                </Col>
                <Col>
                    <TarotCard />
                </Col>
                <Col>
                    <TarotCard />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default QuizGame;