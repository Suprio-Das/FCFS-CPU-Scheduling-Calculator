# CPU Scheduling Simulator Readme

## Introduction
This is a simple CPU scheduling simulator implemented in JavaScript. The simulator employs the First-Come-First-Serve (FCFS) scheduling algorithm to demonstrate the waiting time and turnaround time calculations for a given set of processes.

## How to Use
To use the simulator, follow these steps:

1. Open the HTML file in a web browser.
2. Input the number of processes, arrival times, and burst times in the respective input fields.
3. Click the "Submit" button to generate the CPU scheduling table.

## Code Explanation
- The JavaScript code utilizes the Document Object Model (DOM) to interact with HTML elements.
- The input values are processed to extract relevant information, such as process number, arrival times, and burst times.
- The waiting time (wt) and turnaround time (tat) for each process are calculated based on the FCFS algorithm.
- The calculated values are displayed in the console and in an HTML table.
- The HTML table dynamically updates with the scheduling information upon submission.

## Code Structure
- **Event Listener:** The program is triggered by the click event on the "Submit" button.
- **Input Processing:** Process number, arrival times, and burst times are extracted from user input.
- **Calculation:** Waiting time (wt) and turnaround time (tat) are calculated using the FCFS algorithm.
- **Table Update:** The HTML table is dynamically updated to display the scheduling information.

## Example
For example, if the user inputs:
- Number of processes: 3
- Arrival times: 0 2 4
- Burst times: 5 8 3

The resulting scheduling table will display the waiting time and turnaround time for each process.

## License
This CPU Scheduling Simulator is a open-source project. You can use this project on your personal work by giving proper credit by following the Copyright guidlines.

## Acknowledgments
- The simulator was created for educational purposes to demonstrate the basics of CPU scheduling algorithms.
- Feel free to modify and extend the code as needed. Contributions are welcome!

# Live Site:
https://fcfs-cpu-scheduling-calculator.vercel.app/
