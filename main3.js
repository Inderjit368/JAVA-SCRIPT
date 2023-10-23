/*document.addEventListener('DOMContentLoaded',function()
{
	var forms=document.forms['search'];
	forms.onsubmit=function(e)
	{
		e.preventDefault();
		var input = document.getElementById("myInput").value;
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="+input;
		console.log(url);
		fetch(url).then(response => {
			return response.json();
		})
		.then(users => {
			
			console.log(users[3]);
			display(users);
		});
	}
});
	function display(apiData)
	{
		let displayData=apiData[3];
		let output = "";
		displayData.forEach((url,index) =>
		{
			output += "<a href="+${url}+">"+${url}+"</a>";
		});
		document.getElementById('test').innerHTML=output;
	}
*/
document.addEventListener('DOMContentLoaded', function() {
  var forms = document.forms['search'];
  forms.onsubmit = function(e) {
    e.preventDefault();
    var input = document.getElementById("myInput").value;
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + input;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(users => {
        console.log(users[3]);
        display(users);
      });
  }
});

function display(apiData) {
  let displayData = apiData[3];
  let output = "";
  displayData.forEach((url, index) => {
    output += `<a href="${url}">${url}</a><br>`;
  });
  document.getElementById('test').innerHTML = output;
}
