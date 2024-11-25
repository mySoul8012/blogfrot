<template>
  <div class="home">
    <!-- 搜索框 -->
    <div class="search">
      <el-input
          v-model="searchTerm"
          placeholder="🔍 搜索文章"
          clearable
          @input="filterArticles"
          class="search-bar"
      />
    </div>

    <!-- 加载提示 -->
    <div v-if="isLoading" class="loading">
      <p>数据加载中...</p>
    </div>

    <!-- 文章列表 -->
    <div v-else>
      <div v-if="filteredArticles.length > 0" class="article-list">
        <div
            v-for="article in filteredArticles"
            :key="article._id"
            class="article-item"
        >
          <router-link :to="`/article/${article._id}`" class="article-title">
            <h2>{{ article.title }}</h2>
          </router-link>
          <p class="article-summary">{{ article.summary }}</p>
          <div class="meta">
            <span class="author">👤 作者：{{ article.author }}</span>
            <span class="date">📅 {{ article.date }}</span>
          </div>
        </div>
      </div>
      <div v-else class="no-articles">
        <p>😕 没有找到符合条件的文章。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const articles = ref([]); // 存储从后端获取的文章数据
    const isLoading = ref(true); // 加载状态
    const searchTerm = ref(""); // 搜索关键字

    // 根据搜索条件过滤文章
    const filteredArticles = computed(() => {
      if (!searchTerm.value.trim()) {
        return articles.value;
      }
      return articles.value.filter(
          (article) =>
              article.title.includes(searchTerm.value) ||
              article.summary.includes(searchTerm.value)
      );
    });

    // 获取文章数据
    const fetchArticles = async () => {
      isLoading.value = true; // 设置为加载中
      try {
        const response = await fetch("http://54.211.112.202:3000/api/articles");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        articles.value = Array.isArray(data) ? data : []; // 确保返回的数据为数组
      } catch (error) {
        console.error("获取文章数据失败:", error);
        articles.value = []; // 出现错误时设置为空数组
      } finally {
        isLoading.value = false; // 加载完成
      }
    };

    // 页面加载时获取文章数据
    onMounted(() => {
      fetchArticles();
    });

    return {
      articles,
      isLoading,
      searchTerm,
      filteredArticles,
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #f5f7fa, #ffffff);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.search-bar {
  max-width: 600px;
  width: 100%;
  border-radius: 6px;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-item {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.article-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.article-title h2 {
  margin: 0;
  color: #409eff;
  font-size: 1.5rem;
  transition: color 0.2s;
}

.article-title:hover h2 {
  color: #007acc;
}

.article-summary {
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
}

.meta {
  font-size: 0.875rem;
  color: #888;
  display: flex;
  justify-content: space-between;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #007acc;
}

.no-articles {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
}
</style>
