// SENTENCES ARRAYS
const plural = {
    sentenceA: [
        'Mens are going to play football',
        'Women are going to see a movie',
        'Some Girls like shopping',
        'Monkeys like to scratch their backs with sticks',
        'Lots of Walls are pretty hard',
        'Some Horses are black and some are not',
        'Stars shine in the night sky',
        'Plenty Lighters will burn plenty cigarettes',
        'Many Computers form the internet',
        'Lots of Smartphones in the world are polluting the enviroment'
    ]
}

const singular = {
    sentenceA: [
        'A man is going to play football',
        'A woman is going to watch a movie',
        'The Charger is charging my new phone',
        'A Donkey is kinda like an horse, but not really',
        'The wall is pretty hard',
        'A fish is swimming upstream in the river',
        'The moon is shining in this night sky',
        'The sun is hotter in summer than in winter',
        'A telephone pole is trying to reach the sky',
        'A television has fallen from a garbage truck'
    ]
}
// GET UI VARS
const quoteList = document.getElementById('quoteList');
const generateBtn = document.getElementById('generateBtn');
const numberInput = document.getElementById('numberInput');
const alertDiv = document.getElementById('alertDiv');
const singularBtn = document.getElementById('singular');
const pluralBtn = document.getElementById('plural');

const quoteItem1 = document.getElementById('quoteItem-1');
const quoteItem2 = document.getElementById('quoteItem-2');
const quoteItem3 = document.getElementById('quoteItem-3');
const quoteItem4 = document.getElementById('quoteItem-4');
const quoteItem5 = document.getElementById('quoteItem-5');
const quoteItem = document.getElementById('quoteItem');



// LOAD EVENT LISTENERS
generateBtn.addEventListener('click', generateQuote);
singularBtn.addEventListener('click', singularQuote);
pluralBtn.addEventListener('click', pluralQuote);

// ADD CLASS & SHADOW TO SELECT SINGUALAR OR PLURAL TYPE OF QUOTE
function singularQuote() {
    singularBtn.style.boxShadow = '0 0 8px rgba(0,0,0, .8)';
    pluralBtn.style.boxShadow = '';
    singularBtn.classList.add('selected');
    pluralBtn.className = 'btn btn-warning btn-block';
}

function pluralQuote() {
    pluralBtn.style.boxShadow = '0 0 8px rgba(0,0,0, .7)';
    singularBtn.style.boxShadow = '';
    pluralBtn.classList.add('selected');
    singularBtn.className = 'btn btn-success btn-block';
}

// GENERATE QUOTE FUNCTION
function generateQuote() {

    // CLEAN QUOTE FIELD BEFORE INSERTING NEW ONE
    quoteItem1.innerHTML = '';
    quoteItem2.innerHTML = '';
    quoteItem3.innerHTML = '';
    quoteItem4.innerHTML = '';
    quoteItem5.innerHTML = '';

    // GENERATE RANDOM NUMBER BASED ON LENGTH OF EACH ARRAY
    // TO CALL ARRAY FOR ITEM
    sentenceALength = singular.sentenceA.length;

    const aS = Math.floor(Math.random() * sentenceALength);
    const bS = Math.floor(Math.random() * sentenceALength);
    const cS = Math.floor(Math.random() * sentenceALength);
    const dS = Math.floor(Math.random() * sentenceALength);
    const eS = Math.floor(Math.random() * sentenceALength);

    const aP = Math.floor(Math.random() * sentenceALength);
    const bP = Math.floor(Math.random() * sentenceALength);
    const cP = Math.floor(Math.random() * sentenceALength);
    const dP = Math.floor(Math.random() * sentenceALength);
    const eP = Math.floor(Math.random() * sentenceALength);



    if (singularBtn.classList.contains('selected')) {
        if (numberInput.value == 1) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
        } else if (numberInput.value == 2) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceA[bS]}`;
        } else if (numberInput.value == 3) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceA[bS]}`;
            quoteItem3.innerHTML = `${singular.sentenceA[cS]}`;
        } else if (numberInput.value == 4) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceA[bS]}`;
            quoteItem3.innerHTML = `${singular.sentenceA[cS]}`;
            quoteItem4.innerHTML = `${singular.sentenceA[dS]}`;
        } else if (numberInput.value == 5) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceA[bS]}`;
            quoteItem3.innerHTML = `${singular.sentenceA[cS]}`;
            quoteItem4.innerHTML = `${singular.sentenceA[dS]}`;
            quoteItem5.innerHTML = `${singular.sentenceA[eS]}`;
        } else {
            const alert = document.createElement('div');
            alert.classList.add('alert', 'alert-danger');
            alert.textContent = 'Please Enter a Number between 1 and 5';
            alertDiv.appendChild(alert);

            setTimeout(function () {
                alertDiv.innerHTML = '';
            }, 2000);

        }



    } else if (pluralBtn.classList.contains('selected')) {
        if (numberInput.value == 1) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
        } else if (numberInput.value == 2) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
            quoteItem2.innerHTML = `${plural.sentenceA[bP]}`;
        } else if (numberInput.value == 3) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
            quoteItem2.innerHTML = `${plural.sentenceA[bP]}`;
            quoteItem3.innerHTML = `${plural.sentenceA[cP]}`;
        } else if (numberInput.value == 4) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
            quoteItem2.innerHTML = `${plural.sentenceA[bP]}`;
            quoteItem3.innerHTML = `${plural.sentenceA[cP]}`;
            quoteItem4.innerHTML = `${plural.sentenceA[dP]}`;
        } else if (numberInput.value == 5) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
            quoteItem2.innerHTML = `${plural.sentenceA[bP]}`;
            quoteItem3.innerHTML = `${plural.sentenceA[cP]}`;
            quoteItem4.innerHTML = `${plural.sentenceA[dP]}`;
            quoteItem5.innerHTML = `${plural.sentenceA[eP]}`;
        } else {
            const alert = document.createElement('div');
            alert.classList.add('alert', 'alert-danger');
            alert.textContent = 'Please Enter a Number between 1 and 5';
            alertDiv.appendChild(alert);

            setTimeout(function () {
                alertDiv.innerHTML = '';
            }, 2000);

        }
    } else {
        const alert = document.createElement('div');
        alert.classList.add('alert', 'alert-danger');
        alert.textContent = 'Please Select Type Of Quote';
        alertDiv.appendChild(alert);

        setTimeout(function () {
            alertDiv.innerHTML = '';
        }, 2000);
    }

    quoteItem.innerHTML = `${quoteItem1.textContent} ${quoteItem2.textContent} ${quoteItem3.textContent} ${quoteItem4.textContent} ${quoteItem5.textContent}`;
}