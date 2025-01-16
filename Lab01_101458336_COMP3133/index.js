const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaTxtFile = 'canada.txt';
const usaTxtFile = 'usa.txt';

// a. Delete canada.txt and usa.txt if they already exist using fs module 
function deleteExistingFile(file) {
    if (fs.existsSync(file)) { // checking if file exists
        fs.unlinkSync(file); // removes file
        console.log(`Existing file: ${file} was deleated`); // output
    }
}
deleteExistingFile(canadaTxtFile); // deleating canada file if exists
deleteExistingFile(usaTxtFile); // deleatingg usa file if exists

// Create writable streams for both files
const canadaOutputFile  = fs.createWriteStream(canadaTxtFile); // writable streams using built in createWriteStream func
const usaOutputFile = fs.createWriteStream(usaTxtFile);

// Creating the headings as specified in the PDF
const headers = "country,year,population\n";
canadaOutputFile .write(headers);
usaOutputFile.write(headers);

// b. Read CSV file, filter data of Canada, and write to canada.txt 
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        const country = row.country.trim().toLowerCase();

        if (country === 'canada') {
            canadaOutputFile .write(`${row.country},${row.year},${row.population}\n`);
        } 
        // c. Filter data of United States and write to usa.txt 
        else if (country === 'united states') {
            usaOutputFile.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('Files created'); // logging output 
        canadaOutputFile.end();
        usaOutputFile.end();
    });
