import React from "react";
import styled from "styled-components";

const StyledPostContent = styled.div`
    display: flex;
    border: 1px solid #aaa;
    border-radius: 12px;
    padding: 12px;
`;

const PostContent = ({ contentNumber }) => {
    return (
        <StyledPostContent>
            {contentNumber}. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur aperiam magnam veniam nulla inventore laudantium
            aspernatur perspiciatis deleniti mollitia rem porro a quisquam,
            accusantium temporibus libero aliquid ex recusandae quaerat?
        </StyledPostContent>
    );
};

export default PostContent;
