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
        document.getElementById("button1").innerHTML = "Search";
        document.getElementById("button2").innerHTML = "Claim Certificate";
        document.getElementById("input1").placeholder = "Search Google";
        document.getElementById("eastereggtext1").innerHTML = "You Clicked on Nyan cat";
        document.getElementById("eastereggtext2").innerHTML = "You Clicked on the hovering cats";
    } else if (value === "option2") {
        console.log("Option 2 selected");
        document.getElementById("header").innerHTML = "JUSTE VIBE";
        document.getElementById("button1000").innerHTML = "BOUTON";
        document.getElementById("button2000").innerHTML = "Réinitialiser";
        document.getElementById("langdropdown").innerHTML = "Choisissez une langue:";
        document.getElementById("button1").innerHTML = "Rechercher";
        document.getElementById("input1").placeholder = "Rechercher Google";
        document.getElementById("eastereggtext2").innerHTML = "Vous avez cliqué sur les chats en vol stationnaire";
        document.getElementById("eastereggtext1").innerHTML = "Vous avez cliqué sur Nyan cat";
        document.getElementById("button2").innerHTML = "Certificat de réclamation";
    } else if (value === "option3") {
        console.log("Option 3 selected");
        document.getElementById("header").innerHTML = "EINFACH VIBE";
        document.getElementById("button1000").innerHTML = "KNÖPFEN";
        document.getElementById("button2000").innerHTML = "Zurücksetzen";
        document.getElementById("langdropdown").innerHTML = "Sprache wählen:";
        document.getElementById("button1").innerHTML = "Suchen";
        document.getElementById("input1").placeholder = "Google durchsuchen";
        document.getElementById("eastereggtext1").innerHTML = "Du hast auf Nyan Katze geklicktt"
        document.getElementById("eastereggtext2").innerHTML = "Du hast auf die schwebenden Katzen geklickt";
        document.getElementById("button2").innerHTML = "Anspruchszertifikat";

        
    }
}
