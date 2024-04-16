<template>
  <div class="row">
    <div class="col">
      <LocationList/>
    </div>
  </div>
</template>

<script>
import LocationList from "@/components/Location/LocationList.vue";

export default {
  name: "Location.vue",
  components: {
    LocationList
  }
}
</script>

<style scoped>

</style>
