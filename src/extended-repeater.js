const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
    function repeater(str, options) {
      const result = [];
      const string = goString(str);

      options.addition = goString(options.addition);
      options.separator || (options.separator = "+");
      options.additionSeparator || (options.additionSeparator = "|");
      options.repeatTimes || (options.repeatTimes = 1);
      options.additionRepeatTimes || (options.additionRepeatTimes = 1);

      
      for (let i = 0; i < options.repeatTimes; i += 1) {
        result.push(string);
        if (options.addition) {
          for (let k = 0; k < options.additionRepeatTimes; k += 1) {
            result.push(options.addition);
            result.push(options.additionSeparator);
          }
          result.pop();
        }
        result.push(options.separator);
      }
      result.pop();

      return result.join("");

      function goString(string) {
        if (string === null) { string = "null"; } else if (typeof (str) !== "string") { string = `${string}`; }
        return string;
      }
    }
    let echo = repeater('echo', { repeatTimes: 3, 
      separator: '**', addition: 'super', additionRepeatTimes: 3, additionSeparator: '08' });

    // console.log (echo);

module.exports = {
  repeater
};
