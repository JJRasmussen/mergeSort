let array1 = [3, 2, 1, 13, 8, 5, 0, 1, 3];
let array2 = [105, 79, 100, 110];

const mergeSort = (array) => {
    if (array.length === 1){
        return array
    }

    for (let i = 0; i < 3; i++) {
        //split array in two
        if (i === 0) {
            let middle = Math.floor(array.length/2)
            array = [[0, middle],[middle, array.length]].map(indices => array.slice(...indices));
        }
        
        //sort left and right 
        if (i === 1) {
            for (let j = 0; j < 2; j++) {
                array[j] = mergeSort(array[j])}
            }

        //merge the two halves
        if (i === 2) {
            sortedArray = [];
            arrayLength = array[0].length + array[1].length;

            for (let k = 0; k < arrayLength; k++) {    
                //select smallest value and move the leftmost value to the sorted array   
                if (array[1][0] === undefined || array[0][0] <= array[1][0]){
                    sortedArray.push(array[0][0])
                    array[0].shift();
                    continue;
                    }
                else if (array[0][0] === undefined || array[0][0] > array[1][0]){
                    sortedArray.push(array[1][0])
                    array[1].shift();
                    }
                }
            }
        }
        return sortedArray
};

console.log("should say: [0, 1, 1, 2, 3, 3, 5, 8, 13]")
console.log(mergeSort(array1));

console.log("should say: [79, 100, 105, 110]")
console.log(mergeSort(array2));
