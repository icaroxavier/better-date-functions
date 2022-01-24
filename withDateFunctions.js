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

module.exports = {
    getWeekDayName,
    getMonthLength
}