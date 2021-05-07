export const required = (value) => {
    if(value) return undefined

    return "The field is required"
}
export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `The length is over ${maxLength} symbols`;

    return undefined
}