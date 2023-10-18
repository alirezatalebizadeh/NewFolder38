const initChart = (lables, data, initElement) => {
    const config = {
        type: 'line',
        data: {
            lables: [...lables],
            datasets: [{
                backgroundColor: '#fffcef',
                borderColor: '#fdc816',
                data: [...data],
                tension: 0.45,
                fill: true,
                borderWidth: 4,
                pointRadius: 0
            }]
        },
        Options: {
            Plugins: false,

        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            },
        }
    }


    return new Chart(initElement, config)
}

export default initChart