import React from 'react';
import Card from '../Card/Card';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: "Behavior Cloning Project",
                    subTitle: "Deep Learning Self Driving Car.",
                    imgSrc:"Behavior.png", // 1000 wide 1600 tall
                    link: "https://github.com/rkopec91/Behavioral_Cloning",
                    selected: false
                },
                {
                    id:1,
                    title: "Augmented Random Search",
                    subTitle: "AI to make a cheeta run.",
                    imgSrc:"Augmented-Random-Search.png",
                    link: "https://github.com/rkopec91/Augmented-Random-Search",
                    selected: false
                },
                {
                    id:2,
                    title: "Reinforcement Learning Projects",
                    subTitle: "Different deep learning reinforcement learning projects.",
                    imgSrc:"logo192.png",
                    link: "https://github.com/rkopec91/reinforcement_learning_projects",
                    selected: false
                }
            ]
        }
    }

    handleCardClick  = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map( item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className={"justify-content-around"}>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel