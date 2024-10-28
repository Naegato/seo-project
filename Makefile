.phony: up cmd

up:
	docker compose up -d

cmd:
	docker compose exec node bash