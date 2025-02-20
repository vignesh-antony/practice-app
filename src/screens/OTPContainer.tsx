import { FC } from "react";
import styled from "styled-components";
import OTPInput from "../components/OTPInput";
import ResendOTP from "../components/ResendOTP";

const StyledOTPContainer = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`;

const OTPContainer: FC = () => {
    return (
        <StyledOTPContainer>
            <h4>One Time Password</h4>
            <OTPInput numberOfOTPs={4} />
            <ResendOTP />
        </StyledOTPContainer>
    );
};

export default OTPContainer;
