function feedback()
{
	window.open("https://github.com/EggPixel/MoreBuckets-Fabric/issues")
}
function sw1(src)
{
	var body = document.getElementsByTagName('body')[0];
	if (document.getElementById('sw') != null)
		document.getElementById('sw').remove();
	
	var a = document.createElement("iframe");
	a.setAttribute("id","sw");
	a.setAttribute("frameborder","0");
	a.setAttribute("allowtransparency","1");
	a.setAttribute("src",src);
	a.setAttribute("width","83%");
	a.setAttribute("height","90%");
	a.setAttribute("style","position: absolute;left:305px;top:55px;");
	
	body.appendChild(a);
}