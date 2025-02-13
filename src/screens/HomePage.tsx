import React, { useEffect } from "react";
import Slider from "../components/Slider";
import styled from "styled-components";
import { useUtilityExamples } from "../hooks/useUtilityExamples";
import Pagination from "../components/Pagination";

const StyledHomePage = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`;

const HomePage = () => {
    const { promisifiedExecution, experimentingArrayOptions } =
        useUtilityExamples();

    const value = experimentingArrayOptions();
    console.log({ value });

    useEffect(() => {
        promisifiedExecution().then(() => {
            console.log("Promise Executed");
        });
    }, [promisifiedExecution]);

    return (
        <StyledHomePage>
            <h3>Custom UI Slider</h3>
            <Slider />
            <h3>Pagination</h3>
            <Pagination data={Array.from(Array(51)).fill(0)} />
        </StyledHomePage>
    );
};

export default HomePage;
