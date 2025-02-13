import React, { useState } from "react";
import { StarRatingItemType } from "../types/starTypes";
import Star from "../components/Star";

const StarRatingPage = () => {
    const numberOfStars = 5;
    const [ratingStars, setRatingStars] = useState<StarRatingItemType[]>(
        Array.from({ length: numberOfStars }, () => ({ checked: false }))
    );

    const handleStarClick = (clickedIndex: number) => {
        setRatingStars((prev) =>
            prev.map((star, idx) => ({ ...star, checked: idx <= clickedIndex }))
        );
    };

    return (
        <div style={{ display: "flex", columnGap: 8, padding: 12 }}>
            {ratingStars.map((elem, idx) => (
                <Star
                    checked={elem?.checked}
                    key={`star-${idx}`}
                    onStarClick={() => handleStarClick(idx)}
                />
            ))}
        </div>
    );
};

export default StarRatingPage;
