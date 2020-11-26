import React from 'react';

const Card = ({draw, index, openModal}) => {
    return (
        <div className="draws-single" key={index} onClick={() => openModal(draw)}>
            <span className="number">Draw Number: {draw.drawNumber} </span>
            <span className="date">Draw Date: {draw.drawDate}</span>
        </div>
    )
}

export default Card;