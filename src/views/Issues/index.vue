<template>
  <div class="issues">
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
      pageSize: 5,
      columns_to_show: [
        {
          prop: "id",
          width: "%",
        },
        {
          prop: "IssueKey",
          width: "",
        },
        {
          prop: "Quality",
          width: "",
        },
        {
          prop: "Component",
          width: "",
        },
        {
          prop: "Consequence",
          width: "",
        },
        {
          prop: "Code",
          width: "",
        },
        {
          prop: "UpdateTime",
          width: "",
        },
      ],
    };
  },
};
</script>
