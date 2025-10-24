from django.db import models

class Task(models.Model):
    
    #text
    title = models.CharField(max_length=200)
    description= models.TextField(blank = True, null= True)

    #state
    completed = models.BooleanField(default=False)

    #date
    created_at = models.DateTimeField(auto_now_add=True)

    def __srt__(self):
        return self.title

