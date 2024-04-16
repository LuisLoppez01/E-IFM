<template>
  <div >
    <h2>Lista de Unidades</h2>
    <el-table
      :data="units"
      max-height="750"
      stripe
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="100">
      </el-table-column>
      <el-table-column
        prop="user_id"
        label="Usuario"
        width="120">
      </el-table-column>
      <el-table-column
        prop="idsap"
        label="IDSAP"
        width="120">
      </el-table-column>
      <el-table-column
        prop="vehicle_id"
        label="Vehiculo"
        width="120">
      </el-table-column>
      <el-table-column
        prop="component_id"
        label="Componente"
        width="120">
      </el-table-column>
      <el-table-column
        prop="chassis_serial"
        label="No. serie del chasis"
        width="120">
      </el-table-column>
      <el-table-column
        prop="chassis_serial_origin"
        label="Origen del chasis"
        width="120">
      </el-table-column>
      <el-table-column
        prop="license_plate"
        label="Placa"
        width="120">
      </el-table-column>
      <el-table-column
        prop="license_plate_origin"
        label="Origen de la placa"
        width="120">
      </el-table-column>
      <el-table-column
        prop="license_plate_type"
        label="Tipo de placa"
        width="120">
      </el-table-column>
      <el-table-column
        prop="permission"
        label="Tipo de permiso"
        :formatter="validatePermission"
        width="120">
      </el-table-column>
      <el-table-column
        prop="license_plate_tractor"
        label="Placa del tractor"
        :formatter="validateLicensePlateTractor"
        width="120">
      </el-table-column>
      <el-table-column
        prop="location_id"
        label="Ubicacion"
        width="120">
      </el-table-column>
      <el-table-column
        prop="entity_id"
        label="Entidad"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sticker_serial"
        label="Calcomanía"
        width="120">
      </el-table-column>
      <el-table-column
        prop="car_brand"
        label="Marca del vehículo"
        width="120">
      </el-table-column>
      <el-table-column
        prop="car_model"
        label="Modelo del vehículo"
        width="120">
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
import { fetchUnits } from '@/services/unitService';

export default {
  data() {
    return {

      units: [],

    };
  },
  mounted() {

    this.fetchUnitData();

  },
  methods: {

    async fetchUnitData() {
      try {

        const response = await fetchUnits();
        const { status, msg, data } = response;
        this.units = data;
      } catch (error) {
        console.error('Error al obtener unidades:', error);
      }
    },
    handleClick() {
      console.log('click');
    },
    validatePermission(row){
      return row.permission ? row.permission : 'No tiene valor';
    },
    validateLicensePlateTractor(row){
      return row.license_plate_tractor ? row.license_plate_tractor : 'No tiene valor';
    }
  }
}
</script>

<style scoped>
</style>
