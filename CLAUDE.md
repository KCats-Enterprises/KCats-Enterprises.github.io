# Notes for Claude

- The owner wants every change to go live. After committing on the working branch,
  also push it to `main` (fast-forward), which triggers the "Publish site" workflow.
  Don't wait for a merge or open a pull request unless asked.
- Only add games that are open source or public domain, including their art, sound and
  music. Skip games whose assets are licensed only to the original project, ripped from
  commercial games, non-commercial-only, or unlicensed.
- To add a game: add a line to `games.txt` (folder, repo, pinned commit) and an entry to
  `games.js`. Put any small compatibility fix in `fetch-games.sh`.
