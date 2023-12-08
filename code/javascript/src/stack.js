class Stack {
  constructor() {
    this.items = [];
  }

  push(elements) {
    if (elements instanceof Array) {
      this.items.push(...elements);
    } else {
      this.items.push(elements);
    }
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

export default Stack;
