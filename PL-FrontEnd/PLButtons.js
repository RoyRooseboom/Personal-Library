function goToMyBooks()
{
    document.querySelector(".add-books").classList.add("disable");
    document.querySelector(".interacting-window").classList.remove("disable");
    booksRequest();
}

function goToAddBooks ()
{
    document.querySelector(".add-books").classList.remove("disable");
    document.querySelector(".interacting-window").classList.add("disable");
}

function showInformation()
{
    document.querySelector(".information-area").innerHTML = localStorage.getItem("description");
    document.querySelector(".information-area").innerHTML += localStorage.getItem("genre");
    document.querySelector(".information-area").innerHTML += localStorage.getItem("date");
    document.querySelector(".information-area").innerHTML += localStorage.getItem("langauge");
    document.querySelector(".information-area").innerHTML += localStorage.getItem("wishlist");
    document.querySelector(".information-area").innerHTML += localStorage.getItem("isbn");
}