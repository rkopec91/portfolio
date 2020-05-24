import React from 'react';

import './Backdrop.module.css';

const backrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backrop;