#!/usr/bin/env bash
# Fetches every game listed in games.txt into games/<folder>/.
# Runs on GitHub's build server when the site is published.
set -euo pipefail

grep -v '^\s*#' games.txt | while read -r folder repo sha; do
  [ -z "$folder" ] && continue
  echo "Fetching $repo -> games/$folder"
  dir="games/$folder"
  rm -rf "$dir"
  mkdir -p "$dir"
  git -C "$dir" init -q
  git -C "$dir" fetch -q --depth 1 "https://github.com/$repo.git" "$sha"
  git -C "$dir" checkout -q FETCH_HEAD
  # Keep the game and its licence file, drop repo plumbing.
  rm -rf "$dir/.git" "$dir/.github" "$dir/CNAME"
  [ -f "$dir/index.html" ] || { echo "No index.html in $repo"; exit 1; }
done

# Small fixes so the games run on this site.

# We Become What We Behold ships every translation but never selects one.
echo 'var textStrings = textStrings_EN;' >> games/we-become-what-we-behold/js/textStrings.js

# Hextris asks for its font over http, which browsers block on an https site.
sed -i 's#http://fonts.googleapis.com#https://fonts.googleapis.com#' games/hextris/index.html
