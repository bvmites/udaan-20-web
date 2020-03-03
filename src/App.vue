<template>
    <div id="app">
        <MenuComponent></MenuComponent>
        <router-view/>
    </div>
</template>

<script>

    import MenuComponent from "@/components/MenuComponent";
  export default {
    name: 'app',
    components: {
        MenuComponent,
    },
    data() {
      return {
      }
    },
    mounted() {
    }
  }
</script>
