FROM openjdk:13-alpine

RUN apk add nginx

# Add S6
ENV S6_BEHAVIOUR_IF_STAGE2_FAILS=1
ENV S6_FIX_ATTRS_HIDDEN=1
ADD https://github.com/just-containers/s6-overlay/releases/download/v1.21.7.0/s6-overlay-amd64.tar.gz /tmp/
RUN gunzip -c /tmp/s6-overlay-amd64.tar.gz | tar -xf - -C /
COPY ./rootfs/ /

EXPOSE $PORT
EXPOSE 8080

RUN mkdir /app
COPY . /app
WORKDIR /app
# CMD java -jar /app/karate-0.9.1.jar -m /app/hotels-v1-mock.feature -p $PORT
#start 6s
ENTRYPOINT ["/init"]
