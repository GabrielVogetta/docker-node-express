#!/bin/sh

node ./tests/test2.js &
INDEX_PID=$!

sleep 3

node ./tests/test3.js
TEST_EXIT_CODE=$?

wait $INDEX_PID