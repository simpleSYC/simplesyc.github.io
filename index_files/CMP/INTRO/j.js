Vue.component("intro", {
  template: `
<div class="container">
    <div class="masthead-subheading"></div>
    <div class="masthead-heading text-uppercase"></div>
    <a class="btn btn-primary btn-xl js-scroll-trigger" href="#CAT_1"></a>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "intro",
  },
});

var signqqee = new Vue({
  el: "#INTRO",
  store: store,
});
