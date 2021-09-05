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

// Create function for button click
function handleClick () {
    // Look for datetime id and store value in date
    let date = d3.select("#datetime").property("value");
    // Save default filtered data in new variable
    let filteredData = tableData;
    // Filter, show rows of data only if date matches 
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Build table with filtered data
    buildTable(filteredData);
};
// Attach event to listen for form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when page loads
buildTable(tableData);