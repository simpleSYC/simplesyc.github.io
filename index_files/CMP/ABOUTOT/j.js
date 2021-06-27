Vue.component("aboutot", {
  template: `
<section class="page-section" id="CAT_3">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">my future goals</h2>
            <h3 class="section-subheading text-muted">here you can find my future goals</h3>
        </div>
        <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" style="background-color:#e2f7ff;" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading"></h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted g-desc"></p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading"></h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted g-desc"></p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" style="background-color:#e2f7ff;" />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4 class="subheading"></h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted g-desc"></p>
                </div>
              </div>
            </li>
        </ul>
    </div>
</section>`,
});

var store = new Vuex.Store({
  state: {
    view: "aboutot",
  },
});

var signqqee = new Vue({
  el: "#ABOUTOT",
  store: store,
});
