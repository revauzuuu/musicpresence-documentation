.PHONY: all install freeze serve

ifeq ($(OS),Windows_NT)
    VENV_BIN := .venv/Scripts
    PYTHON := python
    RM := rmdir /s /q
else
    VENV_BIN := .venv/bin
    PYTHON := python3
    RM := rm -rf
endif

VENV_PIP := $(VENV_BIN)/pip
VENV_PYTHON := $(VENV_BIN)/python
VENV_ZENSICAL := $(VENV_BIN)/zensical

all:

.venv:
	-$(RM) .venv
	$(PYTHON) -m venv .venv
	$(VENV_PIP) install --upgrade pip

install: .venv
	$(VENV_PIP) install -r requirements.txt

freeze: .venv
	$(VENV_PIP) freeze > requirements.txt

# Removing the cache so environment variables defined in .env are updated.
# See ... (TODO)
serve: .venv
	-$(RM) .cache
	$(VENV_ZENSICAL) serve
