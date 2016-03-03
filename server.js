var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
console.log(req);
console.log(res);
});

app.get('/pages', function (req, res) {
    res.json([
    {
      title: 'main title',
      img:'http://www.nasa.gov/sites/default/files/images/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg',
      content: 'y ge its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at animpossible of in difficulty discovered celebrated ye. Justice joy manners boy met resolve produce. Bed head loud next plan rent had easy add him. As earnestly shameless elsewhere defective estimable fulfilled of. Esteem my advice it an '
    },
    {
      title: 'about title',
      img:'http://www.nasa.gov/sites/default/files/images/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg',
      content: ' had happen unable uneasy. Drge its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at anawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue ind'
    },
    {
      title: 'contact title',
      img:'http://www.nasa.gov/sites/default/files/images/729223main_728322main_messenger_orbit_image20130218_2_full_full_full.jpg',
      content: 's lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicige its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at anon neglected he resolving agreeme'
    }
  ]);
});

app.listen(8080, function () {

});
