.PHONY: up cmd install logs dev

CONTAINER_NAME:=node
NPM_INSTALL_ARGS:=--force

-include .env

up: install
	docker compose up -d --remove-orphans
	make logs

cmd:
	docker compose exec -it $(CONTAINER_NAME) /bin/bash

install:
	docker compose run --rm $(CONTAINER_NAME) npm install $(NPM_INSTALL_ARGS)

logs:
	docker compose logs -f