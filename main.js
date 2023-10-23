function display(apiData)
{
	let displayData="";
	for(let i=0;i<10;i++)
	{
		displayData += "<h1 class='title'>"+apiData.articles[i].title+"</h1><br><h4 class='author'>Author: "+apiData.articles[i].author+"</h4><br><h4 class='source'>Source: "+apiData.articles[i].source.name+"</h4><br><h3 class='description'>"+apiData.articles[i].description+" "+ apiData.articles[i].content+"<a href="+apiData.articles[i].url+"></h3><br><h4 class='url'>"+apiData.articles[i].url +"</h4></a><br><br><hr><br><br>";
	}
	document.getElementById('test').innerHTML=displayData;
}
url = "https://newsapi.org/v2/everything?q=weather&apiKey=6ceba0a8d31e41adab0f5c105312e5c6"
fetch("https://apiinvoker.pythonanywhere.com/api/", {
        method: "POST",
        body: JSON.stringify({
            'api': url
        })
    })
        .then((response) => response.json())
        //.then((data) =>  console.log(data.articles[0].author));
        .then((data)=> display(data));
