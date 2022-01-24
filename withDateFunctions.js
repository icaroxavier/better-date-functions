const Enums = require('./enums.js')
const Utils = require('./utils.js')

const { language, checkDateType } = Utils

function getWeekDayName(date){
    if(checkDateType(date)){
        return Enums.WEEK_DAYS[language][date.getDay()]
    }
}

function getMonthLength(date){
    if(checkDateType(date)){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }
}

function getMonthName(date){
    if(checkDateType(date)){
        return Enums.MONTHS[language][date.getMonth()]
    }
}

function getMonthInfo(date){
    if(checkDateType(date)){
        return {
            name: getMonthName(date),
            length: getMonthLength(date),
            year: date.getFullYear()
        }
    }
}

function getYearLength(date){
    if(checkDateType(date)) {
        const year = date.getFullYear()
        return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ? 366 : 365
    }
}

module.exports = {
    getWeekDayName,
    getMonthLength,
    getMonthName,
    getMonthInfo,
    getYearLength
}