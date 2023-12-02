let newApi = "95f8d5f2e7fa486fa9a6e38f60b67355"

News()

function News() {


    let baseURL = (`https://newsapi.org/v2/everything?q=apple&from=2023-11-14&to=2023-11-14&sortBy=popularity&apiKey=${newApi}&language=tr`)

    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {

            const articles = data.articles;

            articles.forEach(data => {

               const {urlToImage, title} = data

                newsCard(urlToImage, title);

            });

        })

        .catch((err) => console.log("veri alınamadı :", err))

}
lastMinute()

function lastMinute() {
    let baseURL = (`https://newsapi.org/v2/top-headlines? kaynaklar=techcrunch &apiKey=${newApi}&language=tr`)

    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {

            // console.log(data)
            const {
                articles: [{
                    urlToImage,
                    title
                }]
            } = data;
            lastMinuteCard(urlToImage, title)


        })

        .catch((err) => console.log("veri alınamadı :", err))

}

function lastMinuteCard(urlToImage, title) {
    let newsContent = document.querySelector(".carousel-container");

    /*
    <div class="carousel-card">
                                <div class="carousel-image">
                                    <img class="img" src="image/6550f3f2ee560678.jpg" alt="">
                                </div>
                                <div class="carousel-text">
                                    <h2>Çağdaş Atan: Az konuşup daha iyi sonuçlar alma zamanı geldi</h2>
                                </div>
                            </div> */

    let div = document.createElement("div")
    div.className = "carousel-card"

    let a = document.createElement("a")
    a.href = "#"

    //*
    let divImg = document.createElement("div")
    divImg.className = "carousel-image"

    let img = document.createElement("img")
    img.className = "img"
    img.setAttribute("src", urlToImage);

    let divText = document.querySelector("div")
    divText.className = "carousel-text"

    let h2 = document.createElement("h2")
    h2.textContent = title;
    h2.className = "news-text"
    h2.style.color = "black"
    h2.style.fontSize = "1.5rem"

    newsContent.appendChild(div)
    div.appendChild(a)
    a.appendChild(divImg)
    divImg.appendChild(img)
    a.appendChild(h2)
}


function newsCard(urlToImage, title) {

    let newsContent = document.querySelector(".news-content");
    /*<div class="news-card">
                    <a href="#">
                        <div class="news-image">
                            <img class="img" src="image/6550f3f2ee560678.jpg" alt="">
                        </div>
                        <div class="news-text">
                            <h2>Çağdaş Atan: Az konuşup daha iyi sonuçlar alma zamanı geldi</h2>
                        </div>
                    </a>
                </div>
                 */

    let div = document.createElement("div")
    div.className = "news-card"

    let a = document.createElement("a")
    a.href = "#"

    //*
    let divImg = document.createElement("div")
    divImg.className = "news-image"

    let img = document.createElement("img")
    img.className = "img"
    img.setAttribute("src", urlToImage);

    let divText = document.querySelector("div")
    divText.className = "news-text"

    let h2 = document.createElement("h2")
    h2.textContent = title;
    h2.className = "news-text"
    h2.style.color = "black"
    h2.style.fontSize = "1.5rem"

    //*

    newsContent.appendChild(div)
    div.appendChild(a)
    a.appendChild(divImg)
    divImg.appendChild(img)
    a.appendChild(h2)


}