var video;


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to false");
	video.loop = false; 
	console.log("Loop is set to false");

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		 });


	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});


	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9; 
		console.log("New speed: " + video.playbackRate);
	});


	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9; 
		console.log("New speed: " + video.playbackRate);
	});


	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 > video.duration) {
			video.currentTime = 0; 
		} else {
			video.currentTime += 10;
		}
		console.log("Current time: " + video.currentTime);
	});


	document.querySelector("#mute").addEventListener("click", function() {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
	});


	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		updateVolumeDisplay();
	});


	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});


	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});

function updateVolumeDisplay() {
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
}

