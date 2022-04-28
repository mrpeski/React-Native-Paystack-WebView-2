import validator from 'validator';
const { isDecimal, isFloat, isInt, toFloat, toInt } = validator;
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
export function isValidStringAmount(stringAmount) {
    if (isString(stringAmount) && (stringAmount === null || stringAmount === void 0 ? void 0 : stringAmount.endsWith('.'))) {
        return false;
    }
    return isDecimal(stringAmount);
}
export function isValidDecimalMonetaryValue(amountValue) {
    if (!isNumber(amountValue) && !isString(amountValue)) {
        return false;
    }
    return isNumber(amountValue) || isValidStringAmount(amountValue);
}
export function isNegative(amountValue) {
    if (typeof amountValue === 'string') {
        return amountValue.startsWith('-');
    }
    return amountValue < 0;
}
export function toNumber(string) {
    if (isFloat(string)) {
        return toFloat(string);
    }
    if (isInt(string)) {
        return toInt(string);
    }
    return +string;
}
export function toString(amountValue) {
    return isNumber(amountValue) ? amountValue.toString() : amountValue;
}
export function toAmountInKobo(amountValue) {
    if (typeof amountValue === 'string') {
        return toNumber(amountValue) * 100;
    }
    return amountValue * 100;
}
export const getAmountValueInKobo = (amount) => {
    if (isValidDecimalMonetaryValue(amount)) {
        return toAmountInKobo(amount);
    }
    return 0;
};
export const getChannels = (channelsArrary) => {
    if ((channelsArrary === null || channelsArrary === void 0 ? void 0 : channelsArrary.length) > 0) {
        const channelsString = JSON.stringify(channelsArrary);
        return `channels: ${channelsString},`;
    }
    return '';
};
//# sourceMappingURL=helper.js.map