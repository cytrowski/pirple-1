# Homework Assignment #1

## The Assignment

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 

2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

## How to use it?

To run the application with custom configuration call:

```bash
PORT=9000 HELLO_STRING="Good morning" node index.js
``` 
or
```bash
PORT=9000 HELLO_STRING="Good morning" node .
```

To check if it's working properly:

```bash
curl -X POST http://localhost:9000/hello -v
```

You should see an output like this:

```
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 9000 (#0)
> POST /hello HTTP/1.1
> Host: localhost:9000
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 200 OK
< ContentType: application/json
< Date: Fri, 30 Nov 2018 00:25:37 GMT
< Connection: keep-alive
< Content-Length: 26
<
* Connection #0 to host localhost left intact
{"message":"Good morning"}
```

If you do not pass env variables then port number `3000` and `"Hello World"` string will be used by default.