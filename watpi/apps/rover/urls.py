# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^move/(?P<direction>[\w]{1,10})$', views.move, name='move'),
    url(r'^stop$', views.stop, name='stop'),
]
