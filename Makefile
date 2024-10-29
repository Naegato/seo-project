.phony: up cmd deploy

up:
	docker compose up -d

cmd:
	docker compose exec node bash

deploy:
	docker compose -f docker-compose.override.yaml up --remove-orphans -d