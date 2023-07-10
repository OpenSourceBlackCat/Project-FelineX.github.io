const FelineGit = "https://github.com/Project-FelineX";
const FelineDevicesGit = "https://github.com/ProjectFelineDevices";

const uiShift = (btn) => {
    var mainView = document.getElementById("mainView");
    //mainView.style="animation-name:mainViewAnim;animation-duration:5s;"
    mainView.style="position:initial;transform:initial;";
    document.getElementById(btn).style="display:none;";
}
const colorMode = (img) => {
    var mainImg = document.getElementById(img.id);
    console.log(mainImg);
    if (mainImg=="dark.png"){
        img.src = "../assets/light.png";
        document.body.style="background-color:black;";
    }
    else{
        img.src = "../assets/dark.png";
        document.body.style="background-color:initial;";
    }
}
