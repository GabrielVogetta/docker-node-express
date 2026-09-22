#!/bin/sh

node index.js &
node ./tests/test1.js &
node ./tests/test2.js &

sleep 3

node ./tests/test3.js &
node ./tests/test4.js &

sleep 5

node ./tests/test5.js