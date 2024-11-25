<template>
  <div class="article-detail">
    <div class="article-card">
      <h1 class="title">{{ article.title }}</h1>
      <div class="meta">
        <span>✍️ 作者：<strong>{{ article.author }}</strong></span>
        <span>📅 发布日期：{{ article.date }}</span>
      </div>
      <div class="content">
        <p>{{ article.content }}</p>
      </div>
      <el-button type="primary" @click="goBack" class="back-button">
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "ArticleDetail",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const mockArticles = [
      {
        id: 1,
        title: "文章标题 1",
        author: "作者 A",
        date: "2024-01-01",
        content: "这是文章 1 的详细内容，展示更多的信息。",
      },
      {
        id: 2,
        title: "文章标题 2",
        author: "作者 B",
        date: "2024-01-02",
        content: "这是文章 2 的详细内容，展示更多的信息。",
      },
    ];

    const article = ref(
        mockArticles.find((item) => item.id === parseInt(route.params.id)) || {}
    );

    const goBack = () => {
      router.push("/");
    };

    return {
      article,
      goBack,
    };
  },
};
</script>

<style scoped>
.article-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 高度设置为全屏 */
  background: linear-gradient(to bottom, #f5f7fa, #ffffff); /* 背景渐变 */
  padding: 20px;
}

.article-card {
  max-width: 800px;
  width: 100%;
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.title {
  font-size: 28px;
  color: #409eff;
  margin-bottom: 20px;
}

.meta {
  font-size: 14px;
  color: #555;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.meta span {
  display: block;
}

.content {
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 20px;
}

.back-button {
  display: block;
  margin: 0 auto;
  background-color: #409eff;
  color: #fff;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #007acc;
}
</style>
