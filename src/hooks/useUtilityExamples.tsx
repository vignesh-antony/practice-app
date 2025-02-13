import { experimentingArrayOptions, promisifyFunction } from "../utils";

export const useUtilityExamples = () => {
    const functionThatExecutesLately = () => {
        setTimeout(() => {
            console.log("Executing very lately");
        }, 1000);
    };

    const promisifiedExecution = promisifyFunction(functionThatExecutesLately);

    return {
        promisifiedExecution,
        experimentingArrayOptions,
    };
};
