import { Card, CardImg, CardImgOverlay, CardText } from "reactstrap";
import tarotCard from "../images/tarotcardback.jpg";

const TarotCard = () => {
    return(
        <Card inverse style={{ 
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "225px"
            }}>
            <CardImg
                alt="Tarot Card"
                src={tarotCard}
                style={{
                    height: "150px",
                    width: "225px"
                }}
            />
            <CardImgOverlay>
                <CardText
                    style={{
                        fontSize: "25px",
                        textAlign: "center"
                    }}
                >Do you like magic?</CardText>
            </CardImgOverlay>
        </Card>
    )
}

export default TarotCard;