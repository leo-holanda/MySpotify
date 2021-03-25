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

def getting_data(request):
  return render(request, 'myspotify/getting_data.html')

def get_songs(request):
  all_songs = Song.objects.all()
  data = serialize("json", all_songs)
  return HttpResponse(data, content_type="application/json")