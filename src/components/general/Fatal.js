import React from 'react' 

const Fatal = (props) => (
    <div>
    <img className='center warning' src='https://i.ya-webdesign.com/images/error-image-png-11.png'></img>
    <h2 className='center rojo'>
        {props.mensaje}
    </h2>
    </div>
);

export default Fatal;