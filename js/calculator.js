let listBtn = document.querySelectorAll(".btn");
let resultContent = document.querySelector("#result");
for (let i = 0; i < listBtn.length; i++) {
    listBtn[i].addEventListener('click', function () {
        if (listBtn[i].innerText.trim() != 'AC' && listBtn[i].innerText.trim() != '=') {
            if (resultContent.innerText[0] == '0' || resultContent.innerText == temp) {
                resultContent.innerText = listBtn[i].innerText.trim();
                temp = 0;
            } else {
                resultContent.innerText += listBtn[i].innerText.trim();
            }
        }
    });
}

let temp = 0;

function getText() {
    return resultContent.innerText.trim();
}

function setText(params) {
    resultContent.innerText = params;
}

function calculate() {
    try {
        let result = eval(getText());
        console.log(result);
        setText(result);
        temp = result;
    } catch (err) {
        resultContent.innerText = 'ERROR! TRY AGAIN';
        temp = 'ERROR! TRY AGAIN';
    }
}
function clearCalculator() {
    resultContent.innerHTML = "0";
    temp = 0;
}

