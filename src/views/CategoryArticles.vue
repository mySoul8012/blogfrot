<template>
  <div class="category-articles">
    <div class="header">
      <h1>📂 分类: {{ category }}</h1>
      <p>以下是“{{ category }}”分类下的相关文章：</p>
    </div>

    <div v-if="filteredArticles.length > 0" class="article-list">
      <div v-for="article in filteredArticles" :key="article.id" class="article-item">
        <router-link :to="`/article/${article.id}`" class="article-link">
          <h2>{{ article.title }}</h2>
        </router-link>
        <p>{{ article.summary }}</p>
      </div>
    </div>
    <div v-else class="no-articles">
      <p>😕 该分类下暂无文章。</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "CategoryArticles",
  setup() {
    const route = useRoute();

    const mockArticles = [
      { id: 1, title: "文章 1", summary: "文章 1 摘要", category: "技术" },
      { id: 2, title: "文章 2", summary: "文章 2 摘要", category: "生活" },
      { id: 3, title: "文章 3", summary: "文章 3 摘要", category: "技术" },
      { id: 4, title: "文章 4", summary: "文章 4 摘要", category: "旅游" },
    ];

    const category = ref(route.params.category);

    const filteredArticles = computed(() =>
        mockArticles.filter((article) => article.category === category.value)
    );

    return {
      category,
      filteredArticles,
    };
  },
};
</script>

<style scoped>
.category-articles {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(to bottom, #f5f7fa, #ffffff); /* 渐变背景 */
  min-height: 100vh; /* 全屏高度 */
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  font-size: 32px;
  color: #409eff;
  margin-bottom: 10px;
}

.header p {
  font-size: 18px;
  color: #555;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.article-item {
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.article-link h2 {
  margin: 0;
  color: #409eff;
  font-size: 20px;
  transition: color 0.2s;
}

.article-link h2:hover {
  color: #007acc;
}

.article-item p {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}

.no-articles {
  font-size: 20px;
  color: #888;
}
</style>
