/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) return [];
    if (numbers.length === 1) return [numbers[0], numbers[0]];
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => {
        const parsed = parseInt(str);
        return isNaN(parsed) ? 0 : parsed;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        const withoutDollar = str.replace("$", "");
        const parsed = parseInt(withoutDollar);
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((msg) => !msg.endsWith("?"))
        .map((msg) => (msg.endsWith("!") ? msg.toUpperCase() : msg));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word) => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((color) => ["red", "blue", "green"].includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";

    const sum = addends.reduce((acc, val) => acc + val, 0);
    const expression = addends.join("+");

    return `${sum}=${expression}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeIndex = values.findIndex((val) => val < 0);

    if (negativeIndex === -1) {
        // No negative numbers, append sum to the end
        const sum = values.reduce((acc, val) => acc + val, 0);
        return [...values, sum];
    } else {
        // The error was in summing all numbers including the negative one
        // We should only sum numbers up to but NOT including the negative number
        const sumBeforeNegative = values
            .slice(0, negativeIndex)
            .reduce((acc, val) => acc + val, 0);

        return [
            ...values.slice(0, negativeIndex + 1),
            sumBeforeNegative,
            ...values.slice(negativeIndex + 1),
        ];
    }
}
