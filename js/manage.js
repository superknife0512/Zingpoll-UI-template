new Vue ({
  el: '#manage',
  data: {
    listOfLanguages: [
      {
        img: '../images/Icons/VN.png',
        desc: 'Viet nam'
      },
      {
        img: '../images/Icons/UK.jpg',
        desc: 'English'
      },
      {
        img: '../images/Icons/Indo.jpg',
        desc: 'Indonesia'
      }
    ],
    showLangs: false,
    resMenu: false,
    signinPopup: false,
    signupPopup: false,
    validate: {
      email: false,      
      password: false,
    },
    signupForm: {
      email: '',
      password: '',
    },
    listOfPolls: [
      {
        name: 'Hi there',
        visibility: 'Public',
        isStart: false,
        votes: '10',
        data: [
          ['Ok guy', 4],
          ['Ok boy', 10],
        ]
      },
      {
        name: 'How are you today',
        visibility: 'Zingpoll community',
        isStart: true,
        votes: '5/10',
        data: [
          ['Good', 3],
          ['So bad', 1],
          ['not sure', 1],
        ]
      },
      {
        name: 'Are you sure about your champion?',
        visibility: 'Public',
        isStart: false,
        votes: '20/20',
        data: [
          ['Leesin', 3],
          ['Yasuo', 12],
          ['Zed', 3],
          ['Katarina', 4],
        ]
      },
      {
        name: 'In the company, who is the best one?',
        visibility: 'Group of users',
        isStart: true,
        votes: '40/210',
        data: [
          ['Mr. Yaluu', 20],
          ['Mr. Chairman', 12],
          ['Mr. Hunter', 4],
          ['Dr. Soberk', 1],
          ['Dr. Sylens', 8],
        ]
      },
    ],
    listOfVotes: [
      {
        name: 'Hi there',
        visibility: 'Public',
        progress: 'complete',
        votes: '10',
        status: 'OFF',
      },
      {
        name: 'How are we going?',
        visibility: 'Zingpoll community',
        progress: 'N/A',
        votes: '2',
        status: 'ON',
      },
    ],
    detail: {
      isShow: false,
      title: '',
      data: [],
      labels: [],
    },
    tableName: 'myPolls'
  },
  methods: {
    openDetail(detailName) {
      const poll = this.listOfPolls.find(ele => ele.name === detailName);
      this.detail.title = poll.name;
      this.detail.data = poll.data.map(ele => ele[1]);
      this.detail.labels = poll.data.map(ele => `${ele[0]}-${ele[1]} votes`);
      this.detail.isShow = true;
      this.createChart('', this.detail.labels, this.detail.data)
    },
    createChart(title, labels, data) {
      setTimeout(() => {
        const ctx = document.getElementById('detailedChart');
        const myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels: labels,
              datasets: [{
                  label: '# of Votes',
                  data: data,
                  backgroundColor: [
                      '#00B2FF',
                      '#2F80ED',
                      '#F2C94C',
                      '#5e1acc',
                      '#3dcad4',
                  ],
              }]
          },
          options: {
              // scales: {
              //     yAxes: [{
              //         ticks: {
              //             beginAtZero: true
              //         }
              //     }]
              // }
          }
      });        
      }, 100);
    }
  }
})