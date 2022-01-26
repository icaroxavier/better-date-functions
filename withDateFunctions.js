const Enums = require('./enums.js')
const Utils = require('./utils.js')

const { getCurrentLanguage, checkDateType, checkType } = Utils

function getWeekDayName(date){
    if(checkDateType(date)){
        return Enums.WEEK_DAYS[getCurrentLanguage()][date.getDay()]
    }
}

function getMonthLength(date){
    if(checkDateType(date)){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }
}

function getMonthName(date){
    if(checkDateType(date)){
        return Enums.MONTHS[getCurrentLanguage()][date.getMonth()]
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

function getFormatedDate(date, separatorParam = '/'){
    if(checkDateType(date) && checkType(separatorParam, 'string')) {

        const separator = separatorParam[0] ? separatorParam[0] : '/'

        let day = date.getDate() 
        day = day < 10 ? `0${day}` : day

        let month = date.getMonth() + 1
        month = month < 10 ? `0${month}` : month

        const currentLanguage = getCurrentLanguage()
        if(currentLanguage === 'enUs'){
            return month.toString() + separator[0] + day.toString() + separator[0] + date.getFullYear().toString()
        }else if(currentLanguage === 'ptBr'){
            return day.toString() + separator[0] + month.toString() + separator[0] + date.getFullYear().toString()
        }else{
            return null
        }
        
    }
}

module.exports = {
    getWeekDayName,
    getMonthLength,
    getMonthName,
    getMonthInfo,
    getYearLength,
    getFormatedDate
}