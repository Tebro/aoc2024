import { dayHelper } from "../lib.ts";

const parseLine = (line: string): number[] =>
  line.split(" ").map((x) => parseInt(x));

const isIncreasing = (arr: number[]): boolean => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

const isDecreasing = (arr: number[]): boolean => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false;
    }
  }
  return true;
};

const isWithinStepSize = (
  arr: number[],
  minStepSize: number,
  maxStepSize: number,
): boolean => {
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff > maxStepSize || diff < minStepSize) {
      return false;
    }
  }
  return true;
};

const step1 = (input: string[]): number => {
  const maxStepSize = 3;

  const x = input
    .map(parseLine)
    .filter((l) => isIncreasing(l) || isDecreasing(l))
    .filter((l) => isWithinStepSize(l, 1, maxStepSize));

  return x.length;
};

const dropEach = (arr: number[]): number[][] => {
  return arr.map((_, i) => arr.filter((_, j) => i !== j));
};

const step2 = (input: string[]): number => {
  const maxStepSize = 3;

  const parsed = input.map(parseLine);

  const instantSafe = parsed
    .filter((l) => isIncreasing(l) || isDecreasing(l))
    .filter((l) => isWithinStepSize(l, 1, maxStepSize));

  const rest = parsed.filter((l) => !instantSafe.includes(l));
  const restDropped = rest.map(dropEach);
  const x = restDropped.filter((l) =>
    l.find((v) =>
      (isIncreasing(v) || isDecreasing(v)) &&
      isWithinStepSize(v, 1, maxStepSize)
    )
  );

  return instantSafe.length + x.length;
};

dayHelper({
  day: 2,
  step1,
  step2,
});
