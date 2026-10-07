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
  curl -fsSL "https://codeload.github.com/$repo/tar.gz/$sha" | tar -xz --strip-components=1 -C "$dir"
  # Keep the game and its licence file, drop repo plumbing.
  rm -rf "$dir/.github" "$dir/CNAME"
  [ -n "$(find "$dir" -maxdepth 3 -name '*.html' -print -quit)" ] || { echo "No page found in $repo"; exit 1; }
done

# Small fixes so the games run on this site.

# We Become What We Behold ships every translation but never selects one.
echo 'var textStrings = textStrings_EN;' >> games/we-become-what-we-behold/js/textStrings.js

# Hextris asks for its font over http, which browsers block on an https site.
sed -i 's#http://fonts.googleapis.com#https://fonts.googleapis.com#' games/hextris/index.html

# Astray loads its textures from the site root instead of its own folder.
sed -i "s#loadTexture('/#loadTexture('#" games/astray/index.html

# Emoji Minesweeper defaults to emoji images from a server that has shut down.
sed -i 's#id="twemoji" checked#id="twemoji"#; s#id="emoji">#id="emoji" checked>#' games/emoji-minesweeper/index.html

# Space Invaders loads its sound from the site root instead of its own folder.
sed -i 's#src="/space-invaders/shoot.mp3"#src="shoot.mp3"#' games/retro-games/space-invaders/index.html

# Sandspiel's build expects to sit at the top of its own site; point its paths at its folder.
sed -i 's#\(src\|href\)="/#\1="./#g' games/sandspiel/index.html
sed -i 's#\.p="/"#.p=""#' games/sandspiel/main.*.js
