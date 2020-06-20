















let time;
let time2;

function overlayPopUp() {
    let overlay = document.querySelector(".overlay").className += "addingPopUp";
    console.log(overlay)
    function timeOverlayPopup() {
        time2 = setTimeout(popUp, 2000);
    }
    timeOverlayPopup()
}

function timeOverlay() {
    time = setTimeout(overlayPopUp, 2000);
}

timeOverlay()


function popUp() {
    let popUpItem = document.querySelector(".modal").className += "addingPopUp";
    console.log(popUpItem)
}
