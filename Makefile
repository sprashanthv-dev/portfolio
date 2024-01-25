.PHONY: install
install:
	-cp -n .env.sample .env
	npm ci

.PHONY: start
start:
	npm run dev

.PHONY: lint
lint:
	npm run lint

.PHONY: pretty
pretty:
	npm run pretty
