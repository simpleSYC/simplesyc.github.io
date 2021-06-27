Vue.component("mdlproekti", {
  template: `
<div class="modal-dialog">
  <div class="modal-content">
      <div class="close-modal" data-dismiss="modal"><img src="index_files/MEDIA/close-icon.svg" alt="Close modal" /></div>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-8">
                  <div class="modal-body">
                      <!-- Project Details Go Here-->
                      <h2 class="text-uppercase" id="P_name"></h2>
                      <p class="item-intro text-muted" id="P_slogan"></p>
                      <img class="img-fluid d-block mx-auto" id="P_img"/>
                      <p id="P_desc"></p>
                      <ul class="list-inline">
                          <li id="P_datum"></li>
                          <li id="P_s1"></li>
                         <button class="btn btn-primary" type="button" style="background-color: #425757;border-radius: 25px;"><span id="P_s2" style="font-size: 20px;"></span>
      <i class="fas fa-external-link-alt" style="font-size: 25px;margin-left: 15px;"></i></button>
    </ul>
                      <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fas fa-times mr-1"></i>Close Project</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "mdlproekti",
  },
});

var signqqee = new Vue({
  el: "#portfolioModal",
  store: store,
});
