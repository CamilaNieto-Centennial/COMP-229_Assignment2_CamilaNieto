var age = document.getElementById("age");

var gender = document.getElementById("gender");

var menBMRM = 0;
var womenBMRM = 0;
var x=1;
var total1=0;
var total2=0;

/*var weightk = 1;
var heightcm = 1;*/

function calc() {

    var weightp = document.getElementById("pounds");
    var weightk = document.getElementById("kg");
    var heightin = document.getElementById("inches");
    var heightcm = document.getElementById("cm");

    var weightk=weightp.value*0.4535;/*✅*/ 
    console.log("Weight in k: "+weightk);
    weightk=weightk;
    console.log("Weight in k+: "+weightk);

    var heightcm=heightin.value*2.54;/*✅*/ 
    console.log("Height in cm: "+heightcm);
    weightk=weightk;
    console.log("Weight in k+: "+heightcm);

    menBMRM=66.5+(13.75*weightk)+(5.003*heightcm)-(6.755*age.value);/*❌*/
    console.log("men BMR M2: "+menBMRM);
    total1=menBMRM;

    womenBMRM=655+(9.563*weightk)+(1.850*heightcm)-(4.676*age.value);/*❌*/
    console.log("women BMR M: "+womenBMRM);
    total2=womenBMRM;

    /*if(gender === "WOMEN"){
        total=womenBMRM;
        console.log("FINAL women BMR M: "+total);
        }
    if(gender === "MEN"){
        total=menBMRM;
        console.log("FINAL men BMR M: "+total);
        }*/

    document.getElementById("cValue").innerHTML="MEN: " +total1;
    document.getElementById("bValue").innerHTML="WOMEN: " +total2;
}

document.getElementById("submit").addEventListener("click", calc, false);

function selectGender() {
    (document.getElementById("gender").select === "FEMALE") ? total+=menBMRM :total+=womenBMRM;
    document.getElementById("cValue").innerHTML+=total;
}

function resetForm(){
    document.getElementById("age").value=0;
    document.getElementById("inches").value=0;
    document.getElementById("pounds").value=0;
    document.getElementById("cm").value=0;
    document.getElementById("kg").value=0;
    document.getElementById("pounds").value=0;
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

