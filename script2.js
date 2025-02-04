// Data for the elements (extend this list as needed)
// Elements data including element types
const elements = [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, elementType: 'Nonmetal', group: 1, period: 1, reactivity: 'High' },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', atomicMass: 4.0026, elementType: 'Noble Gas', group: 18, period: 1, reactivity: 'Low' },
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium', atomicMass: 6.94, elementType: 'Alkali Metal', group: 1, period: 2, reactivity: 'High' },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', atomicMass: 9.0122, elementType: 'Alkaline Earth Metal', group: 2, period: 2, reactivity: 'Low' },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', atomicMass: 10.81, elementType: 'Metalloid', group: 13, period: 2, reactivity: 'Low' },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', atomicMass: 12.011, elementType: 'Nonmetal', group: 14, period: 2, reactivity: 'Moderate' },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', atomicMass: 14.007, elementType: 'Nonmetal', group: 15, period: 2, reactivity: 'Moderate' },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', atomicMass: 15.999, elementType: 'Nonmetal', group: 16, period: 2, reactivity: 'High' },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', atomicMass: 18.998, elementType: 'Halogen', group: 17, period: 2, reactivity: 'High' },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', atomicMass: 20.180, elementType: 'Noble Gas', group: 18, period: 2, reactivity: 'Low' },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', atomicMass: 22.990, elementType: 'Alkali Metal', group: 1, period: 3, reactivity: 'High' },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', atomicMass: 24.305, elementType: 'Alkaline Earth Metal', group: 2, period: 3, reactivity: 'Moderate' },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', atomicMass: 26.982, elementType: 'Post-transition Metal', group: 13, period: 3, reactivity: 'Moderate' },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', atomicMass: 28.085, elementType: 'Metalloid', group: 14, period: 3, reactivity: 'Moderate' },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', atomicMass: 30.974, elementType: 'Nonmetal', group: 15, period: 3, reactivity: 'High' },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', atomicMass: 32.06, elementType: 'Nonmetal', group: 16, period: 3, reactivity: 'Moderate' },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', atomicMass: 35.45, elementType: 'Halogen', group: 17, period: 3, reactivity: 'High' },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', atomicMass: 39.948, elementType: 'Noble Gas', group: 18, period: 3, reactivity: 'Low' },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', atomicMass: 39.098, elementType: 'Alkali Metal', group: 1, period: 4, reactivity: 'High' },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', atomicMass: 40.078, elementType: 'Alkaline Earth Metal', group: 2, period: 4, reactivity: 'Moderate' },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', atomicMass: 44.956, elementType: 'Transition Metal', group: 3, period: 4, reactivity: 'Low' },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', atomicMass: 47.867, elementType: 'Transition Metal', group: 4, period: 4, reactivity: 'Low' },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', atomicMass: 50.942, elementType: 'Transition Metal', group: 5, period: 4, reactivity: 'Low' },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', atomicMass: 52.0, elementType: 'Transition Metal', group: 6, period: 4, reactivity: 'Low' },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', atomicMass: 54.938, elementType: 'Transition Metal', group: 7, period: 4, reactivity: 'Low' },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', atomicMass: 55.845, elementType: 'Transition Metal', group: 8, period: 4, reactivity: 'Moderate' },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', atomicMass: 58.933, elementType: 'Transition Metal', group: 9, period: 4, reactivity: 'Moderate' },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', atomicMass: 58.693, elementType: 'Transition Metal', group: 10, period: 4, reactivity: 'Moderate' },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', atomicMass: 63.546, elementType: 'Transition Metal', group: 11, period: 4, reactivity: 'Low' },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', atomicMass: 65.38, elementType: 'Transition Metal', group: 12, period: 4, reactivity: 'Low' },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', atomicMass: 69.723, elementType: 'Post-transition Metal', group: 13, period: 4, reactivity: 'Low' },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', atomicMass: 72.63, elementType: 'Metalloid', group: 14, period: 4, reactivity: 'Moderate' },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', atomicMass: 74.922, elementType: 'Metalloid', group: 15, period: 4, reactivity: 'Moderate' },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', atomicMass: 78.971, elementType: 'Nonmetal', group: 16, period: 4, reactivity: 'Moderate' },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', atomicMass: 79.904, elementType: 'Halogen', group: 17, period: 4, reactivity: 'High' },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', atomicMass: 83.798, elementType: 'Noble Gas', group: 18, period: 4, reactivity: 'Low' },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', atomicMass: 85.468, elementType: 'Alkali Metal', group: 1, period: 5, reactivity: 'High' },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', atomicMass: 87.62, elementType: 'Alkaline Earth Metal', group: 2, period: 5, reactivity: 'Moderate' },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', atomicMass: 88.905, elementType: 'Transition Metal', group: 3, period: 5, reactivity: 'Low' },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', atomicMass: 91.224, elementType: 'Transition Metal', group: 4, period: 5, reactivity: 'Low' },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', atomicMass: 92.906, elementType: 'Transition Metal', group: 5, period: 5, reactivity: 'Low' },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', atomicMass: 95.95, elementType: 'Transition Metal', group: 6, period: 5, reactivity: 'Low' },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', atomicMass: 98, elementType: 'Transition Metal', group: 7, period: 5, reactivity: 'Low' },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', atomicMass: 101.07, elementType: 'Transition Metal', group: 8, period: 5, reactivity: 'Low' },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', atomicMass: 102.91, elementType: 'Transition Metal', group: 9, period: 5, reactivity: 'Low' },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', atomicMass: 106.42, elementType: 'Transition Metal', group: 10, period: 5, reactivity: 'Low' },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', atomicMass: 107.87, elementType: 'Transition Metal', group: 11, period: 5, reactivity: 'Low' },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', atomicMass: 112.41, elementType: 'Transition Metal', group: 12, period: 5, reactivity: 'Low' },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', atomicMass: 114.82, elementType: 'Post-transition Metal', group: 13, period: 5, reactivity: 'Low' },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', atomicMass: 118.71, elementType: 'Post-transition Metal', group: 14, period: 5, reactivity: 'Low' },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', atomicMass: 121.76, elementType: 'Metalloid', group: 15, period: 5, reactivity: 'Moderate' },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', atomicMass: 127.60, elementType: 'Metalloid', group: 16, period: 5, reactivity: 'Moderate' },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', atomicMass: 126.90, elementType: 'Halogen', group: 17, period: 5, reactivity: 'High' },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', atomicMass: 131.29, elementType: 'Noble Gas', group: 18, period: 5, reactivity: 'Low' },
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', atomicMass: 132.91, elementType: 'Alkali Metal', group: 1, period: 6, reactivity: 'High' },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium', atomicMass: 137.33, elementType: 'Alkaline Earth Metal', group: 2, period: 6, reactivity: 'Moderate' },
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', atomicMass: 138.91, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', atomicMass: 140.12, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', atomicMass: 140.91, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', atomicMass: 144.24, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', atomicMass: 145, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', atomicMass: 150.36, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', atomicMass: 151.98, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', atomicMass: 157.25, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', atomicMass: 158.93, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', atomicMass: 162.50, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', atomicMass: 164.93, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', atomicMass: 167.26, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', atomicMass: 168.93, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', atomicMass: 173.04, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', atomicMass: 175.00, elementType: 'Lanthanide', group: 3, period: 6, reactivity: 'Low' },
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', atomicMass: 178.49, elementType: 'Transition Metal', group: 4, period: 6, reactivity: 'Low' },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', atomicMass: 180.95, elementType: 'Transition Metal', group: 5, period: 6, reactivity: 'Low' },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten', atomicMass: 183.84, elementType: 'Transition Metal', group: 6, period: 6, reactivity: 'Low' },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', atomicMass: 186.21, elementType: 'Transition Metal', group: 7, period: 6, reactivity: 'Low' },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium', atomicMass: 190.23, elementType: 'Transition Metal', group: 8, period: 6, reactivity: 'Low' },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', atomicMass: 192.22, elementType: 'Transition Metal', group: 9, period: 6, reactivity: 'Low' },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', atomicMass: 195.08, elementType: 'Transition Metal', group: 10, period: 6, reactivity: 'Low' },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', atomicMass: 196.97, elementType: 'Transition Metal', group: 11, period: 6, reactivity: 'Low' },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', atomicMass: 200.59, elementType: 'Transition Metal', group: 12, period: 6, reactivity: 'Low' },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', atomicMass: 204.38, elementType: 'Post-transition Metal', group: 13, period: 6, reactivity: 'Low' },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead', atomicMass: 207.2, elementType: 'Post-transition Metal', group: 14, period: 6, reactivity: 'Low' },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', atomicMass: 208.98, elementType: 'Post-transition Metal', group: 15, period: 6, reactivity: 'Low' },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium', atomicMass: 209, elementType: 'Metalloid', group: 16, period: 6, reactivity: 'Moderate' },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine', atomicMass: 210, elementType: 'Halogen', group: 17, period: 6, reactivity: 'High' },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', atomicMass: 222, elementType: 'Noble Gas', group: 18, period: 6, reactivity: 'Low' },
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', atomicMass: 223, elementType: 'Alkali Metal', group: 1, period: 7, reactivity: 'High' },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium', atomicMass: 226, elementType: 'Alkaline Earth Metal', group: 2, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', atomicMass: 227, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Low' },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', atomicMass: 232.04, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Low' },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', atomicMass: 231.04, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Low' },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', atomicMass: 238.03, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', atomicMass: 237, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Low' },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', atomicMass: 244, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', atomicMass: 243, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', atomicMass: 247, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', atomicMass: 247, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', atomicMass: 251, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', atomicMass: 252, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', atomicMass: 257, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', atomicMass: 258, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', atomicMass: 259, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', atomicMass: 262, elementType: 'Actinide', group: 3, period: 7, reactivity: 'Moderate' },
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', atomicMass: 267, elementType: 'Transition Metal', group: 4, period: 7, reactivity: 'Low' },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', atomicMass: 270, elementType: 'Transition Metal', group: 5, period: 7, reactivity: 'Low' },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', atomicMass: 271, elementType: 'Transition Metal', group: 6, period: 7, reactivity: 'Low' },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', atomicMass: 270, elementType: 'Transition Metal', group: 7, period: 7, reactivity: 'Low' },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', atomicMass: 277, elementType: 'Transition Metal', group: 8, period: 7, reactivity: 'Low' },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', atomicMass: 278, elementType: 'Transition Metal', group: 9, period: 7, reactivity: 'Low' },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', atomicMass: 281, elementType: 'Transition Metal', group: 10, period: 7, reactivity: 'Low' },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', atomicMass: 280, elementType: 'Transition Metal', group: 11, period: 7, reactivity: 'Low' },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', atomicMass: 285, elementType: 'Transition Metal', group: 12, period: 7, reactivity: 'Low' },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', atomicMass: 284, elementType: 'Post-transition Metal', group: 13, period: 7, reactivity: 'Low' },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', atomicMass: 289, elementType: 'Post-transition Metal', group: 14, period: 7, reactivity: 'Low' },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', atomicMass: 288, elementType: 'Post-transition Metal', group: 15, period: 7, reactivity: 'Low' },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', atomicMass: 293, elementType: 'Post-transition Metal', group: 16, period: 7, reactivity: 'Low' },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', atomicMass: 294, elementType: 'Halogen', group: 17, period: 7, reactivity: 'High' },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', atomicMass: 294, elementType: 'Noble Gas', group: 18, period: 7, reactivity: 'Low' }
]


// Function to generate the periodic table
function generatePeriodicTable() {
    const tableBody = document.querySelector('#periodicTable tbody');
    const rows = [];

    let row = [];
    elements.forEach((element, index) => {
        row.push(`
            <td class="element"
                data-atomic-number="${element.atomicNumber}"
                data-symbol="${element.symbol}"
                data-name="${element.name}"
                data-mass="${element.atomicMass}"
                data-type="${element.elementType}"
                data-group="${element.group}"
                data-period="${element.period}"
                data-reactivity="${element.reactivity}">
                <div class="element-box">
                    <span class="atomic-number">${element.atomicNumber}</span><br>
                    <span class="symbol">${element.symbol}</span><br>
                    <span class="name">${element.name}</span><br>
                    <span class="atomic-mass">${element.atomicMass}</span><br>
                    <span class="element-type">${element.elementType}</span><br>
                    <span class="group">Group: ${element.group}</span><br>
                    <span class="period">Period: ${element.period}</span><br>
                    <span class="reactivity">Reactivity: ${element.reactivity}</span>
                </div>
            </td>
        `);

        // Every 18 elements (one full row of the table), push a new row
        if ((index + 1) % 5 === 0) {
            rows.push(`<tr>${row.join('')}</tr>`);
            row = [];
        }
    });

    // Push the last row if it exists
    if (row.length) {
        rows.push(`<tr>${row.join('')}</tr>`);
    }

    // Insert the table rows into the table body
    tableBody.innerHTML = rows.join('');
}

// Call the function to populate the table
generatePeriodicTable();

// Initialize Isotope for sorting and filtering
const $table = document.querySelector('#periodicTable');
const iso = new Isotope($table, {
    itemSelector: '.element',
    layoutMode: 'fitRows',
    getSortData: {
        atomicNumber: function (itemElem) {
            return parseInt(itemElem.getAttribute('data-atomic-number'), 10); // Convert atomic number to integer
        },
        atomicMass: function (itemElem) {
            return parseFloat(itemElem.getAttribute('data-mass')); // Convert atomic mass to float
        },
        group: function (itemElem) {
            return parseInt(itemElem.getAttribute('data-group'), 10); // Convert group to integer
        },
        period: function (itemElem) {
            return parseInt(itemElem.getAttribute('data-period'), 10); // Convert period to integer
        },
        reactivity: function (itemElem) {
            const reactivity = itemElem.getAttribute('data-reactivity');
            return ['Low', 'Moderate', 'High'].indexOf(reactivity); // Treat reactivity as an index for sorting
        }
    },
    sortBy: 'atomicNumber',  // Default sorting option
    sortAscending: true,     // Set to true or false to sort in ascending or descending order
});

// Handle dropdown filtering for Periods
document.querySelector('#filterByPeriod').addEventListener('change', function () {
    const selectedPeriod = this.value;
    iso.arrange({
        filter: selectedPeriod === 'all' ? '*' : `[data-period="${selectedPeriod}"]`
    });
});

// Handle dropdown filtering for Groups
document.querySelector('#filterByGroup').addEventListener('change', function () {
    const selectedGroup = this.value;
    iso.arrange({
        filter: selectedGroup === 'all' ? '*' : `[data-group="${selectedGroup}"]`
    });
});

// Handle dropdown filtering for Reactivity
document.querySelector('#filterByReactivity').addEventListener('change', function () {
    const selectedReactivity = this.value;
    iso.arrange({
        filter: selectedReactivity === 'all' ? '*' : `[data-reactivity="${selectedReactivity}"]`
    });
});

// Handle dropdown menu to filter by element type
document.querySelector('#sortByElementType').addEventListener('change', function () {
    const selectedType = this.value;
    iso.arrange({
        filter: selectedType === 'all' ? '*' : `[data-type="${selectedType}"]`
    });
});

// Handle button clicks for sorting
document.querySelector('#sortByNumber').addEventListener('click', function () {
    iso.arrange({
        sortBy: 'atomicNumber',
        sortAscending: true
    });
});

document.querySelector('#sortByMass').addEventListener('click', function () {
    iso.arrange({
        sortBy: 'atomicMass',
        sortAscending: false
    });
});

document.querySelector('#sortByGroup').addEventListener('click', function () {
    iso.arrange({
        sortBy: 'group',
        sortAscending: true
    });
});

document.querySelector('#sortByPeriod').addEventListener('click', function () {
    iso.arrange({
        sortBy: 'period',
        sortAscending: true
    });
});

document.querySelector('#sortByReactivity').addEventListener('click', function () {
    iso.arrange({
        sortBy: 'reactivity',
        sortAscending: true
    });
});


const elementTypeColors = {
    'Alkali Metal': '#ff4c00',        // Orange for Alkali Metals
    'Alkaline Earth Metal': '#ff9900', // Yellow-Orange for Alkaline Earth Metals
    'Transition Metal': '#ffcc00',    // Yellow for Transition Metals
    'Lanthanide': '#cc66ff',          // Light Purple for Lanthanides
    'Actinide': '#9933ff',            // Dark Purple for Actinides
    'Post-transition Metal': '#ff66cc', // Pink for Post-transition Metals
    'Metalloid': '#00cc99',           // Light Green for Metalloids
    'Nonmetal': '#00ccff',            // Light Blue for Nonmetals
    'Halogen': '#ff3366',             // Red for Halogens
    'Noble Gas': '#66ff66',           // Light Green for Noble Gases
};
