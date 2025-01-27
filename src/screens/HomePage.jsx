import React from "react";
import Slider from "../components/Slider";
import styled from "styled-components";

const StyledHomePage = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

const HomePage = () => {
    return (
        <StyledHomePage>
            <h3>Custom UI Slider</h3>
            <Slider />
        </StyledHomePage>
    );
};

export default HomePage;
