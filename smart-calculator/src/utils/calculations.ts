export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
export const multiply = (a: number, b: number): number => a * b;
export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

export type Operation = "+" | "-" | "×" | "÷";

export const calculate = (a: number, b: number, operation: Operation): number => {
  switch (operation) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "×": return multiply(a, b);
    case "÷": return divide(a, b);
    default: throw new Error("Invalid operation");
  }
};