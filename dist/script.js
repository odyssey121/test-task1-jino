const checkForm = document.getElementById('check-domain-form');
const mainInput = document.getElementById('header-input');
const buttonCheck = document.getElementById('check');
let outputInfo = document.getElementById('output-info');

// function defaultOutput 

const empty = (defaultText) => {
    outputInfo.textContent = 
    'Извините но вы ничего не ввели...';
    setTimeout(() => outputInfo.textContent = defaultText,
    5000);
}


const check = () => {
    const defText = outputInfo.textContent;
    if(!mainInput.value) return empty(defText);
    outputInfo.textContent = 
    'Проверка ... '
    setTimeout(function(){
        outputInfo.textContent = 
        defText.replace('example.ru',mainInput.value);
        return setTimeout(() => {
            outputInfo.textContent = defText;
            mainInput.value = '';
        }, 5000);

    }, 2000);

    
}

buttonCheck.addEventListener('click', check);
