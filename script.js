const loadingText = `[Booting...]
[Loading Personal Space...]
[User Detected]`;

let i = 0;
let paragraph = document.querySelector("#terminal-loading");
let enterBtn = document.querySelector("#enterBtn");
let skipBtn = document.querySelector("#skipBtn");

function typeLoadingText () {
    if (i < loadingText.length) {
    paragraph.textContent += loadingText[i];
    i++;
    setTimeout(typeLoadingText, 100);
    } else {
        typeWelcomeText()
    }
}

typeLoadingText()

const welcomeText = `>Hi user, I'm Elena
I'm a teen interested in tech
but my focus changes often because of my curiosity.
I built this website mainly for myself, 
as a way to document my journey 
so one day I can look back and see how far I've come
If you would like to have a look, click on the button below :)`

let j = 0
let welcomeParagraph = document.querySelector("#terminal-text");

function typeWelcomeText () {
    if (j < welcomeText.length) {
        welcomeParagraph.textContent += welcomeText[j];
        j++
        setTimeout(typeWelcomeText, 40)
    } else {
        enterBtn.style.display = "block";
        skipBtn.style.visibility = "hidden";
    }
}

skipBtn.addEventListener("click", skip)

function skip () {
    i = loadingText.length;
    j = welcomeText.length;
    paragraph.textContent = loadingText;
    welcomeParagraph.textContent = welcomeText;
}