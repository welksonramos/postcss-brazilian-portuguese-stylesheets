const postcss = require('postcss');
const  properties = require('./properties');
const values = require('./values');

module.exports = postcss.plugin('postcss-brazilian-portuguese-stylesheet', (opts) =>{
  opts = opts || {};

  return (css) => {
    css.walkDecls((decl) => {
      // Properties
      Object.keys(properties).forEach((property)=>{
        if(decl.prop === properties[property]) {
          decl.prop = property
        }
      });

      // Values

      Object.keys(values).forEach((value) => {
        decl.value = decl.value.replace(values[value], value)
      });

      // Important
      if (decl.value.indexOf('!importante') >= 0) {
        decl.value = decl.value.replace(/\s*!importante\s*/, '');
        decl.important = true;
      }
    });
  };
});
