from django.db import models

# Create your models here.

class Song(models.Model):
  added_at = models.CharField(max_length=64, null=True)
  album_cover = models.CharField(max_length=64, null=True)
  album_name = models.CharField(max_length=64, null=True)
  artist = models.CharField(max_length=64, null=True)
  title = models.CharField(max_length=64, null=True)
  rank = models.IntegerField(null=True)