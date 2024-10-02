function goToWishList ()
{
    document.querySelector(".wishlist").classList.remove("disable");
    document.querySelector(".interacting-window").classList.add("disable");
}

function goToMyBooks()
{
    document.querySelector(".wishlist").classList.add("disable");
    document.querySelector(".interacting-window").classList.remove("disable");
    booksRequest();
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