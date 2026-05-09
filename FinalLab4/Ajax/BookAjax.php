<?php

require_once '../controller/bookController.php';

if (isset($_POST['action'])) {

    // ADD BOOK
    if ($_POST['action'] == 'add') {

        $result = createBook($_POST);

        if ($result) {
            echo "Book Added Successfully";
        } else {
            echo "Failed to Add Book";
        }
    }

    // FETCH ALL BOOKS
    if ($_POST['action'] == 'fetch') {

        $books = showBooks();

        $output = "";

        while ($row = mysqli_fetch_assoc($books)) {

            $output .= "
            <tr>
                <td>{$row['id']}</td>
                <td>{$row['title']}</td>
                <td>{$row['author']}</td>
                <td>{$row['category']}</td>
                <td>{$row['status']}</td>
                <td>
                    <button class='editBtn' data-id='{$row['id']}'>Edit</button>
                    <button class='deleteBtn' data-id='{$row['id']}'>Delete</button>
                </td>
            </tr>
            ";
        }

        echo $output;
    }

    // GET SINGLE BOOK
    if ($_POST['action'] == 'single') {

        $id = $_POST['id'];

        $book = singleBook($id);

        echo json_encode($book);
    }

    // UPDATE BOOK
    if ($_POST['action'] == 'update') {

        $result = editBook($_POST);

        if ($result) {
            echo "Book Updated Successfully";
        } else {
            echo "Failed to Update Book";
        }
    }

    // DELETE BOOK
    if ($_POST['action'] == 'delete') {

        $id = $_POST['id'];

        $result = removeBook($id);

        if ($result) {
            echo "Book Deleted Successfully";
        } else {
            echo "Failed to Delete Book";
        }
    }
}

?>