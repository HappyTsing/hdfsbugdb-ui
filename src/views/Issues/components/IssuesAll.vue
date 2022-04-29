<template>
  <div class="issues">
    <h1>HDFSBUGDB</h1>
    <TableShow
      :columns_to_show="columns_to_show"
      :pageSize="pageSize"
      :dataSource="dataSource"
    ></TableShow>
  </div>
</template>
<script>
export default {
  name: "IssuesAll",
  data() {
    return {
      pageSize: 15,
      dataSource: "all",
      columns_to_show: [
        {
          prop: "id",
          width: "100",
        },
        {
          prop: "IssueKey",
          width: "180",
        },
        {
          prop: "Summary",
          width: "",
        },
        {
          prop: "UpdateTime",
          width: "180",
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  margin-top: 100px;
}
</style>
