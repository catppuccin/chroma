_default:
  @just --list

build:
  whiskers templates/css.tera
  whiskers templates/xml.tera
