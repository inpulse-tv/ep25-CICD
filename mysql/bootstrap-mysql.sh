#!/bin/bash
mysql -h 127.0.0.1 -e "CREATE DATABASE pouletmayo"
mysql -h 127.0.0.1 --default-character-set=utf8 pouletmayo < dump.sql