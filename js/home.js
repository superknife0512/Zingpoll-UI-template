new Vue({
  el: '#home',
  
  data: {
    listOfStep: [
      {
        content: 'Enter your question',
        color: '#56CCF2'
      },
      {
        content: 'Choose poll type',
        color: '#2D9CDB'
      },
      {
        content: 'Change poll setting',
        color: '#2F80ED'
      },
      {
        content: 'Press CREATE!',
        color: '#6B76D9'
      },
    ],
    listOfLanguages: [
      {
        img: './images/Icons/VN.png',
        desc: 'Viet nam'
      },
      {
        img: './images/Icons/UK.jpg',
        desc: 'English'
      },
      {
        img: './images/Icons/Indo.jpg',
        desc: 'Indonesia'
      }
    ],
    showLangs: false,
    questionType: 'Single'
  },

  methods: {
    switchKey() {
      if (this.questionType === 'Single') {
        this.questionType = 'Multiple'
      } else {
        this.questionType = 'Single'
      }
    }
  }
})