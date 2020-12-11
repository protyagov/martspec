#!/bin/bash

find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,__API_BASE_URL__,"'$__API_BASE_URL__'",g' {} \;
find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,__MAINTENANCE_MODE__,'"$__MAINTENANCE_MODE__"',g' {} \;
nginx -g "daemon off;"