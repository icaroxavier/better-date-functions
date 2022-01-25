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
<pre><code class="has-line-data" data-line-start="27" data-line-end="112" class="language-sh">// import the the BDF dependency
import BDF from <span class="hljs-string">'better-date-functions'</span>;

// Get <span class="hljs-built_in">functions</span> of BDF Object (Optional)

const { 
    getWeekDayName, 
    getWeekDayNameWithADate,
    getMonthName,
    getMonthLength,
    getMonthInfo,
    <span class="hljs-built_in">set</span>Language,
    <span class="hljs-built_in">set</span>ThrowingErrors
} = BDF;


// Using the <span class="hljs-built_in">functions</span>


// example <span class="hljs-number">1</span>
const day = <span class="hljs-number">24</span>
const month = <span class="hljs-number">1</span>
const year = <span class="hljs-number">2022</span>
const weekDayName = getWeekDayNameWithADate(day, month, year);

console.log(weekDayName) // <span class="hljs-built_in">return</span> Monday

// example <span class="hljs-number">2</span>

const weekDay = <span class="hljs-number">1</span>
const weekDayName = getWeekDayName(weekDay)
console.log(weekDayName) // <span class="hljs-built_in">return</span> Sunday

// example <span class="hljs-number">3</span>

const month = <span class="hljs-number">3</span>
const monthName = getMonthName(month)
console.log(monthName) // <span class="hljs-built_in">return</span> march

// example <span class="hljs-number">4</span> 

const month = <span class="hljs-number">2</span>
const year = <span class="hljs-number">2024</span>
const monthLength = getMonthLength(month, year)
console.log(monthLength) // <span class="hljs-built_in">return</span> <span class="hljs-number">29</span>

// example <span class="hljs-number">5</span>

const month = <span class="hljs-number">1</span>
const year = <span class="hljs-number">2022</span>
const monthInfo = getMonthInfo(month, year)
console.log(monthInfo) // <span class="hljs-built_in">return</span>  { length: <span class="hljs-number">31</span>, name: <span class="hljs-string">'January'</span>, year: <span class="hljs-number">2022</span> }

// example <span class="hljs-number">6</span>

const year1 = <span class="hljs-number">2022</span>
const year2 = <span class="hljs-number">2024</span>
const year1Length = BDF.getYearLength(year1)
const year2Length = BDF.getYearLength(year2)
console.log(year1Length, year2Length) // <span class="hljs-built_in">return</span> <span class="hljs-number">365</span>, <span class="hljs-number">366</span>

// example <span class="hljs-number">7</span>

<span class="hljs-built_in">set</span>Language(<span class="hljs-string">'ptBr1) // can be '</span>ptBr<span class="hljs-string">' or '</span>enUs<span class="hljs-string">' in the current moment;
setThrowingErrors(false) // to stop throwing errors and just do console.errors;

Now, using the method with Date as parametter

import BDF, { withDate }  from '</span>better-date-functions<span class="hljs-string">';

// withDate has all functions of BDF, but has been class Date as parameter;

// example 8

withDate.{someFunction}(new Date())

// or get destructuring the object withDate

const { someFunction } = withDate

const someReturn = someFunction(new Date());

console.log(someReturn)

</span></code></pre>
<h2 class="code-line" data-line-start=113 data-line-end=114 ><a id="Author_and_contributors_113"></a>Author and contributors</h2>
<p class="has-line-data" data-line-start="115" data-line-end="116">XaloDev & wagnersillva</p>
<h2 class="code-line" data-line-start=117 data-line-end=118 ><a id="License_117"></a>License</h2>
<p class="has-line-data" data-line-start="119" data-line-end="120">ICS</p>