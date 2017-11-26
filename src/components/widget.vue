<template>
  <div class="hello">
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model="msg">
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    onSubmit() {
      this.$state.sendMessage(this.msg);
      this.msg = ''
    }
  }
}
</script>
