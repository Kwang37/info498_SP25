// Chart 1: Screen Time by Age
const screenCtx = document.getElementById('screenChart').getContext('2d');
new Chart(screenCtx, {
  type: 'bar',
  data: {
    labels: ['Age 10-11', 'Age 12-13'],
    datasets: [{
      label: 'Avg Daily Screen Time (minutes)',
      data: [164, 196],
      backgroundColor: ['#66bb6a', '#43a047']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Daily Screen Time (Age 10–13)'
      }
    }
  }
});

// Chart 2: Extracurricular Participation by Income
const incomeCtx = document.getElementById('incomeChart').getContext('2d');
new Chart(incomeCtx, {
  type: 'bar',
  data: {
    labels: ['Sports', 'Music/Dance/Art'],
    datasets: [
      {
        label: 'High Income ($75k+)',
        data: [84, 62],
        backgroundColor: '#42a5f5'
      },
      {
        label: 'Low Income (<$30k)',
        data: [59, 41],
        backgroundColor: '#ef5350'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Activity Participation by Income Group'
      }
    }
  }
});
