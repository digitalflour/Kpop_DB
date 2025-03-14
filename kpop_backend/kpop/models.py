from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=255)
    debut_date = models.DateField()
    company = models.CharField(max_length=255, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Album(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField()
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name="albums")

    def __str__(self):
        return f"{self.title} by {self.artist.name}"

class Song(models.Model):
    title = models.CharField(max_length=255)
    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name="songs")
    duration = models.TimeField()
    genre = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.title} ({self.album.title})"
