// Fibonacci Sequence functions
function promptForFibonacci() {
    const number = prompt("Enter the desired Fibonacci length:");
    if(number !== null) {
        const result = fibonacci(parseInt(number-1));
        alert(`The Fibonacci sequence up to position ${number} is ${result.join(', ')}`);
    }
}

function fibonacci(number) {
    if(number <= 1) {
        return [0, 1];
    } else {
        let sequence = fibonacci(number - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
}

// Mergesort functions
function promptForMergeSort() {
    const arrayString = prompt("Enter a list of numbers separated by commas:");
    if (arrayString !== null) {
        const array = arrayString.split(',').map(Number);
        const sortedArray = mergeSort(array);
        alert(`The sorted array is: ${sortedArray.join(', ')}`);
    }
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}