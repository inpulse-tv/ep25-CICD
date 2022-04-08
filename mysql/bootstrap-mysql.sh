#!/bin/bash
mysql -h localhost -e "CREATE DATABASE pouletmayo"
mysql -h localhost --default-character-set=utf8 pouletmayo < dump.sql