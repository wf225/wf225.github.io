#!/bin/bash

i=0
# server_pid=$(pgrep -f DynamoDBLocal_lib)
# if [ "$server_pid" ]; then
#     kill $server_pid
#     ((i++))
# fi

port_pid=$(lsof -i tcp:4000 | awk 'NR == 2 {print $2}')
if [ "$port_pid" ]; then
    kill $port_pid
    ((i++))
fi

# s3_pid=$(lsof -i tcp:8001 | awk 'NR == 2 {print $2}')
# if [ "$s3_pid" ]; then
#     kill $s3_pid
#     ((i++))
# fi

if [ "$i" -eq 0 ]; then
    echo Do not find any running servers.
fi
