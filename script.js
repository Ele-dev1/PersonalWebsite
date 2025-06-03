function myFunction() {
    var x = document.getElementById('description');
    var y = document.getElementById('descbtn');
    y.style.display = 'none';
    x.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function astroCard() {
    var x = document.getElementById('clickHere');
    x.innerHTML = "The first videogame I've made. Thanks to this project I've learned the basics of Unreal Engine, Blueprint and, overall, how to make a simple game."
}
