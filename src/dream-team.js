const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
let members = [
  'Matt',
   777,
  'John',
  'conny',
  ' Yakov ',
  'ann',
   null
];
function createDreamTeam(members){
  if (Array.isArray(members)) {
  let result;
  let team = [];
      for(let i = 0 ; i < members.length; i++){
        if(typeof members[i] === 'string'){
        result = members[i].trim().slice(0,1);
        team.push(result);
        team.sort((a, b) => a.localeCompare(b));
        }
    }
  return team.join('').toUpperCase();
  // console.log(team.join('').toUpperCase());
  }
  return false;
}

module.exports = {
  createDreamTeam
};
