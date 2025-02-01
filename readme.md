<!-- 
Copyright © 2025 Violet_Ice紫冰

Distributed under MIT license.
See file LICENSE for detail or copy at https://mit-license.org/
-->

简体中文 | [English](./readme.en.md)

# 简介
本项目的唯一功能是将字符串转换为 ASCII 编码，以此帮助 epub 小说绕过内容检测。

# 安装
```shell
# npm
npm i @violetice/string-to-ascii

# yarn
yarn add @violetice/string-to-ascii
```

# 使用方法

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
