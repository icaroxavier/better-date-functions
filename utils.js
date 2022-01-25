const Enums = require('./enums.js')
var language = 'enUs'
var isThrowingErrors = true

class TypeException {
    constructor(message) {
        this.message = message;
        this.name = "TypeException";
    }
}

class RangeException {
    constructor(message) {
        this.message = message;
        this.name = "RangeException";
    }
}

class LanguageException {
    constructor(message) {
        this.message = message;
        this.name = "LanguageException";
    }
}

function setLanguage(languageParam){
    if(checkLanguage(languageParam)){
        language = languageParam
    }
}

function getCurrentLanguage(){
    return language
}

function checkLanguage(languageParam){
    if((checkType(languageParam, 'string', 'The Language must be a string.')) && (Enums.LANGUAGES.find(element => element === languageParam))){
        return true
    } else if(!Enums.LANGUAGES.find(element => element === languageParam)){
        throw new LanguageException("This library doesn't support this language yet.")
    } else {
        return false
    } 
}

function checkType(element, type, message){
    if(typeof element !== type){
        if(isThrowingErrors){
            throw new TypeException(message)
        } else{ 
            console.error(message)
            return false
        }
    } else {
        return true
    }
}

function checkRange(element, min, max, message){
    if(element < min || element >  max){
        if(isThrowingErrors){
            throw new RangeException(message)
        } else{ 
            console.error(message)
            return false
        }
    } else {
        return true
    }
}

function checkDateNumbers(day, weekDay, month, year){
    return !checkType(day, 'number', 'The Day must be a number.') ||
    !checkType(weekDay, 'number', 'The Week Day must be a number.') ||
    !checkType(month, 'number', 'The Month must be a number.') ||
    !checkType(year, 'number', 'The Year must be a number.') ||
    !checkRange(day, 1, 31, 'The Day must be between 1 and 31.') ||
    !checkRange(weekDay, 1, 7, 'The Week Day must be between 1 and 7.') ||
    !checkRange(month, 1, 12, 'The Month must be between 1 and 12.') 
    ? false : true
}

function checkDateType(date){
    if(!(Object.prototype.toString.call(date) === '[object Date]')){
        if(isThrowingErrors){
            throw new TypeException("The parameter must be a object from a Date Class.")
        } else {
            console.error("The parameter must be a object from a Date Class.")
            return false
        }
    } else {
        return true
    }
}

function getCurrentThrowingErrorsState(){
    return isThrowingErrors
}

function setThrowingErrors(boolean){
    if(checkType(boolean, 'boolean', 'The parameter must be a boolean.')){
        isThrowingErrors = boolean
    } 
}

module.exports = {
    language,
    checkLanguage,
    checkDateNumbers,
    checkDateType,
    checkType,
    setLanguage,
    getCurrentLanguage,
    setThrowingErrors,
    getCurrentThrowingErrorsState
}