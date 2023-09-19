import { Container, Row, Col} from "reactstrap";
import TarotCard from "./TarotCard";
import { useState } from "react";



const QuizGame = () => {
    let dndClassList = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]
    const [classArray, setClassArray] = useState(dndClassList)

    const Q1 = { 
        text: "Do you want to fight with magic or weapons?",
        answer1: {
            text1: "magic",
            action: setClassArray(classArray.filter(item => item !== "Fighter" || "Barbarian" || "Monk" || "Rogue"))
        }
    }
    const questionsList = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9]

    const [questionArray, setQuestionArray] = useState(questionsList)
    const whichQuestions = () => {
        if (classArray === dndClassList) {
            setQuestionArray(Q1)
        } else if (classArray.length <= 3 && classArray.length > 1) {
            setQuestionArray(/*class questions list here */)
        } else if (classArray.includes(("Warlock" || "Cleric" || "Druid") && ("Sorcerer" || "Bard" || "Wizard"))) {
            setQuestionArray(questionArray.push(Q2))
        }
    }

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