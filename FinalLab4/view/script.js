$(document).ready(function () {

    // LOAD BOOKS FIRST
    loadBooks();

    // LOAD ALL BOOKS
    function loadBooks() {

        $.ajax({

            url: "../Ajax/BookAjax.php",
            type: "POST",

            data: {
                action: "fetch"
            },

            success: function (data) {

                $("#bookTable").html(data);

            }

        });

    }

    // ADD / UPDATE BOOK
    $("#bookForm").submit(function (e) {

        e.preventDefault();

        let id = $("#bookId").val();

        let action = "add";

        if (id != "") {
            action = "update";
        }

        // FORM DATA
        let formData = $(this).serialize() + "&action=" + action;

        $.ajax({

            url: "../Ajax/BookAjax.php",
            type: "POST",

            data: formData,

            success: function (response) {

                alert(response);

                $("#bookForm")[0].reset();

                $("#bookId").val("");

                $("#submitBtn").text("Add Book");

                loadBooks();

            }

        });

    });

    // EDIT BOOK
    $(document).on("click", ".editBtn", function () {

        let id = $(this).data("id");

        $.ajax({

            url: "../Ajax/BookAjax.php",
            type: "POST",

            data: {
                action: "single",
                id: id
            },

            success: function (data) {

                let book = JSON.parse(data);

                $("#bookId").val(book.id);

                $("#title").val(book.title);

                $("#author").val(book.author);

                $("#category").val(book.category);

                $("#status").val(book.status);

                $("#submitBtn").text("Update Book");

            }

        });

    });

    // DELETE BOOK
    $(document).on("click", ".deleteBtn", function () {

        if (confirm("Are you sure to delete this book?")) {

            let id = $(this).data("id");

            $.ajax({

                url: "../Ajax/BookAjax.php",
                type: "POST",

                data: {
                    action: "delete",
                    id: id
                },

                success: function (response) {

                    alert(response);

                    loadBooks();

                }

            });

        }

    });

});