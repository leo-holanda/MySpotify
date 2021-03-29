function createRow(song){
  console.log(getAddedAt(song))
  if(getAddedAt(song) == null || getAddedAt(song) == 'null') return false
  let row = document.createElement("tr")
  row.classList.add("song")

  let titleAndArtist = document.createElement("td")

  let titleAndArtistContainer = document.createElement("div")

  let title = document.createElement("p")
  title.innerHTML = getTitle(song)
  title.classList.add("song-title")

  let artist = document.createElement("p")
  artist.innerHTML = getArtist(song)
  artist.classList.add("song-artist")

  titleAndArtistContainer.appendChild(title)
  titleAndArtistContainer.appendChild(artist)
  titleAndArtist.appendChild(titleAndArtistContainer)

  let album = document.createElement("td")
  album.innerHTML = getAlbum(song)

  let addedAt = document.createElement("td")
  addedAt.innerHTML = getAddedAt(song)

  row.appendChild(titleAndArtist)
  row.appendChild(album)
  row.appendChild(addedAt)

  let table = document.querySelector("#songs_table")
  table.appendChild(row)
}

function createTable(songs){
  for(song of songs){
    createRow(song)
  }
}

fetch('/get_songs')
  .then(response => response.json())
  .then(songs => {
    createTable(songs)
    createAlbumCoverWall(songs)
  })

function filterByDate(){
  fetch('/get_songs')
    .then(response => response.json())
    .then(songs => {
      const startDate = new Date(document.querySelector('#album_input_start_date').value)
      const endDate = new Date(document.querySelector('#album_input_end_date').value)
      let added_at

      document.querySelectorAll('.song').forEach(song => song.remove());

      for (song of songs) {
        added_at = new Date(getAddedAt(song))
        if (added_at >= startDate && added_at <= endDate) {
          createRow(song)
        }
      }
    })
}

function createAlbumCoverWall(songs){
  let albumCover 
  let container = document.querySelector(".album-wall")
  let wall = []

  for (song of songs) {
    if(!wall.includes(getAlbum(song))){
      albumCover = document.createElement("img")
      albumCover.setAttribute("src", getAlbumCover(song))
      albumCover.setAttribute("alt", "Album cover")
      albumCover.classList.add("album-cover-slide")
      albumCover.classList.add("fade")
      albumCover.style.display = "none"
      container.appendChild(albumCover)
      wall.push(getAlbum(song))
    }
  }

  let i = 0
  let slides = document.querySelectorAll(".album-cover-slide")
  slides[0].style.display = 'block'

  setInterval(() => {
    if(i == slides.length - 1){
      slides[i].style.display = 'none'
      i = -1
      slides[0].style.display = 'block'
    }
    else{
      slides[i + 1].style.display = 'block';
      slides[i].style.display = 'none'
    }
    i += 1
  }, 4000, slides, i);
}


document.querySelector("#date_button").addEventListener("click", filterByDate)