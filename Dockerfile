FROM nginx
ENV API_HOST intrnships-api
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh
COPY nginx.conf /etc/nginx/conf.d/nginx.template
COPY build /usr/share/nginx/html/
ENTRYPOINT [ "./entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80