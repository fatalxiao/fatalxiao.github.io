function sort(arr) {

    if (!arr || arr.length < 1) {
        return arr;
    }

    for (let i = 0, len = arr.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;

}

sort([5, 2, 6, 68, 3, 2, 1]);