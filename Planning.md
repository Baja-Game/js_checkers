# Checkers

## UI
* Setup Page
  * Sign in
  * Buttons for start / resume / options, etc.
* Game Page
  * Board w various color themes and active square filters
  * Men w various color themes (and/or images?)
  * Buttons for options / quit / concede / restart / pause, etc.
  * Timer?
* Modals?
  * Options
  * Confirm for quit / restart
* Sounds?

## GAME (RE)INITIALIZATION
* Fetch all games that player is playing
* Check for any games that are active (awaiting player move)
* Populate list of active games (oldest at top)
* Populate list of games waiting on other player
* Player chooses from existimg games or new game
* Render board
* Turn on click listener for board squares (active player only)
* Get current board state and render men onto board

## GAME PLAY
* Fetch player data (active, prisonCount)
* Listen for square click; if player active and player's man on square, then make square active.
* Listen for second square click; if isValidMove(), then move() -> takePrisoner() -> isWin()
* Add animations (init, move, king, win)?

## WIN/DRAW/LOSE CONDITIONS
* prisonCount = 12 -> Win
* dullMoveCount = 50 -> Draw (consecutive moves with no captures)
* concedeGame -> Lose

















boardState: [
  [' ','M',' ','M',' ','M',' ','M'],

  ['M',' ','M',' ','M',' ','M',' '],

  [' ','M',' ','M',' ','M',' ','M'],

  [' ',' ',' ',' ',' ',' ',' ',' '],

  [' ',' ',' ',' ',' ',' ',' ',' '],

  ['m',' ','m',' ','m',' ','m',' '],

  [' ','m',' ','m',' ','m',' ','m'],

  ['m',' ','m',' ','m',' ','m',' ']
]
