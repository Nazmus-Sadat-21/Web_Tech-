<?php

require_once '../model/bookModel.php';

function createBook($data)
{
    $title = $data['title'];
    $author = $data['author'];
    $category = $data['category'];
    $status = $data['status'];

    return addBook($title, $author, $category, $status);
}

function showBooks()
{
    return getAllBooks();
}

function singleBook($id)
{
    return getBookById($id);
}

function editBook($data)
{
    $id = $data['id'];
    $title = $data['title'];
    $author = $data['author'];
    $category = $data['category'];
    $status = $data['status'];

    return updateBook($id, $title, $author, $category, $status);
}

function removeBook($id)
{
    return deleteBook($id);
}

?>