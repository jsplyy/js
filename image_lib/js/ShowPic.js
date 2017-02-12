function prepareGallery()
{
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if (!document.getElementById("imageGallery")) {return false};
	var gallery = document.getElementById("imageGallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++)
	{
		links[i].onclick = function(){
			showPic(this); return false;
		}
	}
}

function showPic(whichPic)
{
	if (!document.getElementById("placeholder")) {return false};

	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") {return false};

	placeholder.setAttribute("src", source);

	if (document.getElementById("description")) {
		var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		};
	};
	return true;
	
	// alert(description.childNodes[0].nodeValue);

	// description.childNodes[0].nodeValue = text;
	
}

function countBodyChildren()
{
	var bodyElement = document.getElementsByTagName("body")[0];
	alert(bodyElement.childNodes.length);
	// alert(bodyElement.nodeType);
}

// window.onload = countBodyChildren;

window.onload = prepareGallery;