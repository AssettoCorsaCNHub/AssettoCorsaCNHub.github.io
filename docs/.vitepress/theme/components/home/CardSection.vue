<template>
  <section class="card-section">
    <div class="card-title">快速入门 Assetto Corsa</div>
    <div class="card-container">
      <div class="card">
        <h3>新手指南</h3>
        <p>从游戏介绍，到必装插件，推荐MOD，驾驶参数及游戏设置的详细讲解及获取</p>
        <div class="card-button-container">
          <a href="/newbie/" class="card-button">前往查看 ></a>
        </div>
      </div>
      <div class="card">
        <h3>MOD专区</h3>
        <p>如何安装MOD及画质优化，物理，光效，以及常用MOD推荐</p>
        <div class="card-button-container">
          <a href="/mod/" class="card-button">前往查看 ></a>
        </div>
      </div>
      <div class="card">
        <h3>服务器推荐</h3>
        <p>服务器是什么，如何进入服务器，国内有那些服务器可以游玩</p>
        <div class="card-button-container">
          <a href="/server/" class="card-button">前往查看 ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-section {
  padding: 40px 20px;
  margin: 0 -20px;
}

.card-container {
  padding: 0 20px;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 90px;
  margin-top: 30px;
  text-align: center;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid #dddddd;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 280px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  /* background: linear-gradient(90deg, #1890ff, #40a9ff); */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: block;
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 25px;
  flex: 1;
}

.card-button-container {
  margin-top: auto;
  margin-bottom: 0;
}

.card-button {
  display: inline-block;
  padding: 8px 20px;
  background-color: white;
  color: #1890ff;
  text-decoration: none;
  border: 1px solid #1890ff;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.card-button:hover {
  background-color: #f0f7ff;
  border-color: #40a9ff;
  color: #40a9ff;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .card-section {
    padding: 30px 15px;
    margin: 0 -15px;
  }
  
  .card-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .card {
    padding: 25px;
  }
  
  .card h3 {
    font-size: 1.3rem;
  }
  
  .card p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .card-section {
    padding: 20px 10px;
    margin: 0 -10px;
  }
  
  .card {
    padding: 20px;
  }
  
  .card-icon {
    font-size: 2rem;
  }
  
  .card h3 {
    font-size: 1.2rem;
  }
  
  .card p {
    font-size: 0.85rem;
  }
}
</style>