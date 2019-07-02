from django.conf import settings
from django.db import models
from django.utils import timezone

class Post(models.Model): #creates an object: posts
    # the following are properties of the object
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(blank=True, null=False)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self): #creates a method to publish stuff
        self.published_date = timezone.now()
        self.save

    def __str__(self): #another method
        return self.title
