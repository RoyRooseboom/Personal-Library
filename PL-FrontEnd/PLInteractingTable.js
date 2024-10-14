function showInformation(whatBook)
{
    HTMLString = "";
    HTMLString += "<table><tr><td><b>Language: </b>" + whatBook.langauge + "</td>" + "<td><b>Wishlist: </b>" + whatBook.wishlist + "</td> </tr>" +
      "<tr>" +
      "<td><b>Date: </b>" + whatBook.date + "</td>" + "<td><b>Genre: </b>" + whatBook.genre + "</td> </tr>" +
      "<tr>" +
      "<td><b>ISBN: </b>" + whatBook.isbn + "</td> </tr>" +
      "<tr>" +
      "<td colspan=2>" + whatBook.description + "</td> </tr>" +
      "</table>";

    document.getElementById("info").innerHTML = HTMLString;
    document.getElementById("img-id").src = whatBook.picture;
}