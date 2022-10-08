let textbox = document.querySelector("#textbox");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

function updateCount() {
    //no of characters
    charCount.innerHTML = textbox.value.length;

    //removes white spaces from both sides
    let text = textbox.value.trim();
    // console.log(text);

    //Split the text at each spaces into array of substring
    //Filter the empty string
    //Count length of these arrays
    wordCount.innerHTML = text.split(/\s+/).filter(
        (item) => item).length;
}

textbox.oninput = updateCount;

