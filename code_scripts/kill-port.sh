#!/bin/bash
PORT_NUMBER=3101
lsof -i tcp:${PORT_NUMBER} | awk 'NR!=1 {print $2}' | xargs kill 
