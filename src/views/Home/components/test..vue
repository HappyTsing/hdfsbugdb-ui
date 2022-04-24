<template>
  <h1>姓名：{{ name }}</h1>
  <h1>年龄：{{ age }}</h1>
  <h1>工作种类{{ job.type }}</h1>
  <h1>工作薪水：{{ age.salary }}</h1>
</template>

<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端",
      salary: "30k",
    });

    function changeInfo() {
      name.value = "李四";
      age.value = 20;
      console.log(name); // RefImpl对象，依靠 Object.defineProperty()的get set实现响应式

      job.value.type = "后端";
      job.value.salary = "40k";
      console.log(job); // RefImpl对象
      console.log(job.value); // Proxy对象，依靠 ES6的Proxy实现
    }

    const state = reactive({
      foo: 1,
      bar: 2,
    });

    return state(name, age, job);
  },
};
</script>
