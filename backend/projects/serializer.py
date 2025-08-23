from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project

        fields = [
            "id",
            "title",
            "slug",
            "summary",
            "body_url",
            "body_text",
            "preview_image",
            "date_created",
            "date_updated",
        ]
