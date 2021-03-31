let audioFeatures =  [
  { key:"danceability",
    value: 0.408,
    explanation: 'Danceability describes how suitable a track is for dancing based on a combination of musical elements \
    including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.'
  },
  {
    key: "energy",
    value: 0.593,
    explanation: 'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity.'
  },
  {
    key: "key",
    value: 0,
    explanation: 'The key the track is in. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.'
  },
  {
    key: "loudness",
    value: -6.246,
    explanation: 'The overall loudness of a track in decibels (dB).'
  },
  {
    key: "mode",
    value: 1,
    explanation: 'Mode indicates the modality (major or minor) of a track,\
    the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.'
  },
  {
    key: "speechiness",
    value: 0.0299,
    explanation: 'Speechiness detects the presence of spoken words in a track.\
    The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.'
  },
  {
    key: "acousticness",
    value: 0.0708,
    explanation: 'A measure from 0.0 to 1.0 of whether the track is acoustic.'
  },
  {
    key: "instrumentalness",
    value: 0.186,
    explanation: 'This value represents the amount of vocals in the song. The closer it is to 1.0, the more instrumental the song is.'
  },
  { 
    key: "liveness",
    value: 0.117,
    explanation: 'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.'
  },
  {
    key: "valence",
    value: 0.262,
    explanation: 'A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track.'
  },
  {
    key: "tempo",
    value: 121.993,
    explanation: 'The overall estimated tempo of a track in beats per minute (BPM)'
  },
  {
    key: "duration_ms",
    value: 250380,
    explanation: 'Duration in milisseconds'
  },
  {
    key: "time_signature",
    value: 3,
    explanation: 'An estimated overall time signature of a track. The time signature (meter) is a notational convention to\
    specify how many beats are in each bar (or measure).'
  }
]

const featuresContainer = document.querySelector(".audio-features")

for(feature of audioFeatures){
  card = document.createElement("div")
  card.classList.add("feature-card")
 
  title = document.createElement("h2")
  card.appendChild(title)
  explanation = document.createElement("p")
  explanation.classList.add("explanation")
  card.appendChild(explanation)
  value = document.createElement("p")
  card.appendChild(value)

  title.innerHTML = feature.key
  explanation.innerHTML = feature.explanation
  value.innerHTML = feature.value

  featuresContainer.appendChild(card)
}

fetch('/146')
  .then(response => response.json())
  .then(song => {
    song = song[0]
    let container = document.querySelector(".song-details")

    let albumCover = document.createElement("img")
    albumCover.setAttribute("src", getAlbumCover(song))
    albumCover.setAttribute("alt", "Album cover")
    albumCover.classList.add("album-cover-slide")
    
    container.appendChild(albumCover)
  })