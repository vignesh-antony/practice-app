import { FC, useEffect, useRef, useState } from "react";
import OTP from "./OTP";
import styled from "styled-components";

interface OTPInputProps {
    numberOfOTPs?: number;
}

const StyledOTPWrapper = styled.div`
    display: flex;
    column-gap: 12px;
`;

const OTPInput: FC<OTPInputProps> = ({ numberOfOTPs = 4 }) => {
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const [otpInput, setOTPInput] = useState<string[]>(
        Array(numberOfOTPs).fill("")
    );

    useEffect(() => {
        if (inputRefs.current.length !== numberOfOTPs) {
            inputRefs.current = Array(numberOfOTPs).fill(null);
        }
    }, [numberOfOTPs]);

    const handleInputChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        setOTPInput((prev) => {
            const newOtp = [...prev];
            newOtp[index] = value;
            return newOtp;
        });

        if (value && index + 1 < numberOfOTPs) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyUp = (
        event: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (event.key === "Backspace" && !otpInput[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <StyledOTPWrapper>
            {otpInput.map((otp, index) => (
                <OTP
                    key={index}
                    ref={(el) => {
                        if (el) inputRefs.current[index] = el;
                    }}
                    value={otp}
                    onInputChange={(value) => handleInputChange(value, index)}
                    onKeyUp={(event) => handleKeyUp(event, index)}
                />
            ))}
        </StyledOTPWrapper>
    );
};

export default OTPInput;
