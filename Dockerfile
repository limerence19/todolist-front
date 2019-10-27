FROM nginx:1.13.7
RUN npm install && npm run build 
COPY dist/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
ADD nginx/default.conf /etc/nginx/conf.d/

RUN /bin/bash -c 'todolist init ok!!!'