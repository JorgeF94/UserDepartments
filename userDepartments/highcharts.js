var chart;

document.addEventListener('DOMContentLoaded', () => {
  chart = Highcharts.chart('container', {
    chart: {
      //backgroundColor: '#3f3b53',
      type: 'column',
      //marginLeft: 100,
      //marginRight: 100
    },
    lang: {
      thousandsSep: ','
    },
    title: {
      text: ''
    },
    legend: {
      enabled: true,
      useHTML: true,
      labelFormatter: function () {
        return ' <b>' + "dasdasda" + '</b><br><b>' + 'sadasdadasddsa' + '</b>';
      },
    },
    tooltip: {
      backgroundColor: '#fff',
      borderColor: '#fff',
      borderRadius: 4,
      borderWidth: 0,
      padding: 16,
      useHTML: true,
      //shared: true,
      //crosshairs: true,
      formatter: function () {
        console.log(this);
        var tooltip = '<div class=\'tooltip-header\' style=\'font-weight:bold;\'>'
          + '<div>' + this.x
          + '</div></div>'
          + '<div class=\'tooltip-item\' ><div>'
          + '<span class=\'tooltip-circle\' style=\'background-color:#7A3803;\'></span> Count: ' + String(this.y).replace(/(.)(?=(\d{3})+$)/g, '$1,')
          + ' <span style=\'flex:1;margin-left: 16px; text-align:right\'></span></div></div>';

        return tooltip;

      }
    },
    xAxis: {
      min: 0,
      max: 14,
      //tickWidth: 0,
      categories: [
        'Department 1 aGDFAHGSDFJHGASVDJHASVDJHASVDHASV', 'Department 2 dasdsadasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdsadasdsa', 'Department 3', 'Department 4', 'Department 5', 'Department 6', 'Department 7', 'Department 8', 'Department 9', 'Department 10',
        'Department 11', 'Department 12', 'Department 13', 'Department 14', 'Department 15', 'Department 16', 'Department 17', 'Department 18', 'Department 19', 'Department 20',
        'Department 21', 'Department 22', 'Department 23', 'Department 24', 'Department 25', 'Department 26', 'Department 27', 'Department 28', 'Department 29', 'Department 30,',
        'Department 31,', 'Department 32,', 'Department 33,', 'Department 34,', 'Department 35,', 'Department 36,', 'Department 37,', 'Department 38,', 'Department 39,', 'Department 40,',
        'Department 41,', 'Department 42,', 'Department 43,', 'Department 44,', 'Department 45,', 'Department 46,', 'Department 47,', 'Department 48,', 'Department 49,', 'Department 50,'
        /*,
        'Department 51,', 'Department 52,', 'Department 53,', 'Department 54,', 'Department 55,', 'Department 56,', 'Department 57,', 'Department 58,', 'Department 59,', 'Department 60,', 
        'Department 61,', 'Department 62,', 'Department 63,', 'Department 64,', 'Department 65,', 'Department 66,', 'Department 67,', 'Department 68,', 'Department 69,', 'Department 70,', 
        'Department 71,', 'Department 72,', 'Department 73,', 'Department 74,', 'Department 75,', 'Department 76,', 'Department 77,', 'Department 78,', 'Department 79,', 'Department 80,'
        /*
        /*, 'Department 81,', 'Department 82,', 'Department 83,', 'Department 84,', 'Department 85,', 'Department 86,', 'Department 87,', 'Department 88,', 'Department 89,', 'Department 90,', 'Department 91,', 'Department 92,', 'Department 93,', 'Department 94,', 'Department 95,', 'Department 96,', 'Department 97,', 'Department 98,', 'Department 99,', 'Department 100,', 'Department 101,', 'Department 102,', 'Department 103,', 'Department 104,', 'Department 105,', 'Department 106,', 'Department 107,', 'Department 108,', 'Department 109,', 'Department 110,', 'Department 111,', 'Department 112,', 'Department 113,', 'Department 114,', 'Department 115,', 'Department 116,', 'Department 117,', 'Department 118,', 'Department 119,', 'Department 120,', 'Department 121,', 'Department 122,', 'Department 123,', 'Department 124,', 'Department 125,', 'Department 126,', 'Department 127,', 'Department 128,', 'Department 129,', 'Department 130,', 'Department 131,', 'Department 132,', 'Department 133,', 'Department 134,', 'Department 135,', 'Department 136,', 'Department 137,', 'Department 138,', 'Department 139,', 'Department 140,', 'Department 141,', 'Department 142,', 'Department 143,', 'Department 144,', 'Department 145,', 'Department 146,', 'Department 147,', 'Department 148,', 'Department 149,', 'Department 150,', 'Department 151,', 'Department 152,', 'Department 153,', 'Department 154,', 'Department 155,', 'Department 156,', 'Department 157,', 'Department 158,', 'Department 159,', 'Department 160,', 'Department 161,', 'Department 162,', 'Department 163,', 'Department 164,', 'Department 165,', 'Department 166,', 'Department 167,', 'Department 168,', 'Department 169,', 'Department 170,', 'Department 171,', 'Department 172,', 'Department 173,', 'Department 174,', 'Department 175,', 'Department 176,', 'Department 177,', 'Department 178,', 'Department 179,', 'Department 180,', 'Department 181,', 'Department 182,', 'Department 183,', 'Department 184,', 'Department 185,', 'Department 186,', 'Department 187,', 'Department 188,', 'Department 189,', 'Department 190,', 'Department 191,', 'Department 192,', 'Department 193,', 'Department 194,', 'Department 195,', 'Department 196,', 'Department 197,', 'Department 198,', 'Department 199,', 'Department 200'*/
      ],
      labels: {
        useHTML: true,
        style: {
          color: '#366677',
          fontFamily: 'Frutiger, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
        },
        formatter: function () {
          let truncatedValue = this.value;
          if (truncatedValue.length > 12) {
            truncatedValue = truncatedValue.substring(0, 12) + '...'
          }

          return `<div >${truncatedValue}</div>`;
        },
      },
    },
    yAxis: {
      type: 'logarithmic',
      title: {
        text: ''
      },
      labels: {
        style: {
          color: '#333333',
          fontFamily: 'Frutiger, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
        },
        Formatter: function () {
          return Highcharts.numberFormat(this.value, 0, '.', ',');
        }
      }
    },
    series: [{
      showInLegend: false,
      data: [1949, 6881, 2105, 6532, 6214, 3257, 2311, 1312, 1943, 102,
        6944, 9231, 3724, 1522, 8897, 7236, 7822, 5471, 7909, 4733,
        9149, 1545, 6406, 6955, 4185, 7156, 1835, 4499, 8547, 1307,
        8100, 2065, 6794, 1521, 1186, 9046, 8209, 7763, 6361, 1016,
        5357, 2872, 1420, 8598, 3387, 136, 1000, 2486, 9758, 2768
        /*, 
        4557, 9490, 7599, 8007, 1272, 3196, 4168, 1090, 1683, 3526, 
        7324, 3006, 6120, 8140, 4037, 803, 5173, 8168, 5024, 8862, 
        7374, 9474, 7928, 3229, 5684, 7959, 8915, 2049, 4070, 211
        */
        /*, 8650, 3352, 6414, 6168, 6274, 7692, 9596, 1357, 9800, 667 , 6412, 584 , 4909, 6922, 9466, 5185, 1694, 6175, 708 , 4614, 2888, 4901, 9902, 1072, 6217, 5403, 5822, 815 , 8651, 309 , 8482, 945 , 822 , 639 , 791 , 2204, 6597, 2270, 1212, 7570, 34 , 861 , 3556, 4054, 7352, 6317, 8406, 5622, 3949, 1484, 6495, 4665, 1626, 1817, 6813, 2110, 3388, 347 , 1001, 2843, 4121, 6671, 9721, 660 , 7640, 314 , 250 , 3642, 1809, 7943, 6890, 2332, 1862, 8961, 698 , 259 , 557 , 373 , 215 , 4725, 5849, 9769, 5021, 9693, 8387, 9467, 8241, 4830, 9767, 1439, 3643, 5764, 9843, 1113, 4487, 5502, 4815, 5132, 690 , 8190, 2873, 87 , 8915, 8575, 6297, 233 , 2789, 5562, 6499, 7089, 5007, 1286, 5668, 8875, 623 , 7287, 7018, 3811, 5886, 9304*/
      ],
    }],
    plotOptions: {
      series: {
        minPointLength: 1,
        dataLabels: {
          enabled: false
        },
        borderRadius: {
          radius: 4
        },
        color: {
          linearGradient: [0, 0, 500, 0],
          stops: [
            [0, '#7A3803'],
            [1, '#FCAE1E']
          ]
        }
      }
    },
  },

    // Função para criar os links das páginas
    function createPagination(chart) {

      var chartLength = chart.xAxis[0].categories.length;
      var recordsPerPage = 15;
      var currentPage = 0;
      var auxMaxPage = chartLength / recordsPerPage;
      var firstPage = 0;
      var lastPage = Math.ceil(auxMaxPage) - 1;
      var minExtreme = 0;
      var maxExtreme = recordsPerPage;

      const pageLinksContainer = document.getElementById("pageLinks");

      if (lastPage > 0) {
        InitPagination();
        CheckPagination();
      }

      function InitPagination() {
        // Cria o element "prev"
        const prevLink = document.createElement("a");
        prevLink.setAttribute("id", "btn1");
        prevLink.href = "#";
        prevLink.classList.add("prev");
        prevLink.textContent = "‹"; // Unicode para seta para a esquerda
        prevLink.onclick = function () {
          currentPage = currentPage - 1;
          goToPage(currentPage);
          return false;
        };

        pageLinksContainer.appendChild(prevLink);

        // Cria os links das páginas numeradas
        for (let i = 0; i <= lastPage; i++) {
          const pageLink = document.createElement("a");
          pageLink.href = "#";
          pageLink.setAttribute("id", "page" + i);
          pageLink.classList.add("page");
          if (i == 0) {
            addClass(pageLink, "active");
          }
          pageLink.textContent = i + 1;
          pageLink.onclick = function () {
            goToPage(i);
            return false;
          };

          pageLinksContainer.appendChild(pageLink);
        }

        // Cria o element "next"
        const nextLink = document.createElement("a");
        nextLink.setAttribute("id", "btn2");
        nextLink.href = "#";
        nextLink.classList.add("next");
        nextLink.textContent = "›"; // Unicode para seta para a direita
        nextLink.onclick = function () {
          currentPage = currentPage + 1;
          goToPage(currentPage);
          return false;
        };

        pageLinksContainer.appendChild(nextLink);

      }

      // Função para ir para uma página específica
      function goToPage(pageNumber) {
        currentPage = pageNumber;
        minExtreme = pageNumber * recordsPerPage;
        maxExtreme = minExtreme + recordsPerPage - 1;
        for (let i = 0; i <= lastPage; i++) {
          removeClass(document.getElementById("page" + i), "active");
        }
        addClass(document.getElementById("page" + pageNumber), "active");
        chart.xAxis[0].setExtremes(minExtreme, maxExtreme);
        CheckPagination();
      }

      function CheckPagination() {
        if (lastPage > 0) {
          if (currentPage == firstPage) {
            addClass(document.getElementById("btn1"), "disabled");
            removeClass(document.getElementById("btn2"), "disabled");
          } else
            if (currentPage == lastPage) {
              removeClass(document.getElementById("btn1"), "disabled")
              addClass(document.getElementById("btn2"), "disabled");
            } else {
              removeClass(document.getElementById("btn1"), "disabled")
              removeClass(document.getElementById("btn2"), "disabled")
            }
        } else {
          addClass(document.getElementById("btn1"), "disabled");
          addClass(document.getElementById("btn2"), "disabled");
        }
      }
      function removeStyle(element, style) {
        if (element && element.style) {
          element.style[style] = "";
        }
      }
      function addClass(element, CssClass) {
        // Verifique se o element existe
        if (element && element.classList) {
          // Use o método add() para adicionar a CssClass
          element.classList.add(CssClass);
        }
      }
      function removeClass(element, CssClass) {
        // Verifique se o element existe
        if (element && element.classList) {
          // Use o método add() para remover a CssClass
          element.classList.remove(CssClass);
        }
      }

    }
  )
});

