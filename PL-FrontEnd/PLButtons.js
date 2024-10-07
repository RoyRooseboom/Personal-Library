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
    HTMLString = "";
    HTMLString += "<table><tr><td>Langauge: " + localStorage.getItem("langauge") + "</td>" + "<td>Wishlist: " + localStorage.getItem("wishlist") + "</td> </tr>" +
      "<tr>" +
      "<td>Date: " + localStorage.getItem("date") + "</td>" + "<td>Genre: " + localStorage.getItem("genre") + "</td> </tr>" +
      "<tr>" +
      "<td>ISBN: " + localStorage.getItem("isbn") + "</td> </tr>" +
      "<tr>" +
      "<td colspan=2>" + localStorage.getItem("description") + "</td> </tr>" +
      "</table>";

    document.getElementById("info").innerHTML = HTMLString;

    // document.querySelector(".information-area").innerHTML = localStorage.getItem("description");
}