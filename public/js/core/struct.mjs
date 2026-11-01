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

    get size() { return this.top + 1; }
    clear() { while (this.top >= 0) this.pop() }
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
        this.count-=1;
        return val;
    }
}