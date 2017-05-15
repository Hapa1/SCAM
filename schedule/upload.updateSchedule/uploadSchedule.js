var clickTimes = 0;
function addAct() {
	clickTimes ++;
	if (clickTimes === 8) {
		var parent = document.getElementById("agenda");
		var child = document.getElementById("addButton");
		parent.removeChild(child);
		return;
	}
	else {
		var firstClass = document.getElementById("Act").innerHTML;
	    var addClass = document.getElementById("addClass" + clickTimes).innerHTML;
		addClass = firstClass;
		document.getElementById("addClass" + clickTimes).innerHTML = addClass;
	}
};
