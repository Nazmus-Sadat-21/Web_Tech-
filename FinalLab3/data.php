<?php
header("Content-Type: application/json");

$students = [
    [
        "name" => "Rahim",
        "id" => "101",
        "department" => "CSE",
        "cgpa" => "3.75"
    ],
    [
        "name" => "Karim",
        "id" => "102",
        "department" => "EEE",
        "cgpa" => "3.60"
    ],
    [
        "name" => "Sadia",
        "id" => "103",
        "department" => "BBA",
        "cgpa" => "3.90"
    ],
    [
        "name" => "Sadat",
        "id" => "104",
        "department" => "CSE",
        "cgpa" => "3.63"
    ]
];

echo json_encode($students);
?>