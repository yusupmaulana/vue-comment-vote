Vue.component('comments', {
  template: '#comment-template',
  props:    ['comment'],
  data: function(){
    return{
      plus: false,
      minus: false
    }
  },
  methods: {
    sundul: function(){
      this.plus = !this.plus
      this.minus = false
    },
    bata: function(){
      this.minus = !this.minus
      this.plus = false
    },
  },
  computed: {
    vote: function(){
      if (this.plus == true) {
        return this.comment.vote + 1
      } else if (this.minus == true) {
        return this.comment.vote - 1
      } else {
        return this.comment.vote
      }
    }
  }
})

var vm = new Vue({
  el: "#app",
  data: {
    comments: [
      { body: 'ini komentar saya', time: '20-1-14', vote: 0 },
      { body: 'komentar saya gan', time: '10-1-14', vote: 4 },
      { body: 'ini komentar baru', time: '30-1-14', vote: 9 },
    ]
  }

})
