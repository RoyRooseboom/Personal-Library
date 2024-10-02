function booksRequest()
{
    const httpRequest = new XMLHttpRequest();

    httpRequest.onload = function() {
        var parsedResponseText = JSON.parse(this.responseText);
        HTMLString = "";
        for(var i = 0; i < parsedResponseText.length; i++) {
            HTMLString += "<tr><td><input type='checkbox'></td><td><button class='table-button'>" + parsedResponseText[i].title + "</button></td><td>" + parsedResponseText[i].author + "</td></tr>";
        }
        
        document.getElementById("booksTable").innerHTML = HTMLString;
    }

    httpRequest.open("GET", "http://localhost:8080/geefAlleBoeken");
    httpRequest.send();
}