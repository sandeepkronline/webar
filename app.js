function loadMarkers(){
	// Get Query Parameters
	const urlParams = new URLSearchParams(window.location.search)
	let imageId = urlParams.get("image")
	let markerId = urlParams.get("marker")
	console.log(imageId);
	console.log(markerId);
	
	// Upadate tracking image URL
	let baseUrl = "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/sandeepkronline/webar/main/track/";
	let nftUrl = baseUrl + imageId + "/" + imageId;
	console.log(nftUrl);
	var nftNode = document.getElementById("#marker");

	
	
	if( imageId == "trex"){
		
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

