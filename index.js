let selectedRow = null

function onFormSubmit(){
let formData = readFormData();
if(selectedRow == null)
   insertNewRecord(formData)
else
   updateRecord(formData)
resetForm()
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
    cell10.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`
}

function resetForm(){
    document.getElementById("date").value= "";
    document.getElementById("workStart").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("attendance").value = "";
    document.getElementById("city").value = "";
    document.getElementById("workEnd").value = "";
    selectedRow = null
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("date").value = selectedRow.cells[0].innerHTML;
    document.getElementById("workStart").value = selectedRow.cells[1].innerHTML;
    document.getElementById("fullName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[5].innerHTML;
    document.getElementById("attendance").value = selectedRow.cells[6].innerHTML;
    document.getElementById("city").value = selectedRow.cells[7].innerHTML;
    document.getElementById("workEnd").value = selectedRow.cells[8].innerHTML;
}

function updateRecord(formData){
     selectedRow.cells[0].innerHTML = formData.date;
     selectedRow.cells[1].innerHTML = formData.workStart;
     selectedRow.cells[2].innerHTML = formData.fullName;
     selectedRow.cells[3].innerHTML = formData.empCode;
     selectedRow.cells[4].innerHTML = formData.email;
     selectedRow.cells[5].innerHTML = formData.salary;
     selectedRow.cells[6].innerHTML = formData.attendance;
     selectedRow.cells[7].innerHTML = formData.city;
     selectedRow.cells[8].innerHTML = formData.workEnd;

}

function onDelete(td){
    if(confirm("Are you sure to delete this record!?")){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
   
}