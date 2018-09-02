FROM node

# if left blank app will run with dev settings
# to build production image run:
# $ docker build ./frontend --build-args app_env=production
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /frontend
WORKDIR /frontend
COPY ./ ./

RUN yarn install
RUN yarn global add sass
RUN yarn sass

# if dev settings will use create-react start script for hot code relaoding via docker-compose shared volume
# if production setting will build optimized static files and serve using http-server
CMD yarn start

EXPOSE 3000


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