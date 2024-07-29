// get the parameters from the URL
var url = new URL(window.location.href);
var presentationUrl = url.searchParams.get("presentationUrl");

// Load the presentation json
fetch(presentationUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });