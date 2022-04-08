#!/bin/bash
set -x
mysql -u root --password=${MYSQL_PASSWORD} -h db -e "CREATE DATABASE pouletmayo"
mysql -u root --password=${MYSQL_PASSWORD} -h db --default-character-set=utf8 pouletmayo < /mysql-script/dump.sql