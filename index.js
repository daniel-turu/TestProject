const prompt = require("prompt-sync")();

// Function to collect student data
function collectStudentData() {
    let firstName = prompt("Enter your First Name: ");
    let surname = prompt("Enter your Surname: ");
    let lastName = prompt("Enter your Last Name: ");
    let matNum = prompt("Enter your Matric No: ");
    let time = prompt("Enter Time of Arrival: ");

    return {
        firstName,
        surname,
        lastName,
        matNum,
        time
    };
}

// // Function to display menu options
function displayMenu() {
    console.log("*******************Attendance System.*******************");
    console.log("========================================================");
    console.log("Enter 1 to take Attendance.");
    console.log("Enter 2 to see numbers of attendees.");
    console.log("Enter 3 to print to Excel.");
    console.log("Enter 4 to Exit the Program.");
}


// Main program logic
let attendees = [];
let inputNumber;
do {
    displayMenu();
    inputNumber = prompt("Enter Number here: ");

    switch (inputNumber) {
        case '1':
            console.log("Taking attendance...");
            const studentData = collectStudentData();
            attendees.push(studentData);
            console.log("Attendance recorded for:", studentData);
            break;

        case '2':
            console.log(`Number of attendees: ${attendees.length}`);
            break;

        case '3':
            console.log("Printing to Excel (Simulated)...");
            console.log("Attendees List:", attendees);
            break;

        case '4':
            console.log("Exiting the program. Goodbye!");
            break;

        default:
            console.log("Incorrect Input. Please try again.");
    }
} while (inputNumber !== '4');
