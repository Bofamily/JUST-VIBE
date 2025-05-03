function clicked1() {
    document.getElementById("header").innerHTML = "123456789";
}
function clicked2() {
    document.getElementById("header").innerHTML = "JUST VIBE";
}
function langSelection(value) {
    if (value === "option1") {
        console.log("Option 1 selected");
        document.getElementById("header").innerHTML = "JUST VIBE";
        document.getElementById("button1000").innerHTML = "BUTTON";
        document.getElementById("button2000").innerHTML = "Reset";
        document.getElementById("langdropdown").innerHTML = "Choose a language:";
    } else if (value === "option2") {
        console.log("Option 2 selected");
        document.getElementById("header").innerHTML = "JUSTE VIBE";
        document.getElementById("button1000").innerHTML = "BOUTON";
        document.getElementById("button2000").innerHTML = "Réinitialiser";
        document.getElementById("langdropdown").innerHTML = "Choisissez une langue:"; 
    } else if (value === "option3") {
        console.log("Option 3 selected");
        document.getElementById("header").innerHTML = "EINFACH VIBE";
        document.getElementById("button1000").innerHTML = "KNÖPFEN";
        document.getElementById("button2000").innerHTML = "Zurücksetzen";
        document.getElementById("langdropdown").innerHTML = "Sprache wählen:";
    }
}
