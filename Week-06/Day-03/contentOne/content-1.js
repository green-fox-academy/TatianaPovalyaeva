'use strict';

let allParagraphs = document.querySelectorAll('p');
for (let i = 0; i < allParagraphs.length - 1; i++) {
    allParagraphs[i].innerText = allParagraphs[allParagraphs.length - 1].innerText;
}

for (let i = 0; i < allParagraphs.length - 1; i++) {
    allParagraphs[i].innerHTML = allParagraphs[allParagraphs.length - 1].innerHTML;
}