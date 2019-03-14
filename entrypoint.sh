#!/bin/bash
# Envsubst is used to substitue environment variables in nginx.conf because nginx does not support that out of the box.
# Source: https://docs.docker.com/samples/library/nginx/ 
# After envsubsts, are defined only those enivronment variables, which we would like to substitute.
# If more than one, syntax looks like this '${VAR1} ${VAR2}'
envsubst \
'${API_HOST}' \
< /etc/nginx/conf.d/nginx.template \
> /etc/nginx/conf.d/default.conf \
&& exec "$@"
# exec "$@" is used to allow other CMD commands after. Source: https://docs.docker.com/engine/reference/builder/#exec-form-entrypoint-exampl
