export const promisifyFunction = (callbackFunction: () => void) => {
    return () =>
        new Promise((resolve, reject) => {
            try {
                callbackFunction();
                resolve("");
            } catch (error) {
                return reject(error);
            }
        });
};

export const experimentingArrayOptions = () => {
    // Array.prototype.customFilterFunction = function (filterCallback) {
    //     const filterArray = [];
    //     for (let i = 0; i < this?.length; i++) {
    //         if (filterCallback(this[i], i)) {
    //             filterArray.push(this[i]);
    //         }
    //     }
    //     return filterArray;
    // };
    // return [1, 2, 3, 4].customFilterFunction((item) => item % 2 === 0);
};

export const resolvePageName = (path?: string) =>
    path
        ?.split("-")
        ?.map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
        ?.join(" ");
