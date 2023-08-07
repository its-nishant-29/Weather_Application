

mydiv = '';
newdiv = '';

country = 'IN';
category = 'Sports';
language = 'en';
function getNewsByCountry(country, language, category){
	//const ln='en';
	console.log('Input: '+ country + ' ' + language +' ' + category)
		const url = 'https://news-api14.p.rapidapi.com/top-headlines?country='+country+'&language='+language.toLowerCase()+'&pageSize=10&category=' + category;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8aebb2b16cmsh89b5e5936342f7fp13e65ejsn6536026e8449',
		'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
	}
};

try {
	const response =  fetch(url, options)
	.then(response => response.json())
	.then(data => {
		console.log(data)	
		for (const news of data.articles){

			highlights = news.title.split(' ');
			highlights = highlights.slice(0, 3).join(' ');
			newdiv +=`
		<li class="cards_item">
      	<div class="card">
        <div class="card_image" style="color:darkgray;"><h1> ${highlights}</h1></div>
        <div class="card_content">
          			<p class="card_text">${news.title}</p>
					<h8 class="card_title">Published Date: ${news.published_date.split('T')[0]}</h8>
          			<a class="btn card_btn" href="${news.url}" >Read More</a>
     			   </div>
    		  </div>
    	</li>`
		}

		
		

		$("#NewsDiv").html(newdiv);
			
	})
	.catch(err => console.error(err));
	//const result =  response.text();
} catch (error) {
	console.error(error);
}
}
function handleNewsInput(e){
	e.preventDefault(); // Prevent the default form submission behavior

    // Fetch the value of the city input field
    const countryInput = document.getElementById('country');
    const languageInput = document.getElementById('language');
    const categoryInput = document.getElementById('category');
	if(countryInput.value != '')
    country = countryInput.value;
	if(languageInput.value !='')
    language = languageInput.value;
	if(categoryInput.value !='')
    category = categoryInput.value;
	console.log('Input: '+ country + ' ' + language +' ' + category)
	getNewsByCountry(country, language, category);
}