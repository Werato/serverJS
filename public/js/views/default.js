define(['jquery', 'underscore', 'backbone', 'mustache', '/js/collection/pages.js', 'text!/templates/page.mustache'],
 function ($, _, Backbone, Mustache, PageCollection, pagesTemplate) {
  var DefaultView = Backbone.View.extend({
    el: $('.main'),
    collection: {},

    initialize: function() {
      this.collection = new PageCollection();
      this.collection.on("sync",this.render,this);//event to sync
      this.collection.fetch();//go to servet
    },

    render: function(pageType){
      this.data = this.collection.toJSON();
      var complitTemp = Mustache.render(
        pagesTemplate, this);
        this.$el.html(complitTemp);
    }
  });
  return DefaultView;
});
