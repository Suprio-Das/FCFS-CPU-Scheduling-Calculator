document.getElementById('submit-btn').addEventListener('click', function() {

    const gif = document.getElementById('gif');
    gif.style.display = "none";
    // taking process number
    const processNumTextOriginal = document.getElementById('process-num');
    const processNumText = processNumTextOriginal.value.replace(/[^\d.]/g, '');
    const processNum = parseInt(processNumText);

    // taking arrival time
    const arrivalTimeText = document.getElementById('arrival-time');
    // removing extra spaces, new lines etc.
    const arrivalTimeValue = arrivalTimeText.value.trim();
    // Split the input value into an array of numbers, filter out empty strings
    const arrivalTimeArray = arrivalTimeValue.split(/\s+/).filter(Boolean).map(Number);

    // taking burst time
    const burstTimeText = document.getElementById('burst-time');
    // removing extra spaces, new lines etc.
    const burstTimeValue = burstTimeText.value.trim();
    // Split the input value into an array of numbers, filter out empty strings
    const burstTimeArray = burstTimeValue.split(/\s+/).filter(Boolean).map(Number);
    // calculating waiting time
    const wt = [];
    wt[0] = 0;
    for(var i=1; i<processNum; i++){
        wt[i] = burstTimeArray[i-1] + wt[i-1];
    }
    //calculating tat
    const tat = [];
    for(var i=0; i<processNum; i++){
        tat[i] = burstTimeArray[i] + wt[i];
    }

    for(var i=0; i<processNum; i++){
        console.log(tat[i]);
    }

    // clearing input field
    processNumTextOriginal.value = " ";
    arrivalTimeText.value = " ";
    burstTimeText.value = " ";

    // cpu scheduling table
    const table = document.getElementById('cpu-scheduling-table');
    table.style.display = "block";
    // Clearing previous table data
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = ''; // This clears the existing rows in the table body

    // Generating table rows and filling data
    for(var i=0; i<processNum; i++) {
        // Create a new row and cells for process number, arrival time, burst time, waiting time, and turnaround time
        const row = tbody.insertRow();
        const processCell = row.insertCell(0);
        const arrivalCell = row.insertCell(1);
        const burstCell = row.insertCell(2);
        const wtCell = row.insertCell(3);
        const tatCell = row.insertCell(4);

        // Fill the cells with data
        processCell.textContent = `P${i+1}`;
        arrivalCell.textContent = arrivalTimeArray[i];
        burstCell.textContent = burstTimeArray[i];
        wtCell.textContent = wt[i];
        tatCell.textContent = tat[i];
    }

});



  