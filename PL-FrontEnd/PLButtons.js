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