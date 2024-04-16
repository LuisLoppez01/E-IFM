<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link
          to="/dashboard"
          name="Dashboard"
          icon="tim-icons icon-chart-pie-36"
        />
        <sidebar-link
          to="/user"
          name="Usuario"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/unit"
          name="Unidades"
          icon="tim-icons icon-single-02"
        />
        <sidebar-link
          to="/location"
          name="Ubicaciones"
          icon="tim-icons icon-single-02"
        />
<!--        <sidebar-link
          to="/maps"
          name="maps"
          icon="tim-icons icon-pin"
        />
        <sidebar-link
          to="/notifications"
          name="Notificaciones"
          icon="tim-icons icon-bell-55"
        />-->
        <sidebar-link
          to="/profile"
          name="Profile"
          icon="tim-icons icon-single-02"
        />
<!--        <sidebar-link
          to="/table-list"
          name="Verificaciones"
          icon="tim-icons icon-puzzle-10"
        />-->

      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>


    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,

    DashboardContent,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
