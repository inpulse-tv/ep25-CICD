#!/bin/bash
mysql -u root --password=${MYSQL_PASSWORD} -h mysql -e "CREATE DATABASE pouletmayo"
mysql -u root --password=${MYSQL_PASSWORD} -h mysql --default-character-set=utf8 pouletmayo < /mysql-script/dump.sql