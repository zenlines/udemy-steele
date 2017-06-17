var movieList = [
  {
    title: "Se7en",
    hasSeen: true,
    rating: "4.5"
  },

  {
    title: "Princess Bride",
    hasSeen: true,
    rating: "3.5"
  },

  {
    title: "Ink",
    hasSeen: true,
    rating: "4.5"
  },

  {
    title: "Benjamin Button",
    hasSeen: false,
    rating: ""
  }
];

//iterates through array, printing if you've seen the movie in question, it's title and rating.
movieList.forEach(function(obj){
  console.log(buildString(obj));
});


function buildString(obj) {
  var result = "You have ";
  if (obj.hasSeen === true) {
    result += "seen ";
  }
  else {
    result += "not seen ";
  }
  result += "\"" + obj.title + "\"" + " - " + obj.rating + " stars";
  return result;
}
