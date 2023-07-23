.PHONY: up

# make up app=bedbanks //app would contain name for docker container
up:
	docker-compose up $(app)

ssh:
	docker run -it -p "8080:8080" -v "$(PWD):/app" openjdk:13-alpine sh

test:
	docker-compose -f docker-compose.yml run --rm contract_test
