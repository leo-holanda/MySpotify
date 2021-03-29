from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('playlist', views.playlist, name='playlist'),
    path('top_tracks', views.top_tracks, name='top_tracks'),
    path('audio_features', views.audio_features, name='audio_features'),
    path('<int:song_id>', views.get_song, name='get_song'),
    path('get_songs', views.get_songs, name='get_songs'),
    path('get_top_tracks', views.get_top_tracks, name='get_top_tracks')
]