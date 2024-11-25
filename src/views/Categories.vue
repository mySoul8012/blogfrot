<template>
  <div class="categories">
    <div class="categories-header">
      <h1>📂 分类页面</h1>
      <p>选择一个分类，查看相关的文章。</p>
    </div>
    <div class="category-list">
      <div v-for="category in categories" :key="category.id" class="category-item">
        <el-button
            type="primary"
            @click="selectCategory(category.name)"
            class="category-button"
        >
          {{ category.name }} <span>({{ category.count }} 篇文章)</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Categories",
  setup() {
    const router = useRouter();

    // 模拟分类数据
    const categories = ref([
      { id: 1, name: "技术", count: 10 },
      { id: 2, name: "生活", count: 5 },
      { id: 3, name: "旅游", count: 3 },
    ]);

    // 选择分类后跳转
    const selectCategory = (categoryName) => {
      router.push({ name: "CategoryArticles", params: { category: categoryName } });
    };

    return {
      categories,
      selectCategory,
    };
  },
};
</script>

<style scoped>
.categories {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(to bottom, #f5f7fa, #ffffff);
  min-height: 100vh; /* 全屏高度 */
}

.categories-header h1 {
  font-size: 32px;
  color: #409eff;
  margin-bottom: 10px;
}

.categories-header p {
  font-size: 18px;
  color: #555;
  margin-bottom: 30px;
}

.category-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.category-item {
  flex: 1 1 200px;
  display: flex;
  justify-content: center;
}

.category-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 250px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #409eff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
}

.category-button:hover {
  background-color: #007acc;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.category-button span {
  margin-left: 10px;
  font-size: 16px;
  color: #eef5ff;
}
</style>
