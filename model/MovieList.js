function MovieList()
{
	 this.movieList = [];
}

MovieList.prototype = 
{
	add:  function(movie)
	{
		if(this.movieList == undefined){
			this.movieList = [movie];
			return;
		}

		this.movieList.push(movie);
	},

	findMovieById : function(id)
	{
		var movie =  null;
		for(var i = 0; i < this.movieList.length; i++)
		{
			if(this.movieList[i].getId() == id)
			{
				movie = this.movieList[i];
				break;
			}
		}
		return movie;
	},

	findMovieByName : function(name)
	{
		var movie = null;
		for(var i = 0; i < this.movieList.length; i++)
		{
			if(this.movieList[i].getName().toUpperCase() == name.toUpperCase())
			{
				movie = this.movieList[i];
				break;
			}
		}
		return movie;
	},

	

	deleteMovieById : function(id)
	{
		var movie = this.findMovieById(id);
		if(movie == null)
			return;
		this.movieList = this.movieList.splice(this.movieList.indexOf(movie)-1,1);
	},

	sortByGenre:  function(genre)
	{
		var tempArr = this.movieList.concat();
		if(this.movieList == undefined)
			return;

	var sorted = false;
    while(sorted != true) {
        sorted = true;
        var temp = 0;
        for (var i = 1; i < tempArr.length; i++) {

            if (tempArr[i].getGenre() == genre) {
                temp = tempArr[i];
                tempArr[i] = tempArr[i-1];
                tempArr[i-1] = temp;
                sorted = false;
            }
        }
    }

    return tempArr;
	},

	getListOfMovies : function()
	{
		return this.movieList;
	},


}