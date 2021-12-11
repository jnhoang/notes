# create postgresql on local host to connect to
* [playlist](https://www.youtube.com/watch?v=aHbE3pTyG-Q&ab_channel=Amigoscode)

##  docker postgres container

* pull the image down
  * `docker pull postgres:alpine`

* create the container
  * `docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 -v /DESIRED_PATH/:/var/lib/postgresql/data postgres:alpine`

* connect to the container
  * `docker exec -it postgres-0 bash`
  * `-it == interactive mode`

* connect to container from terminal

  * `psql -h localhost -p 5432 -U postgres`


* mapping a volume to your local machine so container's ephemeral data is no longer lost on restart
  * create the storage location on your local machine instead
  * `docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 -v /DESIRED_PATH/:/var/lib/postgresql/data postgres:alpine`
  * needs to map to `/var/lib/postgresql/data` on the container
```
-v /_YOUR_DESIRED_PATH:/var/lib/postgresql/data
-v <WHERE_YOU_WANT_TO_STORE_VOLUME>:<WHERE_TO_MAP_IT_ON_CONTAINER>
```


* custom scripts to run in new container initialization
  * add any desired script files to the `/docker-entrypoint-initdb.d/` in the docker build step.
    * these will be added to the container's init script
  * see the dockerfile in this path
