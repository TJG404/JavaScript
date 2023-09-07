/** 태그된 템플릿 리터럴 */
let person = "hong";
let age = 25;
              `That ${person} is a ${age}!!`
function myTag(strings, personName, personAge){
    //strings : ['That ',' is a',' !!']
    let str = strings[1];  //'is a'
    let ageStr;

    personAge > 50? ageStr="grandPa" : ageStr="youngster";
    
    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}!!`;
console.log(sentence);  //hong is a youngster