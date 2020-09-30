import React from 'react';
import { useSpring, animated } from 'react-spring';

import '../../../../../style/Card.css'

function Info(props) {

    const style = useSpring({opacity: 1, from: {opacity:0}});

    return(
        <animated.div className="r-card-info" style={style}>
            <p className="r-card-title">{props.title}</p>
            <p className="r-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Github</a>
        </animated.div>
    )
}

export default Info;