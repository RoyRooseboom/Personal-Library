function booksRequest()
{
    const httpRequest = new XMLHttpRequest();

    httpRequest.onload = function() {
        var parsedResponseText = JSON.parse(this.responseText);
        HTMLString = "";
        for(var i = 0; i < parsedResponseText.length; i++) {
            HTMLString += "<tr><td><input type='checkbox'></td><td colspan=2><button onclick='showInformation("+ JSON.stringify(parsedResponseText[i]) +")' class='table-button make-one-row'>" + "<p>" +parsedResponseText[i].title + "</p>" + "<p>" + parsedResponseText[i].author + "</p>" + "</button></td></tr>";
        }
        
        document.getElementById("booksTable").innerHTML = HTMLString;
    }

    httpRequest.open("GET", "http://localhost:8080/geefAlleBoeken");
    httpRequest.send();
}