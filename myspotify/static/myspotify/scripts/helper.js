function getTitle(song) {
  return song.fields.title
}

function getArtist(song) {
  return song.fields.artist
}

function getAlbum(song) {
  return song.fields.album_name
}

function getAlbumCover(song) {
  return song.fields.album_cover
}


function getAddedAt(song) {
  return song.fields.added_at
  // return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

function isValidInput(input){
  return input != null && input != '' ? true : false
}