from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('playlist', views.playlist, name='playlist'),
    path('top_tracks', views.top_tracks, name='top_tracks'),
    path('getting_data', views.getting_data, name='getting_data'),
    path('get_songs', views.get_songs, name='get_songs'),
    path('get_top_tracks', views.get_top_tracks, name='get_top_tracks')
]