from rest_framework import serializers
from taggit.serializers import (TagListSerializerField, TaggitSerializer)

from .models import Project


class ProjectSerializer(TaggitSerializer, serializers.ModelSerializer):

    tags = TagListSerializerField()

    class Meta:
        model = Project
        fields = "__all__"
