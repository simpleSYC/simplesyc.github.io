Vue.component("highlight", {
  template: `
<section class="page-section" id="CAT_1">
  <div class="container">
      <div class="text-center">
          <h2 class="section-heading text-uppercase"></h2>
          <h3 class="section-subheading text-muted"></h3>
      </div>
      <div class="row text-center">
          <div class="col-md-4">
              <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3 te"></h4>
              <p class="text-muted m-3-y"></p>
          </div>
          <div class="col-md-4">
              <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3 te"></h4>
              <p class="text-muted m-3-y"></p>
          </div>
          <div class="col-md-4">
              <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3 te"></h4>
              <p class="text-muted  m-3-y"></p>
          </div>
      </div>
  </div>
</section>`,
});

var store = new Vuex.Store({
  state: {
    view: "highlight",
  },
});

var signqqee = new Vue({
  el: "#HIGHLIGHT",
  store: store,
});
