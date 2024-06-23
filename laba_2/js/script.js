let result = 0;
let ballPosition = 1;

const heightCup = document.querySelector('#heightCup');
const weightCup = document.querySelector('#weightCup');
const ballParams = document.querySelector('#ballParams');
const ballSpin = document.querySelector('#ballSpin');

let trouble1 = document.getElementById("trouble1");
let trouble2 = document.getElementById("trouble2");
let trouble3 = document.getElementById("trouble3");
let trouble4 = document.getElementById("trouble4");

if (heightCup.value == '' && weightCup.value == '' && ballParams.value == '' && ballSpin.value == '') {
    document.querySelector('#heightCup').value = '120';
    document.querySelector('#weightCup').value = '100';
    document.querySelector('#ballParams').value = '50';
    document.querySelector('#ballSpin').value = '5';

    heightCup.value = '120';
    weightCup.value = '100';
    ballParams.value = '50';
    ballSpin.value = 5;
}

function checkForms() {
    if (heightCup.value < 100 || heightCup.value > 300 || heightCup.value == '') {
        visibleDiv(trouble1, "число должно быть в промежутке от 100 до 300");
    }
    else
        heidenDiv(trouble1);

    if (weightCup.value < 90 || weightCup.value > 200 || weightCup.value == '') {
        visibleDiv(trouble2, "число должно быть в промежутке от 90 до 200");
    }
    else
        heidenDiv(trouble2);

    if (ballParams.value < 10 || ballParams.value > 200 || ballParams.value == '') {
        visibleDiv(trouble3, "число должно быть в промежутке от 10 до 200");
    }
    else
        heidenDiv(trouble3);

    if (weightCup.value < 1 || ballSpin.value > 50 || ballSpin.value == '') {
        visibleDiv(trouble4, "число должно быть в промежутке от 1 до 50");
    }
    else
        heidenDiv(trouble4);

    if (heightCup.value < 100 || heightCup.value > 300 || heightCup.value == '' ||
        weightCup.value < 90 || weightCup.value > 200 || weightCup.value == '' ||
        ballParams.value < 10 || ballParams.value > 200 || ballParams.value == '' ||
        weightCup.value < 1 || ballSpin.value > 50 || ballSpin.value == '') {
        return false;
    }

    return true;
}

function visibleDiv(setupStyle, text) {
    setupStyle.style.display = "flex";
    setupStyle.innerHTML = text;
    setupStyle.style.color = "red";
}

function heidenDiv(setupStyle) {
    setupStyle.style.display = "none";
    setupStyle.innerHTML = "";
}

function startGame() {
    let randFirstChange = Math.floor(Math.random() * 3) + 1;
    let randSecondChange = randFirstChange;

    while (randFirstChange == randSecondChange) {
        randSecondChange = Math.floor(Math.random() * 3) + 1;
    }

    const firstElement = document.querySelector('#cup' + randFirstChange);
    const secondElement = document.querySelector('#cup' + randSecondChange);

    let param1 = getComputedStyle(firstElement)['left'];
    let param2 = getComputedStyle(secondElement)['left'];

    $('#cup' + randFirstChange).animate({
        left: param2,
    }, 200)

    $('#cup' + randSecondChange).animate({
        left: param1,
    }, 200)
}

function Game() {
    // startGame();
    // setTimeout(startGame, 500);
    // setTimeout(startGame, 1000);
    // setTimeout(startGame, 1500);
    if (checkForms()) {
        let countSpin = parseInt(document.querySelector('#ballSpin').value);
        let time = 350;

        for (let i = 0; i < countSpin; i++) {
            setTimeout(startGame, time);
            time += 350;
        }
    }
}


function checkCup(selectedCup) {
    if (selectedCup === ballPosition) {
        result++;
        document.getElementById("answer").textContent = 'Верно';
        document.getElementById("result").textContent = result;
    } else {
        result--;
        document.getElementById("result").textContent = result;
        document.getElementById("answer").textContent = 'Не верно';
    }

    showAnswerBall();
    setTimeout(hideBall, 2000);
    setTimeout(showNewBall, 3000);
    setTimeout(hideBall, 5000);
}

function showAnswerBall() {
    document.querySelector(".cup:nth-child(" + (ballPosition + 1) + ")").appendChild(document.querySelector(".ball"));

    const element = document.querySelector('#cup' + ballPosition);
    let param = parseInt(getComputedStyle(element)['top'], 10);

    param -= 70;
    param += 'px';

    $('#cup' + ballPosition).animate({
        top: param,
    }, 200)


    document.querySelector(".ball").style.display = "block";
}

function showNewBall() {
    ballPosition = Math.floor(Math.random() * 3) + 1;

    document.querySelector(".cup:nth-child(" + (ballPosition + 1) + ")").appendChild(document.querySelector(".ball"));

    const element = document.querySelector('#cup' + ballPosition);
    let param = parseInt(getComputedStyle(element)['top'], 10);

    param -= 70;
    param += 'px';

    $('#cup' + ballPosition).animate({
        top: param,
    }, 200)


    document.querySelector(".ball").style.display = "block";
}

function hideBall() {
    const element = document.querySelector('#cup' + ballPosition);
    let param = parseInt(getComputedStyle(element)['top'], 10);

    param += 70;
    param += 'px';

    $('#cup' + ballPosition).animate({
        top: param,
    }, 200);

    document.querySelector(".ball").style.display = "none";
    document.getElementById("answer").textContent = '...';
}

function resetGame() {
    if (checkForms()) {

        let bucet = document.querySelectorAll('.bucet');
        let cup = document.querySelectorAll('.cup');
        let ball = document.getElementById('ball');

        bucet.forEach(element => {
            element.style.height = heightCup.value + 'px';
            element.style.width = weightCup.value + 'px';
        })

        dif1 = 140;
        dif2 = 240;
        dif3 = 340;

        let plusLeftPos = weightCup.value - 80;

        cup[0].style.left = (dif1) + 'px';

        cup[1].style.left = (dif2 + plusLeftPos) + 'px';

        cup[2].style.left = (dif3 + plusLeftPos * 2) + 'px';

        cup.forEach(element => {
            element.style.height = heightCup.value + 'px';
            element.style.width = weightCup.value + 'px';
        })

        let paramLeft = parseInt(getComputedStyle(ball)['left'], 10);
        let par = ballParams.value / 50;

        ball.style.height = ballParams.value + 'px';
        ball.style.width = ballParams.value + 'px';
        ball.style.left = (paramLeft * par) + 'px';

        result = 0;
        document.getElementById("result").textContent = result;
        showNewBall();
        setTimeout(hideBall, 2000);
    }
}

showNewBall();
setTimeout(hideBall, 2000)