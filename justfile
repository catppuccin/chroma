_default:
  @just --list

flavors := "latte frappe macchiato mocha"

styles:
  #!/usr/bin/env bash
  rm -rf styles/
  mkdir styles/
  for flavor in {{flavors}}; do
    uv run --with pystache chroma/_tools/style.py "catppuccin-$flavor" "catppuccin.extras.pygments.${flavor^}Style" | sed 's/Register//g' > "styles/$flavor.go";
  done

build:
  go run .
