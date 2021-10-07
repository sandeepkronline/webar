function loadMarkers(){
	const urlParams = new URLSearchParams(window.location.search)
	let trakingId = urlParams.get("id")
	let markerId = urlParams.get("marker")
	console.log(trakingId);
	console.log(markerId);
	
	if( trakingId == "trex"){
		
		const markerDiv = document.createElement("a-gltf-model");
		markerDiv.setAttribute("gltf-model", "trex/scene.gltf");
		markerDiv.setAttribute("scale", "5 5 5");
		markerDiv.setAttribute("position", "50 0 0" );
		var element = document.getElementById("#marker");
		element.appendChild(markerDiv);
	}
	else{
		const markerDiv = document.createElement("a-gltf-model");
		markerDiv.setAttribute("gltf-model", "trex/skyscraper.gltf");
		markerDiv.setAttribute("scale", "5 5 5");
		markerDiv.setAttribute("position", "50 50 0" );
		markerDiv.setAttribute("rotation", "90 270 0" );
		var element = document.getElementById("#marker");
		element.appendChild(markerDiv);
		
	}
		
	
}

