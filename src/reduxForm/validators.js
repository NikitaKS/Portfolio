export const requiredFiled = (values) => {

    if (values) {
        return undefined;
    } else {
        return 'Field is required'
    }
};
export const maxLengthCreator = (length) => (values) => {
    if (values && values.length > length) return `Max length is ${length} symbols`;
    return undefined;
};
export const minLengthCreator = (length) => (values) => {
    if (values && values.length < length) return `Min length is ${length} symbols`;
    return undefined;
};
export const emailValid = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined