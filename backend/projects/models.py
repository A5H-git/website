from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True, null=True)
    body = models.TextField(default="")
    summary = models.TextField(default="")

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateField(auto_now_add=True)

    preview_image = models.ImageField(
        upload_to="project_previews", blank=True, null=True
    )

    def __str__(self) -> str:
        return self.title
