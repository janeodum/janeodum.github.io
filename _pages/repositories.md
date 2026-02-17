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
<div class="text-center mb-4">
  <a href="https://github.com/{{ user }}">
    <img class="only-dark w-100" alt="{{ user }} streak stats" src="https://github-readme-streak-stats.herokuapp.com/?user={{ user }}&theme=dark&hide_border=true&background=1c1917&ring=f97316&fire=f97316&currStreakLabel=f97316&sideLabels=d6d3d1&dates=78716c&currStreakNum=ffffff&sideNums=ffffff" style="border-radius: 12px; border: 1px solid #44403c; max-width: 100%;">
    <img class="only-light w-100" alt="{{ user }} streak stats" src="https://github-readme-streak-stats.herokuapp.com/?user={{ user }}&theme=dark&hide_border=true&background=1c1917&ring=f97316&fire=f97316&currStreakLabel=f97316&sideLabels=d6d3d1&dates=78716c&currStreakNum=ffffff&sideNums=ffffff" style="border-radius: 12px; border: 1px solid #44403c; max-width: 100%;">
  </a>
</div>
<div class="text-center mb-4">
  <a href="https://github.com/{{ user }}">
    <img class="only-dark w-100" alt="{{ user }} activity graph" src="https://github-readme-activity-graph.vercel.app/graph?username={{ user }}&theme=react-dark&bg_color=1c1917&color=d6d3d1&line=f97316&point=fb923c&area_color=f97316&area=true&hide_border=true" style="border-radius: 12px; border: 1px solid #44403c; max-width: 100%;">
    <img class="only-light w-100" alt="{{ user }} activity graph" src="https://github-readme-activity-graph.vercel.app/graph?username={{ user }}&theme=react-dark&bg_color=1c1917&color=d6d3d1&line=f97316&point=fb923c&area_color=f97316&area=true&hide_border=true" style="border-radius: 12px; border: 1px solid #44403c; max-width: 100%;">
  </a>
</div>
{% endfor %}
{% endif %}
