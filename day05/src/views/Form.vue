<template>
  <div>
    <maFrom
      :item="formItem"
      :field="formField"
      :button="formButton"
      :beforeSubmit="handelBeforeSubmit"
    ></maFrom>
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
        },
        {
          label: "教室",
          type: "select",
          prop: "class_room",
          required: true,
          props: {
            label: "a",
            value: "b",
          },
          options: [
            { a: "一教", value: "b" },
            { a: "二教", value: "b" },
            { a: "三教", value: "b" },
            { a: "四教", value: "b" },
          ],
        },
        {
          label: "教室1",
          type: "select",
          prop: "class_room1",
          required: true,
          initRequest: true,
          url: "/classroom/",
          method: "GET",
        },
        // {
        //   label: "密码",
        //   type: "input",
        //   // valueType: "password",
        //   prop: "password",
        //   required: true,
        //   rules: [{ min: 6, message: "密码不能少于6位", trigger: "change" }],
        // },
        // {
        //   label: "邮箱",
        //   type: "input",
        //   // valueType: "email",
        //   prop: "email",
        //   // required: true,
        // },
      ],
      formField: {
        phone: "18265555555",
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
    handelBeforeSubmit() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
