.PHONY: all install freeze clean

ifeq ($(OS),Windows_NT)
    VENV_BIN := .venv/Scripts
    PYTHON := python
else
    VENV_BIN := .venv/bin
    PYTHON := python3
endif

PIP := $(VENV_BIN)/pip

all:

.venv:
	-$(RM) .venv
	$(PYTHON) -m venv .venv
	$(PIP) install --upgrade pip

install: .venv
	$(PIP) install -r requirements.txt

freeze: .venv
	$(PIP) freeze > requirements.txt
