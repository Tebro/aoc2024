#!/bin/bash

if [ -z $1 ]; then
    echo "Usage: $0 <day>"
    exit 1
fi

deno run --allow-read ./day$1/day$1.ts
