import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import '../../../style/Hero.css'

const Hero = (props) => {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                        
                        <div>
                        <img src='GOPRO.png' className="port-image" alt="The profile pic"/>
                        
                            { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        </div>
                        
                    
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;