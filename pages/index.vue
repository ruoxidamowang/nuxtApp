<template>

  <v-container>
    <div class="text-h1">首页</div>
  </v-container>
</template>

<script setup>
  useHead({
    title: '程序首页'
  })

  const config = useRuntimeConfig()

  const { command: { total } } = await blogs()
  const preRoutes = []
  for (let i = 1; i <= Math.round(total / Number(config.size)); i++) {
    preRoutes.push(`/blogs/${i}`)
  }
  prerenderRoutes(preRoutes)

</script>

<style scoped>

</style>