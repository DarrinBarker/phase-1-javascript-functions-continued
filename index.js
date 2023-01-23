// code your solution here
function saturdayFun(fun = "roller-skate"){
    return (`This Saturday, I want to ${fun}!`)
   // console.log(`This Saturday, I want to ${fun} !` )
}
saturdayFun();

function mondayWork(work = "go to the office"){
    return (`This Monday, I will ${work}.`)
}
mondayWork();
 
function wrapAdjective(star = '*') {
    return function(name ='special'){
        return `You are ${star}${name}${star}!`
    }
    }
wrapAdjective('a dedicated programmer')

