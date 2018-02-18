<template>
  <div class="wrapper">
    <h1 class="has-text-centered">Кошелечек</h1>
    <div class="level">
      <div class="level-item level-left">
        В вашем кошельке: {{amount}} $
      </div>
    </div>
    <form @submit.prevent>
      <div class="field has-addons">
          <div class="control is-clearfix">
            <input v-model="plus" class="input" type="number" placeholder="0,00" min="0">
          </div>
          <p class="control">
            <button @click="plusAmount" class="button is-success">Пополнить</button>
          </p>
      </div>
      <!-- <input-balance model="plus" btnTxt="добавить" type="number" placeholder="0,00" action="plusAmount"></input-balance> -->
      <div class="field has-addons">
          <div class="control is-clearfix">
            <input v-model="minus" class="input" type="number" placeholder="0,00" min="0">
          </div>
          <p class="control">
            <button @click="minusAmount" class="button is-success">Потратить</button>
          </p>
      </div>
      <!-- <input-balance model="minus" btnTxt="вычесть" type="number" placeholder="0,00" action="minusAmount"></input-balance> -->
    </form>
  </div>
</template>

<script>
// import inputBalance from '@/components/inputBalance'
export default {
  name: 'dashboard',
  // components: {inputBalance},
  data () {
    return {
      plus: 0,
      minus: 0
    }
  },
  computed: {
    amount () {
      return this.$store.state.amount
    }
  },
  methods: {
    plusAmount () {
      this.$store.commit('SET_AMOUNT', parseInt(this.plus) + this.$store.state.amount)
    },
    minusAmount (value) {
      this.$store.commit('SET_AMOUNT', this.$store.state.amount - parseInt(this.plus))
    }
  }
}
</script>

<style>
  .wrapper{
    padding: 20px;
  }
</style>

