<template>
  <div class="issues">
    <h1>HDFSBUGDB</h1>
    <TableShow
      :columns_to_show="columns_to_show"
      :pageSize="pageSize"
    ></TableShow>
  </div>
</template>
<script>
export default {
  name: "IssuesView",
  data() {
    return {
      pageSize: 20,
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
