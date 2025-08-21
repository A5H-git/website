from django.http import Http404
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework.request import Request
from rest_framework.response import Response

from .models import Project
from .serializer import ProjectSerializer

DEFAULT_N_RECENTS = 3


# Endpoints
class ProjectList(APIView):

    def process_queries(self, request: Request):

        # Check featured tag
        featured = request.query_params.get("featured", "false").lower() == "true"

        if featured:
            n_featured = int(request.query_params.get("n_recent", DEFAULT_N_RECENTS))
            projects = Project.objects.order_by("-date_created")[:n_featured]

        else:
            projects = Project.objects.all()

        return projects

    def get(self, request):
        projects = self.process_queries(request)
        # projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProjectDetail(APIView):

    def get(self, request, pk: int | None = None, slug: str | None = None):

        if pk:
            project = get_object_or_404(Project, pk=pk)
        else:
            project = get_object_or_404(Project, slug=slug)

        serializer = ProjectSerializer(project)
        return Response(serializer.data, status=status.HTTP_200_OK)
