import { Button, Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import tarotCard from "../images/tarotcardback.jpg";


const TarotCard = ({ cardQuestion, handler }) => {

    const {text, answer1, answer2} = cardQuestion || {}

    if (!text) {
        return null
    } else {
        return(
                <Card inverse className="tarotCard">
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
                                    handler(answer1.type)
                                    console.log(`Button pressed: ${answer1.keyword}`)
                                    }
                                }
                            >{answer1.keyword}</Button>
                            <Button
                                onClick={() => {
                                    handler(answer2.type)
                                    console.log(`Button pressed: ${answer2.keyword}`)
                                    }
                                }
                            >{answer2.keyword}</Button>
                        </CardImgOverlay>
                    </div>
                    <div className="back">
                    <CardImg
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
        width: "300px"
    }
}

export default TarotCard;