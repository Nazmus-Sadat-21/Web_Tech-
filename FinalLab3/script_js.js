function loadData() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "data.php", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      var students = JSON.parse(xhr.responseText);

      var table = "<table border='1' cellpadding='10'>";

      table += "<tr>";
      table += "<th>Name</th>";
      table += "<th>ID</th>";
      table += "<th>Department</th>";
      table += "<th>CGPA</th>";
      table += "</tr>";

      for (var i = 0; i < students.length; i++) {
        table += "<tr>";
        table += "<td>" + students[i].name + "</td>";
        table += "<td>" + students[i].id + "</td>";
        table += "<td>" + students[i].department + "</td>";
        table += "<td>" + students[i].cgpa + "</td>";
        table += "</tr>";
      }

      table += "</table>";

      document.getElementById("output").innerHTML = table;
    }
  };

  xhr.send();
}
