/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;

var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   createEventListener();
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
}

var position1, position2, position3, position4, position5;

function addFavorite() {
   var addedFavCount = window.opener.mainCount;   // initially main count start with 0
   addedFavCount++;

   if (addedFavCount <= 5) {
      if (addedFavCount === 1) {
         window.opener.document.getElementById("getfav1").innerHTML = '<span id="rmFav" onclick="remFav1()" title="Remove">Remove Favorite</span><br><br><img id="favimg" style="width:180px; height:100px;" src=' + figFilename + '>';
      }
      else if (addedFavCount === 2) {
         window.opener.document.getElementById("getfav2").innerHTML = '<span id="rmFav" onclick="remFav2()" title="Remove">Remove Favorite</span><br><br><img id="favimg" style="width:180px; height:100px;" src=' + figFilename + '>';
      }
      else if (addedFavCount === 3) {
         window.opener.document.getElementById("getfav3").innerHTML = '<span id="rmFav" onclick="remFav3()" title="Remove">Remove Favorite</span><br><br><img id="favimg" style="width:180px; height:100px;" src=' + figFilename + '>';
      }
      else if (addedFavCount === 4) {
         window.opener.document.getElementById("getfav4").innerHTML = '<span id="rmFav" onclick="remFav4()" title="Remove">Remove Favorite</span><br><br><img id="favimg" style="width:180px; height:100px;" src=' + figFilename + '>';
      }
      else if (addedFavCount === 5) {
         window.opener.document.getElementById("getfav5").innerHTML = '<span id="rmFav" onclick="remFav5()" title="Remove">Remove Favorite</span><br><br><img id="favimg" style="width:180px; height:100px;" src=' + figFilename + '>';
      }

   }
   else if (addedFavCount > 5) {
      alert("Sorry the maximum allowed favorites is 5!  Please remove any image to add more");
      addedFavCount = 5;
   }
   window.opener.mainCount = addedFavCount;
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
      closeWindowDiv.addEventListener("click", closeWin, false);
   } else if (closeWindowDiv.attachEvent) {
      closeWindowDiv.attachEvent("onclick", closeWin);
   }

   var favoriteButton = document.getElementsByTagName("p")[1];
   if (favoriteButton.addEventListener) {
      favoriteButton.addEventListener("click", addFavorite, false);
   } else if (favoriteButton.attachEvent) {
      favoriteButton.attachEvent("onclick", addFavorite, false);
   }
}


/* close window */
function closeWin() {
   window.close();
}


/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;