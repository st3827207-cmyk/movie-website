document.addEventListener("DOMContentLoaded", function () {

    function openTrailer(url) {
        document.getElementById("trailerPopup").style.display = "block";
        document.getElementById("trailerVideo").src = url;
    }

    function closeTrailer() {
        document.getElementById("trailerPopup").style.display = "none";
        document.getElementById("trailerVideo").src = "";
    }

    window.openTrailer = openTrailer;
    window.closeTrailer = closeTrailer;

    const movies = [
        {
            title: "Inception",
            genre: "Action | Sci-Fi",
            rating: "⭐ 8.8",
            poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
            trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
        },
        {
            title: "Interstellar",
            genre: "Sci-Fi | Drama",
            rating: "⭐ 8.6",
            poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
        },
        {
            title: "The Dark Knight",
            genre: "Action | Crime",
            rating: "⭐ 9.0",
            poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
        }
    ];

    const container = document.getElementById("movieContainer");

    container.innerHTML = ""; // force clear

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.poster}">
            <h3>${movie.title}</h3>
            <p class="rating">${movie.rating}</p>
            <p>${movie.genre}</p>
            <button onclick="openTrailer('${movie.trailer}')">
                Watch Trailer
            </button>
        `;

        container.appendChild(card);
    });

});
