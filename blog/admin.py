from django.contrib import admin
from blog.models import Post, HitCount


class PostAdmin(admin.ModelAdmin):
    pass

admin.site.register(Post, PostAdmin)
admin.site.register(HitCount)
