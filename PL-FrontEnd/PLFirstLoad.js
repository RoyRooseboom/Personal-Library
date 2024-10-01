import { booksRequest } from "./PLRequests";

window.onload = (event) =>
{
    document.querySelector(".wishlist").classList.add("disable");
    booksRequest();
}
