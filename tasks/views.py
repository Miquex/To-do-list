from django.shortcuts import render
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer


# View for CRUD operations.

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at') #consult to get all tasks
    serializer_class =  TaskSerializer #Use serialazer created before
