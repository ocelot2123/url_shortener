from django.db import models


class Url(models.Model):
    link = models.URLField(max_length=300)