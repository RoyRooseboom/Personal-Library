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