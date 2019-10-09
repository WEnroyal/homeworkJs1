function MovieList(movie)
{
	var movieList;

	this.add = function(movie)
	{
		if(movieList == undefined){
			movieList = [movie];
			return;
		}

		movieList.push(movie);
	}

	this.sortByTitle = function()
	{
		if(movieLsit == undefined)
			return;
		movieList.sort(function(movie1,movie2)
		{
			var movieSelected = movie1.getTitle().toUpperCase(); 
  			var movieNext = movie2.getTitle().toUpperCase(); 
  			if (movieSelected < movieNext) {
    			return -1;
  			}
 			 if (movieSelected > movieNext) {
    			return 1;
 			 }

  
  			return 0;
		});
	}
}