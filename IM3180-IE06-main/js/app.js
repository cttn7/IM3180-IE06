// Example function to fetch data and update the chart
function fetchData() {
    const query = document.getElementById('search').value;
    
    if (!query) {
        alert('Please enter a search query.');
        return;
    }

    // Simulate a data fetch with mock data
    const mockData = {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Sentiment Analysis',
            data: [40, 35, 25],  // Replace this with real data
            backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        }]
    };

    renderChart(mockData); 
}

// Function to render chart with data
function renderChart(event) {
    event.preventDefault(); // Prevent the default link behavior
    //mockdata, for testing only
    data = {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Sentiment Analysis',
            data: [40, 35, 25],  // Replace this with real data
            backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        }]
    };
    //console.log("renderChart() function has been executed.");//for testing purpose
    const ctx = document.getElementById('chartContainer').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: false,
            maintainAspectRatio: false, // Set to false to control size more directly
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true, // Set to true to show the title
                    text: 'MockData for testing only', // The text of the title
                    font: {
                        size: 18 // Optional: adjust the font size
                    },
                    padding: {
                        top: 10,  // Optional: adjust padding around the title
                        bottom: 10
                    }
                }
            },
        }
    });
}
