import React, { useMemo, useState } from "react";
import styled from "styled-components";
import PostContent from "./PostContent";

const StyledPaginationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
`;

const StyledPaginatedGrid = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    .paginate-button {
        background: none;
        border: none;
        background-color: aliceblue;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid lightblue;
        cursor: pointer;

        &.selected {
            background-color: lightseagreen;
        }
    }
`;

const Pagination = ({
    perPage = 5,
    data = [],
}: {
    perPage?: number;
    data: unknown[];
}) => {
    const totalNumberOfPages = Math.ceil(data?.length / perPage);

    const [currentPage, setCurrentPage] = useState(1);

    const handleOnNextClick = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalNumberOfPages));
    };

    const handleOnPreviousClick = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const handleOnPageNumberClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const contentsToBeShown = useMemo(
        () =>
            data?.slice(
                (currentPage - 1) * perPage,
                (currentPage - 1) * perPage + perPage
            ),
        [currentPage, perPage, data]
    );

    const buttonsToBeShown = useMemo(() => {
        const endPage = Math.min(currentPage + 2, totalNumberOfPages);
        return Array.from(
            { length: endPage - currentPage + 1 },
            (_, idx) => idx + currentPage
        );
    }, [currentPage, totalNumberOfPages]);

    return (
        <StyledPaginationWrapper>
            <StyledPaginatedGrid>
                {contentsToBeShown.map((_, index) => (
                    <PostContent
                        key={`post-content-${index}`}
                        contentNumber={(currentPage - 1) * perPage + index + 1}
                    />
                ))}
            </StyledPaginatedGrid>
            <StyledButtonContainer>
                <button
                    onClick={handleOnPreviousClick}
                    disabled={currentPage === 1}
                    className="paginate-button"
                >
                    Prev
                </button>
                {buttonsToBeShown.map((value) => (
                    <button
                        key={value}
                        onClick={() => handleOnPageNumberClick(value)}
                        className={`paginate-button ${
                            currentPage === value ? "selected" : ""
                        }`}
                    >
                        {value}
                    </button>
                ))}
                <button
                    onClick={handleOnNextClick}
                    disabled={currentPage === totalNumberOfPages}
                    className="paginate-button"
                >
                    Next
                </button>
            </StyledButtonContainer>
        </StyledPaginationWrapper>
    );
};

export default Pagination;
