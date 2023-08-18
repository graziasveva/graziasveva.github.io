---
layout: blog
title: "Blog"
---

# Welcome to my blog!

Here are my latest posts:

{% for post in site.posts %}
* [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
