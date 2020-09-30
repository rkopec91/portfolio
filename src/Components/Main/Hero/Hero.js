import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import '../../../style/Hero.css'

const Hero = (props) => {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col>
                        <img src='44616.jpg' className="port-image" alt="The profile pic"/>
                    </Col>
                    <Col md={8} sm={12} style={{position: 'relative'}}>
                        <div>
                            <p><a href="mailto:ryankopec91@gmail.com">RyanKopec@gmail.com</a></p>
                            <p>(856) 749-9693</p>
                        </div>
                        <div style={{position: 'absolute', bottom:0}}>
                            { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;