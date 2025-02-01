/**
 * Copyright © 2025 Violet_Ice紫冰
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://mit-license.org/
 */

import {asciiToString, stringToAscii} from "./main.js";

const STRING = '带头🤲的队🧧长过去拔下硬盘，走过来蹲下轻松的调侃道：「小子，胆挺肥啊，大明星都敢敲诈。现在人赃俱获，洗洗屁股准备蹲苦窑吧！」'

let ascii = stringToAscii(STRING)
console.log(ascii)

let str = asciiToString(ascii)
console.log(str)