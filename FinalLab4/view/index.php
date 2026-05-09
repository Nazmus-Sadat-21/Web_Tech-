<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management System</title>

    <link rel="stylesheet" href="design.css">

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>

<div class="container">

    <h1>Library Management System</h1>

    <form id="bookForm">

        <input type="hidden" id="bookId" name="id">

        <input type="text" id="title" name="title" placeholder="Book Title" required>

        <input type="text" id="author" name="author" placeholder="Author Name" required>

        <input type="text" id="category" name="category" placeholder="Category" required>

        <select id="status" name="status">
            <option value="Available">Available</option>
            <option value="Borrowed">Borrowed</option>
        </select>

        <button type="submit" id="submitBtn">Add Book</button>

    </form>

    <br>

    <table>

        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody id="bookTable">

        </tbody>

    </table>

</div>

<script src="script.js"></script>

</body>
</html>