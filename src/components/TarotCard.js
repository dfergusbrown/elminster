import { Button, Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import tarotCard from "../images/tarotcardback.jpg";
import { useState } from "react";


const TarotCard = ({ cardQuestion, handler }) => {
    const [checked, setStatus] = useState(false)
    const {text, answer1, answer2} = cardQuestion || {}

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
                        <CardImgOverlay>
                            <CardText style={styles.cardText}>{text}</CardText>
                            <Button
                                onClick={() => {
                                    setStatus(true)
                                    handler(answer1.type)
                                    console.log(`Button pressed: ${answer1.keyword}`)
                                    // forceUpdate()
                                    }
                                }
                            >{answer1.keyword}</Button>
                            <Button
                                onClick={() => {
                                    setStatus(true)
                                    handler(answer2.type)
                                    console.log(`Button pressed: ${answer2.keyword}`)
                                    // forceUpdate()
                                    }
                                }
                            >{answer2.keyword}</Button>
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