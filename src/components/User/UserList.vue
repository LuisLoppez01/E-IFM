<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <el-table
      :data="users"
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
        prop="user"
        label="Usuario">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Correo">
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
import { fetchUsers } from '@/services/userService';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetchUsers();
        const { status, msg, data } = response;
        this.users = data;
        console.log(msg)
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
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
