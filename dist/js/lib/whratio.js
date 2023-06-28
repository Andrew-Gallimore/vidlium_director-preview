// Adjusting aspect ratio for items, specifically video element parents
function ScaleToFit() {
    document.querySelectorAll('.scale-to-fit').forEach(element => {
        var factor = element.parentElement.clientWidth / element.clientWidth;
        element.style.transform = "scale(" + factor + ")";
    });
}
function WHRatioSet() {
    document.querySelectorAll('.wh-ratio').forEach(element => {
        var elementG = element.parentElement.parentElement.parentElement;
        var factor = parseFloat(element.dataset.whratio);
        var breakH = element.dataset.whbreakh === null;

        if(element.dataset.heightlimit != undefined) {
            if(element.parentElement.clientWidth * factor > element.dataset.heightlimit * elementG.clientHeight && breakH) {
                // Height Based
                // console.log("height based 1")
                element.style.height = (elementG.clientHeight * element.dataset.heightlimit) + "px";
                element.style.width = (elementG.clientHeight * element.dataset.heightlimit) / factor + "px";
            }else {
                // Width Based
                // console.log("width based 1")
                element.style.width = element.parentElement.clientWidth + "px";
                element.style.height = element.parentElement.clientWidth * factor + "px";
            }
        }else {
            if(element.parentElement.clientWidth * factor > element.parentElement.clientHeight && breakH) {
                // Height Based
                // console.log("height based 2")
                element.style.height = element.parentElement.clientHeight + "px";
                element.style.width = element.parentElement.clientHeight / factor + "px";
            }else {
                // Width Based
                // console.log("width based 2")
                console.log(element.parentElement.offsetWidth)
                element.style.width = element.parentElement.clientWidth + "px";
                element.style.height = element.parentElement.clientWidth * factor + "px";
            }
        }
    });
}
function WHRatioDisplay(value) {
    document.querySelectorAll('.wh-hide').forEach(element => {
        element.style.opacity = value;
        if(value == 0) {
            element.style.transition = 'opacity 0s';
        }else {
            element.style.transition = 'opacity 0.4s';
        }
    });
}

window.addEventListener("DOMContentLoaded", function () {
    WHRatioSet();
});
window.addEventListener("resize", function () {
    WHRatioSet();
});