Super basic patatap clone (http://patatap.com/)

Black background with circle animations and sounds on keypress.

Each key has a unique color and sound tied to it, and will not overlap with the colors/sounds of other keys.

Two refactors are in process:
 a) Factor out the keys, colors, and sounds into separate arrays to minimize reuse of same code over and over.
 b) Dynamically create the arrays for keys, colors, and sounds to greatly reduce amount of static code.
