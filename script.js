const playlists = {
  1: {
    title: "to get to know me",
    musics: [
      { title: "ballad of a homeschooled girl - Olivia Rodrigo", src: "songs/Olivia Rodrigo - ballad of a homeschooled girl (Official Lyric Video).mp3" },
      { title: "mad woman - Taylor Swift", src: "songs/mad woman.mp3" },
      { title: "needy - Ariana Grande", src: "songs/needy.mp3" },
      { title: "Talk Too Much - Reneé Rapp", src: "songs/talk too much.mp3" },
      { title: "Means I care - Tate McRae", src: "songs/means i care.mp3" },
      { title: "Signs - Tate McRae", src: "songs/signs.mp3" },
      { title: "Ela - Clarissa", src: "songs/ela.mp3" },
      { title: "Greedy - Ariana Grande", src: "songs/Greedy.mp3" },
      { title: "Hard To Love - BLACKPINK", src: "songs/hard to love.mp3" },
      { title: "all the things that could go wrong - Johnny Orlando", src: "songs/all the things.mp3" }
    ]
  },
  2: {
    title: "thinking bout u <3",
    musics: [
      { title: "Starlight (Taylor's Version) - Taylor Swift", src: "songs/starlight.mp3" },
      { title: "Written in the Stars - The Girl and The Dreamcatcher", src: "songs/written.mp3" },
      { title: "On Purpose - Sabrina Carpenter", src: "songs/on purpose.mp3" },
      { title: "I F*cking Love You - Zolita", src: "songs/fcking love u.mp3" },
      { title: "First Love - Lost King, Sabrina Carpenter", src: "songs/first love.mp3" },
      { title: "R.E.M. - Ariana Grande", src: "songs/rem.mp3" },
      { title: "Mine (Glee Cast Version) - Glee Cast", src: "songs/mine.mp3" },
      { title: "Paper Rings - Taylor Swift", src: "songs/paper rings.mp3" },
      { title: "BONITA - Clarissa", src: "songs/bonita.mp3" },
      { title: "AGRIDOCE - Clarissa", src: "songs/agridoce.mp3" },
      { title: "Chicago - Michael Jackson", src: "songs/chicago.mp3" },
      { title: "She Looks So Perfect - 5 Seconds of Summer", src: "songs/5sos.mp3" },
      { title: "Daydreamin' - Ariana Grande", src: "songs/Daydreamin.mp3" },
      { title: "Sleep - Johnny Orlando", src: "songs/sleep.mp3" },
      { title: "oh my - Alessi Rose", src: "songs/oh my.mp3" },
      { title: "Alone Together - Sabrina Carpenter", src: "songs/alone.mp3" },
      { title: "We Belong - Dove Cameron", src: "songs/we belong.mp3" },
      { title: "Paris - Taylor Swift", src: "songs/paris.mp3" },
      { title: "Picture You - Chappell Roan", src: "songs/picture you.mp3" }
    ]
  },
  3: {
    title: "remember me",
    musics: [
      { title: "Wonderland (Taylor's Version) - Taylor Swift", src: "songs/wonderland.mp3" },
      { title: "Shadows - Sabrina Carpenter", src: "songs/shadows.mp3" },
      { title: "DAHLIA - i-dle", src: "songs/DAHLIA.mp3" },
      { title: "Rollie - i-dle", src: "songs/rollie.mp3" },
      { title: "Landslide (feat Gwyneth Paltrow) -  Glee Cast", src: "songs/landslide.mp3" },
      { title: "Top Down - Fifth Harmony", src: "songs/top down.mp3" },
      { title: "Touch It - Ariana Grande", src: "songs/touch it.mp3" },
      { title: "Radioactive - Imagine Dragons", src: "songs/radioactive.mp3" },
      { title: "pretty world - Alessi Rose", src: "songs/pretty world.mp3" },
      { title: "Glowing in the Dark - The Girl and The Dreamcatcher", src: "songs/glowing.mp3" },
      { title: "Kiss a Kitty - CHUU", src: "songs/kitty.mp3" },
      { title: "Could It Be - YUQI", src: "songs/could it be.mp3" },
      { title: "The Giver - Chappell Roan", src: "songs/the giver.mp3" }
    ]
  }
};

function showPlaylist(num) {
  const container = document.getElementById("playlistContent");
  const title = document.getElementById("playlistTitle");

  container.innerHTML = "";
  title.innerText = playlists[num].title;

  playlists[num].musics.forEach(music => {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = music.src || "";
    const label = document.createElement("p");
    label.innerText = music.title;
    container.appendChild(label);
    container.appendChild(audio);
  });

  const popup = document.getElementById("playlist");
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("show");
    document.getElementById("playlistContentContainer").scrollTop = 0; // <- aqui!
  }, 10);
}



function closePlaylist() {
  const popup = document.getElementById("playlist");
  popup.classList.remove("show");
  setTimeout(() => popup.classList.add("hidden"), 300);
}

function openPhoto(imageSrc) {
  const popup = document.getElementById("photoPopup");
  const image = document.getElementById("popupImage");

  image.src = imageSrc;
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("show"), 10);
}

function closePhoto() {
  const popup = document.getElementById("photoPopup");
  popup.classList.remove("show");
  setTimeout(() => popup.classList.add("hidden"), 300);
}

