<template id="page_temp">
  <div>
    <h2>{{ title }}</h2>
    <h3>{{ msg }}</h3>
    <p>Vue Router Intro.</p>
  </div>
    </template>
<script>
export default {
  name: "AboutView",
  data() {
    return {
      title: "AboutView",
    };
  },
  template:"#page_temp",
  props: {
    msg: String,
  },
};
</script>