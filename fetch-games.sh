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
