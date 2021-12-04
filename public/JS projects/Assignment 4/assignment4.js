"use strict";
/*var formValidity=true;

function removeSelectDefaults(){
    var emptyBoxes=document.getElementsByTagName("select");
    for(var i=0; i<emptyBoxes.length;i++){
        emptyBoxes[i].selectedIndex=-1;
    }
}
 
  function validateForm(evt){
      evt.preventDefault();
      formValidity=true;
      validateAddress("entry1");
      if(formValidity === true){
          document.getElementById("errorText").innerHTML="";
          document.getElementById("errorText").style.display="none";
          document.getElementsByTagName("form")[0].submit();
      }else{
          document.getElementById("errorText").innerHTML="Please fix the indicated problems and then resubmit your order";
          document.getElementById("errorText").style.display="block";
          scroll(0,0);
      }
    }*/
    /*
    function validateAddress(fieldsetId){
        var inputElements=document.querySelectorAll("#"+fieldsetId+" input");
        var errorDiv=document.querySelectorAll("#"+fieldsetId+" .errorMessage")[0];
        fieldsetValidity=true;
        var elementCount=inputElements.length;
        var currentElement;
        try{
            for(var i=0;i<elementCount;i++){
                currentElement=inputElements[i];
                if(currentElement.value === ""){
                    currentElement.style.background="rgb(255, 233, 233)";
                    fieldsetValidity=false;
                }else{
                    currentElement.style.background="white";
                }
            }
            if(fieldsetId===false){
                if(fieldsetId==="entry1"){
                    throw "Please complete all Entry 1 information";
                }
                  
            } else{
                errorDiv.style.display="none";
                errorDiv.innerHTML="";
            }
        }catch(msg){
            errorDiv.style.display="block";
            errorDiv.innerHTML=msg;
            formValidity=false;
        }
    }*/

    function formValidation() {

        var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/; // Expression for validating email
    
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;///^(?=.*\d).{4,8}$/ //Expression for validating password
    
        var postalRegex = /^[A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d/; // Expression for validating postal code in a0a0a0 format
    
        var fname = document.registration.FName.value;
        var lname = document.registration.LName.value;
        var add = document.registration.Street.value;
        var city = document.registration.city.value;
        var postalcode = document.registration.postal.value;
        var province = document.registration.province.value;
        var passwid = document.registration.password.value;
        var age = document.registration.age.value;
        var confirm = document.registration.confirm.value;
        var email = document.registration.email.value;
    
        if (fname == "") {
            alert('Enter the first name!');
    
            document.registration.FName.focus();
    
            return false;
    
        }
    
        if (lname == "") {
    
            document.registration.LName.focus();
    
            alert('Enter the last name!');
    
            return false;
    
        }
    
        if (add == "") {
    
            document.registration.Street.focus();
    
            alert('Enter the address!');
    
            return false;
    
        }
    
        if (city == "") {
    
            document.registration.city.focus();
    
            alert('Enter the City!');
    
            return false;
    
        }
    
        if (postalcode == "") {
    
            document.registration.postal.focus();
    
            alert('Enter the postalcode!');
    
            return false;
    
        }
    
        else if (!postalRegex.test(postalcode)) {
    
            document.registration.postal.focus();
    
            alert('The postal code should be in the a0a0a0 format !');
    
            return false;
    
        }
    
        if (province.value == "Default") {
    
            alert('Select your province from the list');
    
            document.registration.province.focus();
    
            return false;
    
        }
    
        if (age == "") {
    
            document.registration.age.focus();
    
            alert('enter the age!');
    
            return false;
    
        }
    
        else if (age < "18") {
    
            document.registration.age.focus();
    
            alert('Age should be more than 18 years!');
    
            return false;
    
        }
    
        if (passwid == "") {
    
            document.registration.password.focus();
    
            alert('Enter the password!');
    
            return false;
    
        }
    
        else if (!passwordRegex.test(passwid)) {
    
            document.registration.password.focus();
    
            alert('Passwords must have at least 6 characters and must contain at least 1 digit and 1 upper-case character!');
    
            return false;
    
        }
    
        if (confirm == "") {
    
            document.registration.confirm.focus();
    
            alert('Enter the confirm password!');
    
            return false;
    
        }
    
        else if (confirm != passwid) {
    
            document.registration.confirm.focus();
    
            alert('Re-enter the confirm password!');
    
            return false;
    
        }
    
        if (email == "") {
    
            document.registration.email.focus();
    
            alert('enter the email!');
    
            return false;
    
        }
    
        else if (!emailRegex.test(email)) {
    
            alert('Re-enter the valid email!');
    
            document.registration.email.focus();
    
            return false;
    
        }
    
        if (fname != '' && lname != '' && add != '' && city != '' && postalcode != '' && province != '' && age != '' && passwid != '' && confirm != '' && email != '') // condition for check mandatory all fields
    
        {
    
            alert('Thanks for registering with our website, your customer record was created successfully.');
            var display = window.open("results.htm", "pagewin");
        }
    
    }
    
function setUpPage(){
    formValidation();
}

window.addEventListener("load", setUpPage, false);