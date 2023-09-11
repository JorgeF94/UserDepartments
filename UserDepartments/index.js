document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            backgroundColor: '#3f3b53',
            type: 'column',
            marginLeft: 100,
            marginRight: 100
          },
          legend: {
            symbolHeight: 8,
            symbolWidth: 8,
            symbolRadius: 4,
            margin: 15,
            backgroundColor: '#FFFFFF',
            layout: 'horizontal',
            itemDistance: 25,
            symbolMargin: 10,
            itemStyle: {
              color: 'black',
              fontWeight: 'normal'
            }
          },
          title: {
            text: ''
          },
          xAxis: {
            min: 0,
            max: 2,
            categories: [
              'JAN',
              'FEB',
              'MAR',
              'APR',
              'MAY',
              'JUN',
              'JUL',
              'AUG',
              'SEP',
              'OCT',
              'NOV',
              'DEC'
            ],
            labels: {
              style: {
                color: '#FFFFFF'
              }
            },
          },
          yAxis: {
            min: 0,
            title: {
              text: ''
            }
          },
          tooltip: {
            backgroundColor: '#FFFFFF',
            borderColor: '#FFFFFF',
            borderRadius: 0,
            borderWidth: 5,
            formatter: function() {
              return ' <b>' + this.y + '</b><br><b>' + this.series.name + '</b>';
            }
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [{
            name: 'Physical Medicine',
      
            color: '#0099ff',
            data: [90, 80, 85, 70, 80, 50, 88, 85, 20, 30, 40, 50]
      
          }, {
            name: 'Phychiatry',
      
            color: '#ff3399',
            data: [80, 70, 85, 60, 50, 70, 38, 89, 70, 40, 20, 50]
      
          }, {
            name: 'Otrhopedic Surgery',
      
            color: '#cc0000',
            data: [88, 79, 81, 50, 40, 76, 31, 81, 65, 30, 29, 59]
      
          }, {
            name: 'Nephrology',
      
            color: '#ff5c33',
            data: [88, 89, 61, 60, 70, 36, 21, 51, 69, 39, 21, 51]
      
          }, {
            name: 'Cardiology',
      
            color: '#ffa64d',
            data: [18, 29, 31, 50, 40, 46, 81, 31, 89, 39, 81, 31]
      
          }, {
            name: 'General Surgery',
      
            color: '#ffe066',
            data: [28, 59, 61, 59, 49, 41, 31, 41, 81, 31, 87, 38]
      
          }, {
            name: 'General Practise',
      
            color: '#a64dff',
            data: [78, 69, 41, 89, 29, 81, 21, 11, 41, 35, 92, 89]
      
          }, {
            name: 'Pulmanory Diesease',
      
            color: '#0066ff',
            data: [58, 39, 49, 89, 39, 61, 25, 45, 23, 76, 42, 89]
      
          }]
         
    }

    ,function(chart) { 
      
        function noop(){};
          console.log(chart); 

          var chartLength = chart.xAxis[0].categories.length;
          console.log(chartLength);
          var recordsPerPage = 3;
          var currentPage = 0;
          var auxMaxPage = chartLength/recordsPerPage;
          var firstPage = 0;
          var lastPage = Math.ceil(auxMaxPage) - 1;
          var minExtreme = 0;
          var maxExtreme = recordsPerPage;


          if (lastPage > 0) {
            InitPagination();
            CheckPagination();
          }


          function InitPagination(){
            console.log('Pagination Added!');
            chart.renderer.button('<', chart.plotLeft - 60, chart.plotHeight + chart.plotTop, noop)
          .attr({
            id: 'btn1',
            class: 'left',
          })
          .add();

          chart.renderer.button('>', chart.plotLeft + chart.plotWidth + 30, chart.plotHeight + chart.plotTop, noop)
          .attr({
            id: 'btn2',
            class: 'right',
          })
          .add();

          document.getElementById("btn1").addEventListener("click", function() {
            currentPage = currentPage - 1;
            goToPage(currentPage);
            CheckPagination();
          });

          document.getElementById("btn2").addEventListener("click", function() {
            currentPage = currentPage + 1;
            goToPage(currentPage);
            CheckPagination();
          });
          
          function goToPage(pagenumber){
            minExtreme = pagenumber*recordsPerPage;
            maxExtreme = minExtreme + recordsPerPage - 1;
            chart.xAxis[0].setExtremes(minExtreme, maxExtreme);
          }

          }
          function CheckPagination (){
            //console.log('Pagination Checked! CurrentPage: ' + currentPage);
            if (lastPage > 1) {
              if (currentPage == firstPage) {
                document.getElementById("btn1").style.display = 'none';
                document.getElementById("btn2").style.display = "block";
              } else
              if(currentPage == lastPage){
                document.getElementById("btn1").style.display = "block";
                document.getElementById("btn2").style.display = 'none';
              } else {
                document.getElementById("btn1").style.display = 'block';
                document.getElementById("btn2").style.display = "block";
              }
            } 
          }

        }
      
    )
});
