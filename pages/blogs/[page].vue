<template>
  <v-card>
    <template #text>
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
      <v-pagination :model-value="currPage" :length="pageLength" @next="nextPage" @prev="prevPage" @update:model-value="toPage"></v-pagination>
    </template>
  </v-card>
</template>

<script setup>
useHead({
  title: '博客列表'
})
const config = useRuntimeConfig()

const page = useRoute().params.page
const currPage = ref(page * 1)
const { command: { rows, total } } = await blogs(currPage.value, Number(config.size))
const pageLength = Math.round(total / Number(config.size))

// const prerenderArr = []
// rows.forEach(item => {
//   prerenderArr.push(`/blog/${item.id}`)
// })
// prerenderRoutes(prerenderArr)

const nextPage = () => {
  navigateTo(`/blogs/${currPage.value + 1}`)
}

const prevPage = () => {
  navigateTo(`/blogs/${currPage.value - 1}`)
}

const toPage = (p) => {
  navigateTo(`/blogs/${p}`)
}
</script>

<style scoped>

</style>