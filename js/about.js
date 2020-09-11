new Vue ({
  el: '#about',
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
  }
})