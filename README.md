# node-mvc-skeleton & Docker setup
NodeJS MVC base skeleton for APP's or API's with Express, MongoDB, EJS


## For getting backup from the db run

`docker exec -it <mongo_container_id> sh`
`mongodump`

all dumps will be available in the backup folder. 



## Docker for development and production

On `local-machine/production-server` install of `NodeJs`, `Docker`, `DockerCompose`, `Git` is required

Then we need clone the repository with `git clone` command

### Important 

On the same start in the repository navigate to app folder and run:
`npm install --include=dev`

Then navigate to root of the project to Dockerfile and change:

- For `development` 
    - `CMD ["npm", "run", "serve"]`

- For `production` 
    - `CMD ["npm", "run", "serve:prod"]`

After successful change navigate on root of the repository and run

`docker-compose -f docker/docker-compose.yml up -d --build`

OR 

`docker-compose -f docker/docker-compose.yml up --build`

To enable logging in same terminal window.

Now, you are done here.

## Useful commands

- To shutdown the setup and clean containers --> `docker-compose -f docker/docker-compose.yml down`
- To display last logs form all containers --> `docker-compose -f docker/docker-compose.yml logs`