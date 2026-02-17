---
layout: page
permalink: /repositories/
title: Repo
description:
nav: true
nav_order: 4
---

<style>
  .gh-profile-card {
    background: #292524;
    border: 1px solid #44403c;
    border-radius: 16px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .gh-profile-card img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #f97316;
  }
  .gh-profile-card .gh-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff !important;
  }
  .gh-profile-card .gh-login {
    color: #f97316 !important;
    font-size: 0.875rem;
    text-decoration: none !important;
  }
  .gh-profile-card .gh-stats {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }
  .gh-profile-card .gh-stat {
    font-size: 0.8rem;
    color: #a8a29e !important;
  }
  .gh-profile-card .gh-stat strong {
    color: #fff !important;
    font-weight: 600;
  }
  .gh-repos-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 640px) {
    .gh-repos-grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
  .gh-repo-card {
    background: #292524;
    border: 1px solid #44403c;
    border-radius: 16px;
    padding: 1.25rem;
    transition: border-color 0.2s ease, transform 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .gh-repo-card:hover {
    border-color: #f97316;
    transform: translateY(-2px);
  }
  .gh-repo-card a {
    text-decoration: none !important;
  }
  .gh-repo-card .gh-repo-name {
    font-size: 1rem;
    font-weight: 600;
    color: #f97316 !important;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .gh-repo-card .gh-repo-name svg {
    flex-shrink: 0;
  }
  .gh-repo-card .gh-repo-desc {
    font-size: 0.85rem;
    color: #a8a29e !important;
    margin-top: 0.5rem;
    line-height: 1.5;
  }
  .gh-repo-card .gh-repo-meta {
    display: flex;
    gap: 1rem;
    margin-top: 0.75rem;
    font-size: 0.75rem;
    color: #78716c !important;
  }
  .gh-repo-card .gh-repo-meta span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #78716c !important;
  }
  .gh-repo-card .gh-lang-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .gh-loading {
    color: #78716c !important;
    font-size: 0.875rem;
    padding: 1rem;
  }
  /* Mobile: make contribution chart scrollable */
  @media (max-width: 639px) {
    .gh-profile-card img {
      width: 60px;
      height: 60px;
    }
    .gh-profile-card .gh-stats {
      gap: 1rem;
    }
  }
</style>

## GitHub Profile

<div id="gh-profile"></div>

---

## GitHub Repositories

<div id="gh-repos" class="gh-repos-grid">
  <p class="gh-loading">Loading repositories...</p>
</div>

---

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

<script>
(function() {
  var username = '{{ site.data.repositories.github_users.first }}';
  if (!username) return;

  // Language color map
  var langColors = {
    'Python': '#3572A5', 'JavaScript': '#f1e05a', 'TypeScript': '#3178c6',
    'Rust': '#dea584', 'C': '#555555', 'C++': '#f34b7d', 'Java': '#b07219',
    'HTML': '#e34c26', 'CSS': '#563d7c', 'Shell': '#89e051', 'Ruby': '#701516',
    'Go': '#00ADD8', 'Jupyter Notebook': '#DA5B0B', 'Makefile': '#427819',
    'CMake': '#DA3434', 'Dockerfile': '#384d54'
  };

  // Fetch profile
  fetch('https://api.github.com/users/' + username)
    .then(function(r) { return r.json(); })
    .then(function(u) {
      var el = document.getElementById('gh-profile');
      if (!el || u.message) return;
      el.innerHTML =
        '<div class="gh-profile-card">' +
          '<img src="' + u.avatar_url + '" alt="' + u.login + '">' +
          '<div>' +
            '<div class="gh-name">' + (u.name || u.login) + '</div>' +
            '<a href="' + u.html_url + '" target="_blank" class="gh-login">@' + u.login + '</a>' +
            '<div class="gh-stats">' +
              '<span class="gh-stat"><strong>' + u.public_repos + '</strong> repos</span>' +
              '<span class="gh-stat"><strong>' + u.followers + '</strong> followers</span>' +
              '<span class="gh-stat"><strong>' + u.following + '</strong> following</span>' +
            '</div>' +
          '</div>' +
        '</div>';
    });

  // Fetch repos
  fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=30')
    .then(function(r) { return r.json(); })
    .then(function(repos) {
      var el = document.getElementById('gh-repos');
      if (!el || !Array.isArray(repos)) return;

      // Filter out .github.io repo (this site) and sort by stars then recent
      repos = repos.filter(function(r) { return !r.fork || r.stargazers_count > 0; });
      repos.sort(function(a, b) { return b.stargazers_count - a.stargazers_count; });

      var html = '';
      repos.forEach(function(repo) {
        var langDot = '';
        if (repo.language && langColors[repo.language]) {
          langDot = '<span class="gh-lang-dot" style="background:' + langColors[repo.language] + ';"></span>';
        } else if (repo.language) {
          langDot = '<span class="gh-lang-dot" style="background:#78716c;"></span>';
        }

        html +=
          '<a href="' + repo.html_url + '" target="_blank" class="gh-repo-card">' +
            '<div>' +
              '<div class="gh-repo-name">' +
                '<svg width="16" height="16" viewBox="0 0 16 16" fill="#78716c"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/></svg>' +
                repo.name +
              '</div>' +
              (repo.description ? '<div class="gh-repo-desc">' + repo.description + '</div>' : '') +
            '</div>' +
            '<div class="gh-repo-meta">' +
              (repo.language ? '<span>' + langDot + ' ' + repo.language + '</span>' : '') +
              '<span>&#9733; ' + repo.stargazers_count + '</span>' +
              '<span>&#9746; ' + repo.forks_count + '</span>' +
            '</div>' +
          '</a>';
      });

      el.innerHTML = html;
    });
})();
</script>
