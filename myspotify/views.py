from django.shortcuts import render
from .models import Song
from django.core.serializers import serialize
from django.http import HttpResponse

# Create your views here.

def index(request):
  return render(request, 'myspotify/index.html')

def playlist(request):
  return render(request, 'myspotify/playlist.html')

def top_tracks(request):
  return render(request, 'myspotify/top_tracks.html')

def audio_features(request):
  return render(request, 'myspotify/audio_features.html')

def get_song(request, song_id):
  song = Song.objects.get(id = song_id)
  data = serialize('json', [song])
  return HttpResponse(data, content_type="application/json")

def get_songs(request):
  all_songs = Song.objects.all()
  data = serialize("json", all_songs)
  return HttpResponse(data, content_type="application/json")

def get_top_tracks(request):
  top_tracks = Song.objects.filter(rank__gte=1)
  data = serialize("json", top_tracks)
  return HttpResponse(data, content_type="application/json")