//This bit of code (html/JS only) allows you to click on an object with id #toggleshow and will display the #is-hidden object

#------------------HTML----------------------#

//Clickable object
<p class="is-clickable" onclick="showOrHide('toggleshow');">Click me</p>

//Hidden object
<div class="is-hidden" id="toggleshow">
  <p>Toggle hidden text</p>
</div>

#------------------JS---common.js-------------------#

//not sure if this is necessary:
let feedback = document.getElementById("feedback");

//The function:
function showOrHide(hiddenElementId) {
    let hiddenElement = document.getElementById(hiddenElementId)
    if (hiddenElement.classList.contains("is-hidden")) {
        show(hiddenElement);
    }
    else {
        hide(hiddenElement)
    }
}