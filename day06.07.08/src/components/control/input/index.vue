<template>
  <div class="con">
    <el-input v-model="val" @input="handelInputEvent"></el-input>
    <div class="codeButton" v-if="config.valueType === 'sendcode'">
      <maButton
        :disabled="disabled"
        :loading="loading"
        size="mini"
        type="primary"
        @click="getSms"
        >{{ text }}</maButton
      >
    </div>
  </div>
</template>

<script>
import { props, mixin } from "../basis";
export default {
  name: "InputComponent",
  mixins: [mixin],
  components: {
    maButton: () => import("../../button/index.vue"),
  },
  props: {
    ...props,
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
      text: "获取验证码",
      loading: false,
      s: 5,
      disabled: false,
      timer: null,
    };
  },
  methods: {
    handelInputEvent() {
      this.$emit("update:value", this.val);
      const callback = this.config.callback;
      if (
        callback &&
        Object.prototype.toString.call(callback) === "[object Function]"
      ) {
        callback(this.val);
      }
    },
    getSms() {
      const beforeChange = this.config.beforeChange;
      const accont = this.config.sendAccont;
      if (!accont) {
        this.$message.error("请输入发送的手机号");
        return false;
      }
      this.text = "发送中";
      this.loading = true;
      if (
        beforeChange &&
        Object.prototype.toString.call(beforeChange) === "[object Function]"
      ) {
        beforeChange()
          .then(() => {
            this.$message.success("发送成功");
            this.disabled = true;
            this.text = `倒计时${this.s}秒`;
            this.countDown();
            this.loading = false;
          })
          .catch(() => {
            this.$message.error("发送失败");
          });
      } else {
        this.$message.success("发送成功");
      }
    },
    countDown() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.s--;
        if (this.s === 0) {
          this.text = "重新发送";
          this.disabled = false;
          this.s = 5;
          clearInterval(this.timer);
          this.timer = null;
        } else {
          this.text = `倒计时${this.s}秒`;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.con {
  position: relative;
  .codeButton {
    position: absolute;
    right: 10px;
    top: 0;
  }
}
</style>
