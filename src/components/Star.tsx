import React from "react";

const Star = ({
    checked,
    onStarClick,
}: {
    checked?: boolean;
    onStarClick?: () => void;
}) => {
    return (
        <div
            style={{
                width: 30,
                height: 30,
                border: "1px solid black",
                cursor: "pointer",
                borderRadius: 30,
                backgroundColor: checked ? "blue" : "unset",
            }}
            onClick={onStarClick}
        />
    );
};

export default Star;
