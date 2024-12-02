import { dayHelper } from "../lib.ts";
import * as R from "remeda";

const step1 = (input: string[]): number => {
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < input.length; i++) {
    const [l, r] = input[i].split("   ");
    left.push(parseInt(l));
    right.push(parseInt(r));
  }

  left.sort();
  right.sort();

  const pairs = R.zip(left, right);

  return pairs.map(([l, r]) => Math.abs(l - r)).reduce(
    (acc, curr) => acc + curr,
    0,
  );
};

const step2 = (input: string[]): number => {
  const left: string[] = [];
  const right: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const [l, r] = input[i].split("   ");
    left.push(l);
    right.push(r);
  }

  const x = left.filter((l) => right.includes(l))
    .map((l) => {
      let numMatches = 0;
      for (let i = 0; i < right.length; i++) {
        if (right[i] === l) {
          numMatches += 1;
        }
      }
      return [parseInt(l), numMatches];
    });

  return x.reduce((acc, [k, v]) => acc + (k * v), 0);
};

dayHelper({
  day: 1,
  step1,
  step2,
});
