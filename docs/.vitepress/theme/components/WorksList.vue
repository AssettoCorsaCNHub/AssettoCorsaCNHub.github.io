<template>
  <div class="works-list">
    <div v-for="(work, index) in works" :key="index" class="work-item">
      <h2 :id="`work-${index}`">
        <a :href="work.link" target="_blank">{{ work.title }}</a>
      </h2>
      <p><strong>作者</strong>: {{ work.author }}</p>
      <p><strong>简介</strong>: {{ work.description }}</p>
      <a :href="work.link" target="_blank">
        <img :src="work.image" :alt="work.title" class="work-image">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import worksData from '../data/works.json'

const works = worksData
</script>

<style scoped>
.works-list {
  margin: 0 auto;
  max-width: 800px;
}

.work-item {
  margin-bottom: 48px;
  padding-bottom: 32px;
}

.work-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.work-item h2 {
  margin-bottom: 12px;
  font-size: 1.5rem;
  font-weight: 600;
}

.work-item h2 a {
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.work-item h2 a:hover {
  color: var(--vp-c-brand);
}

.work-item p {
  margin: 8px 0;
  color: var(--vp-c-text-2);
}

.work-image {
  width: 100%;
  max-width: 640px;
  border-radius: 8px;
  margin-top: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.work-image:hover {
  transform: scale(1.02);
}
</style>
