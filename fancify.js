// Function to show an alert
function showAlert() {
    alert("Hello, world!");
}

// Function to increase the size of the text in the textarea
function makeBigger() {
    var textArea = document.getElementById("inputText");
    textArea.style.fontSize = "24pt";
}

// Function to adjust the styles based on the radio button selected
function styleText() {
    var textArea = document.getElementById("inputText");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function applyStyles() {
    var textArea = document.getElementById("inputText");
    
    if (document.getElementById("fancyShmancy").checked) {
        alert("Applying FancyShmancy styles!"); // Alert for debugging purposes
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        alert("Applying BoringBetty style... which is no style!"); // Alert for debugging purposes
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooTransform() {
    var textArea = document.getElementById("inputText");
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() !== "") { // Ensuring we don't add "-Moo" to empty strings between periods
            var words = sentences[i].split(" ");
            words[words.length - 1] = words[words.length - 1] + "-Moo"; 
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ").toUpperCase();
}


