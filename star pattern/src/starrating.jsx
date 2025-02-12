import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index);
        console.log("Clicked:", index);
    }

    function handleMouseEnter(index) {
        setHover(index);
        console.log("Hovered:", index);
    }

    function handleMouseLeave() {
        setHover(0);
        console.log("Mouse Left");
    }

    return (
        <div className='star-rating'>
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        size={40}
                        color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        style={{ cursor: "pointer" }}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
