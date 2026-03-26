---
layout: page
permalink: /repositories/
title: repositories
description:
nav: true
nav_order: 4
---

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<ul>
  {% for repo in site.data.repositories.github_repos %}
    <li><a href="https://github.com/{{ repo }}" target="_blank" rel="noopener noreferrer">{{ repo }}</a></li>
  {% endfor %}
</ul>
{% endif %}
