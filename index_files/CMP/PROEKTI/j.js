Vue.component("proekti", {
  template: `
<section class="page-section bg-light" id="CAT_2">
  <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase"></h2>
          <h3 class="section-subheading text-muted"></h3>
      </div>
      <div class="row" id="PROEKTITE"></div>
  </div>
</section>
  `,
});

var store = new Vuex.Store({
  state: {
    view: "proekti",
  },
});

var signqqee = new Vue({
  el: "#PROEKTI",
  store: store,
});
