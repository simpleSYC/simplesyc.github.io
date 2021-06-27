Vue.component("ekipa", {
  template: `
<section class="page-section bg-light" id="CAT_4">
  <div class="container">
    <div class="text-center">
        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
     </div>
    <div class="row">
      <div class="col-lg-4">
        <div class="team-member">
          <img class="mx-auto rounded-circle" src="index_files/MEDIA/team/1.jpg" alt="" />
          <h4>Kay Garland</h4>
          <p class="text-muted">Lead Designer</p>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="team-member">
          <img class="mx-auto rounded-circle" src="index_files/MEDIA/team/2.jpg" alt="" />
          <h4>Larry Parker</h4>
          <p class="text-muted">Lead Marketer</p>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="team-member">
          <img class="mx-auto rounded-circle" src="index_files/MEDIA/team/3.jpg" alt="" />
          <h4>Diana Petersen</h4>
          <p class="text-muted">Lead Developer</p>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 mx-auto text-center"><p id="moto" class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
    </div>		
		<div id="zname" style="display:none;float:right;text-align: right;">
      <p class="flg">eanglish <span class="drska">I</span></p><hr>
      <p class="flg">german <span class="drska">I</span></p><hr>
      <p class="flg">polski <span class="drska">I</span></p><hr>
      <p class="flg">makedonski <span class="drska">I</span></p><hr>
      <p class="flg">spanski <span class="drska">I</span></p><hr>			
    </div>
  </div>		
</section>
`,
});

var store = new Vuex.Store({
  state: {
    view: "ekipa",
  },
});

var signqqee = new Vue({
  el: "#EKIPA",
  store: store,
});
