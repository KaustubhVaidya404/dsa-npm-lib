function InsertionSort(array, order = 1){
    if (!Array.isArray(array)) throw "Given input is not an array";
    if (array.length <= 1) return array;
    if (order == 1) {
      for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
        }
        array[j + 1] = key;
      }
    } else if (order == -1) {
      for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] < key) {
          array[j + 1] = array[j];
          j = j - 1;
        }
        array[j + 1] = key;
      }
    } else {
      throw "Invalid order value. Use 1 for ascending and -1 for descending.";
    }
    
    return array
}

module.exports = InsertionSort