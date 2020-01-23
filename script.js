// function to show video duration
function showDuration(videoId) {
    var oO = "";
    if((document.getElementById("sample-video").duration % 60) < 10) {
        oO = "0";
    }
    var dur = document.getElementById(videoId).duration;
    var mins = Math.trunc(dur / 60);
    var secs = Math.trunc(dur % 60);
    document.getElementById("vid1Duration").innerHTML = mins + ":" + oO + secs;
}

// function to initiate video playback
function play(videoId) { 
    document.getElementById(videoId).play();
    showDuration(videoId);
}

// function to pause video playback
function pause(videoId) { 
    document.getElementById(videoId).pause();
}

// jump to specific location in video
function traverseVideo(videoId, position) {
  document.getElementById(videoId).currentTime = document.getElementById(videoId).duration * position;
}

// function to show audio duration
function showTrackDuration(audioId) {
    var oO = "";
    if((document.getElementById(audioId).duration % 60) < 10) {
        oO = "0";
    }
    var dur = document.getElementById(audioId).duration;
    var mins = Math.trunc(dur / 60);
    var secs = Math.trunc(dur % 60);
    document.getElementById("track1Duration").innerHTML = mins + ":" + oO + secs;
}

// function to initiate audio playback
function playTrack(audioId) { 
    document.getElementById(audioId).play();
    showTrackDuration(audioId);
}

// function to pause audio playback
function pauseTrack(audioId) { 
    document.getElementById(audioId).pause();
}

// jump to specific location in track
function traverseAudio(audioId, position) {
  document.getElementById(audioId).currentTime = document.getElementById(audioId).duration * position;
}

// function to open modal by id
function showModal(itemId) {
    document.getElementById(itemId).style.display="block";
}

// function to close modal by id
function closeModal(itemId) {
    document.getElementById(itemId).style.display="none";
}

// function to initiate dragged item
function dragOn(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

// function for dragged item over vald target
function dragOver(ev) {
  ev.preventDefault();
  if (ev.target.getAttribute("draggable") == "true") {
      ev.dataTransfer.dropEffect = "none";
  } else {
      ev.dataTransfer.dropEffect = "all";
  }
}

// function to end drag and drop item
function dragOff(ev) {
    ev.preventDefault();
    var what = ev.dataTransfer.getData("id");
    var item = document.getElementById(what);
    ev.target.appendChild(item);
}

// function to return and display current video time elapsed through calculations and swap color elements by id for visual display element
function videoControl() {
    var oO = "";
    if((document.getElementById("sample-video").currentTime % 60) < 10) {
        oO = "0";
    }
    document.getElementById("vid1Position").innerHTML = Math.trunc(document.getElementById("sample-video").currentTime / 60) + ":" + oO + Math.trunc(document.getElementById("sample-video").currentTime % 60);
    if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .1)) {
      document.getElementById("tenp").style.color="#e76e55";
      document.getElementById("twentyp").style.color="#d3d3d3";
      document.getElementById("thirtyp").style.color="#d3d3d3";
      document.getElementById("fortyp").style.color="#d3d3d3";
      document.getElementById("fiftyp").style.color="#d3d3d3";
      document.getElementById("sixtyp").style.color="#d3d3d3";
      document.getElementById("seventyp").style.color="#d3d3d3";
      document.getElementById("eightyp").style.color="#d3d3d3";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#e76e55";
      document.getElementById("twentyp").style.backgroundColor="#d3d3d3";
      document.getElementById("thirtyp").style.backgroundColor="#d3d3d3";
      document.getElementById("fortyp").style.backgroundColor="#d3d3d3";
      document.getElementById("fiftyp").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .2)) {
      document.getElementById("tenp").style.color="#e76e55";
      document.getElementById("twentyp").style.color="#e76e55";
      document.getElementById("thirtyp").style.color="#d3d3d3";
      document.getElementById("fortyp").style.color="#d3d3d3";
      document.getElementById("fiftyp").style.color="#d3d3d3";
      document.getElementById("sixtyp").style.color="#d3d3d3";
      document.getElementById("seventyp").style.color="#d3d3d3";
      document.getElementById("eightyp").style.color="#d3d3d3";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#e76e55";
      document.getElementById("twentyp").style.backgroundColor="#e76e55";
      document.getElementById("thirtyp").style.backgroundColor="#d3d3d3";
      document.getElementById("fortyp").style.backgroundColor="#d3d3d3";
      document.getElementById("fiftyp").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .3)) {
      document.getElementById("tenp").style.color="#f7d51d";
      document.getElementById("twentyp").style.color="#f7d51d";
      document.getElementById("thirtyp").style.color="#f7d51d";
      document.getElementById("fortyp").style.color="#d3d3d3";
      document.getElementById("fiftyp").style.color="#d3d3d3";
      document.getElementById("sixtyp").style.color="#d3d3d3";
      document.getElementById("seventyp").style.color="#d3d3d3";
      document.getElementById("eightyp").style.color="#d3d3d3";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#f7d51d";
      document.getElementById("twentyp").style.backgroundColor="#f7d51d";
      document.getElementById("thirtyp").style.backgroundColor="#f7d51d";
      document.getElementById("fortyp").style.backgroundColor="#d3d3d3";
      document.getElementById("fiftyp").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .4)) {
      document.getElementById("tenp").style.color="#f7d51d";
      document.getElementById("twentyp").style.color="#f7d51d";
      document.getElementById("thirtyp").style.color="#f7d51d";
      document.getElementById("fortyp").style.color="#f7d51d";
      document.getElementById("fiftyp").style.color="#d3d3d3";
      document.getElementById("sixtyp").style.color="#d3d3d3";
      document.getElementById("seventyp").style.color="#d3d3d3";
      document.getElementById("eightyp").style.color="#d3d3d3";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#f7d51d";
      document.getElementById("twentyp").style.backgroundColor="#f7d51d";
      document.getElementById("thirtyp").style.backgroundColor="#f7d51d";
      document.getElementById("fortyp").style.backgroundColor="#f7d51d";
      document.getElementById("fiftyp").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .5)) {
      document.getElementById("tenp").style.color="#f7d51d";
      document.getElementById("twentyp").style.color="#f7d51d";
      document.getElementById("thirtyp").style.color="#f7d51d";
      document.getElementById("fortyp").style.color="#f7d51d";
      document.getElementById("fiftyp").style.color="#f7d51d";
      document.getElementById("sixtyp").style.color="#d3d3d3";
      document.getElementById("seventyp").style.color="#d3d3d3";
      document.getElementById("eightyp").style.color="#d3d3d3";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#f7d51d";
      document.getElementById("twentyp").style.backgroundColor="#f7d51d";
      document.getElementById("thirtyp").style.backgroundColor="#f7d51d";
      document.getElementById("fortyp").style.backgroundColor="#f7d51d";
      document.getElementById("fiftyp").style.backgroundColor="#f7d51d";
      document.getElementById("sixtyp").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .6)) {
      document.getElementById("tenp").style.color="#209cee";
      document.getElementById("twentyp").style.color="#209cee";
      document.getElementById("thirtyp").style.color="#209cee";
      document.getElementById("fortyp").style.color="#209cee";
      document.getElementById("fiftyp").style.color="#209cee";
      document.getElementById("sixtyp").style.color="#209cee";
      document.getElementById("seventyp").style.color="#d3d3d3";
      document.getElementById("eightyp").style.color="#d3d3d3";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#209cee";
      document.getElementById("twentyp").style.backgroundColor="#209cee";
      document.getElementById("thirtyp").style.backgroundColor="#209cee";
      document.getElementById("fortyp").style.backgroundColor="#209cee";
      document.getElementById("fiftyp").style.backgroundColor="#209cee";
      document.getElementById("sixtyp").style.backgroundColor="#209cee";
      document.getElementById("seventyp").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .7)) {
      document.getElementById("tenp").style.color="#209cee";
      document.getElementById("twentyp").style.color="#209cee";
      document.getElementById("thirtyp").style.color="#209cee";
      document.getElementById("fortyp").style.color="#209cee";
      document.getElementById("fiftyp").style.color="#209cee";
      document.getElementById("sixtyp").style.color="#209cee";
      document.getElementById("seventyp").style.color="#209cee";
      document.getElementById("eightyp").style.color="#d3d3d3";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#209cee";
      document.getElementById("twentyp").style.backgroundColor="#209cee";
      document.getElementById("thirtyp").style.backgroundColor="#209cee";
      document.getElementById("fortyp").style.backgroundColor="#209cee";
      document.getElementById("fiftyp").style.backgroundColor="#209cee";
      document.getElementById("sixtyp").style.backgroundColor="#209cee";
      document.getElementById("seventyp").style.backgroundColor="#209cee";
      document.getElementById("eightyp").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime < (document.getElementById("sample-video").duration * .8)) {
      document.getElementById("tenp").style.color="#209cee";
      document.getElementById("twentyp").style.color="#209cee";
      document.getElementById("thirtyp").style.color="#209cee";
      document.getElementById("fortyp").style.color="#209cee";
      document.getElementById("fiftyp").style.color="#209cee";
      document.getElementById("sixtyp").style.color="#209cee";
      document.getElementById("seventyp").style.color="#209cee";
      document.getElementById("eightyp").style.color="#209cee";
      document.getElementById("ninetyp").style.color="#d3d3d3";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#209cee";
      document.getElementById("twentyp").style.backgroundColor="#209cee";
      document.getElementById("thirtyp").style.backgroundColor="#209cee";
      document.getElementById("fortyp").style.backgroundColor="#209cee";
      document.getElementById("fiftyp").style.backgroundColor="#209cee";
      document.getElementById("sixtyp").style.backgroundColor="#209cee";
      document.getElementById("seventyp").style.backgroundColor="#209cee";
      document.getElementById("eightyp").style.backgroundColor="#209cee";
      document.getElementById("ninetyp").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime <= (document.getElementById("sample-video").duration * .9)) {
      document.getElementById("tenp").style.color="#209cee";
      document.getElementById("twentyp").style.color="#209cee";
      document.getElementById("thirtyp").style.color="#209cee";
      document.getElementById("fortyp").style.color="#209cee";
      document.getElementById("fiftyp").style.color="#209cee";
      document.getElementById("sixtyp").style.color="#209cee";
      document.getElementById("seventyp").style.color="#209cee";
      document.getElementById("eightyp").style.color="#209cee";
      document.getElementById("ninetyp").style.color="#209cee";
      document.getElementById("hundyp").style.color="#d3d3d3";
      document.getElementById("tenp").style.backgroundColor="#209cee";
      document.getElementById("twentyp").style.backgroundColor="#209cee";
      document.getElementById("thirtyp").style.backgroundColor="#209cee";
      document.getElementById("fortyp").style.backgroundColor="#209cee";
      document.getElementById("fiftyp").style.backgroundColor="#209cee";
      document.getElementById("sixtyp").style.backgroundColor="#209cee";
      document.getElementById("seventyp").style.backgroundColor="#209cee";
      document.getElementById("eightyp").style.backgroundColor="#209cee";
      document.getElementById("ninetyp").style.backgroundColor="#209cee";
      document.getElementById("hundyp").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-video").currentTime > (document.getElementById("sample-video").duration * .9)) {
      document.getElementById("tenp").style.color="#92cc41";
      document.getElementById("twentyp").style.color="#92cc41";
      document.getElementById("thirtyp").style.color="#92cc41";
      document.getElementById("fortyp").style.color="#92cc41";
      document.getElementById("fiftyp").style.color="#92cc41";
      document.getElementById("sixtyp").style.color="#92cc41";
      document.getElementById("seventyp").style.color="#92cc41";
      document.getElementById("eightyp").style.color="#92cc41";
      document.getElementById("ninetyp").style.color="#92cc41";
      document.getElementById("hundyp").style.color="#92cc41";
      document.getElementById("tenp").style.backgroundColor="#92cc41";
      document.getElementById("twentyp").style.backgroundColor="#92cc41";
      document.getElementById("thirtyp").style.backgroundColor="#92cc41";
      document.getElementById("fortyp").style.backgroundColor="#92cc41";
      document.getElementById("fiftyp").style.backgroundColor="#92cc41";
      document.getElementById("sixtyp").style.backgroundColor="#92cc41";
      document.getElementById("seventyp").style.backgroundColor="#92cc41";
      document.getElementById("eightyp").style.backgroundColor="#92cc41";
      document.getElementById("ninetyp").style.backgroundColor="#92cc41";
      document.getElementById("hundyp").style.backgroundColor="#92cc41";
    }
}

// function to return and display current audio time elapsed through calculations and swap color elements by id for visual display element
function audioControl() {
    var oO = "";
    if((document.getElementById("sample-audio").currentTime % 60) < 10) {
        oO = "0";
    }
    document.getElementById("track1Position").innerHTML = Math.trunc(document.getElementById("sample-audio").currentTime / 60) + ":" + oO + Math.trunc(document.getElementById("sample-audio").currentTime % 60);
    if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .1)) {
      document.getElementById("tenp-tr").style.color="#e76e55";
      document.getElementById("twentyp-tr").style.color="#d3d3d3";
      document.getElementById("thirtyp-tr").style.color="#d3d3d3";
      document.getElementById("fortyp-tr").style.color="#d3d3d3";
      document.getElementById("fiftyp-tr").style.color="#d3d3d3";
      document.getElementById("sixtyp-tr").style.color="#d3d3d3";
      document.getElementById("seventyp-tr").style.color="#d3d3d3";
      document.getElementById("eightyp-tr").style.color="#d3d3d3";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#e76e55";
      document.getElementById("twentyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("thirtyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("fortyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("fiftyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .2)) {
      document.getElementById("tenp-tr").style.color="#e76e55";
      document.getElementById("twentyp-tr").style.color="#e76e55";
      document.getElementById("thirtyp-tr").style.color="#d3d3d3";
      document.getElementById("fortyp-tr").style.color="#d3d3d3";
      document.getElementById("fiftyp-tr").style.color="#d3d3d3";
      document.getElementById("sixtyp-tr").style.color="#d3d3d3";
      document.getElementById("seventyp-tr").style.color="#d3d3d3";
      document.getElementById("eightyp-tr").style.color="#d3d3d3";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#e76e55";
      document.getElementById("twentyp-tr").style.backgroundColor="#e76e55";
      document.getElementById("thirtyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("fortyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("fiftyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .3)) {
      document.getElementById("tenp-tr").style.color="#f7d51d";
      document.getElementById("twentyp-tr").style.color="#f7d51d";
      document.getElementById("thirtyp-tr").style.color="#f7d51d";
      document.getElementById("fortyp-tr").style.color="#d3d3d3";
      document.getElementById("fiftyp-tr").style.color="#d3d3d3";
      document.getElementById("sixtyp-tr").style.color="#d3d3d3";
      document.getElementById("seventyp-tr").style.color="#d3d3d3";
      document.getElementById("eightyp-tr").style.color="#d3d3d3";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("twentyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("thirtyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("fortyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("fiftyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .4)) {
      document.getElementById("tenp-tr").style.color="#f7d51d";
      document.getElementById("twentyp-tr").style.color="#f7d51d";
      document.getElementById("thirtyp-tr").style.color="#f7d51d";
      document.getElementById("fortyp-tr").style.color="#f7d51d";
      document.getElementById("fiftyp-tr").style.color="#d3d3d3";
      document.getElementById("sixtyp-tr").style.color="#d3d3d3";
      document.getElementById("seventyp-tr").style.color="#d3d3d3";
      document.getElementById("eightyp-tr").style.color="#d3d3d3";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("twentyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("thirtyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("fortyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("fiftyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("sixtyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .5)) {
      document.getElementById("tenp-tr").style.color="#f7d51d";
      document.getElementById("twentyp-tr").style.color="#f7d51d";
      document.getElementById("thirtyp-tr").style.color="#f7d51d";
      document.getElementById("fortyp-tr").style.color="#f7d51d";
      document.getElementById("fiftyp-tr").style.color="#f7d51d";
      document.getElementById("sixtyp-tr").style.color="#d3d3d3";
      document.getElementById("seventyp-tr").style.color="#d3d3d3";
      document.getElementById("eightyp-tr").style.color="#d3d3d3";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("twentyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("thirtyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("fortyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("fiftyp-tr").style.backgroundColor="#f7d51d";
      document.getElementById("sixtyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("seventyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .6)) {
      document.getElementById("tenp-tr").style.color="#209cee";
      document.getElementById("twentyp-tr").style.color="#209cee";
      document.getElementById("thirtyp-tr").style.color="#209cee";
      document.getElementById("fortyp-tr").style.color="#209cee";
      document.getElementById("fiftyp-tr").style.color="#209cee";
      document.getElementById("sixtyp-tr").style.color="#209cee";
      document.getElementById("seventyp-tr").style.color="#d3d3d3";
      document.getElementById("eightyp-tr").style.color="#d3d3d3";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#209cee";
      document.getElementById("twentyp-tr").style.backgroundColor="#209cee";
      document.getElementById("thirtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fortyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fiftyp-tr").style.backgroundColor="#209cee";
      document.getElementById("sixtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("seventyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("eightyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .7)) {
      document.getElementById("tenp-tr").style.color="#209cee";
      document.getElementById("twentyp-tr").style.color="#209cee";
      document.getElementById("thirtyp-tr").style.color="#209cee";
      document.getElementById("fortyp-tr").style.color="#209cee";
      document.getElementById("fiftyp-tr").style.color="#209cee";
      document.getElementById("sixtyp-tr").style.color="#209cee";
      document.getElementById("seventyp-tr").style.color="#209cee";
      document.getElementById("eightyp-tr").style.color="#d3d3d3";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#209cee";
      document.getElementById("twentyp-tr").style.backgroundColor="#209cee";
      document.getElementById("thirtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fortyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fiftyp-tr").style.backgroundColor="#209cee";
      document.getElementById("sixtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("seventyp-tr").style.backgroundColor="#209cee";
      document.getElementById("eightyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime < (document.getElementById("sample-audio").duration * .8)) {
      document.getElementById("tenp-tr").style.color="#209cee";
      document.getElementById("twentyp-tr").style.color="#209cee";
      document.getElementById("thirtyp-tr").style.color="#209cee";
      document.getElementById("fortyp-tr").style.color="#209cee";
      document.getElementById("fiftyp-tr").style.color="#209cee";
      document.getElementById("sixtyp-tr").style.color="#209cee";
      document.getElementById("seventyp-tr").style.color="#209cee";
      document.getElementById("eightyp-tr").style.color="#209cee";
      document.getElementById("ninetyp-tr").style.color="#d3d3d3";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#209cee";
      document.getElementById("twentyp-tr").style.backgroundColor="#209cee";
      document.getElementById("thirtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fortyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fiftyp-tr").style.backgroundColor="#209cee";
      document.getElementById("sixtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("seventyp-tr").style.backgroundColor="#209cee";
      document.getElementById("eightyp-tr").style.backgroundColor="#209cee";
      document.getElementById("ninetyp-tr").style.backgroundColor="#d3d3d3";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime <= (document.getElementById("sample-audio").duration * .9)) {
      document.getElementById("tenp-tr").style.color="#209cee";
      document.getElementById("twentyp-tr").style.color="#209cee";
      document.getElementById("thirtyp-tr").style.color="#209cee";
      document.getElementById("fortyp-tr").style.color="#209cee";
      document.getElementById("fiftyp-tr").style.color="#209cee";
      document.getElementById("sixtyp-tr").style.color="#209cee";
      document.getElementById("seventyp-tr").style.color="#209cee";
      document.getElementById("eightyp-tr").style.color="#209cee";
      document.getElementById("ninetyp-tr").style.color="#209cee";
      document.getElementById("hundyp-tr").style.color="#d3d3d3";
      document.getElementById("tenp-tr").style.backgroundColor="#209cee";
      document.getElementById("twentyp-tr").style.backgroundColor="#209cee";
      document.getElementById("thirtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fortyp-tr").style.backgroundColor="#209cee";
      document.getElementById("fiftyp-tr").style.backgroundColor="#209cee";
      document.getElementById("sixtyp-tr").style.backgroundColor="#209cee";
      document.getElementById("seventyp-tr").style.backgroundColor="#209cee";
      document.getElementById("eightyp-tr").style.backgroundColor="#209cee";
      document.getElementById("ninetyp-tr").style.backgroundColor="#209cee";
      document.getElementById("hundyp-tr").style.backgroundColor="#d3d3d3";
    } else if(document.getElementById("sample-audio").currentTime > (document.getElementById("sample-audio").duration * .9)) {
      document.getElementById("tenp-tr").style.color="#92cc41";
      document.getElementById("twentyp-tr").style.color="#92cc41";
      document.getElementById("thirtyp-tr").style.color="#92cc41";
      document.getElementById("fortyp-tr").style.color="#92cc41";
      document.getElementById("fiftyp-tr").style.color="#92cc41";
      document.getElementById("sixtyp-tr").style.color="#92cc41";
      document.getElementById("seventyp-tr").style.color="#92cc41";
      document.getElementById("eightyp-tr").style.color="#92cc41";
      document.getElementById("ninetyp-tr").style.color="#92cc41";
      document.getElementById("hundyp-tr").style.color="#92cc41";
      document.getElementById("tenp-tr").style.backgroundColor="#92cc41";
      document.getElementById("twentyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("thirtyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("fortyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("fiftyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("sixtyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("seventyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("eightyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("ninetyp-tr").style.backgroundColor="#92cc41";
      document.getElementById("hundyp-tr").style.backgroundColor="#92cc41";
    }
}

var duckWasInitialized = false;
var headingsMsg = "<p>This section is about headings. Nothing super fancy going on here, but they're useful. Heading lv. 2 should go on the top of each section.</p>";
var textColorsMsg = "<p>Every website needs a little flavor, am I right? This section goes over all the different text colors baked into the theme elements - yum!</p>";
var blockquotesMsg = "<p>Quotes are usually pretty inspirational, so blockquotes also include additional colors to make like cheese and help them really stand alone.</p>";
var codeSnippetsMsg = "<p>Coding is fun! Am I a nerd for saying that? If you're using this framework, these will shed some light on how you can create a similar element for any of your pages.</p>";
var inputFormsMsg = "<p>Oh, this part's good.<br><br>Everyone loves to give their input, so forms are a good place to start. Buttons and text fields included, more to come.</p>";
var selectsMsg = "<p>Quack?</p>";
var listsMsg = "<p></p>";
var tablesMsg = "<p></p>";
var iconsMsg = "<p></p>";
var detailsMsg = "<p></p>";
var twoColMsg = "<p></p>";
var threeColMsg = "<p></p>";
var calloutsMsg = "<p></p>";
var cardExsMsg = "<p></p>";
var audioVideoMsg = "<p></p>";
var lazyLoadMsg = "<p></p>";
var modalsMsg = "<p></p>";
var dragDropsMsg = "<p></p>";
var quackersMsg = "<p></p>";
var tooltipMsg = "";

// animate duck
function startAnimation() {
  setInterval(
    function(){ 
      alert("Hello"); 
    }, 1500);
}

// activate quack
function quack(n) {
  setTimeout(
    function() {
      document.getElementById("dynast-king").style.visibility="visible";
    }, n);
  showQuack(1000, "<p>Quack?</p>");
  changeSprite();
}

function showQuack(n, message) {
  if (document.getElementById("quackbox").style.visibility != "visible") {
    setTimeout(
    function() {
      document.getElementById("quackbox").style.visibility="visible";
    }, n);
    document.getElementById("quackbox").innerHTML = message;
    if(duckWasInitialized) {
      hideQuack(n*8);
    }
  }
}
  
function hideQuack(n) {
  setTimeout(
    function() {
      document.getElementById("quackbox").style.visibility="hidden";
    }, n);
  setTimeout(
    function() {
      document.getElementById("quackbox").innerHTML = "";
    }, n);
}

function showSpeech(n, message) {
  setTimeout(
    function() {
      document.getElementById("speech-init").style.visibility="visible";
    }, n);
    document.getElementById("speech-init").innerHTML = message;
    hideSpeech(n*10)
}

function hideSpeech(n) {
  setTimeout(
    function() {
      document.getElementById("speech-init").style.visibility="hidden";
    }, n);
  setTimeout(
    function() {
      document.getElementById("speech-init").innerHTML = "";
    }, n);
}

function quackOn() {
  document.getElementById("quackbox").innerHTML = '<img class="icon-large" src="icons/heart.png" alt="sample icon" style="visibility: visible;">';
  hideQuack(1500);
  if (!duckWasInitialized) {
    showSpeech(2500, "<p>Hi, I'm Quackers, I'll be showing you around. I'm not a robot and I'm not collecting any data or personal information. Tap anywhere on my messages to dismiss them.</p>");
  }
  if (!duckWasInitialized) {
    duckWasInitialized = true;
  }
}

var frameChanges = 0;

function changeSprite() {
  setInterval(
    function() {
      if((frameChanges % 40) == 4) {
        document.getElementById("dynast-king").setAttribute("src", "secret/31.png");
        frameChanges += 1;
      } else if((frameChanges % 40) == 28) {
        document.getElementById("dynast-king").setAttribute("src", "secret/17.png");
        frameChanges += 1;
      } else if(document.getElementById("dynast-king").getAttribute("src") == "secret/01.png") {
        document.getElementById("dynast-king").setAttribute("src", "secret/03.png");
        frameChanges += 1;
      } else {
        document.getElementById("dynast-king").setAttribute("src", "secret/01.png");
        frameChanges += 1;
      }
    }, 500);
}

