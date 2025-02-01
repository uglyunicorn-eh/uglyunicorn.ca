.PHONY: build package cleanup build_all lint test all docs clean_dist bootstrap

bootstrap: node_modules

node_modules:
	npm install --legacy-peer-deps

build:
	npm run build

cleanup:
	- rm -rf node_modules/

build_all: cleanup build

all: cleanup bootstrap build

develop:
	npm run develop
