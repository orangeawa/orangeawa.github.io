<script setup lang="ts">
import { data as posts } from './posts.data'
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.url" class="post-item">
      <span class="post-date">{{ post.frontmatter.date }}</span>
      <a :href="post.url" class="post-title">{{ post.frontmatter.title }}</a>
    </div>
  </div>
</template>

<style scoped>
.post-list { margin-top: 20px; }
.post-item { margin-bottom: 12px; display: flex; gap: 15px; }
.post-date { color: #888; font-variant-numeric: tabular-nums; }
.post-title { color: var(--vp-c-brand-1); text-decoration: none; }
.post-title:hover { text-decoration: underline; }
</style>
