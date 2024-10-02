// Sample Data for Chemicals
const chemicalData = [
  { id: 1, name: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: "100.00 kg", unit: "kg", quantity: 6495.18 },
   { id: 2, name: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: "100.00 kg", unit: "kg", quantity: 8751.90 },
   { id: 3, name: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: "75.00 L", unit: "L", quantity: 5964.61 },
   { id: 4, name: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: "105.00 kg", unit: "kg", quantity: 8183.73 },
   { id: 5, name: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: "105.00 kg", unit: "kg", quantity: 4154.33 },
   { id: 6, name: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: "N/A", unit: "t", quantity: 6272.34 },
   { id: 7, name: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: "250.00 kg", unit: "kg", quantity: 8749.54 },
   { id: 8, name: "Hydrochloric Acid", vendor: "BASF", density: 1190.00, viscosity: 1.00, packaging: "Drum", packSize: "200.00 L", unit: "L", quantity: 1000.00 },
   { id: 9, name: "Sodium Chloride", vendor: "Cargill", density: 2160.00, viscosity: 0.80, packaging: "Bag", packSize: "25.00 kg", unit: "kg", quantity: 1500.00 },
   { id: 10, name: "Sulfuric Acid", vendor: "Olin Corporation", density: 1840.00, viscosity: 1.25, packaging: "Tank", packSize: "500.00 L", unit: "L", quantity: 5000.00 },
   { id: 11, name: "Acetic Acid", vendor: "Eastman", density: 1040.00, viscosity: 0.89, packaging: "Drum", packSize: "200.00 L", unit: "L", quantity: 2000.00 },
   { id: 12, name: "Calcium Carbonate", vendor: "Imerys", density: 2700.00, viscosity: 0.60, packaging: "Bag", packSize: "25.00 kg", unit: "kg", quantity: 2500.00 },
   { id: 13, name: "Sodium Bicarbonate", vendor: "Church & Dwight", density: 1150.00, viscosity: 0.70, packaging: "Bag", packSize: "25.00 kg", unit: "kg", quantity: 3000.00 },
   { id: 14, name: "Potassium Hydroxide", vendor: "Brenntag", density: 3000.00, viscosity: 1.10, packaging: "Drum", packSize: "200.00 L", unit: "L", quantity: 800.00 },
   { id: 15, name: "Sodium Sulfate", vendor: "Kraft Chemical", density: 1400.00, viscosity: 0.85, packaging: "Bag", packSize: "25.00 kg", unit: "kg", quantity: 1200.00 },
   // more chemical entries...
 ];
 
 // Function to Display Data in Table
 function loadTable() {
   const tableBody = document.querySelector('#chemicalTable tbody');
   tableBody.innerHTML = ''; // Clear existing rows
 
   chemicalData.forEach(chem => {
       const row = document.createElement('tr');
       row.innerHTML = `
           <td>${chem.id}</td>
           <td>${chem.name}</td>
           <td>${chem.vendor}</td>
           <td>${chem.density}</td>
           <td>${chem.viscosity}</td>
           <td>${chem.packaging}</td>
           <td>${chem.packSize}</td>
           <td>${chem.unit}</td>
           <td>${chem.quantity}</td>
       `;
       tableBody.appendChild(row);
   });
 }
 
 // Sort Table by Column
 let ascending = true;
 
 function sortTable(columnIndex) {
   const tableBody = document.querySelector('#chemicalTable tbody');
   const rowsArray = Array.from(tableBody.rows);
 
   rowsArray.sort((rowA, rowB) => {
       const aText = rowA.cells[columnIndex].innerText;
       const bText = rowB.cells[columnIndex].innerText;
 
       const aValue = isNaN(aText) ? aText.toLowerCase() : parseFloat(aText);
       const bValue = isNaN(bText) ? bText.toLowerCase() : parseFloat(bText);
 
       return ascending ? (aValue < bValue ? -1 : 1) : (aValue > bValue ? -1 : 1);
   });
 
   rowsArray.forEach(row => tableBody.appendChild(row));
   ascending = !ascending;
 }
 
 // Add New Chemical Row
 function addNewRow() {
   const newChem = {
       id: chemicalData.length + 1,
       name: "New Chemical",
       vendor: "New Vendor",
       density: 0,
       viscosity: 0,
       packaging: "Bag",
       packSize: "10 kg",
       unit: "kg",
       quantity: 0
   };
   chemicalData.push(newChem);
   loadTable();
   alert("New entry added.");
 }
 
 // Move Selected Row Up
 function moveSelectedRowUp() {
   const tableBody = document.querySelector('#chemicalTable tbody');
   const selectedRow = tableBody.querySelector('tr.selected');
   if (selectedRow && selectedRow.previousElementSibling) {
       tableBody.insertBefore(selectedRow, selectedRow.previousElementSibling);
       alert("Row moved up.");
   } else {
       alert("Cannot move row further up.");
   }
 }
 
 // Move Selected Row Down
 function moveSelectedRowDown() {
   const tableBody = document.querySelector('#chemicalTable tbody');
   const selectedRow = tableBody.querySelector('tr.selected');
   if (selectedRow && selectedRow.nextElementSibling) {
       tableBody.insertBefore(selectedRow.nextElementSibling, selectedRow);
       alert("Row moved down.");
   } else {
       alert("Cannot move row further down.");
   }
 }
 
 // Delete Selected Row
 function removeSelectedRow() {
   const tableBody = document.querySelector('#chemicalTable tbody');
   const selectedRow = tableBody.querySelector('tr.selected');
   if (selectedRow) {
       const rowIndex = Array.from(tableBody.rows).indexOf(selectedRow);
       chemicalData.splice(rowIndex, 1);
       loadTable();
       alert("Row deleted.");
   } else {
       alert("Please select a row to delete.");
   }
 }
 
 // Refresh Table Data
 function refreshTable() {
   loadTable();
   alert("Table refreshed.");
 }
 
 // Save Data to JSON (console log for now)
 function saveTableData() {
   const dataAsJson = JSON.stringify(chemicalData, null, 2);
   console.log(dataAsJson); // Log to console
   alert("Data saved successfully. Check console for output.");
 }
 
 // Event Listeners for Toolbar Buttons
 document.getElementById('addRowBtn').addEventListener('click', addNewRow);
 document.getElementById('moveUpBtn').addEventListener('click', moveSelectedRowUp);
 document.getElementById('moveDownBtn').addEventListener('click', moveSelectedRowDown);
 document.getElementById('deleteRowBtn').addEventListener('click', removeSelectedRow);
 document.getElementById('refreshBtn').addEventListener('click', refreshTable);
 document.getElementById('saveBtn').addEventListener('click', saveTableData);
 
 // Row Selection for Interaction
 document.querySelector('#chemicalTable tbody').addEventListener('click', (event) => {
   const selected = document.querySelector('tr.selected');
   if (selected) selected.classList.remove('selected');
   const row = event.target.closest('tr');
   if (row) row.classList.add('selected');
 });
 
 // Initial Load
 document.addEventListener('DOMContentLoaded', loadTable);