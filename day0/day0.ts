import { dayHelper } from "../lib.ts";

const step1 = (input: string[]): number => {
  return input.length;
};

const step2 = (input: string[]): number =>
  input.map((line) => line.length)
    .map((length) => length * 2)
    .reduce((acc, curr) => acc + curr, 0);

dayHelper({
  day: 0,
  step1,
  step2,
});
