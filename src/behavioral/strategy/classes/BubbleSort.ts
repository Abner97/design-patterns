import { SortStrategy } from "../interfaces/SortStrategy";

export class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("🔵 Usando Bubble Sort");
    const arr = [...data];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}
