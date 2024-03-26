// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
//declare the second function here

function mondayWork(place = 'go to the office'){
    return `This Monday, I will ${place}.`;
}
//declaring the wrap adjective
function wrapAdjective(result) {

    return function(par = "special") {
        return `You are ${result}${par}${result}!`
    };
    }