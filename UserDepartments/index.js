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
          useHTML: true,
          //x: -20,
          //y: -10,
          labelFormatter: function() {
            return ' <b>' + "dasdasda" + '</b><br><b>' + 'sadasdadasddsa' + '</b>';
          },
          //enabled: true,
          //symbolHeight: 8,
          //symbolWidth: 8,
          //symbolRadius: 4,
          //margin: 15,
          //backgroundColor: '#FFFFFF',
          //layout: 'horizontal',
          //itemDistance: 25,
          //symbolMargin: 10,
          /*itemStyle: {
            color: 'black',
            fontWeight: 'normal'
          },*/
        },
        title: {
          text: ''
        },
        xAxis: {
          min: 0,
          max: 9,
          //tickWidth: 0,
          categories: [
            'Department 1 aGDFAHGSDFJHGASVDJHASVDJHASVDHASV',
            'Department 2 dasdsadasdasdasdasdsadasdasdasdasdasdasdasdasdasdasdasdsadasdsa',
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
                  if(truncatedValue.length>12){
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
              Formatter: function() {
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
        series: [{
          showInLegend: false,
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
            360],
            
        }]
       
  }

  ,function(chart) { 
    
      function noop(){};
        console.log(chart); 

        var chartLength = chart.xAxis[0].categories.length;
        console.log(chartLength);
        var recordsPerPage = 10;
        var currentPage = 0;
        var auxMaxPage = chartLength/recordsPerPage;
        var firstPage = 0;
        var lastPage = Math.ceil(auxMaxPage) - 1;
        console.log(lastPage);
        console.log(firstPage);
        var minExtreme = 0;
        var maxExtreme = recordsPerPage;


        if (lastPage > 0) {
          InitPagination();
          CheckPagination();
        }

        function InitPagination(){
          console.log('Pagination Added!');
          chart.renderer.button('<', chart.plotLeft - 60, chart.plotHeight + chart.plotTop +40, noop)
        .attr({
          id: 'btn1',
          class: 'left',
        })
        .add();
        var centerXAux = this.plotWidth / 2;
        var centerYAux = this.plotHeight / 2;
        console.log(chart.plotHeight + chart.plotTop + 40);
        console.log(this.plotHeight);
        chart.renderer.button('>', chart.plotLeft + chart.plotWidth - 15, chart.plotHeight + chart.plotTop + 40, noop)
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
          console.log(lastPage);
          console.log(firstPage);
          console.log(currentPage);
          if (lastPage > 0) {
            if (currentPage == firstPage) {
              console.log('1');
              document.getElementById("btn1").style.display = 'none';
              document.getElementById("btn2").style.display = "block";
            } else
            if(currentPage == lastPage){
              console.log('2');
              document.getElementById("btn1").style.display = "block";
              document.getElementById("btn2").style.display = 'none';
            } else {
              console.log('3');
              document.getElementById("btn1").style.display = 'block';
              document.getElementById("btn2").style.display = "block";
            }
          } else {
            console.log('4');
            document.getElementById("btn1").style.display = 'none';
            document.getElementById("btn2").style.display = "none";
          }
        }

      }
    
  )
});