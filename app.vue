<template>
    <div>
      <nuxt-layout >
        <v-main>
          <!--      <v-carousel height="300" :show-arrows="false" :cycle="true" hide-delimiters>-->
          <!--        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>-->
          <!--        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>-->
          <!--        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>-->
          <!--      </v-carousel>-->
          <nuxt-page/>
        </v-main>
      </nuxt-layout>
    </div>
</template>
<script setup>
  useHead({
    title: '我的博客',
  })
</script>