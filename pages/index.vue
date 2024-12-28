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
  for (let i = 1; i <= Math.round(total / config.public.size); i++) {
    preRoutes.push(`/blogs/${i}`)
    // 预加载列表数据
    await blogs(i, +config.public.size)
  }
  prerenderRoutes(preRoutes)

</script>

<style scoped>

</style>