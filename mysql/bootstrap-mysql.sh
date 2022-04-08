#!/bin/bash
mysql -u root -h 127.0.0.1 -e "CREATE DATABASE pouletmayo"
mysql -u root -h 127.0.0.1 --default-character-set=utf8 pouletmayo < dump.sql