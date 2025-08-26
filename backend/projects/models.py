from django.db import models

from taggit.managers import TaggableManager

class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True, null=True)
    summary = models.TextField(default="")

    body_text = models.TextField(default="")

    body_url = models.FileField(upload_to="project_files", blank=True, null=True)

    preview_image = models.ImageField(
        upload_to="project_previews", blank=True, null=True
    )

    tags = TaggableManager()

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title
