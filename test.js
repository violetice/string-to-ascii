/**
 * Copyright © 2025 Violet_Ice紫冰
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://mit-license.org/
 */

import {asciiToString, stringToAscii} from "./main.js";

const STRING = 'Hello World'

let ascii = stringToAscii(STRING)
console.log(ascii)

let str = asciiToString(ascii)
console.log(str)