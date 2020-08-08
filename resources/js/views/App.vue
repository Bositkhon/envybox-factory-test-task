<template>
  <div>
    <h1>Vue Router Demo App</h1>

    <p>
      <router-link :to="{ name: 'Home' }">Home</router-link>|
      <router-link :to="{ name: 'Test' }">Hello World</router-link>
    </p>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("created");
  },
};
</script>