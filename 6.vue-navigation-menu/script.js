;(function(){
  'use strict'

  var vm = new Vue({
    el: '#root',
    data: {
      active: ''
    },
    methods: {
      makeActive: function(item) {
        this.active = item
      }
    }
  })

})()
