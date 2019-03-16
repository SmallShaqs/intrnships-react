FROM nginx:alpine
# ENV API_HOST intrnships-api
# WORKDIR /usr/src/app
# COPY . .
# RUN chmod +x entrypoint.sh
# COPY nginx.conf /etc/nginx/conf.d/nginx.template
# COPY build /usr/share/nginx/html/
# ENTRYPOINT [ "./entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
