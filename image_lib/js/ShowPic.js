function showPic(whichPic)
{
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	// alert(description.childNodes[0].nodeValue);

	// description.childNodes[0].nodeValue = text;
	description.firstChild.nodeValue = text;
}

function countBodyChildren()
{
	var bodyElement = document.getElementsByTagName("body")[0];
	alert(bodyElement.childNodes.length);
	// alert(bodyElement.nodeType);
}

// window.onload = countBodyChildren;