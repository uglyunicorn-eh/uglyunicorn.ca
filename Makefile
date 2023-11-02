ROOT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
SRC=src
PROFILE=prostir

AWS_CODEARTIFACTS_DOMAIN_OWNER ?= 891906561120
AWS_CODEARTIFACTS_DOMAIN ?= prostir
AWS_CODEARTIFACTS_REPOSITORY ?= prostir.io
AWS_CODEARTIFACTS_AUTH_TOKEN=$(shell aws codeartifact get-authorization-token --domain $(AWS_CODEARTIFACTS_DOMAIN) --domain-owner $(AWS_CODEARTIFACTS_DOMAIN_OWNER) --query authorizationToken --output text --profile $(PROFILE))

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
	AWS_PROFILE=$(PROFILE) yarn upgrade --latest --registry https://registry.yarnpkg.com/
