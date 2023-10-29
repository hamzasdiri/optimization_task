// Original Bubble Sort
function sortItems(array) {
  let swapped = true;
  do {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// Optimized Sort
function optimizedSort(array) {
  return array.sort((a, b) => a - b);
}

// Measure and compare performance
const arraySize = 10000;
const originalArray = Array.from({ length: arraySize }, () => Math.random());
const optimizedArray = originalArray.slice();

const originalStartTime = performance.now();
sortItems(originalArray);
const originalExecutionTime = performance.now() - originalStartTime;

const optimizedStartTime = performance.now();
optimizedSort(optimizedArray);
const optimizedExecutionTime = performance.now() - optimizedStartTime;

console.log("Performance Comparison:");
console.log("Original Bubble Sort Execution Time (ms):", originalExecutionTime);
console.log("Optimized Sort Execution Time (ms):", optimizedExecutionTime);

// Create a bar chart for the comparison
const performanceData = [
  {
    label: "Original Bubble Sort",
    time: originalExecutionTime,
  },
  {
    label: "Optimized Sort",
    time: optimizedExecutionTime,
  },
];

const labels = performanceData.map((data) => data.label);
const data = performanceData.map((data) => data.time);

const ctx = document.getElementById("performanceChart").getContext("2d");

const performanceChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Execution Time (ms)",
        data: data,
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
