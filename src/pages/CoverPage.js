import { Button, Col, Container, Row} from 'reactstrap';
import './CoverPage.css';
import { Link } from 'react-router-dom';

const CoverPage = () => {
    return(
    <div className="backgroundCover">
        <Container>
            <Row className='my-5'>
                <h2 className='title1'>Cottage 
                    <h4 style={{fontSize: 100}}>  of the  </h4>
                </h2>
                <h1 className='title3'>Old Mage</h1>
                <p></p>
            </Row>
            <Row className='m-5 p-4'>
                <Col>
                    <Link to='Inside'>
                        <button
                            title="Enter"
                            className='entrybutton'
                        >ENTER</button>
                    </Link>
                </Col>
            </Row>
        </Container>

    </div>
    )
}

export default CoverPage;