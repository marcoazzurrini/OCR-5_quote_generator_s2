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
        'are like',
        'will do',
        'fell down from',
        'energise like',
        'will be',
        'have done',
        'drive to',
        'are from'
    ],

    sentenceC: [
        'Mars',
        'Pistacchios',
        'Cigarettes',
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
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
        } else if (numberInput.value == 2) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceB[bS]}`;
        } else if (numberInput.value == 3) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceB[bS]}`;
            quoteItem3.innerHTML = `${singular.sentenceC[cS]}`;
        } else if (numberInput.value == 4) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceB[bS]}`;
            quoteItem3.innerHTML = `${singular.sentenceC[cS]}`;
            quoteItem4.innerHTML = `${singular.sentenceD[dS]}`;
        } else if (numberInput.value == 5) {
            quoteItem1.innerHTML = `${singular.sentenceA[aS]}`;
            quoteItem2.innerHTML = `${singular.sentenceB[bS]}`;
            quoteItem3.innerHTML = `${singular.sentenceC[cS]}`;
            quoteItem4.innerHTML = `${singular.sentenceD[dS]}`;
            quoteItem5.innerHTML = `${singular.sentenceE[eS]}`;
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
            quoteItem2.innerHTML = `${plural.sentenceB[bP]}`;
        } else if (numberInput.value == 3) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
            quoteItem2.innerHTML = `${plural.sentenceB[bP]}`;
            quoteItem3.innerHTML = `${plural.sentenceC[cP]}`;
        } else if (numberInput.value == 4) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
            quoteItem2.innerHTML = `${plural.sentenceB[bP]}`;
            quoteItem3.innerHTML = `${plural.sentenceC[cP]}`;
            quoteItem4.innerHTML = `${plural.sentenceD[dP]}`;
        } else if (numberInput.value == 5) {
            quoteItem1.innerHTML = `${plural.sentenceA[aP]}`;
            quoteItem2.innerHTML = `${plural.sentenceB[bP]}`;
            quoteItem3.innerHTML = `${plural.sentenceC[cP]}`;
            quoteItem4.innerHTML = `${plural.sentenceD[dP]}`;
            quoteItem5.innerHTML = `${plural.sentenceE[eP]}`;
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

    console.log(quoteItem2.textContent);
    quoteItem.innerHTML = `${quoteItem1.textContent} ${quoteItem2.textContent} ${quoteItem3.textContent} ${quoteItem4.textContent} ${quoteItem5.textContent}`;
}