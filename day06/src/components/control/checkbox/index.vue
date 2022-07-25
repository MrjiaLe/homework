<template>
  <div>
    <el-checkbox-group v-model="val" @change="handleChangeEvent">
      <el-checkbox
        v-for="item in options"
        :key="item[props.value]"
        :label="item[props.value]"
        >{{ item[props.label] }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script>
import { props, mixin } from "../basis";
export default {
  name: "CheckBoxComponent",
  mixins: [mixin],
  props: {
    ...props,
  },
  data() {
    return {
      val: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
