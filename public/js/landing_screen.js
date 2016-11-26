function unsetClassById(Element,className){
	$("img").removeClass(className);
}

$(document).ready(function(){
	unsetClassById('img','.list-tec-dt');
});