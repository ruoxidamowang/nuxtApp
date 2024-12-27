<template>
  <div>文章 -- {{$route.params.id}}</div>
<!--  <div>标题 &#45;&#45; {{blog.articletitle}}</div>-->
<!--  <div>内容 &#45;&#45; {{blog.content}}</div>-->
</template>

<script setup>
      const blog = ref({})
      const id = useRoute().params.id

</script>

<style scoped>

</style>