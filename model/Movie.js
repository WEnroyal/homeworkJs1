function  Movie(id,name,description,genre,listOfActors,rating)
{
	this.id = id;
	this.name = name;
	this.description = description;
	this.genre = genre;
	this.listOfActors = listOfActors;
	this.rating = rating;
}

Movie.prototype = 
{
	
	setId : function(idValue){
		this.id = idValue;
	},

	getId : function(){
		return this.id;
	},

	setName : function(nameValue){
		this.name = nameValue;
	},

	getName : function(){
		return this.name;
	},

	setDescription : function(descriptionValue){
		this.description = descriptionValue;
	},

	getDescription : function()
	{
		return this.description;
	},

	setGenre : function(genreValue){
		this.genre = genreValue;
	},

	getGenre : function(){
		return this.genre;
	},

	setListOfActors : function(list){
		this.listOfActors = list;
	},

	getListOfActors : function(){
		var str = "";
		for(var i = 0; i < listOfActors.length; i++){
			str+= listOfActors[i].getName() + listOfActors[i].getSurName();
		}
		return str;
	},

	setRating : function(ratingValue)
	{
		this.rating = ratingValue; 
	},

	getRating : function()
	{
		return this.rating;
	}



}