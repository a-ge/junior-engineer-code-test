# Generated by Django 4.0.1 on 2022-03-01 20:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_remove_post_hit_count_alter_post_posted_at_hitcount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hitcount',
            name='post',
            field=models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='blog.post'),
        ),
    ]
