import { Container, Row, Col, Button } from "reactstrap";
import TarotCard from "./TarotCard";
import { useEffect, useReducer, useState } from "react";
import { Q0, Q1, Q2, Q3, Q4, Q5, Q11, Q12, Q13, Q14 } from "./Questions";
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
    let questionsList = [Q0]
    const [questionArray, setQuestionArray] = useState(questionsList)

    const resetGame = () => {
        setQuestionArray([])
    }


    useEffect(() => {
        const OGClassList = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]
        
        
        const effectCondition = (question) => {
            return question.answer1.array.some(item => classArray.includes(item)) 
            && question.answer2.array.some(item => classArray.includes(item))
        }
    
        const effectCompare3 = (question) => {
            return (
                (question.answer1.array.some(item => classArray.includes(item)) && question.answer2.array.some(item => classArray.includes(item))) 
                || (question.answer2.array.some(item => classArray.includes(item)) && question.answer3.array.some(item => classArray.includes(item))) 
                || (question.answer3.array.some(item => classArray.includes(item)) && question.answer1.array.some(item => classArray.includes(item)))
            )
        }

        resetGame()
        console.log(classArray)
/*Q0*/  if (JSON.stringify(classArray) === JSON.stringify(OGClassList)) {
            setQuestionArray(questionArray => {
                return questionArray.includes(Q0) ? questionArray : [...questionArray, Q0]
            })
        } else if (Q0.answer1.array.some(item => classArray.includes(item))) {
    /*Q1*/  if (effectCondition(Q1)) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q1) ? questionArray : [...questionArray, Q1]
                })
            }
    /*Q2*/  if (effectCondition(Q2)) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q2) ? questionArray : [...questionArray, Q2]
                })
            }
    /*Q3*/  if (Q3.answer1.array.some(item => classArray.includes(item))) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q3) ? questionArray : [...questionArray, Q3]
                })
            }
    /*Q4*/  if (effectCompare3(Q4)) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q4) ? questionArray : [...questionArray, Q4]
                })
            }
    /*Q5*/  if (effectCompare3(Q5)) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q5) ? questionArray : [...questionArray, Q5]
                })
            }
        }
/* MELEE */
        else if (Q0.answer2.array.some(item => classArray.includes(item))) {
    /*Q11*/  if (effectCondition(Q11)) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q11) ? questionArray : [...questionArray, Q11]
                })
            }
    /*Q12*/  if (Q12.answer1.array.some(item => classArray.includes(item))) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q12) ? questionArray : [...questionArray, Q12]
                })
            }
    /*Q13*/  if (effectCondition(Q13)) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q13) ? questionArray : [...questionArray, Q13]
                })
            }
    /*Q14*/  if (Q14.answer1.array.some(item => classArray.includes(item))) {
                setQuestionArray(questionArray => {
                    return questionArray.includes(Q14) ? questionArray : [...questionArray, Q14]
                })
            }
        }
    }, [classArray])


    return(
        <Container className="cardcontainer">
            <Row className="placeholder" />
            <Row className="cardset">
                {questionArray.map(question => {
                    return (
                            <TarotCard 
                                cardQuestion={question}
                                handler={handleClass}
                                key={`${question.title}`}
                            />
                    )
                })}
            </Row>
            <Row>
                <Col>
                    <ol>
                    {classArray.map(item => {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                    </ol>
                </Col>
                <Col>
                    <ol>
                        {questionArray.map(item => {
                            return (
                                <li>{item.title}</li>
                            )
                        })}
                    </ol>
                </Col>
            </Row>
            <Button
                onClick={() => {
                    handleClass("reset")
                }}
            >RESET</Button>
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