<template>
  <div class="about">
    <div class="about-card">
      <h1>关于我们</h1>
      <p>🌟 这是一个博客项目，展示文章、分类以及其他相关信息。</p>
      <p>👨‍💻 开发者：<strong>你的名字</strong></p>
      <p>📧 联系方式：<a href="mailto:example@example.com">example@example.com</a></p>
      <p>💡 感谢您的关注！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 全屏高度 */
  background: linear-gradient(to bottom, #eef2f3, #ffffff);
  padding: 20px;
}

.about-card {
  max-width: 600px;
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.about-card h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #409eff;
}

.about-card p {
  font-size: 18px;
  line-height: 1.8;
  margin: 10px 0;
  color: #555;
}

.about-card a {
  color: #409eff;
  text-decoration: none;
  transition: color 0.2s;
}

.about-card a:hover {
  color: #007acc;
}

.about-card strong {
  color: #333;
  font-weight: bold;
}

</style>
