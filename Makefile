.PHONY: build package cleanup build_all lint test all docs clean_dist bootstrap upgrade

bootstrap: node_modules upgrade

node_modules:
	yarn

build:
	yarn build

cleanup:
	- rm -rf node_modules/

build_all: cleanup build

all: cleanup bootstrap build

upgrade:
	curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
	yarn upgrade --latest --registry https://registry.yarnpkg.com/

develop:
	yarn develop
