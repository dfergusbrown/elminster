import { Container, Row, Col, Button } from "reactstrap";
import TarotCard from "./TarotCard";
import { useEffect, useReducer, useState } from "react";
import { Q1, Q2, Q3, Q4 } from "./Questions";
import reducer from "./reducer"


const QuizGame = () => {
    
    // DND CLASSES
    const dndClassList = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]

    const [classArray, dispatch] = useReducer(reducer, dndClassList)
    
    const handleClass = (action) => {
        dispatch(action)
        console.log(`action to dispatch: ${action}`)
    }

    // QUESTIONS
    let questionsList = [Q1]
    const [questionArray, setQuestionArray] = useState(questionsList)

    useEffect(() => {
        console.log(`questionArray: ${questionArray.includes(Q2)}`)
        console.log(classArray)

        if (classArray.length <= 3 && classArray.length > 1) {
            // setQuestionArray(/*individual class questions list here */)
        } else {
            if (classArray === dndClassList) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q1) ? questionArray : [...questionArray, Q1]
                })
            } else if (classArray.includes(("Sorcerer" || "Warlock") && ("Bard" || "Wizard" || "Cleric"))) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q2) ? questionArray : [...questionArray, Q2]
                })
            }
            // if (classArray.includes(("Warlock" || "Cleric" || "Druid") && ("Sorcerer" || "Bard" || "Wizard"))) {
            //     setQuestionArray(array => {
            //         return array.includes(Q3) ? array : array.push(Q3)
            //     })
            // }
            // if (classArray.includes(("Warlock" || "Cleric" || "Druid") && ("Sorcerer" || "Bard" || "Wizard"))) {
            //     setQuestionArray((questionArray) => questionArray.includes(Q3) ? questionArray : questionArray.push(Q3))
            // }
            // if (classArray.includes(("Cleric" || "Druid" || "Bard" || "Paladin" || "Ranger") && (/*anything else */""))) {
            //     setQuestionArray((questionArray) => questionArray.includes(Q4) ? questionArray : questionArray.push(Q4))
            // }
        }
    }, [classArray])

    return(
        <Container className="cardcontainer">
            <Row className="placeholder" />
            <Row className="cardset">
                {questionArray.map(question => {
                    return (
                        <Col className="hoverContainer">
                            <TarotCard 
                                cardQuestion={question}
                                handler={handleClass}
                                key={`${question.answer1}/${question.answer2}`}
                            />
                        </Col>
                    )
                })}
            </Row>
            <Row>
                <Col>
                    <ol>
                    {classArray.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                    </ol>
                </Col>
                <Col>
                    <ol>
                        {questionArray.map(item => {
                            return (
                                <li>{item.text}</li>
                            )
                        })}
                    </ol>
                </Col>
            </Row>
            <Button
                onClick={() => console.log(classArray)}
            >Class List</Button>
            <Button
                onClick={() => console.log(questionArray)}
            >Question List</Button>
            <Button
                onClick={() => handleClass("reset")}
            >RESET CLASSES</Button>
        </Container>
    )
}

export default QuizGame;

// NOTES FOR NEXT TIME
// 1. Would this be better off as a reducer?
// 2. What constants / functions can I move out and import back in?
// 3. How to pass the question object into the tarot card?
// 4. ^^ ALSO, how to randomize the selection of the question object

// NOTES FOR 2nd TIME
// btw, yes reducers are a good thing
// Consequently, figured out how to move questions to a different file
// 3 - figured out how to pass the question object as a whole through to the tarot card AND destructure it

// 1. STILL need to figure out how to randomize / shuffle the (updated) array of questions
// 2. Connect the handleArray function to the state / reducers
// 3. Research and implement transform animation for cards