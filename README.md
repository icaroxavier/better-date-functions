<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="_Better_Date_Functions_BDF__0"></a><em>Better Date Functions (BDF)</em></h1>

<div align="center">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="Build Status">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E" alt="Build Status"><br>
<img src="https://img.shields.io/npm/v/better-date-functions.svg?style=for-the-badge" alt="BDF">
<!-- <img src="https://img.shields.io/github/deployments/xalodev/better-date-functions/Node%20Package%20Registry?style=for-the-badge" alt="BDF"> -->
<img src="https://img.shields.io/npm/dt/better-date-functions.svg?style=for-the-badge&color=40AA72" alt="Downloads">
<!-- <img src="https://img.shields.io/bundlephobia/minzip/better-date-functions?style=for-the-badge&label=size" alt="Downloads"> -->
<br>

</div>

# Installation 
<br><p class="has-line-data" data-line-start="13" data-line-end="14">BDF requires <a href="https://nodejs.org/">Node.js</a> v10+ to run.</p><br>
<pre><code class="has-line-data" data-line-start="18" data-line-end="22" class="language-sh">
    npm i better-date-functions
    or
    yarn add better-date-functions

</code></pre><br><br>


# Documentation

- [Getting the BDF dependency](#getting-the-bdf-dependency)
- [All examples](#all-examples)
- [Examples with Date](#examples-with-date)
- [Configurations](#configurations)
- [Contribution and Development](#contribution-and-development)


<br><h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="getting-the-bdf-dependency"></a>
    Getting the BDF dependency
</h2><br>
<span><pre><code class="has-line-data" data-line-start="27" data-line-end="112" class="language-sh">

```js
// import the the BDF dependency
import BDF from 'better-date-functions';

const { 
    getMonthLength,
    getMonthName,
    getWeekDayName,
    getWeekDayNameWithADate,
    setLanguage,
    getCurrentLanguage,
    getMonthInfo,
    getYearLength,
    setThrowingErrors,
    getCurrentThrowingErrorsState,
} = BDF; // Destructuring (optional)

```

```js
// Using the functions

// Days must be a number between 1~31
// Months must be a number between 1~12
// Year Must be a number

//Example:

const day = 24
const month = 1
const year = 2022

const weekDayName = getWeekDayNameWithADate(day, month, year);

console.log(weekDayName) // returns "Monday"

```
</span></code></pre>
<br><h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="all-examples"></a>All examples</h2><br>
<span><pre><code class="has-line-data" data-line-start="91" data-line-end="110" class="language-sh">

```js
//Example 1:

const weekDay = 1
const weekDayName = getWeekDayName(weekDay)
console.log(weekDayName) // returns "Sunday"

```

```js
//Example 2:

const month = 3
const monthName = getMonthName(month)
console.log(monthName) // returns "March"

```

```js
//Example 3:

const month = 3
const monthName = getMonthName(month)
console.log(monthName) // returns "March"

```
```js
//Example 4:

const month = 2
const year = 2024
const monthLength = getMonthLength(month, year) // Year is optional, but for precise Length in February you need the year
console.log(monthLength) // returns 29

```
```js
//Example 5:

const month = 1
const year = 2022
const monthInfo = getMonthInfo(month, year) // Year is optional, but for precise Length in February you need the year
console.log(monthInfo) // returns  { length: 31, name: "January", year: 2022 }

```
```js
//Example 6:

const year1 = 2022
const year2 = 2024
const year1Length = getYearLength(year1)
const year2Length = getYearLength(year2)
console.log([year1Length, year2Length]) // returns [365, 366]

```
</span></code></pre>
<br><h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="examples-with-date"></a>Examples with date</h2><br>
<span><pre><code class="has-line-data" data-line-start="91" data-line-end="110" class="language-sh">

```js
import { withDate } from 'better-date-functions'    // import the withDate functions
                                                    // you can destructurate too
                                                    // const { withDate } = BDF;

```

```js
//Examples:

const date = new Date() // currently on 26th January, 2022

const weekDayName = withDate.getWeekDayName(date)
console.log(weekDayName) // returns "Wednesday"

const monthLength = withDate.getMonthLength(date)
console.log(monthLength) // returns 31

const monthName = withDate.getMonthName(date)
console.log(monthName) // returns "January"

const monthInfo = withDate.getMonthInfo(date)
console.log(monthInfo) // returns { name: "January", length: 31, year: 2022 }

const yearLength = withDate.getYearLength(date)
console.log(yearLength) // returns 365

const formatedDate = withDate.getformatedDate(date)
console.log(formatedDate) // returns 01/26/2022

const separator = "-"
const formatedDateWithCustomSeparator = withDate.getformatedDate(date, separator)
console.log(formatedDateWithCustomSeparator) // returns 01-26-2022

```
</span></code></pre>

<br><h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="configurations"></a>Configurations</h2><br>
<span><pre><code class="has-line-data" data-line-start="91" data-line-end="110" class="language-sh">

```js
//Changing the language of the returns

const weekDay = 1
const date = new Date() // currently on 26th January, 2022

let weekDayName = getWeekDayName(weekDay)
console.log(weekDayName) // returns "Sunday"

let formatedDate = withDate.getformatedDate(date)
console.log(formatedDate) // returns 01/26/2022

setLanguage('ptBR') // Currently supports "enUs" and "ptBr"

weekDayName = getWeekDayName(weekDay)
console.log(weekDayName) // returns "Domingo"

formatedDate = withDate.getformatedDate(date)
console.log(formatedDate) // returns 26/01/2022

const currentLanguage = getCurrentLanguage() // to get the current language configurated

console.log(currentLanguage) // returns "ptBr"

```
```js
//Change the throwing errors configuration

let isThrowingErrors = getCurrentThrowingErrorsState() // by default the value of the state is true

console.log(isThrowingErrors) // returns true

setThrowingErrors(false) // you can change the state using this function

isThrowingErrors = getCurrentThrowingErrorsState()

console.log(isThrowingErrors) // returns false

```

</span></code></pre><br>

<h2 class="code-line" data-line-start=113 data-line-end=114 ><a id="contribution-and-development"></a>Author and contributors</h2>
<p class="has-line-data" data-line-start="115" data-line-end="116">XaloDev & wagnersillva</p><br>
<h2 class="code-line" data-line-start=117 data-line-end=118 ><a id="License_117"></a>License</h2>
<p class="has-line-data" data-line-start="119" data-line-end="120">ICS</p>