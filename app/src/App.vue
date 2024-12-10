<template>
  <AppShellView>
    <router-view />
  </AppShellView>
</template>

<script>
import { AppShellView } from './modules/shell';
export default {
  components: { AppShellView },
  props: {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
.app {
}
</style>
