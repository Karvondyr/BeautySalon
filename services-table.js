function addRow() {
    const serviceName = document.getElementById("serviceName").value;
    const serviceDescription = document.getElementById("serviceDescription").value;
    const serviceDate = document.getElementById("serviceDate").value;
    const createForm = document.getElementById("create-form")

    const table = document.querySelector("table tbody");
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = serviceName;
    cell2.innerHTML = serviceDescription;
    cell3.innerHTML = serviceDate;
    cell4.innerHTML = "<td class=\"action-buttons\">\n" +
        "                    <ul class=\"actions\">\n" +
        "                        <li>\n" +
        "                            <button>Переглянути</button>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <button>Редагувати</button>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <button onclick='removeRow(this)'>Видалити</button>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </td>"
    cell5.innerHTML = "<input type='checkbox'>"

    createForm.reset();

}

function removeRow(button) {
    const row = button.closest('tr');
    row.parentNode.removeChild(row);
}

function removeSelected() {
    const table = document.querySelector("table tbody");
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const checkbox = rows[i].getElementsByTagName("input")[0];

        if (checkbox && checkbox.type === "checkbox" && checkbox.checked) {
            table.deleteRow(i);
            i--;
        }
    }
}

function duplicateSelected(){
    const table = document.querySelector("table tbody");
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const checkbox = rows[i].getElementsByTagName("input")[0];

        if (checkbox && checkbox.type === "checkbox" && checkbox.checked) {
            const newRow = table.insertRow(i + 1);
            for (let j = 0; j < rows[i].cells.length; j++) {
                const newCell = newRow.insertCell(j);
                newCell.innerHTML = rows[i].cells[j].innerHTML;
            }
            i++;
        }
    }
}