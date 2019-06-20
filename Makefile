# Copyright 2018 The Prometheus Authors
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Needs to be defined before including Makefile.common to auto-generate targets
DOCKER_ARCHS ?= amd64 armv7 arm64

include Makefile.common

DOCKER_IMAGE_NAME       ?= prometheus

.PHONY: react-app
react-app:
	@echo ">> building React app"
	cd $(PREFIX)/web/ui/react-app && npm install
	cd $(PREFIX)/web/ui/react-app && PUBLIC_URL=. npm run build
	rm -rf $(PREFIX)/web/ui/static/graph-new
	mv $(PREFIX)/web/ui/react-app/build $(PREFIX)/web/ui/static/graph-new
	# Prevent bad redirect due to Go HTTP router treating index.html specially.
	mv $(PREFIX)/web/ui/static/graph-new/index.html $(PREFIX)/web/ui/static/graph-new/app.html

.PHONY: assets
assets: react-app
	@echo ">> writing assets"
	cd $(PREFIX)/web/ui && GO111MODULE=$(GO111MODULE) $(GO) generate -x -v $(GOOPTS)
	@$(GOFMT) -w ./web/ui

.PHONY: check_assets
check_assets: assets
	@echo ">> checking that assets are up-to-date"
	@if ! (cd $(PREFIX)/web/ui && git diff --exit-code); then \
		echo "Run 'make assets' and commit the changes to fix the error."; \
		exit 1; \
	fi
