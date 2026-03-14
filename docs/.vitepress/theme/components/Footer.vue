<template>
  <footer class="site-footer">
    <!-- 上部：Logo 和导航 -->
    <div class="footer-top">
      <div class="footer-top-content">
        <div class="footer-brand">
          <img src="/logo.png" alt="ACCH Logo" class="footer-logo">
          <span class="footer-brand-text">ACCH Github</span>
        </div>
        <nav class="footer-nav">
          <a href="/" class="footer-nav-link">· 首页</a>
          <a href="/newbie/" class="footer-nav-link">· 新手上路</a>
          <a href="/mod/" class="footer-nav-link">· MOD专区</a>
          <a href="/server/" class="footer-nav-link">· 服务器</a>
          <a href="/event/" class="footer-nav-link">· 赛事</a>
          <a href="/creative/" class="footer-nav-link">· 优秀创作</a>
        </nav>
      </div>
    </div>
    
    <!-- 分隔线 -->
    <div class="footer-divider"></div>
    
    <!-- 下部：版权信息 -->
    <div class="footer-bottom">
      <div class="footer-container">
        <div class="footer-left">
          <p class="footer-text">本站所引用的所有 Mod 版权归原作者所有，本站仅提供资源导航与安装教程，旨在促进赛车模拟文化的传播。</p>
          <p class="footer-text">Released under the MIT License.</p>
        </div>
        <div class="footer-right">
          <p class="footer-copyright">Copyright © 2026 ACCH AND WeiVi</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-gutter);
  margin-top: auto;
  overflow-x: hidden;
  position: relative;
  z-index: 100;
  width: 100% !important;
  min-width: 100% !important;
  max-width: none !important;
  flex-shrink: 0;
}

.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
}

/* 上部区域 */
.footer-top {
  height: 250px;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.footer-top-content {
  max-width: 1440px;
  padding: 0 24px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo {
  width: 80px;
  height: 80px;
}

.footer-brand-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.footer-nav {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.footer-nav-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-nav-link:hover {
  color: var(--vp-c-brand);
}

/* 分隔线 - 全宽 */
.footer-divider {
  height: 1px;
  background: var(--vp-c-gutter);
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

/* 下部区域 */
.footer-bottom {
  padding: 24px 0 32px;
}

.footer-bottom .footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-left {
  flex: 1;
  min-width: 300px;
}

.footer-text {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0 0 8px 0;
  line-height: 1.6;
}

.footer-text:last-child {
  margin-bottom: 0;
}

.footer-right {
  flex-shrink: 0;
}

.footer-copyright {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

/* 响应式 */
@media (max-width: 768px) {
  .footer-top {
    height: auto;
    padding: 32px 16px;
  }
  
  .footer-top-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  
  .footer-nav {
    gap: 20px;
  }
  
  .footer-container {
    padding: 0 16px;
  }
  
  .footer-bottom .footer-container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .footer-left {
    min-width: auto;
  }
}
</style>
