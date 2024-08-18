function calculateDate() {
    const days = parseInt(document.getElementById('days').value);
    const direction = document.getElementById('direction').value;
    const startDateInput = document.getElementById('start-date').value;
    const format = document.getElementById('format').value;

    if (isNaN(days)) {
        document.getElementById('result').textContent = 'Please enter a valid number of days.';
        return;
    }

    let startDate;
    if (startDateInput) {
        startDate = new Date(startDateInput);
    } else {
        startDate = new Date();
    }

    if (direction === 'before') {
        startDate.setDate(startDate.getDate() - days);
    } else {
        startDate.setDate(startDate.getDate() + days);
    }

    const formattedDate = formatDate(startDate, format);
    document.getElementById('result').textContent = `The calculated date is ${formattedDate}.`;
}

function formatDate(date, format) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();

    switch (format) {
        case 'MM/DD/YYYY':
            return `${month}/${day}/${year}`;
        case 'DD/MM/YYYY':
            return `${day}/${month}/${year}`;
        case 'YYYY-MM-DD':
            return `${year}-${month}-${day}`;
        default:
            return date.toDateString();
    }
}
