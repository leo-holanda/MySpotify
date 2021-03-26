function createRow(song){
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

  row.appendChild(titleAndArtist)
  row.appendChild(album)

  let table = document.querySelector("#songs_table")
  table.appendChild(row)
}

function createTable(songs){
  for(song of songs){
    createRow(song)
  }
}

fetch('/get_top_tracks')
  .then(response => response.json())
  .then(songs => {
    createTable(songs)
  })
