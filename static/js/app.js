// Import data
const tableData = data;

// Reference html table
var tbody = d3.select("tbody");

// Craft function for table
function buildTable(data) {
    // Make clean table
    tbody.html("");
    // Loop through data
    data.forEach((dataRow) => {
        // Add row for each field
        let row = tbody.append("tr");
        // Loop through each field
        Object.values(dataRow).forEach((val) => {
            // Add each cell/value to row
            let cell = row.append("td");
            cell.text(val);
        });
    });
}