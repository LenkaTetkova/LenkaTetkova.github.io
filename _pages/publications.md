---
layout: archive
title: "Publications"
permalink: /_publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}



# Published
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


# Preprints
{% for post in site.preprints reversed %}
  {% include archive-single.html %}
{% endfor %}


# In review
{% for post in site.in_review reversed %}
  {% include archive-single.html %}
{% endfor %}

