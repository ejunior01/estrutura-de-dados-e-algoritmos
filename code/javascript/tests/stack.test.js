import Stack from "../src/stack";

describe("Testando a implementação da class Stack", () => {
  const stack = new Stack();

  test("Deve retornar 0 para o tamanho da stack", () => {
    expect(stack.size()).toBe(0);
  });

  test("Deve inserir um elemento na stack", () => {
    stack.push(10);
    expect(stack.size()).toBe(1);
  });

  test("Deve remover o ultimo elemento na stack e retornar seu valor", () => {
    expect(stack.pop()).toBe(10);
  });

  test("Deve retornar true na verificação se a stack está vazia", () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  test("Deve limpar a stack", () => {
    stack.clear();
    expect(stack.size()).toBe(0);
  });

  test("Deve retornar o ultimo elemento da stack", () => {
    const elements = [10, 15, 50, 8];
    stack.push(elements);

    expect(stack.peek()).toBe(elements[elements.length - 1]);
  });
});
