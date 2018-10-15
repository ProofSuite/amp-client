#build environment
FROM node as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY public/ /usr/src/app/public/
COPY src/ /usr/src/app/src/

RUN yarn install --silent
RUN yarn global add sass
RUN yarn sass
RUN yarn build


#production environment
FROM nginx:1.13.9-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html


COPY nginx.conf etc/nginx/nginx.conf
COPY config-template.js /config-template.js
COPY replace.sh /replace.sh

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# FROM node AS build

# WORKDIR /app
# COPY . .

# FROM nginx:1.15.2-alpine

# COPY - from=build /app/build /var/www
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


# if left blank app will run with dev settings
# to build production image run:
# $ docker build ./frontend --build-args app_env=production

# ENV NPM_CONFIG_LOGLEVEL warn



# FROM node
# COPY ./ ./

# RUN yarn install
# RUN yarn global add sass
# RUN yarn sass

# RUN yarn build
# EXPOSE 8080

# CMD yarn server


# USEFUL COMMANDS TO BE REINCLUDED LATER

# ARG app_env
# ENV NODE_ENV $app_env

# CMD if [ ${NODE_ENV} = production ]; \
# 	then \
# 	npm install -g http-server && \
# 	npm run build && \
# 	cd build && \
# 	hs -p 3000; \
# 	else \
# 	npm run start; \
# 	fi