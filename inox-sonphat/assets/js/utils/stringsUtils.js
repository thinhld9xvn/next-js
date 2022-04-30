export function convertNumberToStr(i) {
    return i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
}