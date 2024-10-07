function booksRequest()
{
    const httpRequest = new XMLHttpRequest();

    httpRequest.onload = function() {
        var parsedResponseText = JSON.parse(this.responseText);
        HTMLString = "";
        for(var i = 0; i < parsedResponseText.length; i++) {
            HTMLString += "<tr><td><input type='checkbox'></td><td colspan=2><button onclick='showInformation()' class='table-button make-one-row'>" + "<p>" +parsedResponseText[i].title + "</p>" + "<p>" + parsedResponseText[i].author + "</p>" + "</button></td></tr>";
            localStorage.setItem("description", parsedResponseText[i].description);
            localStorage.setItem("genre", parsedResponseText[i].genre);
            localStorage.setItem("date", parsedResponseText[i].date);
            localStorage.setItem("langauge", parsedResponseText[i].langauge);
            localStorage.setItem("wishlist", parsedResponseText[i].wishlist);
            localStorage.setItem("isbn", parsedResponseText[i].isbn);
        }
        
        document.getElementById("booksTable").innerHTML = HTMLString;
    }

    httpRequest.open("GET", "http://localhost:8080/geefAlleBoeken");
    httpRequest.send();
}