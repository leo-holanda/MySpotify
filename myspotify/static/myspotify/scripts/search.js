function search(getData, inputID){
  fetch('/get_songs')
    .then(response => response.json())
    .then(songs => {

    const input = document.querySelector(inputID).value
    if (input == '') return false

    document.querySelectorAll('.song').forEach(song => song.remove());

    for(song of songs){
      if(getData(song).toLowerCase().includes(input.toLowerCase())){
        createRow(song)
      }
    }
  })
}

document.querySelector("#title_button").addEventListener("click", () => {
  search(getTitle, '#title_input')
})
document.querySelector("#artist_button").addEventListener("click", () => {
  search(getArtist, '#artist_input')
})
document.querySelector("#album_button").addEventListener("click", () => {
  search(getAlbum, '#album_input')
})
