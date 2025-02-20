import React from "react";
import styled from "styled-components";

interface OTPProps {
    value?: string;
    onInputChange?: (value: string) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledOTPInput = styled.input`
    padding: 8px;
    border: 1px solid gray;
    border-radius: 8px;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: blue;
    }
`;

const OTP = React.forwardRef<HTMLInputElement, OTPProps>(
    ({ value = "", onInputChange, onKeyUp }, ref) => {
        const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value.replace(/[^0-9]/g, ""); // Only numbers
            onInputChange?.(newValue);
        };

        return (
            <StyledOTPInput
                type="text"
                value={value}
                onChange={handleOnChange}
                ref={ref}
                maxLength={1}
                onKeyUp={onKeyUp}
                inputMode="numeric"
            />
        );
    }
);

export default OTP;
