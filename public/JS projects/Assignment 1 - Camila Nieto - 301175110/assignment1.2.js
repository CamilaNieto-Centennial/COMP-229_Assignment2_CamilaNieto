var age = document.getElementById("age");

var gender = document.getElementById("gender");

var menBMRI = 0;
var womenBMRI = 0;
var total1=0;
var total2=0;

/*var weightk = 1;
var heightcm = 1;*/

function calc() {

    var weightp = document.getElementById("pounds");
    var heightin = document.getElementById("inches");


    menBMRI=66+(6.2 * weightp.value)+(12.7 *heightin.value)-(6.76*age.value);/*✅*/ 
    console.log("men BMR I: "+menBMRI);
    total1=menBMRI;

    womenBMRI=655+(4.35 * weightp.value)+(4.7 *heightin.value)-(4.7*age.value);/*✅*/ 
    console.log("women BMR I: "+womenBMRI);
    total2=womenBMRI;

    /*if(gender[womenBMRI] === "WOMEN"){
        total+=womenBMRI;
        console.log("FINAL women BMR I: "+total);
        gender[womenBMRI].innerHTML=total;
    }
    else{
        if(gender[menBMRI] === "MEN"){
        total+=menBMRI;
        console.log("FINAL men BMR I: "+total);
        gender[menBMRI].innerHTML=total;
        }
    }*/

    /*total+=*/

    document.getElementById("cValue").innerHTML="MEN: "+total1;
    document.getElementById("bValue").innerHTML="WOMEN: "+total2;
}
document.getElementById("submit").addEventListener("click", calc, false);

function selectGender() {
    (document.getElementById("gender").select === "FEMALE") ? total+=menBMRI :total+=womenBMRI;
    document.getElementById("cValue").innerHTML+=total;
}

function resetForm(){
    document.getElementById("age").value=0;
    document.getElementById("inches").value=0;
    document.getElementById("pounds").value=0;
    document.getElementById("cm").value=0;
    document.getElementById("kg").value=0;
    document.getElementById("gender").select="MALE";
    document.getElementById("gender").select="FEMALE";
    document.getElementById("sedentary").checked=false;
    document.getElementById("lightly").checked=false;
    document.getElementById("moderate").checked=false;
    document.getElementById("very").checked=false;
    document.getElementById("super").checked=false;
    document.getElementById("cValue").value="Undefined";
    calc();
}
window.addEventListener("load", resetForm, false);

