for(var x = 25; x < 1025; x+=100) {
  for(var y = 25; y < 1025; y+=100) {
    new Path.Circle(new Point(x, y), 20).fillColor = 'purple';
  }
};
