from django.db import models


class Url(models.Model):
    original_link = models.URLField(max_length=300)