# moviesjs
A javascript app that fetches movie and series details from [omdb](http://omdbapi.com).

### Running the project with Docker:
```sh
$ docker build -t moviesjs:latest .
$ docker run -d -p 8000:8080 --name moviesjs moviesjs:latest
```
