#!/bin/bash
mysql -u root --password=${MYSQL_PASSWORD} -e "CREATE DATABASE pouletmayo"
mysql -u root --password=${MYSQL_PASSWORD} --default-character-set=utf8 pouletmayo < /mysql-script/dump.sql