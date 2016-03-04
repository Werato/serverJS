define(['jquery', 'underscore', 'backbone', 'views/default','views/firstscript'],
function ($, _, Backbone, DefaultView,PageView) {
  var SiteRouter = Backbone.Router.extend({
    routes: {
      'about': 'aboutAction',
      'contact': 'contactAction',
      'page/:id': 'pageAction',
      '*other': 'defaultAction'
    }
  });
  var initialize = function () {
    var siteRouter = new SiteRouter();
    var defaultView = new DefaultView();
    var pageView = new PageView();//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    siteRouter.on('route:defaultAction', function(){
      defaultView.render('main');
    });
    siteRouter.on('route:aboutAction', function(){
      defaultView.render('about');
    });
    siteRouter.on('route:contactAction', function(){
      defaultView.render('contact');
    });
    siteRouter.on('route:pageAction', function(id){
      pageView.render(id);

    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
