import { Container, Row, Col} from "reactstrap";
import TarotCard from "./TarotCard";
import { useReducer, useState } from "react";
import { Q1, Q2 } from "./Questions";

const reducer = (state, action) => {
    switch (action.type) {
        case 1: 
            return state.filter(item => item !== "Fighter" || "Barbarian" || "Monk" || "Rogue");
        case 2:
            return state.filter(item => item === "Bard" || "Wizard" || "Cleric");
        default:
            return state;
    }
}

const QuizGame = () => {
    const dndClassList = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]

    const [classArray, dispatch] = useReducer(reducer, dndClassList)
    
    const handleClass = (question, state) => {
        dispatch(question.action)
        console.log(state)
        whichQuestions()
    }



    let questionsList = []
    const [questionArray, setQuestionArray] = useState(questionsList)
    const whichQuestions = () => {
        if (classArray === dndClassList) {
            setQuestionArray(questionArray.push(Q1))
        } else if (classArray.length <= 3 && classArray.length > 1) {
            setQuestionArray(/*class questions list here */)
        } else if (classArray.includes(("Warlock" || "Cleric" || "Druid") && ("Sorcerer" || "Bard" || "Wizard"))) {
            setQuestionArray(questionArray.push(Q2))
        }
    }


    return(
        <Container className="cardcontainer">
            <Row className="placeholder" />
            <Row className="cardset">
                <Col className="offset-2">
                    <TarotCard 
                        text={Q1.text}
                        answer1={Q1.answer1.text1}
                        handler={() => {
                            handleClass()
                            console.log('yep')
                        }}
                    
                    />
                </Col>
                <Col>
                    <TarotCard 
                        text={Q2.text}
                    />
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

// NOTES FOR NEXT TIME
// 1. Would this be better off as a reducer?
// 2. What constants / functions can I move out and import back in?
// 3. How to pass the question object into the tarot card?
// 4. ^^ ALSO, how to randomize the selection of the question object