<template>
  <div>
    <el-input v-model="val" @input="handelInputEvent"></el-input>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  watch: {
    value: {
      handler(newValue) {
        this.val = newValue;
      },
      immediate: true,
    },
  },
  data() {
    return {
      val: "",
    };
  },
  methods: {
    handelInputEvent() {
      this.$emit("update:value", this.val);
    },
  },
};
</script>

<style lang="scss" scoped></style>
