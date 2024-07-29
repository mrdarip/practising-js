const presentationUrlInput = document.getElementById("presentationUrl");

function loadPresentation(){
    window.location.href = "html/viewPresentation.html?presentationUrl=" + presentationUrlInput.value;
}