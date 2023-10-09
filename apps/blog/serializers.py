<<<<<<< HEAD
=======
from unicodedata import category
>>>>>>> master
from rest_framework import serializers
from .models import Post
from apps.category.serializers import CategorySerializer

<<<<<<< HEAD
class postSerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source= 'get_thumbnail')
    video=serializers.CharField(source='get_video')
    category=CategorySerializer
=======
class PostSerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source='get_thumbnail')
    video=serializers.CharField(source='get_video')
    category=CategorySerializer()
>>>>>>> master
    class Meta:
        model=Post
        fields=[
            'blog_uuid',
<<<<<<< HEAD
            'tittle',
=======
            'title',
>>>>>>> master
            'slug',
            'thumbnail',
            'video',
            'description',
            'excerpt',
<<<<<<< HEAD
            'category'
            'published',
            'status',
            #'author', 
=======
            'category',
            'published',
            'status',
>>>>>>> master
        ]