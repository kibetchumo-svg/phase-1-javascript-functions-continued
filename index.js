/* 1*/
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun()); 
console.log(saturdayFun("bathe my dog")); 

/* 2*/
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
console.log(mondayWork()); 
console.log(mondayWork("work from home")); 

/* 3 */
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

const encourage = wrapAdjective("!!!");
console.log(encourage("a dedicated programmer"));

console.log(wrapAdjective("%")("awesome"));

