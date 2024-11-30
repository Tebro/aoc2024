import { dayHelper } from "../lib.ts";

const step1 = (input: string[]): number => {
  return input.length;
};

const step2 = (input: string[]): number =>
  input.reduce((acc, line) => {
    return acc + line.length;
  }, 0);

dayHelper({
  day: 0,
  step1,
  step2,
});
