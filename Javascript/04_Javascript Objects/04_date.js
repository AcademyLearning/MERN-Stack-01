// Creating a new Date object to represent the current date and time.
var currentDate = new Date();
console.log("Current date and time:", currentDate);

// Creating a new Date object to represent the current date and time.
var date = new Date();

// Using toLocaleDateString() method to get the date portion of the date object in a locale-specific format.
console.log("Date in local format:", date.toLocaleDateString());

// Using toLocaleString() method with options to get the date and time in a specific time zone and locale.
console.log("Date and time in en-US format with UTC timezone:", date.toLocaleString("en-US", {timezone: 'UTC'}));
