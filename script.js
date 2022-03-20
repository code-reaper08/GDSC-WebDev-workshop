// var
// condi
// loops
// DOM
// Event listner on button with ID of change-theme
// const toggler = document.getElementById("change_theme");
// toggler.addEventListener('click', (e) => {
//     e.preventDefault();
//     themetoggle();
// })
// theme switch


function themetoggle()  {
    let curr_stylesheet = document.getElementById("dark");
if (curr_stylesheet.href.match("style.css")) {
    curr_stylesheet.href = "lightmode.css";
}
else {
    curr_stylesheet.href = "style.css";
}
}