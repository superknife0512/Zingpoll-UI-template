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
    questionType: 'Single',
    listOfFeatures: [
      {
        img: './images/UI/simple.svg',
        title: 'Simple',
        desc: 'Create your poll with just 4 easy steps.'
      },
      {
        img: './images/UI/accessible.svg',
        title: 'Accessible',
        desc: 'Access your poll anytime, anywhere, via most of devices with an Internet connection.'
      },
      {
        img: './images/UI/Illustrative.svg',
        title: 'Illustrative',
        desc: 'Visualize your poll in various types of charts.'
      },
      {
        img: './images/UI/exportable.svg',
        title: 'Exportable',
        desc: 'Keep a record of your poll in PDF, Excel or printed paper.'
      },
      {
        img: './images/UI/private.svg',
        title: 'Private',
        desc: 'Secure your poll with password if you wish to keep privacy.'
      },
      {
        img: './images/UI/sharable.svg',
        title: 'Sharable',
        desc: 'Get more response by promoting your poll on Facebook, Google +, Twitter and emails.'
      },
    ],

    signinPopup: false,
    signupPopup: false,

    signupForm: {
      email: '',
      password: '',
    },

    formSetting: {
      setVotingTime: false,
      setVotingLimit: false,
      participantType: 'public',
      addingGroupPopup: false,
      isShow: false
    },

    previewPopup: false,
    resMenu: false,

    validate: {
      email: false,      
      password: false,
    }
  },

  methods: {
    onSignup() {
      this.validate.email = false;
      this.validate.password = false
      if (!/.+@.+/.test(this.signupForm.email)) {
        this.validate.email = true
      } else if (this.signupForm.password.length < 6) {
        this.validate.password = true
      } else {
        alert('Submit done')
      }
    },
    switchKey() {
      if (this.questionType === 'Single') {
        this.questionType = 'Multiple'
      } else {
        this.questionType = 'Single'
      }
    },
    switchAuth() {
      this.signinPopup = !this.signinPopup;
      this.signupPopup = !this.signupPopup
    },
    setVotingTime(e) {
      this.formSetting.setVotingTime = e.target.checked
    },
    setVotingLimit(e) {
      this.formSetting.setVotingLimit = e.target.checked
    },
    addGroup() {
      alert('Has been add group');
      this.formSetting.addingGroupPopup = false
    },
  },
  computed: {
    addingUserSection() {
      return this.formSetting.participantType === 'groupOfUsers';
    }
  },
})