<template>
  <div class="home">
    <AppButton>默认按钮</AppButton>
    <AppButton :loading="flag" @click="handleSubmit" size="small" type="primary"
      >成功按钮</AppButton
    >
    <AppButton size="medium" type="danger" disabled>危险按钮</AppButton>
    <AppButton size="mini" type="warning" round>警告按钮</AppButton>
    <AppButton min-width="150px" block>a</AppButton>
    <AppButton block>a</AppButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  components: {
    AppButton: () => import("@/components/button"),
  },
  methods: {
    handleSubmit() {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 3000);
    },
  },
};
</script>

<style lang="sass" scoped></style>
