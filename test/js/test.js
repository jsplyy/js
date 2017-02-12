function addLoadEvent()
{
	createHelloWorld();
	getNewContent();
}

function getNewContent()
{
	var request = new XMLHttpRequest();
	if (request) {
		request.open("GET", "./ajax.txt",true);
		request.onreadystatechange = function(){
			if(request.readyState == 4)
			{
				var testAjax = document.getElementById("testAjax");
				testAjax.TEXT_NODE = request.responseText;
			}
		};
		request.send(null);
	}
	else
	{
		alert("sorry, your brower doestn't support XMLHttpRequest");
	}
}

function createHelloWorld()
{
	var para = document.createElement("p");
	var txt = document.createTextNode("hello world");
	para.appendChild(txt);
	
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);	
}

window.onload = addLoadEvent;