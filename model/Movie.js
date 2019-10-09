function  Movie()
{
	var id;
	var name;
	var description;
	var genre;
	var listOfActors;
	var rating;
}

Movie.prototype = 
{
	
	setId : function(idValue){
		id = idValue;
	},

	getId : function(){
		return id;
	},

	setName : function(nameValue){
		name = nameValue;
	},

	getName : function(){
		return name;
	},

	setDescription : function(descriptionValue){
		description = descriptionValue;
	},

	getDescription : function()
	{
		return description;
	},

	setGenre : function(genreValue){
		genre = genreValue;
	},

	getGenre : function(){
		return genre;
	},

	setListOfActors : function(list){
		listOfActors = list;
	},

	getListOfActors : function(){
		var str = "";
		for(var i = 0; i < listOfActors.length; i++){
			str+= "<a href="'#'">"listOfActors[i].getName() + listOfActors[i].getSurName()+"</a>";
		}
	},

	setRating : function(ratingValue)
	{
		rating = ratingValue; 
	},

	getRating : function()
	{
		return rating;
	}


}