# ---------------------------------
# Variables
# ---------------------------------
BASE_URL = http://localhost:3001

# ---------------------------------
# Docker Commands
# ---------------------------------

build:
	docker-compose -p laboratoireservice -f docker/docker-compose.yml build app

up:
	docker-compose -p laboratoireservice -f docker/docker-compose.yml up

down:
	docker-compose -p laboratoireservice -f docker/docker-compose.yml down

# ---------------------------------
# Monitoring Commands
# ---------------------------------

logs:
	docker logs laboratoireService_app -f

status:
	docker ps

health:
	curl -s $(BASE_URL)/health