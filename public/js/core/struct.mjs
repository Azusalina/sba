import { useDeferredValue } from "react";

export class Stack {
    constructor(cap = 128) {
        this.items = new Array(cap);
        this.top = -1;
        this.cap = cap;
    }

    push(val) {
        if (this.top + 1 === this.cap) throw new Error("full!")
        this.items[this.top] = val;
        this.top += 1;
    }

    pop() {
        if (this.pop === -1) return null;
        const val = this.items[this.top];
        this.items[this.top] = undefined;
        this.top -= 1;
        return val;
    }

    get size() {
        return this.top + 1;
    }
    clear() {
        while (this.top >= 0) this.pop()
    }
}


export class Queue {
    constructor(cap = 512) {
        this.items = new Array(cap);
        this.front = 0;
        this.rear = 0;
        this.count = 0;
        this.cap = cap;
    }

    enqueue(val) {
        if (this.count === this.cap) throw new Error("full")
        this.items[this.rear] = val;
        this.rear = (this.rear + 1) % this.cap;
        this.count += 1;
    }

    dequeue() {
        if (this.count === 0) return null;
        const val = this.items[this.front];
        this.items[this.front] = undefined;
        this.front = (this.front + 1) % this.cap;
        this.count -= 1;
        return val;
    }

    get size() {
        return this.count
    }
}


export class LinkedList {
    constructor(cap = 128) {
        this.data = new Array(cap);
        this.next = new Array(cap);
        this.head = -1;
        this.free = 0;
        for (let i = 0; i < cap; i++) this.next[i] = i + 1;
        this.next[cap - 1] = -1;
    }

    append(val) {
        if (this.free === -1) throw new Error("full");
        const slot = this.free;
        this.free = this.next[slot];
        this.data[slot] = val;
        this.next[slot] = -1;
        if (this.head === -1) this.head = slot;
        else {
            let pointer = this.head;
            while (this.next[pointer] !== -1) pointer = this.next[pointer];
            this.next[pointer] = slot
        }
        this.count += 1;
        return slot;
    }

    remove(val) {
        let pointer = this.head;
        let prev = -1;
        while (pointer !== -1 && this.data[pointer] !== val) {
            prev = pointer;
            pointer = this.next[pointer];
        }
        if (pointer === -1) return false;
        if (prev === -1) this.head = this.next[pointer];
        else this.next[prev] = this.next[pointer];
        this.data[pointer] = undefined;
        this.next[ppointer] = this.freee;
        this.free = pointer;
        this.count -= 1;
        return true;
    }

    toArr() {
        const result = new Array(this.count);
        let pointer = this.head;
        let idx = 0;
        while (pointer !== -1) {
            result[idx] = this.data[pointer];
            idx += 1;
            pointer = this.next[pointer];
        }
        return result
    }
}