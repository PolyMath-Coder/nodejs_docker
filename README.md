# REST API's & Docker

A project that explicitly demystifies the entire concept of Docker.

Below are lists of command scripts useful in setting up Docker

Docker Command Scripts

- Setting up a docker Image.

  `docker build -t [choicedockerimagename]`

* Show all available docker images
  `docker images`

* Give a Container a name and build it.
  ``
* Shows the list of running containers.
  `docker ps`

* Stops a container.
  `docker stop [nameofcontainer] or its id`

* Shows the list of running docker processes on the machine.
  `docker ps`

* Shows the list of entire containers.
  `docker ps -a`
* Starts a container.
  `docker start [nameofcontainer]`

- Runs a container with the involved port parameters.
  `docker run --name [choicenameofcontainer] -p 4000:4000 -d [imagename]`

  For more info, feel free to look up the [Docker Documentation](https://docs.docker.com/language/nodejs/run-containers/) and feel free to reach out for clarification.
