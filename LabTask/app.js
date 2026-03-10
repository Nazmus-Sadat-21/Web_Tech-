const rollInput = document.getElementById("roll");
const nameInput = document.getElementById("name");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("studentList");
const total = document.getElementById("total");
const attendance = document.getElementById("attendance");
const search = document.getElementById("search");

const sortBtn = document.getElementById("sortBtn");
const highlightBtn = document.getElementById("highlightBtn");

addBtn.disabled = true;

nameInput.addEventListener("input",()=>{
    addBtn.disabled = nameInput.value.trim()==="";
});

addBtn.addEventListener("click", addStudent);

function addStudent(){

    let name = nameInput.value.trim();
    let roll = rollInput.value.trim();

    if(name === "" || roll === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = roll + " - " + name;

    const checkbox = document.createElement("input");
    checkbox.type="checkbox";

    checkbox.addEventListener("change",()=>{
        if(checkbox.checked){
            li.classList.add("present");
        }else{
            li.classList.remove("present");
        }
        updateAttendance();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent="Edit";

    editBtn.onclick = ()=>{
        let newName = prompt("Edit name", name);
        let newRoll = prompt("Edit roll", roll);

        if(newName && newRoll){
            name = newName;
            roll = newRoll;
            span.textContent = roll + " - " + name;
        }
    };

    const delBtn = document.createElement("button");
    delBtn.textContent="Delete";

    delBtn.onclick = ()=>{
        if(confirm("Are you sure you want to delete this student?")){
            li.remove();
            updateTotal();
            updateAttendance();
        }
    };

    const actions = document.createElement("div");
    actions.className="actions";

    actions.appendChild(checkbox);
    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);

    nameInput.value="";
    rollInput.value="";

    updateTotal();
    updateAttendance();
}

function updateTotal(){
    total.textContent = "Total students: " + list.children.length;
}

function updateAttendance(){

    let present = document.querySelectorAll(".present").length;
    let totalStd = list.children.length;
    let absent = totalStd - present;

    attendance.textContent = "Present: " + present + " , Absent: " + absent;
}

search.addEventListener("input",()=>{

    let value = search.value.toLowerCase();
    let items = list.getElementsByTagName("li");

    for(let i=0;i<items.length;i++){

        let text = items[i].innerText.toLowerCase();

        if(text.includes(value)){
            items[i].style.display="";
        }else{
            items[i].style.display="none";
        }

    }

});

sortBtn.addEventListener("click",()=>{

    let items = Array.from(list.children);

    items.sort((a,b)=>{
        return a.innerText.localeCompare(b.innerText);
    });

    list.innerHTML="";

    items.forEach(li=>{
        list.appendChild(li);
    });

});

highlightBtn.addEventListener("click",()=>{

    let items = list.children;

    for(let i=0;i<items.length;i++){
        items[i].classList.remove("highlight");
    }

    if(items.length>0){
        items[0].classList.add("highlight");
    }

});