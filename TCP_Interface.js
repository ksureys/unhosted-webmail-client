function TCP_Interface(server){
	this.server=server;
	document.addEventListener("MyAnswerEvent",function(e) { TCP_Interface.prototype.ExtensionAnswer(e); },false);
}

TCP_Interface.prototype.connect = function(act,cmd,settings){
	var element = document.createElement("MyExtensionDataElement");		
	element.setAttribute("action",act);		
	element.setAttribute("command",cmd);		
	console.log('request '+' '+act +'< '+JSON.parse(cmd).request)+' \>';
	element.setAttribute("settings",settings);		
	document.documentElement.appendChild(element);
	var evt = document.createEvent("Events");
	evt.initEvent("MyExtensionEvent", true, false);
	element.dispatchEvent(evt);
}

TCP_Interface.prototype.ExtensionAnswer=function(EvtAnswer){
	var value=EvtAnswer.target.getAttribute("value");
	IMAP_Interface.prototype.result(value);
}