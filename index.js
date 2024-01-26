function onFormSubmit(){
let formData = readFormData()
insertNewRecord(formData)
}

function readFormData(){
   let formData = {};
    formData["date"] = document.getElementById("date").value;
    formData["workStart"] = document.getElementById("workStart").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["attendance"] = document.getElementById("attendance").value;
    formData["medicalRecord"] = document.getElementById("medicalRecord").value;
    formData["city"] = document.getElementById("city").value;
    formData["workEnd"] = document.getElementById("workEnd").value;

    return formData
}

function insertNewRecord(data){
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.date;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.workStart;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fullName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.empCode;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6= newRow.insertCell(5);
    cell6.innerHTML = data.salary;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.attendance;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.city;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.workEnd;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a>Edit</a>
                        <a>Delete</a>`
}

