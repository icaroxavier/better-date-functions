const functions = require('./functions.js')
const withDateFunctions = require('./withDateFunctions')

module.exports = { 
    ...functions,
    withDate: withDateFunctions
}
