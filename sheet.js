/**
 * Retrieve the value from a given cell in a given sheet
 *
 * @param {number} row of cell
 * @param {number} column of cell
 * @param {Sheet} sheet from which to retrieve data
 * @return {string} Data in the specified cell or undefined if out of bounds
 */
function getValue(row, column, sheet) {
    var range = sheet.getDataRange();
    var data = range.getValues();

    if (range.getNumRows() < row + 1) {
        return undefined;
    } else if (range.getNumColumns() < column + 1) {
        return undefined;
    } else {
        return data[row][column];
    }
}

/**
 * Set the value off a given cell in a given sheet
 *
 * @param {number} row of cell
 * @param {number} column of cell
 * @param {Sheet} sheet from which to retrieve data
 * @param {string} value to be set in cell
 */
function setValue(row, column, sheet, value) {
    if (sheet.rows < row + 1) {
        var rij = [];
        rij.push(value);
        sheet.appendRow(rij);
    } else {
        var cell = sheet.getRange(row + 1, column + 1, 1, 1);
        cell.setValue(value);
    }
}

/**
 * Set cell the background color of a given cell in a given sheet
 *
 * @param {number} row of cell
 * @param {number} rolumn of cell
 * @param {Sheet} sheet from which to retrieve data
 * @param {string} backgroundcolor to be set
 */
function setBackgroundColor(row, column, sheet, backgroundcolor) {
    if (sheet.rows < row + 1) {
        var rij = [];
        rij.push(value);
        sheet.appendRow(rij);
    } else {
        var cell = sheet.getRange(row + 1, column + 1, 1, 1);
        cell.setBackground(backgroundcolor);
    }
}

/**
 * Set the font color of a given cell in a given sheet
 *
 * @param {number} row of cell
 * @param {number} column of cell
 * @param {Sheet} sheet from which to retrieve data
 * @param {string} fontcolor to be set
 */
function setFontColor(row, column, sheet, fontcolor) {
    if (sheet.rows < row + 1) {
        var rij = [];
        rij.push(value);
        sheet.appendRow(rij);
    } else {
        var cell = sheet.getRange(row + 1, column + 1, 1, 1);
        cell.setFontColor(fontcolor);
    }
}
