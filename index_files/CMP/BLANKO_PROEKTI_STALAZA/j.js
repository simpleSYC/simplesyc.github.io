Vue.component("blanko", {
  template: `
<div class="col-lg-4 col-sm-6 mb-4">
  <div class="portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fas fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid"/>
    </a>
    <div class="portfolio-caption">
      <div class="portfolio-caption-heading"></div>
      <div class="portfolio-caption-subheading text-muted"></div>
    </div>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "blanko",
  },
});

var signqqee = new Vue({
  el: "#bingo",
  store: store,
});
