/// <reference types="npm:@types/node" />
import * as fs from "node:fs/promises";

export type DayArgs<I> = {
  day: number;
  // If not provided, the input will be split by newlines
  inputParser?: (input: string) => I;
  // TODO: Will we need promises for the steps? :thinking:
  step1: (input: I) => number;
  step2?: (input: I) => number;
};

const getInput = (day: number) => {
  return fs.readFile(`./day${day}/input`, { encoding: "utf8" });
};

const defaultParser = (input: string): string[] => {
  const lines = input.split("\n");
  if (lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  return lines;
};

const runStep = <I>(input: I, f: (input: I) => number) => {
  const start = new Date();
  const res = f(input);
  const end = new Date();
  console.log(`Execution took: ${end.getTime() - start.getTime()}ms`);
  console.log("Result:", res);
};

export const dayHelper = async <I>(args: DayArgs<I>) => {
  const { day, step1, step2, inputParser } = args;
  console.log(`Starting day ${day}`);

  const input = await getInput(day);

  const parsed = inputParser ? inputParser(input) : defaultParser(input);

  runStep(parsed as I, step1);

  if (step2) {
    runStep(parsed as I, step2);
  }
};
