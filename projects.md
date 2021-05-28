---
layout: page
title: Projects
permalink: projects
---

{%- assign _projects = "" | split: ", " -%}
{% for page in site.pages %}
  {% if page.categories contains 'Project' %}
    {%- assign _projects = page | concat: _projects -%}
  {% endif %}
{% endfor %}

<div class="layout--articles">
  {%- include article-list.html
  articles=_projects
  type='item'
  show_cover=true
  show_excerpt=true
  show_readmore=true
  show_info=true
  -%}
</div>
