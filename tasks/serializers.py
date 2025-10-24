#This code is for convert python and django in JSON format :)
from rest_framework import serializers 
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task

        fields = ('id', 'title', 'description', 'completed', 'created_at')