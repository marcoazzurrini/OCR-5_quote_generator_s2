// SENTENCES ARRAYS
const plural = {
    sentenceA: [
        'Mens',
        'Women',
        'Some Girls',
        'Monkeys',
        'Lots of Walls',
        'Some Horses',
        'The Stars',
        'Plenty Lighters',
        'Many Computers',
        'Lots of Smartphones'
    ],

    sentenceB: [
        'are',
        'are going to',
        'are like a',
        'will do',
        'fell down from',
        'energise like a',
        'will be',
        'have done',
        'drive to',
        'are from'
    ],

    sentenceC: [
        'Mars',
        'Pistacchios',
        'lorem Ipsum',
        'credit cards',
        'the kings',
        'French',
        'Italians',
        'Donkeys',
        'the universes',
        'Birds'
    ],

    sentenceD: [
        'building',
        'cutting',
        'running',
        'coding',
        'erasing',
        'managing',
        'eating',
        'travelling to',
        'flying over',
        'burning'
    ],

    sentenceE: [
        'breakfast',
        'lunch',
        'dinner',
        'presidents',
        'musicians',
        'people',
        'bits',
        'aeroplanes',
        'rappers',
        'swords'
    ]
}

const singular = {
    sentenceA: [
        'A man',
        'A woman',
        'The Charger',
        'A Donkey',
        'The wall',
        'A fish',
        'The moon',
        'The sun',
        'A telephone pole',
        'A television'
    ],

    sentenceB: [
        'is',
        'is going to',
        'is like',
        'will do',
        'fell down from',
        'energise like',
        'will be',
        'done',
        'drive to',
        'is from'
    ],

    sentenceC: [
        'a planet',
        'a Pistacchio',
        'a statue',
        'a bank',
        'a queen',
        'France',
        'Italy',
        'a Donkey',
        'the universe',
        'Bird'
    ],

    sentenceD: [
        'building',
        'cutting',
        'running',
        'coding',
        'erasing',
        'managing',
        'eating',
        'travelling to',
        'flying over',
        'burning'
    ],

    sentenceE: [
        'a breakfast',
        'a lunch',
        'a dinner',
        'a president',
        'a musician',
        'a person',
        'a bit',
        'an aeroplane',
        'a rapper',
        'a sword'
    ]
}
// GET UI VARS
const quoteList = document.getElementById('quoteList');
const generateBtn = document.getElementById('generateBtn');
const quoteItem = document.getElementById('quoteItem');
const numberInput = document.getElementById('numberInput');
const alertDiv = document.getElementById('alertDiv');
const singularBtn = document.getElementById('singular');
const pluralBtn = document.getElementById('plural');



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

    // GENERATE RANDOM NUMBER BASED ON LENGTH OF EACH ARRAY
    // TO CALL ARRAY FOR ITEM
    sentenceALength = singular.sentenceA.length;
    sentenceBLength = singular.sentenceB.length;
    sentenceCLength = singular.sentenceC.length;
    sentenceDLength = singular.sentenceD.length;
    sentenceELength = singular.sentenceE.length;

    sentenceALength = plural.sentenceA.length;
    sentenceBLength = plural.sentenceB.length;
    sentenceCLength = plural.sentenceC.length;
    sentenceDLength = plural.sentenceD.length;
    sentenceELength = plural.sentenceE.length;

    const aS = Math.floor(Math.random() * sentenceALength);
    const bS = Math.floor(Math.random() * sentenceBLength);
    const cS = Math.floor(Math.random() * sentenceCLength);
    const dS = Math.floor(Math.random() * sentenceDLength);
    const eS = Math.floor(Math.random() * sentenceELength);

    const aP = Math.floor(Math.random() * sentenceALength);
    const bP = Math.floor(Math.random() * sentenceBLength);
    const cP = Math.floor(Math.random() * sentenceCLength);
    const dP = Math.floor(Math.random() * sentenceDLength);
    const eP = Math.floor(Math.random() * sentenceELength);

    if (singularBtn.classList.contains('selected')) {
        if (numberInput.value == 1) {
            quoteItem.innerHTML = `${singular.sentenceA[aS]}`;
        } else if (numberInput.value == 2) {
            quoteItem.innerHTML = `${singular.sentenceA[aS]} ${singular.sentenceB[bS]}`;
        } else if (numberInput.value == 3) {
            quoteItem.innerHTML = `${singular.sentenceA[aS]} ${singular.sentenceB[bS]} ${singular.sentenceC[cS]}`;
        } else if (numberInput.value == 4) {
            quoteItem.innerHTML = `${singular.sentenceA[aS]} ${singular.sentenceB[bS]} ${singular.sentenceC[cS]} ${singular.sentenceD[cS]}`;
        } else if (numberInput.value == 5) {
            quoteItem.innerHTML = `${singular.sentenceA[aS]} ${singular.sentenceB[bS]} ${singular.sentenceC[cS]} ${singular.sentenceD[dS]} ${singular.sentenceE[eS]}`;
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
        if (numberInput.value == 1) {
            quoteItem.innerHTML = `${plural.sentenceA[aP]}`;
        } else if (numberInput.value == 2) {
            quoteItem.innerHTML = `${plural.sentenceA[aP]} ${plural.sentenceB[bP]}`;
        } else if (numberInput.value == 3) {
            quoteItem.innerHTML = `${plural.sentenceA[aP]} ${plural.sentenceB[bP]} ${plural.sentenceC[cP]}`;
        } else if (numberInput.value == 4) {
            quoteItem.innerHTML = `${plural.sentenceA[aP]} ${plural.sentenceB[bP]} ${plural.sentenceC[cP]} ${plural.sentenceD[cP]}`;
        } else if (numberInput.value == 5) {
            quoteItem.innerHTML = `${plural.sentenceA[aP]} ${plural.sentenceB[bP]} ${plural.sentenceC[cP]} ${plural.sentenceD[dP]} ${plural.sentenceE[eP]}`;
        } else {
            const alert = document.createElement('div');
            alert.classList.add('alert', 'alert-danger');
            alert.textContent = 'Please Enter a Number between 1 and 5';
            alertDiv.appendChild(alert);

            setTimeout(function () {
                alertDiv.innerHTML = '';
            }, 2000);

        }
    }
}