var divs = ['comunidadAprendizaje', 'bit'];
var visibleDivId = null;

function toggle_visibility(id, toHide) {
    if (visibleDivId === id) {
        visibleDivId = null;
    } else {
        visibleDivId = id;
    }
    hideNonVisibleDivs();
    hideMain(toHide);
}

function hideNonVisibleDivs() {
    var i, id, div;
    for (i = 0; i < divs.length; i++) {
        id = divs[i];
        div = document.getElementById(id);
        if (visibleDivId === id) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

function hideMain(toHide) {
    document.getElementById(toHide).style.display = "none";
}

window.onscroll = function() {
  var el = document.getElementsByClassName('header')[0];
  var className = 'little';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};


