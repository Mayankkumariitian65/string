let full = prompt("Enter a sentence: ");

let input = prompt(" Substring I want to check");

let count = Number(0);


let message ="";

let wordToReplace = prompt("Enter word replace:");
let replacingWord = prompt("Enter the word :");

let replacedSen = "" ;


 let words=full.trim().split(" ");

for(let i=0; i<words.length;i++){
    if(words[i]!="")
        count+=1
}


if(full==""){
    count = 0;
    message = "pass a  sentence";
    replacedSen="";
}

else{


if(full.includes(input)){
   message = `Yes '${input}' in it`;
}
else{
    message = `No   '${input}' in it`;
}



replacedSen = full.replace(wordToReplace,replacingWord);
}


let Output = (`No. of Words = ${count}<br> Replace sentence  :-   ${replacedSen}<br>${message}`);
document.getElementById("output").innerHTML = Output