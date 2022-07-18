<template>
  <button
    :disabled="disabled"
    class="ma-button"
    :class="[theme, isRound, isBorder, isSize, blockCss]"
    :style="minWidthCss"
    @click="change"
  >
    <span>
      <i v-if="loading" class="iconfont icon-loading"></i>
      <i v-if="prefix" class="iconfont" :class="[iconPrefix]"></i>
      <slot></slot>
      <i v-if="suffix" class="iconfont icon-suffix" :class="[iconSuffix]"></i>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "",
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    size: Boolean,
    minWidth: {
      type: String,
      default: "95px",
    },
    prefix: {
      type: String,
      default: "",
    },
    suffix: {
      type: String,
      default: "",
    },
    block: Boolean,
    loading: Boolean,
  },
  computed: {
    theme() {
      return this.type ? `ma-button-${this.type}` : "";
    },
    isRound() {
      return this.round ? "is-round" : "";
    },
    isBorder() {
      return this.border ? "is-border" : "";
    },
    isSize() {
      return this.size ? `ma-button-${this.size}` : "";
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : "";
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : "";
    },
    minWidthCss() {
      if (!this.minWidth) return "";
      return `min-width:${this.minWidth}`;
    },
    blockCss() {
      return this.block ? "ma-button-block" : "";
    },
  },
  methods: {
    change() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.ma-button {
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  height: 40px;
  padding: 0 20px;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
  border-radius: 4px;
  cursor: pointer;
  + .ma-button {
    margin-left: 14px;
    margin-bottom: 10px;
  }
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-prefix {
    margin-right: 10px;
  }
  .icon-suffix {
    margin-left: 10px;
  }
}
.ma-button-medium {
  height: 36px;
}
.ma-button-small {
  height: 32px;
  padding: 0 15px;
  font-size: 12px;
}
.ma-button-mini {
  height: 28px;
  padding: 0 15px;
  font-size: 12px;
}

.ma-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #409eff;
  }
}
.ma-button-success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #00d100;
  }
}
.ma-button-danger {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.ma-button-warning {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #f56c6c;
  }
}

.ma-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

// 圆角
.is-round {
  border-radius: 100px;
}
// 块级元素
.ma-button-block {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
}

// loading动画加载
.icon-loading {
  animation: loading 2s infinite linear;
}

// 加载
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
