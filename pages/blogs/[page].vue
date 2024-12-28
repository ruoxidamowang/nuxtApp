<template>
  <v-card>
    <template #text>
      <div>
        <v-row v-for="item in rows" class="cursor-pointer" @click="navigateTo(`/blog/${item.id}`)">
          <v-col cols="8" offset="1" class="text-start">
          <span class="text-subtitle-1 d-inline-block text-truncate">
            {{item.articletitle}}
          </span>
          </v-col>
          <v-col cols="2" class="text-end">
            <span class="text-subtitle-2">{{item.createddate}}</span>
          </v-col>
        </v-row>
        <v-divider class="mt-10 mb-2"></v-divider>
        <v-pagination :model-value="page" :length="pageLength" @next="navigateTo(`/blogs/${page + 1}`)" @prev="navigateTo(`/blogs/${page - 1}`)" @update:model-value="(p) => navigateTo(`/blogs/${p}`)"></v-pagination>
      </div>
    </template>
  </v-card>
</template>

<script setup>
useHead({
  title: '博客列表'
})
const config = useRuntimeConfig()

const page = +useRoute().params.page
const pageLength = ref(1)
const { command: { rows, total } } = await blogs(page, +config.public.size)
pageLength.value = Math.round(total / config.public.size)

// 预加载文章页面
const prerenderArr = []
rows.forEach(item => {
  prerenderArr.push(`/blog/${item.id}`)
})
prerenderRoutes(prerenderArr)

</script>

<style scoped>

</style>