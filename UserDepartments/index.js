document.addEventListener('DOMContentLoaded', () => {
  Highcharts.chart('container', {
      chart: {
          //backgroundColor: '#3f3b53',
          type: 'column',
          //marginLeft: 100,
          //marginRight: 100
        },
        lang: {
          thousandsSep: ','
        },
        legend: {
          enabled: true,
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
          //min: 0,
          //max: 2,
          //tickWidth: 0,
          categories: [
            'Department 1',
            'Department 2',
            'Department 3',
            'Department 4',
            'Department 5',
            'Department 6',
            'Department 7',
            'Department 8',
            'Department 9',
            'Department 10',
            'Department 11',
            'Department 12',
            'Department 13',
            'Department 14',
            'Department 15',
            'Department 16',
            'Department 17',
            'Department 18',
            'Department 19',
            'Department 20',
            'Department 21',
            'Department 22',
            'Department 23',
            'Department 24',
            'Department 25',
            'Department 26',
            'Department 27',
            'Department 28',
            'Department 29',
            'Department 30'
          ],
          labels: {
              useHTML: true,
              style: {
                  color: '#366677',
                  fontFamily: 'Frutiger, sans-serif',             
                  fontWeight: 400,
                  fontSize: '16px',    
              },
              formatter: function(){
                  let truncatedValue = this.value;
                              
                  return `<div >${truncatedValue}</div>`;
              },
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: ''
          },
          //type: 'logarithmic',
          labels: {
              style: {
                  color: '#333333',
                  fontFamily: 'Frutiger, sans-serif',             
                  fontWeight: 400,
                  fontSize: '16px',    
              },
              formatter: function() {
                  return Highcharts.numberFormat(this.value, 0, '.', ',');
              }
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
          /*column: {
            pointPadding: 0.2,
            borderWidth: 0
          }*/
          series: {  
            minPointLength: 1,
            //cursor: " + If(CanSeeDrilldown, "'pointer'", "'default'") + ",
            color: {
                linearGradient: [0, 0, 500, 0],
                stops: [
                    [0, '#1F3A44'],
                    [1, '#D1ECF6']
                ]
            }
        }
        },
        series: [{
           // name: 'Department 1',
      
            //color: '#0099ff',
            //data: [90]
      
          data: [957,
            860, 
            8565, 
            745, 
            80, 
            564, 
            8456, 
            85, 
            2650, 
            30,
            90,
            123, 
            85, 
            1234, 
            4556, 
            540, 
            88, 
            865, 
            20, 
            4560,
            90,
            4645, 
            865, 
            7560, 
            860, 
            5560, 
            8768, 
            8789, 
            270, 
            360]
    
        }]
       
  },

function(chart) { // on complete
    function noop(){};
      chart.renderer.button('<', chart.plotLeft - 60, chart.plotHeight + chart.plotTop, noop).addClass('left').add();
  
  
      chart.renderer.button('>', chart.plotLeft + chart.plotWidth + 30, chart.plotHeight + chart.plotTop, noop).addClass('right').add();
  
      $('.left').click(function() {
        chart.xAxis[0].setExtremes(0, 5);
      });
      $('.right').click(function() {
        chart.xAxis[0].setExtremes(6, 11);
      })
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