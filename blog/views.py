from django.http.response import Http404
from .models import Post, HitCount

from django.http import HttpResponse
from django.shortcuts import render
from django.db.models import F

def index(request):
    latest_blog_posts = Post.objects.order_by('-posted_at')[:5]
    return render(request, 'blog/index.html', {'latest_blog_posts': latest_blog_posts})

def detail(request, post_id):
    try:
        post = Post.objects.get(pk=post_id)

        # hit_check returns a tuple (object, created_Boolean)
        # either created a new object with 0 hits, or grabbed already exiting object
        hit_check = HitCount.objects.get_or_create(post=post)
        # pull object from hit_check
        hit_count = hit_check[0]

        hit_count.hit_count = F('hit_count') + 1
        hit_count.save()
        hit_count.refresh_from_db()

    except Post.DoesNotExist:
        raise Http404("Post with given ID does not exist")

    return render(request, 'blog/detail.html', {'post': post, 'hit_count': hit_count})
