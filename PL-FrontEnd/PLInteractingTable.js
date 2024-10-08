function showInformation(whatBook)
{
    HTMLString = "";
    HTMLString += "<table><tr><td>Langauge: " + whatBook.langauge + "</td>" + "<td>Wishlist: " + whatBook.wishlist + "</td> </tr>" +
      "<tr>" +
      "<td>Date: " + whatBook.date + "</td>" + "<td>Genre: " + whatBook.genre + "</td> </tr>" +
      "<tr>" +
      "<td>ISBN: " + whatBook.isbn + "</td> </tr>" +
      "<tr>" +
      "<td colspan=2>" + whatBook.description + "</td> </tr>" +
      "</table>";

    document.getElementById("info").innerHTML = HTMLString;
}