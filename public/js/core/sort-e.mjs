
import { copyArray, selectionSort, sorters } from './algo.mjs';

const svg = 'http://www.w3.org/2000/svg';
const cellWidth = 76;
const cellPitch = 88;
const lft = 10;

const names = { bubble: 'Bubble sort', selection: 'Selection sort', insertion: 'Insertion sort', merge: 'Merge sort', quick: 'Quick sort' };


//
function hasIdx(a, val) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === val) return true;
    }
    return false;
}


function cpPointers(input = {}) {
    const res = {};
    const names = Object.keys(input);
    for (let i = 0; i < names.length; i++) {
        res[names[i]] = input[names[i]];
    }
    return res;
}