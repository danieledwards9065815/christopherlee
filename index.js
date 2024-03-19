// Importing dependencies
const fs = require('fs');
const axios = require('axios');

// Function to read a file asynchronously
async function readFileAsync(filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        return data;
    } catch (error) {
        throw new Error(`Error reading file: ${error.message}`);
    }
}

// Function to fetch data from an API endpoint
async function fetchDataFromAPI(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from API: ${error.message}`);
    }
}

// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exporting functions
module.exports = {
    readFileAsync,
    fetchDataFromAPI,
    generateRandomNumber
};
