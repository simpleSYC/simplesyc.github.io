Vue.component("navigacija", {
  template: `
<div class="container">
  <a class="navbar-brand js-scroll-trigger" href="#page-top">
    <img id="LogoSYC" src="index_files/MEDIA/syc300.png"/>
  </a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    Menu<i class="fas fa-bars ml-1"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav text-uppercase ml-auto">
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#CAT_1"></a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#CAT_2"></a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#CAT_3"></a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#CAT_4"></a></li>
    </ul>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "navigacija",
  },
});

var signqqee = new Vue({
  el: "#mainNav",
  store: store,
});
