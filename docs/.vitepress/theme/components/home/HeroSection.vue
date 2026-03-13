<template>
  <section class="hero">
    <div class="hero-content">
      <img src="/logo.png" alt="Assetto Corsa CN Hub" class="logo" />
      <h1>神力科莎中文社区</h1>
      <p>欢迎来到 Assetto Corsa 中文 Wiki，为玩家提供游戏相关的各种信息和资源</p>
      <div class="hero-buttons">
        <a href="/newbie/" class="btn-primary">新手上路</a>
        <a href="/mod/" class="btn-secondary">MOD专区</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  border-radius: 12px;
  margin-bottom: 3rem;
  color: white;
  width: 100%;
}

.logo {
  width: 120px;
  height: 120px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>