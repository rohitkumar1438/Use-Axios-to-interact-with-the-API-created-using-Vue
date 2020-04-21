<template>
  <div class="hello">
    <table class="users">
     <thead>
      <tr>
        <th>Name</th>
        <th>Password</th>
        <th>Profession</th>
        <th>Id</th>
      </tr>
     </thead>
     <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.name}}</td>
        <td>{{user.password}}</td>
        <td>{{user.profession}}</td>
        <td>{{user.id}}</td>
      </tr>
     </tbody> 
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "hello-world",
  computed: mapState(['users']),
  mounted() {
    this.$store.dispatch('loadUsers');
  }
  
};
</script>

<!-- Add "scoped" to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
</style>
