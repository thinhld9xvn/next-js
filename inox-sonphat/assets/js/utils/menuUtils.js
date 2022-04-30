import { isUndefined } from "./arrayUtils";
export function isValidateSub(item) {
    return item.childrens && item.childrens.length > 0;
}
export function isValidateMega(item) {
    return isValidateSub(item) &&
            !isUndefined(item.mega) && item.mega;
}
export function isNotValidateMega(item) {
    return isValidateSub(item) &&
            (isUndefined(item.mega) || !item.mega);
}