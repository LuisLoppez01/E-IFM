<template>
  <div class="row">
    <div class="col">
      <UserList/>
    </div>

  </div>
</template>

<script>
import UserList from '@/components/User/UserList.vue';
export default {
  name: "User.vue",
  components: {
    UserList
  }
}

</script>

<style scoped>

</style>
