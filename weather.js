let searchInput = document.querySelector("#searchInput");
let getBtn = document.querySelector("#getBtn");


getBtn.addEventListener("click", () => {
    get(searchInput.value);
})


function get(name) {

    const api = "56af594507d4f0a2fe11cc7c7be8a88f"
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api}&units=metric&lang=tr`

    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {
            const {
                name,
                sys: {
                    country
                },
                main: {
                    temp,
                    feels_like
                },
                weather: [{
                    description
                }]
            } = data;

            console.log(name, country, temp, description, feels_like)

            let cityCountry = document.querySelector("#city-country");
            let temps = document.querySelector("#temps");
            let situation = document.querySelector("#situation");
            let felt = document.querySelector("#felt");

            cityCountry.textContent = `${name}, ${country}`;
            temps.textContent = `${temp.toFixed(0)}`;
            situation.textContent = `${description}`;
            felt.textContent = `${feels_like.toFixed(0)}`;




        })
        .catch((err) => alert("Bir Hata Oluştu"))

}
