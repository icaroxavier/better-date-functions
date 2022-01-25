const functions = require('./functions.js')
const withDateFunctions = require('./withDateFunctions')

module.exports = { 
    ...functions,
    withDate: withDateFunctions
}


// console.log(functions.getMonthLength(2, 2024))
// console.log(functions.getMonthName(2, 2024))
// console.log(functions.getWeekDayName(2))
// console.log(functions.getWeekDayNameWithADate(18, 2, 2022))
// console.log(functions.getMonthInfo(2, 2022))
// console.log(functions.getYearLength(2024))

// console.log(withDateFunctions.getMonthLength(new Date()))
// console.log(withDateFunctions.getWeekDayName(new Date()))
// console.log(withDateFunctions.getMonthName(new Date()))
// console.log(withDateFunctions.getMonthInfo(new Date()))
// console.log(withDateFunctions.getYearLength(new Date()))
console.log(withDateFunctions.getFormatedDate(new Date()))
console.log(withDateFunctions.getFormatedDate(new Date(), '-'))
console.log(withDateFunctions.getFormatedDate(new Date(), ''))