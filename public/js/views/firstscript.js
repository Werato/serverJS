define(['jquery', 'underscore', 'backbone', 'mustache', '/js/models/page.js', 'text!/templates/firstscript.mustache'],
 function ($, _, Backbone, Mustache, PageModel, pageTemplate) {
  var pageView = Backbone.View.extend({
    el: $('.main'),
    model: {},

    initialize: function() {
      this.model = new PageModel();
      this.model.on("sync",this.render,this);//event to sync
      this.model.fetch();//go to servet
    },

    render: function(pageType){
      this.data = this.model.toJSON();
      var complitTemp = Mustache.render(
        pageTemplate, this);
        this.$el.html(complitTemp);
    }
  });
  return pageView;
});
