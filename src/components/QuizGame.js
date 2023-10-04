import { Container, Row, Col} from "reactstrap";
import TarotCard from "./TarotCard";
import { useReducer, useState } from "react";
import { Q1, Q2 } from "./Questions";
import reducer from "./reducer"


const QuizGame = () => {
    
    // DND CLASSES
    const dndClassList = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"]

    const [classArray, dispatch] = useReducer(reducer, dndClassList)
    
    const handleClass = (action) => {
        dispatch(action)
        console.log(action)
        // whichQuestions()
    }
    console.log(classArray)

    // QUESTIONS
    let questionsList = []
    const [questionArray, setQuestionArray] = useState(questionsList)

    const whichQuestions = () => {

        if (classArray === dndClassList) {
            setQuestionArray(oldArray => [...oldArray, Q1])
        } else if (classArray.length <= 3 && classArray.length > 1) {
            setQuestionArray(/*individual class questions list here */)
        } else {
        
            if (classArray.includes(("Warlock" || "Cleric" || "Druid") && ("Sorcerer" || "Bard" || "Wizard"))) {
                questionsList = [...questionsList, Q2]
            }
        }
        // console.log(`Questions Array: ${questionsList}`)
    }


    return(
        <Container className="cardcontainer">
            <Row className="placeholder" />
            <Row className="cardset">
                <Col className="offset-2">
                    <TarotCard 
                        cardQuestion={Q1}
                        handler={action => handleClass(action)}
                    />
                </Col>
                <Col>
                    <TarotCard 
                        cardQuestion={Q2}
                        handler={action => handleClass(action)}
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

// NOTES FOR 2nd TIME
// btw, yes reducers are a good thing
// Consequently, figured out how to move questions to a different file
// 3 - figured out how to pass the question object as a whole through to the tarot card AND destructure it

// 1. STILL need to figure out how to randomize / shuffle the (updated) array of questions
// 2. Connect the handleArray function to the state / reducers
// 3. Research and implement transform animation for cards