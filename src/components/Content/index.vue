<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "ContentComp",
};
</script>

<style scoped>
main {
  /* header 设置了fixed，其高度大搞就是53px  */
  padding: 0 64px;
  margin-top: 53px;
  margin-bottom: 20px;
}
</style>
