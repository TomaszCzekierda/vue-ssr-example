<template>
  <div class="app-shell-view">
    <div class="app-shell-view__header">
      <h1>Magical App!</h1>
    </div>
    <div class="app-shell-view__menu">
      <div class="app-shell-view__menu__layout">
        <a class="app-shell-view__menu__layout__link" v-for="(menuItem, index) in menu" :key="index" @click="onClick(menuItem.href)">{{ menuItem.label }}</a>
      </div>
    </div>
    <div class="app-shell-view__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import shellTypes from '../../store/types';
export default {
  computed: {
    ...mapState('shell', ['menu']),
  },
  methods: {
    ...mapActions({
      initialize: shellTypes.actions.INITIALIZE,
    }),
    onClick(href) {
      this.$router.push({ name: href });
    },
  },
  mounted() {
    this.initialize();
  },
};
</script>

<style scoped>
.app-shell-view {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 216px 1fr;
  grid-template-rows: 116px 1fr;
  grid-template-areas: 'header header' 'menu content';
}
.app-shell-view__header {
  padding: 0 16px;
  background: hotpink;
  grid-area: header;
}
.app-shell-view__menu {
  background: salmon;
  grid-area: menu;
  box-shadow: inset -12px 0 12px -12px rgba(0, 0, 0, 0.16);
}

.app-shell-view__menu__layout {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.app-shell-view__menu__layout__link {
  flex: 1;
  font-size: 24px;
  line-height: 30px;
}

.app-shell-view__content {
  background: lightpink;
  grid-area: content;
  padding: 16px 130px 16px 16px;
  overflow: auto;
}
</style>
