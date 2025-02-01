export const stringToAscii = (str = '') => {
    let _str = ''
    for (let strElement of str) {
        let char = `&#${strElement.codePointAt(0)};`
        _str += char
    }
    return _str
}

export const asciiToString = (ascii = '') => {
    let arr = ascii.split(';')
    arr = arr.filter(v => v !== '')
    let chars = arr.map(v => String.fromCodePoint(Number(v.replace('&#', ''))))
    return chars.join('')
}