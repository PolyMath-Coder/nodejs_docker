# REST API's & Docker

A project that explicitly demystifies the entire concept of Docker.

Below are lists of command scripts useful in setting up a Docker

Docker Command Scripts

- `docker build -t [choicedockerimagename] .` sets up the docker Image. N/B: Don't forget the period at the end of the script.

* `docker images` shows all available docker images

- `docker ps` shows the list of running containers.

* `docker stop [nameofcontainer]` or `docker stop [id]` stops a container.

- `docker ps` shows the list of presently running docker processes on the machine.

* `docker ps -a` shows the list of entire containers.

`docker system prune` removes the entire containers and all images.
`docker system prune -a` forcefully removes all containers and all images.

- `docker start [nameofcontainer]` starts an existing container.
  `docker stop [nameofcontainer]` stops an existing container.

`docker container rm [nameofcontainer]` removes an existing container.

`docker container prune` removes all stop containers.

- `docker run -d -p 4000:4000 --name [choicenameofcontainer] [imagename]` runs a container with the involved port parameters.

For more info, be sure to look up the [Docker Documentation](https://docs.docker.com/language/nodejs/run-containers/) and feel free to reach out for clarification if in doubt.
