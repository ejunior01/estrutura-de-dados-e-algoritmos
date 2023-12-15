class Stack<T> {
  items: Array<T>;

  constructor() {
    this.items = [];
  }

  public push(item: T | Array<T>): void {
    if (item instanceof Array) {
      this.items.push(...item);
    } else {
      this.items.push(item);
    }
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T {
    return this.items[this.items.length - 1];
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public clear(): void {
    this.items = [];
  }

  public size(): number {
    return this.items.length;
  }
}


export default Stack;
