---
layout: page
permalink: /repositories/
title: Repo
description:
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.github_users %}

## Contribution Activity

{% for user in site.data.repositories.github_users %}
<div style="text-align: center; margin-bottom: 1.5rem; background: #292524; border: 1px solid #44403c; border-radius: 12px; padding: 1.5rem;">
  <a href="https://github.com/{{ user }}">
    <img alt="{{ user }} GitHub contributions" src="https://ghchart.rshah.org/f97316/{{ user }}" style="width: 100%; max-width: 100%; border-radius: 8px;">
  </a>
</div>
{% endfor %}
{% endif %}
