<template>
  <div class="home-page">
    <div class="home-container">
      <HeroSection />
      <CardSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './home/HeroSection.vue'
import CardSection from './home/CardSection.vue'
</script>

<style>
/* 顶层容器占满全宽 - 使用 CSS 技巧突破父容器限制 */
.home-page {
  width: 100% !important;
  max-width: none !important;
  min-height: 100vh;
  overflow-x: hidden;
}

/* 测试区域占满全宽 */
.topsection {
  width: 100vw;
  height: 300px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  font-weight: bold;
  margin-left: calc(-50vw + 50%);
  margin-top: 120px;
}

/* 内容容器 */
.home-container {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>