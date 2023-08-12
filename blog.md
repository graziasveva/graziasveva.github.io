---
layout: blog
title: "Blog"
---
# All about patent analytics and artificial intelligence

Here are my latest posts:

{% for post in site.posts %}
* [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
