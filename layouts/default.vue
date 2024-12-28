<template>
  <v-app>
    <v-app-bar rounded>
      <template #title>
        <span class="text-h6 cursor-pointer" @click="navigateTo('/')">我的博客</span>
      </template>
      <template #prepend>
        <v-app-bar-nav-icon class="d-flex d-sm-none"></v-app-bar-nav-icon>
      </template>
      <template #append>
        <div class="mr-16 d-none d-sm-flex">
          <v-btn value="recent">
            <span @click="navigateTo('/blogs/1')">中心动态</span>
          </v-btn>
          <v-btn value="favorites">
            <span>信息公开</span>
          </v-btn>
          <v-btn value="nearby">
            <span>招聘信息</span>
          </v-btn>
        </div>
      </template>
    </v-app-bar>
    <slot name="default"></slot>
  </v-app>
</template>

<script setup>

</script>

<style scoped>

</style>