function addMedicine() {
    let name = document.getElementById("medName").value;
    let time = document.getElementById("medTime").value;
    let qty = document.getElementById("medQty").value;

    if(name === "" || time === "" || qty === "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("medTable");
    let row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = time;
    row.insertCell(2).innerHTML = qty;

    alert(`Medicine Added: ${name} at ${time}`);
}
