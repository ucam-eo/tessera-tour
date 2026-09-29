// The live window of the downstream stage, in Cambridge: 320 x 320 pixels of
// UTM zone 31, the click on Parker's Piece, and the labels the explorer gives
// (class, [row, column] in the window).  Classes: farmland, parkland,
// woodland, town.
window.DEMO = {
  zone: 31, row0: 355104, col0: 13728, n: 320,
  touch: [38, 259], simThreshold: 0.85,
  labels: [
    [0, [180, 30]], [0, [250, 90]], [0, [220, 150]], [0, [185, 165]],
    [1, [38, 259]], [1, [245, 252]], [1, [115, 210]],
    [2, [150, 115]], [2, [235, 72]], [2, [95, 65]],
    [3, [26, 204]], [3, [106, 294]], [3, [76, 164]], [3, [150, 250]],
  ],
};
