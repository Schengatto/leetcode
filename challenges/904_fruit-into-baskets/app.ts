function totalFruit(fruits: number[]): number {
    // if there is only 1 fruit then return 1
    if (fruits.length === 1) return 1;

    let result = 0;
    let stack = [0]; // contains the starting indexes to start collecting fruits.

    // Start collecting fruits from the start index and return the max count obtained couting 2 different types of fruits.
    const collectFruits = (start: number): number => {
        const firstType = fruits[start]; // the type of the first fruit
        let secondType = null; // the type of fruits used for the second basket. We don't know the value yet here
        let lastIndexOfSecondType = -1; // the index of the latest fruid of second type. It is used to start a new loop and so placed in the stack array once we found a 3rd type of fruit.
        let count = 0;

        // Start collecting fruits from start.
        for (let i = start; i < fruits.length; i++) {
            const currentType = fruits[i];
            if (currentType === secondType) {
                // We need to update the last index of the second type of fruit.
                lastIndexOfSecondType === i;
            }
            else if (currentType !== firstType) {
                if (secondType === null) {
                    // We found our second type of fruit
                    secondType = currentType;
                    lastIndexOfSecondType = i;
                }
                else {
                    // We found a 3rd type of fruit so we have to stop this loop updating the stack with the lasted index of the second type of fruit.
                    stack = [...stack, lastIndexOfSecondType];
                    return count;
                }
            }
            count++;
        }
        return count;
    }

    // Process all index inside the array stack.
    while (stack.length > 0) {
        const start = stack.shift();
        result = Math.max(result, collectFruits(start));
    }
    return result;
};

export { totalFruit };