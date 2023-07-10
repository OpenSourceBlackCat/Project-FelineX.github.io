const FelineGit = "https://github.com/Project-FelineX";
const FelineDevicesGit = "https://github.com/ProjectFelineDevices";

const uiShift = (btn) => {
    var mainView = document.getElementById("mainView");
    //mainView.style="animation-name:mainViewAnim;animation-duration:5s;"
    mainView.style="position:initial;transform:initial;";
    document.getElementById(btn).style="display:none;";
}
const colorMode = (img) => {
    if (img.src.includes("dark.png")){
        img.src = "../assets/light.png";
        document.html.style="background:invert(100%);";
    }
    else{
        img.src = "../assets/dark.png";
        document.body.style="background-color:initial;";
    }
}
