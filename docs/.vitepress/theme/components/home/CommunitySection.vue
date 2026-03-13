<template>
  <section class="community">
    <h2>加入社区</h2>
    <p>与其他玩家交流，分享经验和资源</p>
    <a href="https://github.com/AssettoCorsaCNHub/AssettoCorsaCNHub.github.io" target="_blank" class="btn-primary">GitHub 仓库</a>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.community {
  text-align: center;
  padding: 3rem 2rem;
  background: #f1f5f9;
  border-radius: 12px;
  width: 100%;
}

.community h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1e3a8a;
}

.community p {
  margin-bottom: 2rem;
  color: #64748b;
  font-size: 1.1rem;
}

.btn-primary {
  background: #ffffff;
  color: #1e3a8a;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #f3f4f6;
  transform: translateY(-2px);
}
</style>