document.getElementById('today').addEventListener("click", function() {
    var yourDate = new Date();
    var offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - (offset*60*1000));
    document.getElementById('comicDate').value = yourDate.toISOString().split('T')[0];
});


document.getElementById('bignate').addEventListener("click", function() {
    document.getElementById('comicStrip').value = 'bignate';
});
document.getElementById('bignate').addEventListener("mouseover", function() {
    document.getElementById('bignate').innerHTML = "Big Nate";
});
document.getElementById('bignate').addEventListener("mouseout", function() {
    document.getElementById('bignate').innerHTML = 'BN';
});

document.getElementById('garfield').addEventListener("click", function() {
    document.getElementById('comicStrip').value = 'garfield';
});
document.getElementById('garfield').addEventListener("mouseover", function() {
    document.getElementById('garfield').innerHTML = "Garfield";
});
document.getElementById('garfield').addEventListener("mouseout", function() {
    document.getElementById('garfield').innerHTML = 'GA';
});

document.getElementById('calvinandhobbes').addEventListener("click", function() {
    document.getElementById('comicStrip').value = 'calvinandhobbes';
});
document.getElementById('calvinandhobbes').addEventListener("mouseover", function() {
    document.getElementById('calvinandhobbes').innerHTML = "Calvin and Hobbes";
});
document.getElementById('calvinandhobbes').addEventListener("mouseout", function() {
    document.getElementById('calvinandhobbes').innerHTML = 'CH';
});

document.getElementById('foxtrot').addEventListener("click", function() {
    document.getElementById('comicStrip').value = 'foxtrot';
});
document.getElementById('foxtrot').addEventListener("mouseover", function() {
    document.getElementById('foxtrot').innerHTML = "FoxTrot";
});
document.getElementById('foxtrot').addEventListener("mouseout", function() {
    document.getElementById('foxtrot').innerHTML = 'FT';
});