myLayers = Framer.Importer.load("imported/iOS 7 UI Kit")

// Demo code
// Bounce all the views

for (layerName in myLayers) {

	if(layerName.indexOf('icon') < 0) {
		continue;
	}
	var layer = myLayers[layerName];

//	layer.draggable.enabled = true;

	layer.on(Events.Click, function(event, layer) {
		
		// Wind up the layer by making it smaller
		layer.scale = 0.7

		// Animate the layer back to the original size with a spring
		layer.animate({
			properties: {scale:1},
			curve: "spring",
			curveOptions: {
				friction: 15,
				tension: 1000,
			}
		})

		// Only animate this layer, not other ones below
//		event.stopPropagation()
	})
}

myLayers.mainButton.on(Events.Click, function(event, layer) {
	// Wind up the layer by making it smaller
	// Animate the layer back to the original size with a spring
	myLayers.mainButton.scale = 0.7;
	myLayers.mainButton.animate({
		properties: {scale:1},
		curve: "spring",
		curveOptions: {
			friction: 15,
			tension: 1000,
		}
	})
	myLayers["Background"].animate({
		properties: {sepia:100},
		curve: "linear",
		curveOptions: {
			friction: 15,
			tension: 1000,
		}
	})
})
