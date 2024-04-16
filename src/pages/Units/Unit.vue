<template>
  <div class="row">
    <div class="col">
      <UnitList/>
    </div>
  </div>
</template>

<script>
import UnitList from "@/components/Unit/UnitList.vue";

export default {
  name: "Unit.vue",
  components: {
    UnitList
  }
}
</script>

<style scoped>

</style>
