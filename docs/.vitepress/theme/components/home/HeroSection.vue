<template>
  <section class="hero">
    <div class="hero-content">
      <h1>神力科莎中文社区 | 你的第一站</h1>
      <h2>助力新手玩家极速起步。从零教你配置 MC、安装 Mod，开启你的驾驶生涯</h2>
      <a href="/newbie/" class="btn-primary">新手玩家入口 ></a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background-image: url('/home-1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: calc(100% - 70px);
  margin: 35px;
  margin-top: 120px;
  border-radius: 15px;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: left;
  color: white;
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.hero-content h2 {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.btn-primary {
  display: inline-block;
  padding: 12px 30px;
  background-color: #188fff98;
  color: white;
  text-decoration: none;
  border: 2px solid #ffffff93;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #40a9ff;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

</style>