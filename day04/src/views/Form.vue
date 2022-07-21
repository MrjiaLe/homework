<template>
  <div>
    <maFrom :item="formItem" :field="formField" :button="formButton"></maFrom>
  </div>
</template>

<script>
export default {
  name: "From",
  data() {
    // const validateName = (rule, value, callback) => {
    //   if (value && value !== "10") {
    //     callback(new Error("请输入10"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      formButton: [
        { label: "提交", key: "submit", type: "primary" },
        {
          label: "重置",
          key: "cancel",
          type: "danger",
        },
        { label: "下一个", key: "next", type: "success" },
      ],
      formItem: [
        {
          label: "手机号",
          type: "input",
          valueType: "phone",
          prop: "phone",
          required: true,
          // rules: [
          //   { min: 2, max: 10, message: "请输入3-10个字符", trigger: "change" },
          //   { validator: validateName, trigger: "blur" },
          // ],
        },
        {
          label: "密码",
          type: "input",
          valueType: "password",
          prop: "password",
          required: true,
          // rules: [{ min: 6, message: "密码不能少于6位", trigger: "change" }],
        },
        {
          label: "邮箱",
          type: "input",
          valueType: "email",
          prop: "email",
          required: true,
        },
        {
          label: "年龄",
          type: "select",
          prop: "age",
          required: true,
        },
      ],
      formField: {
        phone: "",
        password: "",
        age: "",
        email: "",
      },
    };
  },
  components: {
    maFrom: () => import("@/components/form/index"),
  },
  methods: {
    // handleCancel() {
    //   alert("表单重置完成");
    // },
  },
};
</script>

<style lang="scss" scoped></style>
