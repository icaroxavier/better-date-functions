const Enums = require('./enums.js')
const Utils = require('./utils')

const { language, checkDateNumbers, setLanguage, getCurrentLanguage, setThrowingErrors, getCurrentThrowingErrorsState } = Utils

function getMonthLength(month, year){
    if(checkDateNumbers(1, 1, month, year)) {
        return new Date(year, month, 0).getDate()
    }
}


function getMonthName(month){
    if(checkDateNumbers(1, 1, month, 1)) {
        return Enums.MONTHS[language][month - 1]
    }
    
}


function getWeekDayName(weekDay){
    if(checkDateNumbers(1, weekDay, 1, 1)) {
        return Enums.WEEK_DAYS[language][weekDay - 1]
    }
}


function getWeekDayNameWithADate(day, month, year){
    if(checkDateNumbers(day, 1, month, year)) {
        const weekDay = new Date(year, month - 1, day).getDay()
        return Enums.WEEK_DAYS[language][weekDay]
    }
   
}



function getMonthInfo(month, year){
    if(checkDateNumbers(1, 1, month, year)) {
        const monthInfo = {
            length: getMonthLength(month, year),
            name: getMonthName(month),
            year
        }
        return monthInfo
    }
}


function getYearLength(year){
    if(checkDateNumbers(1, 1, 1, year)) {
        return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ? 366 : 365
    }
}



module.exports = {
    getMonthLength,
    getMonthName,
    getWeekDayName,
    getWeekDayNameWithADate,
    setLanguage,
    getCurrentLanguage,
    getMonthInfo,
    getYearLength,
    setThrowingErrors,
    getCurrentThrowingErrorsState
}