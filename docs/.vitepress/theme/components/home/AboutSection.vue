<template>
  <section class="about-section">
    <div class="about-content">
      <h2 class="about-title">关于ACCH（AssettoCorsaCNHub）</h2>
      <p class="about-description">
        AssettoCorsa ACC 中国俱乐部，是一个公益免费的新手入门的综合的AC安装MOD和参考调整的开源社区站点，致力推进国内AC的游玩环境，指引新手玩家快速体验AC乐趣的社区
      </p>
      <p class="about-description">
        ACCH目前处于开源状态，欢迎志同道合的玩家一起维护
      </p>
      <a href="https://github.com/AssettoCorsaCNHub/AssettoCorsaCNHub.github.io" target="_blank" class="about-button">
        Github >
      </a>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  margin-top:150px;
  position: relative;
  width: 100%;
  min-height: 400px;
  background-image: url('/home-2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 60px 24px;
  box-sizing: border-box;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.about-content {
  position: relative;
  z-index: 2;
  max-width: 1440px;
  padding: 0px 20px;
  margin: 0 auto;
  width: 100%;
}

.about-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  line-height: 1.3;
}

.about-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 16px;
}

.about-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  margin-top: 24px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.about-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
}

@media (max-width: 768px) {
  .about-section {
    padding: 40px 20px;
    min-height: 350px;
  }

  .about-title {
    font-size: 1.5rem;
  }

  .about-description {
    font-size: 0.9rem;
  }
}
</style>
