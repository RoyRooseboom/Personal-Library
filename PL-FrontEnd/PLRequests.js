const httpRequest = new XMLHttpRequest();
const url = "http://localhost:8080";

function booksRequest()
{
    httpRequest.onload = function() {
        if(this.responseText != "")
        {
            var parsedResponseText = JSON.parse(this.responseText);
            HTMLString = "";
            for(var i = 0; i < parsedResponseText.length; i++) {
                HTMLString += "<tr><td><input type='checkbox' class='checkboxID' value="+ JSON.stringify(parsedResponseText[i].id) +"></td><td colspan=2><button onclick='showInformation("+ JSON.stringify(parsedResponseText[i]) +")' class='table-button make-one-row'>" + "<p>" +parsedResponseText[i].title + "</p>" + "<p>" + parsedResponseText[i].author + "</p>" + "</button></td></tr>";
            }
            
            document.getElementById("booksTable").innerHTML = HTMLString;
        }
    }

    httpRequest.open("GET", url+"/geefAlleBoeken");
    httpRequest.send();
}


function sendBook(book)
{
    var data = JSON.stringify(book);
    httpRequest.open("POST", url+"/addBook");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(data);
}

function sendDeleteBook(id)
{
    var data = JSON.stringify(id);
    httpRequest.open("DELETE", url+"/deleteBook")
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(data);
}