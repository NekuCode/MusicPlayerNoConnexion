let tracks = [];
let currentPlaylist = "AMV";

const trackList = document.getElementById("trackList");
const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");
const search = document.getElementById("search");
const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");
const playPause = document.getElementById("playPause");

fetch("data/playlists.csv")
  .then(res => res.text())
  .then(text => {
    const lines = text.split("\n");
    tracks = lines.slice(1).map(line => {
      const [playlist, title, path] = line.split(",");
      return { playlist, title, path };
    });
    loadPlaylist(currentPlaylist);
  });

function loadPlaylist(name) {
  trackList.innerHTML = "";
  tracks
    .filter(t => t.playlist === name)
    .forEach(t => {
      const li = document.createElement("li");
      li.textContent = t.title;
      li.onclick = () => playTrack(t);
      trackList.appendChild(li);
    });
}

function playTrack(track) {
  audio.src = track.path;
  audio.play();
  nowPlaying.textContent = "▶ " + track.title;
}

document.querySelectorAll("aside button").forEach(btn => {
  btn.onclick = () => {
    currentPlaylist = btn.dataset.playlist;
    loadPlaylist(currentPlaylist);
  };
});

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  trackList.innerHTML = "";
  tracks
    .filter(t => t.title.toLowerCase().includes(q))
    .forEach(t => {
      const li = document.createElement("li");
      li.textContent = t.title;
      li.onclick = () => playTrack(t);
      trackList.appendChild(li);
    });
});



audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
});

progressContainer.addEventListener("click", e => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});

playPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
