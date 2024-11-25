<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><router-link to="/categories">分类</router-link></li> <!-- 添加分类页面导航 -->
      </ul>
    </nav>
    <router-view></router-view> <!-- 路由出口 -->
  </div>
</template>

<style>
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  text-decoration: none;
  color: #409eff;
}

nav ul li a.router-link-active {
  font-weight: bold; /* 当前激活链接加粗显示 */
  color: #007bff; /* 更改激活链接颜色 */
}
</style>
