<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="_Better_Date_Functions_BDF__0"></a><em>Better Date Functions (BDF)</em></h1>
<p class="has-line-data" data-line-start="2" data-line-end="3"><a href="https://travis-ci.org/joemccann/dillinger"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<p class="has-line-data" data-line-start="4" data-line-end="5">Better Date Functions (BDF) is a alternative for Class Date, native from the javascript language.</p>
<h2 class="code-line" data-line-start=6 data-line-end=7 ><a id="Tech_6"></a>Tech</h2>
<p class="has-line-data" data-line-start="8" data-line-end="10"><a href="https://travis-ci.org/joemccann/dillinger"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E" alt="Build Status"></a><br>
<a href="https://travis-ci.org/joemccann/dillinger"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="Build Status"></a></p>
<h2 class="code-line" data-line-start=11 data-line-end=12 ><a id="Installation_11"></a>Installation</h2>
<p class="has-line-data" data-line-start="13" data-line-end="14">BDF requires <a href="https://nodejs.org/">Node.js</a> v10+ to run.</p>
<p class="has-line-data" data-line-start="15" data-line-end="16">Install the BDF as dependency or dev dependency.</p>
<pre><code class="has-line-data" data-line-start="18" data-line-end="22" class="language-sh">npm i better-date-functions
or
yarn add better-date-functions
</code></pre>
<h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="How_to_use_24"></a>How to use</h2>
<pre><code class="has-line-data" data-line-start="27" data-line-end="112" class="language-sh">

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

<h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="How_to_use_24"></a>All examples</h2>

```js
//Example 1:

const weekDay = 1
const weekDayName = getWeekDayName(weekDay)
console.log(weekDayName) // returns "Sunday"

```

```js
//Example 2:

const month = <span class="hljs-number">3</span>
const monthName = getMonthName(month)
console.log(monthName) // returns "March"

```

```js
//Example 3:

const month = <span class="hljs-number">3</span>
const monthName = getMonthName(month)
console.log(monthName) // returns "March"

```
```js
//Example 4:

const month = 2
const year = 2024
const monthLength = getMonthLength(month, year)
console.log(monthLength) // returns 29

```
```js
//Example 5:

const month = 1
const year = 2022
const monthInfo = getMonthInfo(month, year)
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
<h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="How_to_use_24"></a>Examples with date</h2>

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

<h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="How_to_use_24"></a>Configurations</h2>

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

</span></code></pre>
<h2 class="code-line" data-line-start=113 data-line-end=114 ><a id="Author_and_contributors_113"></a>Author and contributors</h2>
<p class="has-line-data" data-line-start="115" data-line-end="116">XaloDev & wagnersillva</p>
<h2 class="code-line" data-line-start=117 data-line-end=118 ><a id="License_117"></a>License</h2>
<p class="has-line-data" data-line-start="119" data-line-end="120">ICS</p>