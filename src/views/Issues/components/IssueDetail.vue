<template>
  <el-descriptions class="margin-top" title="IssueInfo" :column="3">
    <el-descriptions-item label="IssueKey">
      <el-tag size="small">{{ issueDetail.IssueKey }}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="CreatedTime">{{
      issueDetail.CreatedTime
    }}</el-descriptions-item>
    <el-descriptions-item label="UpdateTime">{{
      issueDetail.UpdateTime
    }}</el-descriptions-item>
    <el-descriptions-item label="Status"
      >{{ issueDetail.Status }}
    </el-descriptions-item>

    <el-descriptions-item label="Summary"
      >{{ issueDetail.Summary }}
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions class="margin-top" title="Research" :column="1">
    <el-descriptions-item label="Cause">{{
      issueDetail.Cause
    }}</el-descriptions-item>
    <el-descriptions-item label="Impact">{{
      issueDetail.Impact
    }}</el-descriptions-item>
    <el-descriptions-item label="Link"
      >{{ issueDetail.Link }}
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions class="margin-top" title="Classify" :column="3">
    <el-descriptions-item label="Code">{{
      issueDetail.Code
    }}</el-descriptions-item>
    <el-descriptions-item label="Consequence">{{
      issueDetail.Consequence
    }}</el-descriptions-item>
    <el-descriptions-item label="Component"
      >{{ issueDetail.Component }}
    </el-descriptions-item>
    <el-descriptions-item label="Quality"
      >{{ issueDetail.Quality }}
    </el-descriptions-item>
    <el-descriptions-item label="Significance"
      >{{ issueDetail.Significance }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { searchIssueByIssueKey } from "/src/api/search.js";

export default {
  name: "IssueDetail",
  setup() {
    const route = useRoute();
    const issueKey = route.params.IssueKey;
    let issueDetail = ref({});

    function getData() {
      searchIssueByIssueKey(issueKey).then((res) => {
        // issueDetail.value.length = 0;
        issueDetail.value = res.data.data[0];
        console.log(issueDetail);
      });
    }
    onMounted(() => {
      getData();
    });

    return { issueDetail };
  },
};
</script>

<style lang="scss" scoped>
.el-descriptions {
  margin-top: 20px;
}
.margin-top {
  margin-top: 13vh;
}
</style>
