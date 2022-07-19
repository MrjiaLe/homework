<template>
  <div class="home">
    <ma-table
      init-request
      :format="formatData"
      @onLoad="onLoad"
      :column="column"
      index
      checkbox
      :data="data_1"
      :params="params_1"
      url="/name/"
      method="get"
    >
      <template v-slot:operation="slot">
        <el-button type="primary" @click="handleEdit(slot.data)"
          >编辑</el-button
        >
        <el-button type="danger" @click="handleDelete(slot.data)"
          >删除</el-button
        >
        <el-button type="success" @click="handleEdit(slot.data)"
          >编辑</el-button
        >
        <el-button type="warning" @click="handleDelete(slot.data)"
          >删除</el-button
        >
      </template>
    </ma-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      column: [
        { label: "姓名", prop: "name" },
        { label: "性别", prop: "gender" },
        { label: "创建时间", prop: "create_date" },
        {
          label: "操作",
          type: "slot",
          slot_name: "operation",
          prop: "operation",
        },
      ],
      data_1: {
        name: "jack",
      },
      params_1: {
        name: "rose",
      },
    };
  },
  components: {
    maTable: () => import("../components/table/index.vue"),
  },
  methods: {
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
    onLoad(data) {
      console.log(data);
    },
    formatData(data) {
      const tableData = data.data;
      tableData.forEach((item) => {
        item.gender = item.gender === "男" ? 1 : 0;
      });
      return tableData;
    },
  },
};
</script>
