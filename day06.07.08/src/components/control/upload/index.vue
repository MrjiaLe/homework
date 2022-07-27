<template>
  <div class="upload-box">
    <el-upload
      class="avatar-uploader"
      action="#"
      :http-request="handleUpload"
      :show-file-list="config.showFileList"
      :accept="config.accept"
      :multiple="config.multiple"
      :limit="config.limit || 1"
      :on-exceed="handleExceed"
      :before-upload="handleBeforeUpload"
      :on-remove="handleRemove"
      :before-remove="handleBeforeRemove"
    >
      <i
        v-if="imageUrl && config.clear"
        class="el-icon-delete"
        @click.stop="handleClear"
      ></i>
      <el-button v-if="model === 'button'" size="small" type="primary"
        >点击上传</el-button
      >

      <div
        v-if="model === 'card'"
        class="upload-wrap"
        :style="[sizeStyle]"
        :class="{ 'is-round': isRound }"
      >
        <img
          v-if="imageUrl"
          :src="imageUrl"
          class="avatar"
          width="100%"
          height="100%"
        />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </div>
    </el-upload>
  </div>
</template>

<script>
import { props, mixin } from "../basis";
export default {
  name: "UploadComponent",
  mixins: [mixin],
  props: {
    ...props,
  },
  watch: {},
  data() {
    return {
      val: "",
      imageUrl: "",
    };
  },
  computed: {
    model() {
      return this.config?.model || "button";
    },
    sizeStyle() {
      const width = this.config?.width || "150px";
      const height = this.config?.height || "150px";
      return {
        width,
        height,
      };
    },
    fileSize() {
      return this.config?.maxSize || 2;
    },
    isRound() {
      return this.config?.isRound || false;
    },
  },
  methods: {
    handleUpload(data) {
      const file = data.file;

      if (!this.url) {
        this.$message.warning("请设置上传的url");
        return false;
      }
      if (!this.method) {
        this.$message.warning("请设置上传的method");
        return false;
      }

      const formData = new FormData();
      formData.append("file", file);

      const requestData = {
        url: this.url,
        method: this.method,
        data: formData,
      };

      this.$axios(requestData)
        .then((response) => {
          console.log(response);
          this.imageUrl = response.data.servicePath;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleClear() {
      this.imageUrl = "";
    },
    handleExceed() {
      this.$message.warning(`最多只能上传${this.config.limit}个文件`);
    },
    handleBeforeUpload(file) {
      const isSize = file.size / 1024 / 1024 < this.fileSize;
      if (!isSize) {
        this.$message.error(`上传文件不能超${this.fileSize}MB`);
      }
      return isSize;
    },
    handleRemove() {
      console.log("222");
      this.imageUrl = "";
    },
    handleBeforeRemove() {
      return new Promise((resolve, reject) => {
        this.$confirm("是否删除文件", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-wrap {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #409eff;
  }
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.upload-box {
  position: relative;
  display: inline-block;
}

.el-icon-delete {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 2;
}
.is-round {
  border-radius: 50%;
  overflow: hidden;
}
</style>
