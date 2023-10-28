import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import tarotCard from "../images/tarotcardback.jpg";
import { useState } from "react";


const TarotCard = ({ cardQuestion, handler }) => {
    const [checked, setStatus] = useState(false)
    const {text, answer1, answer2} = cardQuestion || {}

    // function resetState () {
    //     setStatus(false)
    // }

    if (!cardQuestion) {
        return null
    } else if (checked) {
        return null
    } else {
        return(
                <Card inverse className="tarotCard roll-out">
                    <div className="front">
                        <CardImg
                            alt="Tarot Card"
                            src={tarotCard}
                            style={styles.cardImage}
                        />
                        <CardImgOverlay className="">
                            <CardText style={styles.cardText}>{text}</CardText>
                            <button 
                                className="answerButton"
                                onClick={() => {
                                    setStatus(true)
                                    handler(answer1.type)
                                    console.log(`Button pressed: ${answer1.keyword}`)
                                    }
                                }
                            >{answer1.keyword}</button>
                            <button 
                                className="answerButton"
                                onClick={() => {
                                    setStatus(true)
                                    handler(answer2.type)
                                    console.log(`Button pressed: ${answer2.keyword}`)
                                    }
                                }
                            >{answer2.keyword}</button>
                        </CardImgOverlay>
                    </div>
                    <div className="back">
                    <div
                            alt="Tarot Card"
                            src={tarotCard}
                            style={styles.cardImage}
                        />
                    </div>
                </Card>
        )
    }

}

const styles = {
    cardText: {
        fontSize: "20px",
        textAlign: "center",
        marginTop: "35px",
        marginLeft: "15px",
        marginRight: "15px"

    },
    cardImage: {
        height: "200px",
        width: "300px",
    }
}

export default TarotCard;