
var followers = 0;
function Follow() {
    var links = document.querySelectorAll('[data-testid$="-follow"]');
    for (i = 0; i < links.length; i++) {
        links[i].scrollIntoView();
        links[i].click();
        followers++;
    }
}
