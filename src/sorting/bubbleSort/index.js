function sort1(arr) {

    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;

}

function sort2(arr) {

    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;

}

sort1([5, 2, 6, 68, 3, 2, 1]);
sort2([5, 2, 6, 68, 3, 2, 1]);