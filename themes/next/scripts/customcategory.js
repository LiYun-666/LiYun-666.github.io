var pagination = require('hexo-pagination');

const filteredCategory = 'moments';

hexo.extend.generator.register('customcategory', function(locals){
  var realestatePosts = locals.posts.filter(function(x) {
    return x.categories.data[0].name == filteredCategory;
  });

  return pagination('moments', realestatePosts, {
    perPage: 10,
    layout: ['customcategory']
  });
});
