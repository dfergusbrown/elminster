import { Button, Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import tarotCard from "../images/tarotcardback.jpg";


const TarotCard = ({text, answer1, }) => {
   

    // if (!text) {
    //     return null
    // } else {
        return(
            <Card inverse style={styles.tarotCard} className="my-auto">
                <CardImg
                    alt="Tarot Card"
                    src={tarotCard}
                    style={styles.cardImage}
                />
                <CardImgOverlay>
                    <CardText style={styles.cardText}>{text}</CardText>
                    <Button
                        onClick={ console.log('tasty')}
                    >{answer1}</Button>
                </CardImgOverlay>

            </Card>
        )
    // }

}

const styles = {
    tarotCard: { 
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "300px"
        },
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