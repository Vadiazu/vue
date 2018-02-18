<template>
  <div class="field has-addons">
      <div class="control is-clearfix">
        <input class="input" ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)" :type="type" :placeholder="placeholder">
      </div>
  </div>
</template>

<script>
export default {
  name: 'input-balance',
  props: [
    'value',
    'label',
    'placeholder',
    'type'
  ],
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>
