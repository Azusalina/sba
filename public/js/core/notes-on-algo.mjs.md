

`copyArray`

copy an array into a new array;
maybe its used in change in array names


`mergearray`
combine two array `a1` and `a2` into one, no sort or data cleaning is performed

*well this's equilavent to 
```javascript
return [...a1,...a2]
```

`minMax`

elementary util function used to find min/max value of a array
designate the value being compared is allowed though   `valueOf=val=>val`


`linearSearch`

go though all elements in the array `a` until the element is found
if element doesnt exist then return -1


`binarySearch`

use a middle index to deduce the position of the target `val` 
if val at rhs of array[middle](i.e. val > array[middle]) then increase min boundary by `left=middle+1` , +1 is to skip the middle element currently being used
if val at lhs of array[middle](i.e. val < array[middle]) then decrease max boundary by `right=middle-1` , 
if not find then return -1


`swap`

i dunno why im writing this basic things but anyways
in c-style, swap two elements' position inside an array

`effectStep`
call function `effect` with given parameters

---

well the sort algorithms were diffrent from text-book examples, mainly due to a demand for animation effect generation and diffrent value attributes comparsion


`bubbleSort`

for `bubbleSort(a, compare, trace = () => { }, effect = null) `

a is the array being sorted
compare is a param that represent an action
trace() track function (prevent errors)
effect generate animations

`bubbleSort`

`copyArray(a)` copies the array so the original is never mutated; the sorted copy is returned.
`end` is the outer loop boundary of the unsorted region, shrinking from `a.length - 1` down to `1` as the largest elements bubble to the back.
`flag` records whether any swap happened in a pass; if none did, the array is sorted and the loop breaks early.
`i` is the inner loop index comparing each adjacent pair `data[i]` and `data[i + 1]` within `[0, end]`.
`pointers` bundles `{ i, j: i + 1, end }` for the animation layer.
`effectStep(effect, 'compare', ...)` emits a `compare` event before evaluating, with `indices: [i, i + 1]` and `details` carrying `pointers`, `range: [0, end]`, and `values: [data[i], data[i + 1]]`.
`compare(data[i], data[i + 1]) > 0` means the pair is out of order and needs swapping.
`swap(data, i, i + 1)` exchanges the pair in place on the working copy.
`effectStep(effect, 'swap', ...)` emits a `swap` event after exchanging, with `indices: [i, i + 1]` and `details` carrying `pointers` and `range` (no `values`).
`trace('pass', data, end)` reports each completed pass to the tracker.
`effectStep(effect, 'pass', ...)` emits a `pass` event with `indices: [end]` and `details` carrying `pointers: { end }` and `range: [0, end]`, marking position `end` as finalized.
`if (!flag) break` gives **O(n)** best case on already-sorted input.
`return data` returns the sorted copy, leaving the original untouched.

