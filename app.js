const form= document.getElementById("form");

form.addEventListener("submit",e=>{
    e.preventDefault();
    markCalculator(rankFinder);
});

function markCalculator(rankFinder){



const tamil=parseInt(document.getElementById("tamil").value);
const english=parseInt(document.getElementById("english").value);
const maths=parseInt(document.getElementById("maths").value);
const science=parseInt(document.getElementById("science").value);
const social=parseInt(document.getElementById("social").value);

const total=tamil+english+maths+science+social;
const avg=total/5;
document.write("total  :"+total+"<br>");
document.write("average : "+avg+"<br>");
rankFinder(avg);
}

function rankFinder(avg){
    if(avg>=90){
        document.write("student rank gade: A+");
        }else if(avg >=80 && avg <=90){
        document.write("student grade is : A");
    }
    else if(avg >=70 && avg <=80){
        document.write("student grade is : B+");
    }else if(avg >=60 && avg <=70){
        document.write("student grade is : B");
    }else if(avg >=50 && avg <=60){
        document.write("student grade is : C+");
    }else if(avg >=40 && avg <=50){
        document.write("student grade is : c");
    }else{
        document.write("Fail");
    }
}