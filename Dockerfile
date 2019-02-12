FROM alpine:3.8

ENTRYPOINT ["nginx", "-c",  "/nginx.conf"]

RUN apk add --no-cache nginx
ADD nginx.conf /

COPY website /app