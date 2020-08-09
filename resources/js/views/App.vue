<template>
  <router-view></router-view>      
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
};
</script>