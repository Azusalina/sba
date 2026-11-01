this is kind of plaintext ellaboration regarding the code in `./struct.mjs`

what i want is to show that i understand these structures

## stack:
init as a `new Array` with max.capacity cap
top point to the last element added into the stack
valid index from 0 to cap-1
### push(val)
if top+1=capacity(which=overflow) then throw error
else then append new val at `stack[top]`
top+=1(iterate its value)

### pop(val)
if top===-1(empty stack) then do nothing
else val=lastest elements added to the stack
remove val by set it to undefined
top-=1(iterate its value)

### size()
get length of the stack by find val of `top+1`

### clear()
clear the array and restore it to init-empty status

---

## queue
init as a Array
front-rear(end) of the queue

### enqueue
if element exist inside the queue=max cap then throw error
else enqueue the value;
mod the pointer to make a loop that prevent from index infinite add ->overflow
count +=1

### dequeue
if queue is empty then do nothing
get the first element
set it to undefined
count-=1
return the deleted element

### size()
get val of `this.count`
