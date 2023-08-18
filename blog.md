---
layout: blog
title: "Blog"
---

# Blog

Here are my latest posts:


{% for post in site.posts %}
* [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }} ![Fire GIF]({{ site.baseurl }}/assets/img/calci.gif)
{% endfor %}
