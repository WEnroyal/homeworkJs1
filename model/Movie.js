function  Movie()
{
	var id;
	var shortCode;
	var title;
	var rating;
	var ratingDescription;
	var synopsis;
	var shorSynopsis;
	var HOFilmCode;
	var CorporateFilmId;
	var runTime;
	var openingDate;
	var graphicUrl;
	var filmNameUrl;
	var trailerUrl;
	var additionalUrls; // Array
	var isComingSoon;
	var isScheduledAtCinema;
	var titleAlt;
	var ratingAlt;
	var ratingDescriptionAlt;
	var synopsisAlt;
	var shortSynopsisAlt;
	var websiteUrl;
	var genreId;
	var eDICode;
	var twitterTag;
	var titleTranslations; // Array
	var synopsisTranslations; // Array
	var shortSynopsisTranslations; // Array
	var ratingDescriptionTranslations; // Array
	var customerRatingStatistics; //Object
	var customerRatingTrailerStatistics; //Object
	var filmWebId;

	this.getTitle = function()
	{
		return title;
	}
	this.getInfo = function()
	{
		console.log(customerRatingStatistics == undefined?"Yes":"No");
	}
}