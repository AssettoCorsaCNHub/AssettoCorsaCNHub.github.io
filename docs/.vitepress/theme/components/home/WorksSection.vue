<template>
  <section class="works-section">
    <div class="works-container">
      <h2 class="section-title">优秀创作推荐</h2>
      <div class="works-grid">
        <div v-for="(work, index) in works" :key="index" class="work-card">
          <a :href="work.link" target="_blank" class="work-link">
            <div class="work-image">
              <img :src="work.image" :alt="work.title">
            </div>
            <div class="work-info">
              <h3 class="work-title">{{ work.title }}</h3>
              <p class="work-author">作者: {{ work.author }}</p>
              <p class="work-desc">{{ work.description }}</p>
            </div>
          </a>
        </div>
      </div>
      <div class="view-more">
        <a href="/creative/works" class="view-more-link">查看更多 →</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import worksData from '../../data/works.json'

const works = worksData
  .filter((work: any) => work.show_index)
  .slice(0, 9)
</script>

<style scoped>
.works-section {
  padding: 80px 24px;
  background: var(--vp-c-bg);
}

.works-container {
  max-width: 1440px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
  color: var(--vp-c-text-1);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-bottom: 40px;
  justify-items: center;
}

.work-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--vp-c-gutter);
  width: 100%;
  max-width: 500px;
}

.work-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.work-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.work-image {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: var(--vp-c-bg-mute);
}

.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.work-card:hover .work-image img {
  transform: scale(1.05);
}

.work-info {
  padding: 24px;
}

.work-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.work-author {
  font-size: 0.9rem;
  color: var(--vp-c-brand);
  margin-bottom: 12px;
  font-weight: 500;
}

.work-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.view-more {
  text-align: center;
}

.view-more-link {
  display: inline-flex;
  align-items: center;
  padding: 12px 32px;
  background: var(--vp-c-brand);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.2s ease;
}

.view-more-link:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .works-section {
    padding: 60px 16px;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }

  .works-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .work-info {
    padding: 20px;
  }
}
</style>
