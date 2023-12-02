/* */

//! class'ı baska yerde kulanmak icin class'ın nesnesini baska yerde olusturuyoruz.

//? islemlerin, isteklerin olugu yer
//?"https://freecurrencyapi.com/docs/latest#request-parameters" = this.url sayfasından alındı

class Currency {

    constructor() {
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_A7Bkk3NtSb3mW4AtVgweEg5QltoFY7cQ2i4IF6sQ&base_currency="
    }

    async exchange(amount, firstCurrency, secoundCurrency) {

        let response = await fetch(`${this.url}${firstCurrency}`);
        let result = await response.json();
        let exchangeResult = amount * result.data[secoundCurrency]; //? data gelen verinin icerisindeki name

        return exchangeResult;
    }
    
}