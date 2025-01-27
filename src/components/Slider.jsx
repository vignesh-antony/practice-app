import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledSliderTrack = styled.div`
    margin: 12px 0;
    display: flex;
    background-color: #cccccc;
    width: 300px;
    height: 3px;
    border-radius: 8px;
    position: relative;
    align-items: center;
    cursor: pointer;
`;

const StyledSliderActiveTrack = styled.div`
    position: absolute;
    width: ${(props) => props.$activeTrack || 0}%;
    height: 100%;
    background-color: #004400;
    border-radius: inherit;
`;

const StyledSliderThumb = styled.div`
    width: 24px;
    height: 24px;
    background-color: #0000ee;
    position: absolute;
    cursor: pointer;
    border-radius: 24px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: ${(props) => props.$thumbPosition || 0}%;
`;

const Slider = ({ minimumRange = 0, maximumRange = 100 }) => {
    const sliderRef = useRef(null);

    const [isDraggingSlide, setIsDraggingSlide] = useState(false);
    const [sliderValue, setSliderValue] = useState(minimumRange);

    const setSliderPercentageValue = useCallback(
        (event) => {
            const { clientX } = event || {};

            const { left, width } =
                sliderRef?.current?.getBoundingClientRect() || {};

            const value = Math.floor(((clientX - left) / width) * maximumRange);

            setSliderValue(
                Math.min(Math.max(value, minimumRange), maximumRange)
            );
        },
        [maximumRange, minimumRange]
    );

    const handleOnTrackClick = (event) => {
        event?.stopPropagation();
        setSliderPercentageValue(event);
        setIsDraggingSlide(false);
    };

    const handleOnMouseDown = (event) => {
        event.preventDefault();
        setIsDraggingSlide(true);
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isDraggingSlide) {
                setSliderPercentageValue(event);
            }
        };

        const handleMouseUp = () => {
            setIsDraggingSlide(false);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDraggingSlide, setSliderPercentageValue]);

    return (
        <StyledSliderTrack onClick={handleOnTrackClick} ref={sliderRef}>
            <StyledSliderActiveTrack
                $activeTrack={(sliderValue / maximumRange) * 100}
            />
            <StyledSliderThumb
                $thumbPosition={(sliderValue / maximumRange) * 100}
                onMouseDown={handleOnMouseDown}
            />
        </StyledSliderTrack>
    );
};

export default Slider;
