/**
 * Copyright © 2025 Violet_Ice紫冰
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://mit-license.org/
 */

/**
 * 字符串转换为ASCII码<br>
 * Convert string to ASCII
 * @param str
 * @returns {string}
 */
export const stringToAscii = (str = '') => {
    let ascii = ''
    for (let strElement of str) {
        let char = `&#${strElement.codePointAt(0)};`
        ascii += char
    }
    return ascii
}

/**
 * ASCII码转换为字符串<br>
 * Convert ASCII code to string
 * @param ascii
 * @returns {string}
 */
export const asciiToString = (ascii = '') => {
    let arr = ascii.split(';')
    arr = arr.filter(v => v !== '')
    let chars = arr.map(v => String.fromCodePoint(Number(v.replace('&#', ''))))
    return chars.join('')
}