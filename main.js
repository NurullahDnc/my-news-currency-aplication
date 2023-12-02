/* */
//* doviz  currency
//! input olayı = input icersindeki deger degisti mi tetikleniyor
//! toFixed(3)  = sayılarda . sonra kac tane deger olacagını belirliyor


//? elementleri sectigimiz yer

let amountInput = document.querySelector("#amount");
let firstOption = document.querySelector("#firstCurrencyOption");
let secoundOption = document.querySelector("#secondCurrencyOption");
let calculateButton = document.querySelector("#calculateButton");
let ClearButton = document.querySelector("#ClearButton");
let resultInput = document.querySelector("#result")

let currency = new Currency();  //? diger sayfadaki class'ı kulanabilmek icin nesnensini burda oludturdum

runEventListenrs();

function runEventListenrs() {
    calculateButton = calculateButton.addEventListener("click", exchange);
    ClearButton = ClearButton.addEventListener("click", clear);
}

function exchange() {
    let amount = Number(amountInput.value.trim());

    let firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent; //? Option icerisnden secilen index'in text'ini al
    let secoundOptionValue = secoundOption.options[secoundOption.selectedIndex].textContent;

    currency.exchange(amount,firstOptionValue,secoundOptionValue)  //? diger sayfada class'a degerleri gonderiyor.

    //? deger promise dondu 

    .then((result)=> resultInput.value = result.toFixed(3));   //? return olan degeri resultInput icerisine at
}

function clear(){

    amountInput.value = "";
    resultInput.value = "";
}