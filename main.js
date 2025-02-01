export const stringToASCII = (str = '') => {
    let _str = ''
    for (let strElement of str) {
        let char = `&#${strElement.charCodeAt(0)};`
        _str += char
    }
    return _str
}