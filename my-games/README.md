# My games

Put your own games here, one folder per game:

```
my-games/
  my-cool-game/
    index.html    <- the page that starts the game
    game.js
    sprites.png
```

Then add an entry for it to the `GAMES` list in `games.js`:

```js
{ id: 'my-cool-game', name: 'My Cool Game', cat: 'Arcade', icon: '🎮', color: '#1e3a8a,#60a5fa',
  path: 'my-games/my-cool-game/index.html', author: 'Your Name' },
```

- `id` - short name with no spaces; it goes in the game's web address.
- `cat` - the category it shows under on the home page.
- `icon` - any emoji for the card.
- `color` - the card's two background colours.
- `license` and `source` are optional for your own games.

The game must be plain HTML, CSS and JavaScript that runs by opening `index.html`.
For Scratch projects, export with the TurboWarp Packager and upload the HTML file it makes.

Don't put games in `games/`: that folder is rebuilt from `games.txt` on every publish.
