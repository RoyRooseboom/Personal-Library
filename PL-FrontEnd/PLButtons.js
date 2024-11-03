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

function deleteBooks()
{
    var checkedBoxes = document.getElementsByClassName("checkboxID");
    const booksToDelete = [];

    for(var i = 0; i < checkedBoxes.length; i++)
    {
        if(checkedBoxes[i].checked)
        {
            booksToDelete.push(checkedBoxes[i].value);
        }
    }

    sendDeleteBook(booksToDelete);
    window.location.reload();
}

async function addBook()
{
    var pictureString = "";

    if(document.getElementById("picture").files.length > 0)
    {
        let promise = new Promise(function(resolve)
        {
            var reader = new FileReader();
            reader.readAsDataURL(document.getElementById("picture").files[0]);
            reader.onloadend = () =>
            {
                resolve(reader.result);
            }
        });

        await promise.then(
            function(value) {pictureString = value}
        );
    }

    var book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        isbn: document.getElementById("isbn").value,
        genre: document.getElementById("genre").value,
        langauge: document.getElementById("langauge").value,
        date: document.getElementById("date").value,
        description: document.getElementById("description").value,
        picture: pictureString,
        wishlist: document.getElementById("wishlist").checked
    };

    sendBook(book);
}