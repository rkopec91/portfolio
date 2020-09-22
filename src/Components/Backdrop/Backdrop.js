import React from 'react';

import '../../style/Backdrop.css';

const backrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backrop;