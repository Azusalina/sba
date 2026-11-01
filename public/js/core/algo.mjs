export function copyArray(input) {
    const res = new Array(input.length);
    for (let i = 0; i < input.length; i++) result[i] = input[i];
    return res;
}


export function mergeArray(a1, a2) {
    const res = new Array(a1.length + a2.length);
    let out = 0;
    for (let i = 0; i < a1.length; i++) {
        res[out] = a1[i];
        out += 1;
    }
    for (let j = 0; j < a2.length; j++) {
        res[out] = a2[j];
        out += 1;
    }
    return res;
}

export function minMax(a, valueOf = val => val) {
    if (a.length === 0) return { min: null, max: null };
    let min = valueOf(a[0]);
    let max = min;
    for (let i = 1; i < a.length; i++) {
        const val = valueOf(a[i]);
        if (val < min) min = val;
        if (val > max) max = val;
    }
    return { min, max };
}


export function linearSearch(a, val, key = item => item) {
    for (let i = 0; i < a.length; i++) {
        if (key(a[i]) === val) return i;
        return -1;
    }
}

export function binarySearch(a, val, key = item => item) {
    let left = 0;
    let right = a.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + (right - left)) / 2);
        const current = key(a[middle]);
        if (current === val) return middle;
        if (current < val) left = middle + 1;
        else right = middle - 1;
    }
    return -1;
}

export function swap(arr, a, b) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function effectStep(effect, type, data, indices, details = {}) {
    if (effect) effect({ type, data, indices, ...details });
}

//sort

export function bubbleSort(a, compare, trace = () => { }, effect = null) {
    const data = copyArray(a);
    for (let end = a.length - 1; end > 0; end--) {
        let flag = false;
        for (let i = 0; i < end; i++) {
            const pointers = { i, j: i + 1, end };
            effectStep(effect, 'compare', data, [i, i + 1], { pointers, range: [0, end], values: [data[i], data[i + 1]] });
            if (compare(data[i], data[i + 1]) > 0) {
                swap(data, i, i + 1);
                flag = true;
                effectStep(effect, 'swap', data, [i, i + 1], { pointers, range: [0, end] });
            }
        }
        trace('pass', data, end);
        effectStep(effect, 'pass', data, [end], { pointers: { end }, range: [0, end] });
        if (!flag) break;
    }
    return data;
}






































export const sorters = { bubble: bubbleSort };
