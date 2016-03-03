define(['underscore', 'backbone', 'models/page'], function (_, Backbone,PageModel) {
  var PageCollection = Backbone.Collection.extend({
    model:PageModel,
    url: '/pages'
  });
  return PageCollection;
});
