from django.db import models

# Create your models here.

class Song(models.Model):
  added_at = models.CharField(max_length=64)
  album_cover = models.CharField(max_length=64)
  album_name = models.CharField(max_length=64)
  artist = models.CharField(max_length=64)
  title = models.CharField(max_length=64)