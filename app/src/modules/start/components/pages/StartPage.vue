<template>
  <div class="start-page">
    <h2>SSR LEEEESSSGOOOOO!</h2>
    <div class="start-page__values">
      <ValueAtom v-for="n in total" :key="n" />
      <NoValuesAtom v-if="total === 0" />
    </div>
    <button @click="add">TO THE MOOOOOON!</button>
    <h3>{{ hasMounted ? 'mounted!' : 'not mounted :/' }}</h3>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import startTypes from '../../store/types';
import ValueAtom from '../atoms/ValueAtom.vue';
import NoValuesAtom from '../atoms/NoValuesAtom.vue';
export default {
  components: {
    ValueAtom,
    NoValuesAtom,
  },
  props: {},
  data() {
    return {
      hasMounted: false,
    };
  },
  computed: {
    ...mapState('start', ['total']),
  },
  methods: {
    ...mapActions({
      add: startTypes.actions.ADD,
    }),
  },
  mounted() {
    this.hasMounted = true;
  },
};
</script>

<style scoped>
.start-page {
}
.start-page__values {
  display: flex;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
