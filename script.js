document.getElementById('submit-btn').addEventListener('click', function() {
    // taking process number
    const processNumTextOriginal = document.getElementById('process-num');
    const processNumText = processNumTextOriginal.value.replace(/[^\d.]/g, '');

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

    // clearing input field
    arrivalTimeText.value = " ";
    burstTimeText.value = " ";
});
