<template>
  <el-form ref="form" :model="field" label-width="80px">
    <template v-for="item in formItem">
      <el-form-item
        v-if="item.type === 'input'"
        :key="item.label"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
      >
        <el-input v-model="field[item.prop]"></el-input>
      </el-form-item>
      <el-form-item
        v-if="item.type === 'select'"
        :key="item.label"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
      >
        <el-select v-model="field[item.prop]"></el-select>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button
        @click="handleButton(item)"
        v-for="item in button"
        v-bind="item"
        :key="item.key"
        >{{ item.label }}</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import createRules from "./createRules";
export default {
  name: "maFrom",
  props: {
    item: {
      type: Array,
      default: () => ({}),
    },
    field: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    button: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      formItem: [],
    };
  },
  methods: {
    handleButton(item) {
      if (item.key === "submit") {
        this.handelSubmit(item);
        return;
      }
      if (item.key === "cancel") {
        this.handleCancel(item);
        return;
      }
      if (item.key === "next") {
        this.handelNext(item);
      }
    },
    handelSubmit(item) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log("提交");
        }
      });
    },
    handleCancel(item) {
      this.$refs.form.resetFields();
      item.callback && item.callback();
    },
    handelNext(item) {
      console.log("下一个");
    },
  },
  beforeMount() {
    this.formItem = createRules(this.item);
  },
};
</script>

<style lang="scss" scoped></style>
