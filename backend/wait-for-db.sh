#!/bin/sh
# wait-for-db.sh

set -e

host="$1"
shift
cmd="$@"

until mysql -h "db" -u "root" -p"root" -e 'SELECT 1'; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 10
done

>&2 echo "MySQL is up - executing command"
exec $cmd
