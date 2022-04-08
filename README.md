# REST API's & Docker

A project that explicitly demystifies the entire concept of Docker.

Below are lists of command scripts useful in setting up Docker

Docker Command Scripts

- Setting up a docker Image.

  `docker build -t [choicedockerimagename]`

* `docker images` shows all available docker images

- Shows the list of running containers.
  `docker ps`

- Stops a container.
  `docker stop [nameofcontainer]` or `docker stop [id]`

- `docker ps` shows the list of presently running docker processes on the machine.

* `docker ps -a` shows the list of entire containers.

* `docker start [nameofcontainer]` starts an existing container.

- Runs a container with the involved port parameters.
  `docker run --name [choicenameofcontainer] -p 4000:4000 -d [imagename]`

  For more info, be sure to look up the [Docker Documentation](https://docs.docker.com/language/nodejs/run-containers/) and feel free to reach out for clarification if in doubt.
