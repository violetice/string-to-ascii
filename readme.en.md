[简体中文](./readme.md) | English

# Introduction
The sole function of this project is to convert strings to ASCII encoding, thereby helping epub novels bypass content detection.

# Installation
```shell
# npm
npm i @violetice/string-to-ascii

# yarn
yarn add @violetice/string-to-ascii
```

# Usage

```js
import {asciiToString, stringToAscii} from "@violetice/string-to-ascii";

let ascii = stringToAscii('Hello World')
// ascii = &#72;&#101;&#108;&#108;&#111;&#32;&#87;&#111;&#114;&#108;&#100;

let str = asciiToString(ascii)
// str = Hello World
```
emm……
```
// ascii = &#72;&#101;&#108;&#108;&#111;&#32;&#87;&#111;&#114;&#108;&#100;
// str = Hello World
```