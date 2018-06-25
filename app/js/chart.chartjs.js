$(function () {
  'use strict';

  // var ctx1 = document.getElementById('chartBar1').getContext('2d');
  // var myChart1 = new Chart(ctx1, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 39, 20, 10, 25, 18],
  //       backgroundColor: '#27AAC8'
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctx2 = document.getElementById('chartBar2').getContext('2d');
  // var myChart2 = new Chart(ctx2, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 39, 20, 10, 25, 18],
  //       backgroundColor: [
  //         '#29B0D0',
  //         '#2A516E',
  //         '#F07124',
  //         '#CBE0E3',
  //         '#979193'
  //       ]
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctb3 = document.getElementById('chartBar3').getContext('2d');
  // new Chart(ctb3, {
  //   type: 'horizontalBar',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 39, 20, 10, 25, 18],
  //       backgroundColor: '#27AAC8'
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11,
  //           max: 80
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctb4 = document.getElementById('chartBar4').getContext('2d');
  // new Chart(ctb4, {
  //   type: 'horizontalBar',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 39, 20, 10, 25, 18],
  //       backgroundColor: [
  //         '#29B0D0',
  //         '#2A516E',
  //         '#F07124',
  //         '#CBE0E3',
  //         '#979193'
  //       ]
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11,
  //           max: 80
  //         }
  //       }]
  //     }
  //   }
  // });

  // /* LINE CHART */
  // var ctx3 = document.getElementById('chartLine1');
  // var myChart3 = new Chart(ctx3, {
  //   type: 'line',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 39, 20, 10, 25, 18],
  //       borderColor: '#27AAC8',
  //       borderWidth: 1,
  //       fill: false
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctx4 = document.getElementById('chartLine2');
  // var myChart4 = new Chart(ctx4, {
  //   type: 'line',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       data: [12, 39, 20, 10, 20, 18],
  //       borderColor: '#2E5773',
  //       borderWidth: 1,
  //       fill: false
  //     },{
  //       data: [30, 50, 28, 23, 25, 28],
  //       borderColor: '#F47322',
  //       borderWidth: 1,
  //       fill: false
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });


  // /** AREA CHART **/
  // var ctx5 = document.getElementById('chartArea1');
  // var myChart5 = new Chart(ctx5, {
  //   type: 'line',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       data: [12, 39, 20, 10, 25, 18],
  //       backgroundColor: '#F07124', //rgba(240, 113, 36, 0.4)
  //       fill: true,
  //       borderWidth: 0,
  //       borderColor: '#fff'
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctx6 = document.getElementById('chartArea2');
  // new Chart(ctx6, {
  //   type: 'line',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       data: [10, 24, 20, 25, 35, 50],
  //       backgroundColor: '#2E5773',
  //       borderWidth: 1,
  //       fill: true
  //     },{
  //       data: [20, 30, 28, 33, 45, 65],
  //       backgroundColor: '#F47322',
  //       borderWidth: 1,
  //       fill: true
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });

  // /** STACKED BAR CHART **/
  // var ctx7 = document.getElementById('chartStacked1');
  // new Chart(ctx7, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       data: [10, 24, 20, 25, 35, 50],
  //       backgroundColor: '#29B0D0',
  //       borderWidth: 1,
  //       fill: true
  //     },{
  //       data: [10, 24, 20, 25, 35, 50],
  //       backgroundColor: '#2E5773',
  //       borderWidth: 1,
  //       fill: true
  //     },{
  //       data: [20, 30, 28, 33, 45, 65],
  //       backgroundColor: '#F47322',
  //       borderWidth: 1,
  //       fill: true
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         stacked: true
  //       }],
  //       xAxes: [{
  //         stacked: true
  //       }]
  //     }
  //   }
  // });

  // var ctx8 = document.getElementById('chartStacked2');
  // new Chart(ctx8, {
  //   type: 'horizontalBar',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       data: [10, 24, 20, 25, 35, 50],
  //       backgroundColor: '#29B0D0',
  //       borderWidth: 1,
  //       fill: true
  //     },{
  //       data: [10, 24, 20, 25, 35, 50],
  //       backgroundColor: '#2E5773',
  //       borderWidth: 1,
  //       fill: true
  //     },{
  //       data: [20, 30, 28, 33, 45, 65],
  //       backgroundColor: '#F47322',
  //       borderWidth: 1,
  //       fill: true
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         stacked: true
  //       }],
  //       xAxes: [{
  //         stacked: true
  //       }]
  //     }
  //   }
  // });

  // /** SPECIFIC GRID LINE COLOR **/
  // var ctx9 = document.getElementById('chartArea3');
  // new Chart(ctx9, {
  //   type: 'line',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       data: [10, 24, 20, 25, 35, 50],
  //       backgroundColor: 'rgba(46,87,115,.4)',
  //       borderWidth: 1,
  //       fill: true
  //     },{
  //       data: [20, 30, 28, 33, 45, 65],
  //       backgroundColor: 'rgba(41,176,208,.4)',
  //       borderWidth: 1,
  //       fill: true
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         gridLines: {
  //           drawBorder: false,
  //           color: ['', '', '#cc0000']
  //         },
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctx10 = document.getElementById('chartArea4');
  // new Chart(ctx10, {
  //   type: 'line',
  //   data: {
  //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //     datasets: [{
  //       data: [10, 24, 20, 25, 35, 50],
  //       backgroundColor: 'rgba(46,87,115,.4)',
  //       borderWidth: 1,
  //       fill: true
  //     },{
  //       data: [20, 30, 28, 33, 45, 65],
  //       backgroundColor: 'rgba(41,176,208,.4)',
  //       borderWidth: 1,
  //       fill: true
  //     }]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //         labels: {
  //           display: false
  //         }
  //     },
  //     scales: {
  //       yAxes: [{
  //         gridLines: {
  //           drawBorder: false,
  //           color: ['', '#cc0000', '#0ad013']
  //         },
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 10,
  //           max: 80
  //         }
  //       }],
  //       xAxes: [{
  //         ticks: {
  //           beginAtZero:true,
  //           fontSize: 11
  //         }
  //       }]
  //     }
  //   }
  // });

  var tickets = {
    "10-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "578100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "JT-31",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-17",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "JT-23",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:00"
      },
      {
        "flight_id": "JT-37",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1216000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-15",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "JT-33",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "1001000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2402400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1169300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1169300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1169300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "869000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1094500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1254275",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1191575",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1149775",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1149775",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1406900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1413500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "609800",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "689000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "689000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "414000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "550000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "814000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1292000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-560/JT-17",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1314000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2431600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "JT-207",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "1103000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1191000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "1301000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:05"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1574000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1240000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-124/JT-391",
        "airlines": "LION",
        "price": "1174000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:55"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-923/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "2395600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "1745500",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "11-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "578100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "JT-31",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-17",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "JT-23",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:00"
      },
      {
        "flight_id": "JT-37",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1216000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-15",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "JT-33",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "1001000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2402400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1169300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1169300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1169300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "869000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1094500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1254275",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1191575",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1149775",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1149775",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1406900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1413500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "609800",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "689000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "689000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "414000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "550000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "814000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1292000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-560/JT-17",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1314000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2431600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "JT-207",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "1103000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1191000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "1301000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:05"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1574000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1240000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-124/JT-391",
        "airlines": "LION",
        "price": "1174000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:55"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-923/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "2395600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "1745500",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "12-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "578100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "JT-31",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-17",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "JT-23",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:00"
      },
      {
        "flight_id": "JT-37",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-15",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "JT-33",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1738500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2402400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "3308800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "784300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1155000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1316975",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1395873",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1212475",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1212475",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1212475",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1551000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1474000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "689000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "909000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1151000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1400200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "517000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "814000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-560/JT-17",
        "airlines": "LION",
        "price": "1116000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1369000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1869500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1116000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "839000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "JT-207",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1152000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-124/JT-391",
        "airlines": "LION",
        "price": "1119000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:55"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-923/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3093000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "13-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "578100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "JT-31",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-17",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "JT-23",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:00"
      },
      {
        "flight_id": "JT-37",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-15",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "JT-33",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1738500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2402400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "751300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1155000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1196800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1316975",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1395873",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1212475",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1212475",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1212475",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1551000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1474000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "689000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "909000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1151000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1400200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "517000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "814000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-560/JT-17",
        "airlines": "LION",
        "price": "1116000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1869500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2431600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2431600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1116000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "839000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "JT-207",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1152000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-124/JT-391",
        "airlines": "LION",
        "price": "1119000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:55"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-923/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "2244900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "1879700",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "14-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "578100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "JT-31",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-17",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "JT-23",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:00"
      },
      {
        "flight_id": "JT-37",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-15",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "JT-33",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1738500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2402400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "784300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1155000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1551000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "909000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1151000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1400200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "550000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-560/JT-17",
        "airlines": "LION",
        "price": "1116000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1369000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1116000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "839000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "JT-207",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1152000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-124/JT-391",
        "airlines": "LION",
        "price": "1119000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:55"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1819700",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3093000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "15-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "578100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "JT-31",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-17",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "JT-23",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:00"
      },
      {
        "flight_id": "JT-37",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-15",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "JT-33",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2402400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "784300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1094500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1406900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1193500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1400200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "517000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-560/JT-17",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:45"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1369000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "JT-207",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1152000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-124/JT-391",
        "airlines": "LION",
        "price": "1119000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:55"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1405000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "2244900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "1879700",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "16-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "1007000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "1007000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "503200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "908000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "749100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2402400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "828300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1094500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1406900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1193500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1400200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "550000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1369000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2431600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1435000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "971000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1152000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "896800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3093000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "17-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "1007000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "1007000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "JT-43",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:20"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1149478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1149478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "877200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "960300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "960300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "784300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1094500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1445400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1193500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1400200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "517000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1369000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2220400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1380000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "931400",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "1271300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "1177250",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1152000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1819700",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "896800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3093000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "18-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "1007000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "1007000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1149478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "931073",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1738500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2929300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "828300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1155000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1154478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1060950",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1551000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "1243000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "517000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "583000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "499125",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1369000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2431600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2220400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1435000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3082300",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "839000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "971000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1152000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1819700",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "896800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3093000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2269100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "19-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "809000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "930000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "1249000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1149478",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1738500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2647700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "828300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1155000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1085508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1085508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1551000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "935000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "1320000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "667000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "769025",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "909000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1151000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1400200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "550000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2713200",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1144600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1347000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2479500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3120800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "839000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "671800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1404000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1108000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1735000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1819700",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "896800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1394000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3093000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "20-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "974000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "1216000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "1062000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "1229943",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "1080508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "1000043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "1139000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1738500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "3308800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "696300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1287000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1085508",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1315408",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "998250",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1551000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1386000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "957000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "667000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "887000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-581",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "1107000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "769025",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "1035500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "695875",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "909000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1151000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1624600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "335500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "335500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1682500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1012600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3120800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "839000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1144000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "682800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1196000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1246600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "921000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1123110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1370350",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1394000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3093000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "21-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "793133",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "660500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "877200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "2223100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "726000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1094500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "977350",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1071400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "977350",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "980100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "980100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1406900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1193500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "957000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "1020100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "519600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "519600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-708/JT-891",
        "airlines": "LION",
        "price": "1310000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "517000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "506000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "363000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1869500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "3199400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3120800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "931400",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "773000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1144000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1020000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1427000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "863800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1413110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "941900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3973000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2269100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "22-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1629600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "793133",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "660500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "877200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "2223100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "726000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1094500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "977350",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1071400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "977350",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "980100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "980100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1406900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1193500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "957000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "766000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "1020100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "519600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "519600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-708/JT-891",
        "airlines": "LION",
        "price": "1310000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "517000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "506000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "363000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1869500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "3199400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3120800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "931400",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "773000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1144000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1020000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1427000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "863800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1413110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "941900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3973000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2269100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "23-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "793133",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "660500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "877200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "880000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "2223100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2647700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "960300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "960300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "726000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1050500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "905245",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1837000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1445400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1193500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "880000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "957000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "711000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "1020100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "1020100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "519600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-708/JT-891",
        "airlines": "LION",
        "price": "1365000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "495000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "451000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "462000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "363000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "335500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1479000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1869500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2220400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1292000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3120800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "931400",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "773000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1144000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1020000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1471000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "921000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1413110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "941900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3973000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "24-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "807900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "793133",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "660500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "660500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "877200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1574600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "869000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "880000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "2223100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2223100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2647700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1139600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "921800",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "751300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1238600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "905245",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1406900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1381600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "913000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "957000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "560300",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "1020100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "519600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "827600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1045400",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-708/JT-891",
        "airlines": "LION",
        "price": "1486000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "451000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "451000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "462000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "363000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "335500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1869500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1292000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3120800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "931400",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "842300",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "763100",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "773000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "718000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1144000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1020000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1471000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1675600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "921000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1413110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "941900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3973000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "25-6-2018": [
      {
        "flight_id": "SJ-273",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-261",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7533",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:10"
      },
      {
        "flight_id": "XT-7515",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "XT-7517",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "XT-7519",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:30"
      },
      {
        "flight_id": "QZ-7531",
        "airlines": "AIRASIA",
        "price": "1184000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QZ-7511",
        "airlines": "AIRASIA",
        "price": "804000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:20"
      },
      {
        "flight_id": "XT-7523",
        "airlines": "AIRASIA",
        "price": "694000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "00:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "01:15"
      },
      {
        "flight_id": "XT-7521",
        "airlines": "AIRASIA",
        "price": "1014000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "XT-7527",
        "airlines": "AIRASIA",
        "price": "904000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-401",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:55"
      },
      {
        "flight_id": "GA-403",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:25"
      },
      {
        "flight_id": "GA-407",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-409",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-653",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-411",
        "airlines": "GARUDA",
        "price": "1718700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-439",
        "airlines": "GARUDA",
        "price": "1739600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "GA-419",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "GA-417",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:15"
      },
      {
        "flight_id": "GA-415",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-423",
        "airlines": "GARUDA",
        "price": "1573500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-413",
        "airlines": "GARUDA",
        "price": "1465700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-425",
        "airlines": "GARUDA",
        "price": "1129100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "JT-11",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-35",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:55"
      },
      {
        "flight_id": "JT-561",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "ID-6501",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:20"
      },
      {
        "flight_id": "JT-29",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "JT-41",
        "airlines": "LION",
        "price": "864000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:40"
      },
      {
        "flight_id": "ID-6513",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "ID-6515",
        "airlines": "BATIK",
        "price": "776000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "JT-27",
        "airlines": "LION",
        "price": "743000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:25"
      },
      {
        "flight_id": "JT-19",
        "airlines": "LION",
        "price": "677000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:25"
      },
      {
        "flight_id": "ID-6519",
        "airlines": "BATIK",
        "price": "710000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:20 (+1 Hari)"
      },
      {
        "flight_id": "JT-39",
        "airlines": "LION",
        "price": "622000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "23:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:40 (+1 Hari)"
      },
      {
        "flight_id": "QG-681",
        "airlines": "CITILINK",
        "price": "793133",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:00"
      },
      {
        "flight_id": "QG-683",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:50"
      },
      {
        "flight_id": "QG-685",
        "airlines": "CITILINK",
        "price": "793133",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "QG-687",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "QG-689",
        "airlines": "CITILINK",
        "price": "748500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "QG-691",
        "airlines": "CITILINK",
        "price": "660500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "22:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6060",
        "airlines": "BATIK",
        "price": "842000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "SJ-275",
        "airlines": "SRIWIJAYA",
        "price": "886000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "SJ-2723",
        "airlines": "SRIWIJAYA",
        "price": "1738500",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "JT-929/JT-573",
        "airlines": "LION",
        "price": "836000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "JT-805/JT-591",
        "airlines": "LION",
        "price": "880000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-253/GA-213",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "14:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-341/GA-313",
        "airlines": "GARUDA",
        "price": "2060300",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-347/GA-321",
        "airlines": "GARUDA",
        "price": "2123000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-255/GA-219",
        "airlines": "GARUDA",
        "price": "1954700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "19:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-251/GA-205",
        "airlines": "GARUDA",
        "price": "2319900",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-341/GA-315",
        "airlines": "GARUDA",
        "price": "1982200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-674/GA-617",
        "airlines": "GARUDA",
        "price": "2647700",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:15"
      },
      {
        "flight_id": "GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-620/GA-613",
        "airlines": "GARUDA",
        "price": "3425400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:20"
      },
      {
        "flight_id": "IN-376/SJ-259",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "IN-376/SJ-267",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "IN-376/SJ-257",
        "airlines": "NAMAIR",
        "price": "1254000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "17:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20 (+1 Hari)"
      },
      {
        "flight_id": "SJ-265/SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "1012000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15 (+1 Hari)"
      },
      {
        "flight_id": "JT-561/JT-537",
        "airlines": "LION",
        "price": "726000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:00"
      },
      {
        "flight_id": "IN-275/IN-279",
        "airlines": "NAMAIR",
        "price": "1320000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "GA-450/GA-433",
        "airlines": "GARUDA",
        "price": "2202200",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "11:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "QG-695/QG-717",
        "airlines": "CITILINK",
        "price": "1029600",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "10:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-697/QG-719",
        "airlines": "CITILINK",
        "price": "946000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-697/QG-721",
        "airlines": "CITILINK",
        "price": "1005043",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "12:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-719",
        "airlines": "CITILINK",
        "price": "977350",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-699/QG-721",
        "airlines": "CITILINK",
        "price": "1071400",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-699/QG-723",
        "airlines": "CITILINK",
        "price": "977350",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-699/QG-725",
        "airlines": "CITILINK",
        "price": "977350",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-699/QG-727",
        "airlines": "CITILINK",
        "price": "980100",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "16:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-446/GA-243",
        "airlines": "GARUDA",
        "price": "1749000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "13:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "SJ-265/SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1551000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "21:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25 (+1 Hari)"
      },
      {
        "flight_id": "IN-275/SJ-219",
        "airlines": "NAMAIR",
        "price": "1463000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "18:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10 (+1 Hari)"
      },
      {
        "flight_id": "JT-929/JT-591",
        "airlines": "LION",
        "price": "880000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "JT-658/JT-657",
        "airlines": "LION",
        "price": "957000",
        "dep_city": "Denpasar (DPS)",
        "dep_time": "09:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "SJ-257",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:20"
      },
      {
        "flight_id": "SJ-269",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "SJ-255",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:55"
      },
      {
        "flight_id": "SJ-259",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:45"
      },
      {
        "flight_id": "SJ-267",
        "airlines": "SRIWIJAYA",
        "price": "612000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "XT-7689",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:00"
      },
      {
        "flight_id": "XT-7681",
        "airlines": "AIRASIA",
        "price": "490220",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:25"
      },
      {
        "flight_id": "ID-6401",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "ID-6597",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "JT-571",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "ID-6391",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "JT-573",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "ID-6573",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "JT-591",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "ID-6575",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:10"
      },
      {
        "flight_id": "JT-577",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:20"
      },
      {
        "flight_id": "JT-749",
        "airlines": "LION",
        "price": "524000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:05"
      },
      {
        "flight_id": "JT-599",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:00"
      },
      {
        "flight_id": "JT-693",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:20"
      },
      {
        "flight_id": "ID-7579",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-697",
        "airlines": "LION",
        "price": "579000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:45"
      },
      {
        "flight_id": "JT-585",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6309",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:40"
      },
      {
        "flight_id": "JT-595",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6583",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:15"
      },
      {
        "flight_id": "JT-821",
        "airlines": "LION",
        "price": "480000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "GA-303",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:00"
      },
      {
        "flight_id": "GA-305",
        "airlines": "GARUDA",
        "price": "1020100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "06:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:50"
      },
      {
        "flight_id": "GA-307",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:25"
      },
      {
        "flight_id": "GA-449",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:55"
      },
      {
        "flight_id": "GA-309",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "GA-311",
        "airlines": "GARUDA",
        "price": "1020100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:40"
      },
      {
        "flight_id": "GA-313",
        "airlines": "GARUDA",
        "price": "1387500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-315",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "12:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:05"
      },
      {
        "flight_id": "GA-317",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "13:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:05"
      },
      {
        "flight_id": "GA-319",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "GA-321",
        "airlines": "GARUDA",
        "price": "738500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "GA-323",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-325",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:15"
      },
      {
        "flight_id": "GA-327",
        "airlines": "GARUDA",
        "price": "953000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-329",
        "airlines": "GARUDA",
        "price": "845200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "ID-7520",
        "airlines": "BATIK",
        "price": "601000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-711",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "QG-713",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "09:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:15"
      },
      {
        "flight_id": "QG-715",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:00"
      },
      {
        "flight_id": "QG-717",
        "airlines": "CITILINK",
        "price": "617500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:10"
      },
      {
        "flight_id": "QG-719",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "QG-721",
        "airlines": "CITILINK",
        "price": "633175",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QG-723",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:25"
      },
      {
        "flight_id": "QG-725",
        "airlines": "CITILINK",
        "price": "562500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-727",
        "airlines": "CITILINK",
        "price": "519600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "21:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "909000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "ID-6581",
        "airlines": "BATIK",
        "price": "656000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "18:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:50"
      },
      {
        "flight_id": "GA-331",
        "airlines": "GARUDA",
        "price": "859500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "20:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "SJ-225",
        "airlines": "SRIWIJAYA",
        "price": "1151000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-708/JT-891",
        "airlines": "LION",
        "price": "1486000",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "05:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "GA-365/GA-243",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:35"
      },
      {
        "flight_id": "GA-368/GA-235",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:05"
      },
      {
        "flight_id": "GA-365/GA-245",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:55"
      },
      {
        "flight_id": "GA-342/GA-653",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-344/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "16:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-364/GA-433",
        "airlines": "GARUDA",
        "price": "2276900",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "10:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:45"
      },
      {
        "flight_id": "GA-7308/GA-215",
        "airlines": "GARUDA",
        "price": "1810500",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-368/GA-237",
        "airlines": "GARUDA",
        "price": "1444200",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "07:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-365/GA-249",
        "airlines": "GARUDA",
        "price": "1481600",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-338/GA-423",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-338/GA-413",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-338/GA-425",
        "airlines": "GARUDA",
        "price": "2598100",
        "dep_city": "Surabaya (SUB)",
        "dep_time": "17:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "SJ-235",
        "airlines": "SRIWIJAYA",
        "price": "451000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:10"
      },
      {
        "flight_id": "IN-279",
        "airlines": "NAMAIR",
        "price": "451000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "19:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:30"
      },
      {
        "flight_id": "QZ-7551",
        "airlines": "AIRASIA",
        "price": "534000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:30"
      },
      {
        "flight_id": "QZ-7557",
        "airlines": "AIRASIA",
        "price": "474000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "QZ-7553",
        "airlines": "AIRASIA",
        "price": "604000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "QZ-7555",
        "airlines": "AIRASIA",
        "price": "345500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "22:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:00 (+1 Hari)"
      },
      {
        "flight_id": "SJ-231",
        "airlines": "SRIWIJAYA",
        "price": "539000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:10"
      },
      {
        "flight_id": "GA-201",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:15"
      },
      {
        "flight_id": "GA-203",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:45"
      },
      {
        "flight_id": "GA-205",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "10:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:25"
      },
      {
        "flight_id": "GA-207",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "12:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "GA-209",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-211",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "15:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:25"
      },
      {
        "flight_id": "GA-213",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:40"
      },
      {
        "flight_id": "GA-215",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      },
      {
        "flight_id": "GA-219",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "GA-217",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:45"
      },
      {
        "flight_id": "JT-565",
        "airlines": "LION",
        "price": "440000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:55",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "ID-6375",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "JT-555",
        "airlines": "LION",
        "price": "484000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "18:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:05"
      },
      {
        "flight_id": "JT-545",
        "airlines": "LION",
        "price": "363000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "ID-6367",
        "airlines": "BATIK",
        "price": "429000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "20:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "JT-557",
        "airlines": "LION",
        "price": "335500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "21:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "QG-775",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-257",
        "airlines": "GARUDA",
        "price": "1032900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:40"
      },
      {
        "flight_id": "QG-771",
        "airlines": "CITILINK",
        "price": "530475",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:30"
      },
      {
        "flight_id": "SJ-219",
        "airlines": "SRIWIJAYA",
        "price": "594000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "06:10"
      },
      {
        "flight_id": "IW-1814/ID-6391",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "09:50"
      },
      {
        "flight_id": "IW-1814/JT-573",
        "airlines": "WINGS",
        "price": "1248000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:35"
      },
      {
        "flight_id": "IW-1814/ID-6573",
        "airlines": "WINGS",
        "price": "1424000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:05"
      },
      {
        "flight_id": "GA-7309/GA-327",
        "airlines": "GARUDA",
        "price": "1869500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:05"
      },
      {
        "flight_id": "GA-250/GA-407",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:55"
      },
      {
        "flight_id": "GA-665/GA-571",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:00"
      },
      {
        "flight_id": "GA-252/GA-423",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:15"
      },
      {
        "flight_id": "GA-252/GA-413",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:40"
      },
      {
        "flight_id": "GA-7309/GA-329",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:05"
      },
      {
        "flight_id": "GA-695/GA-651",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:35"
      },
      {
        "flight_id": "GA-695/GA-605",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "GA-252/GA-425",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:15"
      },
      {
        "flight_id": "GA-665/GA-575",
        "airlines": "GARUDA",
        "price": "3476600",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "14:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:50"
      },
      {
        "flight_id": "GA-250/GA-409",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:45"
      },
      {
        "flight_id": "GA-250/GA-653",
        "airlines": "GARUDA",
        "price": "2885900",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-695/GA-659",
        "airlines": "GARUDA",
        "price": "3577800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:10"
      },
      {
        "flight_id": "GA-7309/GA-331",
        "airlines": "GARUDA",
        "price": "1484500",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "16:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:30"
      },
      {
        "flight_id": "JT-560/JT-29",
        "airlines": "LION",
        "price": "1171000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "07:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "IW-1814/JT-591",
        "airlines": "WINGS",
        "price": "1292000",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "06:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-250/GA-446/GA-241",
        "airlines": "GARUDA",
        "price": "2577400",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "GA-250/GA-347/GA-319",
        "airlines": "GARUDA",
        "price": "3120800",
        "dep_city": "Jogjakarta (JOG)",
        "dep_time": "08:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:55"
      },
      {
        "flight_id": "SJ-011",
        "airlines": "SRIWIJAYA",
        "price": "1026000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:25"
      },
      {
        "flight_id": "SJ-017",
        "airlines": "SRIWIJAYA",
        "price": "927000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:10"
      },
      {
        "flight_id": "SJ-015",
        "airlines": "SRIWIJAYA",
        "price": "839000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "22:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "00:30 (+1 Hari)"
      },
      {
        "flight_id": "GA-181",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:45"
      },
      {
        "flight_id": "GA-123",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:00"
      },
      {
        "flight_id": "GA-183",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:20"
      },
      {
        "flight_id": "GA-197",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:35"
      },
      {
        "flight_id": "GA-185",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-187",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:45"
      },
      {
        "flight_id": "GA-189",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:30"
      },
      {
        "flight_id": "GA-121",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "16:05",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:30"
      },
      {
        "flight_id": "GA-191",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:25"
      },
      {
        "flight_id": "GA-193",
        "airlines": "GARUDA",
        "price": "1512200",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:00"
      },
      {
        "flight_id": "GA-195",
        "airlines": "GARUDA",
        "price": "1365900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:00"
      },
      {
        "flight_id": "ID-6881",
        "airlines": "BATIK",
        "price": "773000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "07:25"
      },
      {
        "flight_id": "JT-397",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:15"
      },
      {
        "flight_id": "ID-6883",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:20"
      },
      {
        "flight_id": "ID-6885",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:25"
      },
      {
        "flight_id": "JT-303",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:15"
      },
      {
        "flight_id": "JT-201",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "12:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:15"
      },
      {
        "flight_id": "JT-387",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:15"
      },
      {
        "flight_id": "ID-6889",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "14:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:20"
      },
      {
        "flight_id": "JT-399",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:45"
      },
      {
        "flight_id": "JT-131",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:25"
      },
      {
        "flight_id": "JT-383",
        "airlines": "LION",
        "price": "872000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:15"
      },
      {
        "flight_id": "JT-385",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "17:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:10"
      },
      {
        "flight_id": "ID-6891",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:25"
      },
      {
        "flight_id": "JT-305",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "JT-309",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:35"
      },
      {
        "flight_id": "ID-6887",
        "airlines": "BATIK",
        "price": "861000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:20"
      },
      {
        "flight_id": "JT-205",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:35"
      },
      {
        "flight_id": "ID-6893",
        "airlines": "BATIK",
        "price": "938000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "21:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "23:55"
      },
      {
        "flight_id": "JT-301",
        "airlines": "LION",
        "price": "795000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:40"
      },
      {
        "flight_id": "QG-917",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "18:10",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:40"
      },
      {
        "flight_id": "QZ-191",
        "airlines": "AIRASIA",
        "price": "1144000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "13:45",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:55"
      },
      {
        "flight_id": "QG-911",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "05:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "08:15"
      },
      {
        "flight_id": "QG-913",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "08:40",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "10:55"
      },
      {
        "flight_id": "QG-915",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "09:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "11:55"
      },
      {
        "flight_id": "QG-919",
        "airlines": "CITILINK",
        "price": "729000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "19:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "21:55"
      },
      {
        "flight_id": "QG-921",
        "airlines": "CITILINK",
        "price": "806000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "20:25",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "22:50"
      },
      {
        "flight_id": "JT-231/JT-353",
        "airlines": "LION",
        "price": "1020000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "06:30",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:25"
      },
      {
        "flight_id": "JT-970/JT-591",
        "airlines": "LION",
        "price": "1471000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "13:40"
      },
      {
        "flight_id": "GA-266/GA-109",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "12:45"
      },
      {
        "flight_id": "GA-266/GA-111",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:30"
      },
      {
        "flight_id": "GA-266/GA-653",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "15:30"
      },
      {
        "flight_id": "GA-266/GA-411",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "JT-847/JT-345",
        "airlines": "LION",
        "price": "921000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "11:00",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:35"
      },
      {
        "flight_id": "3K-282/3K-207",
        "airlines": "JETSTAR",
        "price": "1413110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:40"
      },
      {
        "flight_id": "3K-282/3K-205",
        "airlines": "JETSTAR",
        "price": "1223110",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "10:35",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:55"
      },
      {
        "flight_id": "QG-925/QG-945",
        "airlines": "CITILINK",
        "price": "1056850",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "15:20",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "20:00"
      },
      {
        "flight_id": "GA-266/GA-113",
        "airlines": "GARUDA",
        "price": "1491900",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "16:35"
      },
      {
        "flight_id": "GA-266/GA-439",
        "airlines": "GARUDA",
        "price": "4667600",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:05"
      },
      {
        "flight_id": "IW-1296/ID-6833",
        "airlines": "WINGS",
        "price": "1493000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:50",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "14:00"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-285",
        "airlines": "GARUDA",
        "price": "3973000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "17:10"
      },
      {
        "flight_id": "GA-266/GA-7126/GA-139",
        "airlines": "GARUDA",
        "price": "2100800",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "18:40"
      },
      {
        "flight_id": "GA-266/GA-7128/GA-79",
        "airlines": "GARUDA",
        "price": "1916000",
        "dep_city": "Kuala Namu (KNO)",
        "dep_time": "07:15",
        "arr_city": "Jakarta (CGK)",
        "arr_time": "19:40"
      }
    ],
    "26-6-2018": [],
    "27-6-2018": [],
    "28-6-2018": [],
    "29-6-2018": [],
    "30-6-2018": [],
    "1-7-2018": [],
    "2-7-2018": [],
    "3-7-2018": [],
    "4-7-2018": [],
    "5-7-2018": [],
    "6-7-2018": [],
    "7-7-2018": [],
    "8-7-2018": [],
    "9-7-2018": [],
    "10-7-2018": []
  };

  var counter = 0;
  var firstWeek = 0;
  var secondWeek = 0;
  var thirdWeek = 0;
  var fourthWeek = 0;
  var dpsNum = 0;
  var subNum = 0;
  var jogNum = 0;
  var knoNum = 0;

  for (var id in tickets) {
    if (counter <= 6) {
      firstWeek += tickets[id].length;
    } else if (counter <= 13) {
      secondWeek += tickets[id].length;
    } else if (counter <= 20) {
      thirdWeek += tickets[id].length;
    } else {
      fourthWeek += tickets[id].length;
    }

    tickets[id].forEach(element => {
      if (element.dep_city === 'Denpasar (DPS)') {
        dpsNum++;
      } else if (element.dep_city === 'Surabaya (SUB)') {
        subNum++;
      } else if (element.dep_city === 'Jogjakarta (JOG)') {
        jogNum++;
      } else {
        knoNum++;
      }
    });
    counter++;
  }

  var totalNum = dpsNum + subNum + jogNum + knoNum;
  $('#numTickets').text(totalNum);
  $('#dailyTickets').text(Math.round(totalNum / 30));
  $('#monthlyTickets').text(totalNum);

  var weeklyNum = (firstWeek + secondWeek + thirdWeek + fourthWeek) / 4;
  $('#weeklyTickets').text(Math.round(weeklyNum));

  var datapie = {
    datasets: [{
      data: [
        dpsNum / totalNum,
        subNum / totalNum,
        jogNum / totalNum,
        knoNum / totalNum
      ],
      backgroundColor: [
        '#29B0D0',
        '#4C6579',
        '#F57E2E',
        '#C8E0E4'
      ]
    }],
    labels: ['Denpasar (DPS)', 'Surabaya (SUB)', 'Jogjakarta (JOG)', 'Kuala Namu (KNO)']
  };

  var optionpie = {
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  // For a doughnut chart
  var ctx6 = document.getElementById('chartPie');
  var myPieChart6 = new Chart(ctx6, {
    type: 'doughnut',
    data: datapie,
    options: optionpie
  });

  // For a pie chart
  var ctx7 = document.getElementById('chartDonut');
  var myPieChart7 = new Chart(ctx7, {
    type: 'pie',
    data: datapie,
    options: optionpie
  });

});