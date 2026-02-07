const searchInput = document.getElementById("search");
const cards = document.getElementsByClassName("card");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    cards[i].style.display = title.includes(value) ? "block" : "none";
  }
});
