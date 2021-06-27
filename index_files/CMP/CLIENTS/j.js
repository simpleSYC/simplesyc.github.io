Vue.component("clients", {
  template: `
<div class="py-5">
      <div class="container">
  <h4 style="text-align: center;"  id="Frnd_sup" class="text-uppercase">my freindly suporters frends</h4>
          <div class="row">
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="index_files/MEDIA/logos/envato.jpg" alt="" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="index_files/MEDIA/logos/designmodo.jpg" alt="" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="index_files/MEDIA/logos/themeforest.jpg" alt="" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="index_files/MEDIA/logos/creative-market.jpg" alt="" /></a>
              </div>
          </div>
      </div>
</div>
`,
});

var store = new Vuex.Store({
  state: {
    view: "clients",
  },
});

var signqqee = new Vue({
  el: "#CLIENTS",
  store: store,
});
