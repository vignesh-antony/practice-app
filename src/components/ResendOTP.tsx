import { useEffect, useState } from "react";

const ResendOTP = () => {
    const [timer, setTimer] = useState(60);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined = undefined;

        if (isDisabled && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsDisabled(false);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer, isDisabled]);

    const handleResendOTP = () => {
        setIsDisabled(true);
        setTimer(60);
    };

    return (
        <div>
            <span>Can resend OTP in {timer}s</span> &nbsp;
            <button
                style={{ padding: "8px 12px" }}
                disabled={isDisabled}
                onClick={handleResendOTP}
            >
                Resend OTP
            </button>
        </div>
    );
};

export default ResendOTP;
