<template>
  <div>
    <h2>Lista de Ubicaciones</h2>
    <el-table
      :data="locations"
      height="750"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Nombre">
      </el-table-column>
      <el-table-column
        prop="management.name"
        label="Gerencia">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Operaciones"
        width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick" type="text" size="small">Editar</el-button>
          <el-button type="text" size="small">Eliminar</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {fetchLocations} from '@/services/locationService'
export default {
  data() {
    return {
      locations: []
    };
  },
  mounted() {
    this.fetchLocationData();
  },
  methods: {
    async fetchLocationData() {
      try {
        const response = await fetchLocations();
        const { status, msg, data } = response;
        this.locations = data;
        console.log(msg)
      } catch (error) {
        console.error('Error al obtener Ubicaciones:', error);
      }
    },
    handleClick() {
      console.log('click');
    }
  }
}
</script>

<style scoped>

</style>
