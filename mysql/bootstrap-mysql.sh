#!/bin/bash
docker cp dump.sql pouletmayo-db-1:dump.sql
docker exec -it --env MYSQL_PWD=${MYSQL_ROOT_PASSWORD} pouletmayo-db-1 bash -c "mysql -u root  -e \"CREATE DATABASE pouletmayo\""
docker exec -it --env MYSQL_PWD=${MYSQL_ROOT_PASSWORD} pouletmayo-db-1 bash -c "mysql -u root  --default-character-set=utf8 pouletmayo < dump.sql"