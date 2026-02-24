import { Sorter } from "../classes/Sorter";
import { BubbleSort } from "../classes/BubbleSort";
import { QuickSort } from "../classes/QuickSort";
import { MergeSort } from "../classes/MergeSort";

console.log("=== EJEMPLO STRATEGY: Sorting Algorithms ===\n");

const data = [64, 34, 25, 12, 22, 11, 90];
console.log("Datos originales:", data);
console.log();

const sorter = new Sorter(new BubbleSort());
console.log("Resultado:", sorter.sort(data));
console.log();

sorter.setStrategy(new QuickSort());
console.log("Resultado:", sorter.sort(data));
console.log();

sorter.setStrategy(new MergeSort());
console.log("Resultado:", sorter.sort(data));
