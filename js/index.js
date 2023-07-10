const FelineGit = "https://github.com/Project-FelineX";
const FelineDevicesGit = "https://github.com/ProjectFelineDevices";

const uiShift = (btn) => {
    var mainView = document.getElementById("mainView");
    //mainView.style="animation-name:mainViewAnim;animation-duration:5s;"
    mainView.style="position:initial;transform:initial;";
    document.getElementById(btn).style="display:none;";
}
const colorMode = (btn) => {
    var mainImg = document.getElementById(btn).src;
    if (mainImg=="dark.png8"){
        mainImg = "../assets/light.png";
        document.body.style="background-color:black;";
    }
    else{
        mainImg = "../assets/dark.png";
        document.body.style="background-color:initial;";
    }
}
