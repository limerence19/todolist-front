FROM nginx:1.13.7
COPY build/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
ADD nginx/default.conf /etc/nginx/conf.d/
