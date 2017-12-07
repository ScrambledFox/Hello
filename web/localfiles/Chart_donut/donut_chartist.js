konymp = {};
konymp.charts = konymp.charts || {};

/**
 * @Class Namespace
 * @Constructor
 * @Description - constructor for DonutChart
 */
konymp.charts.donut = function(){
  
};
/**
 * @function
 *
 * @param labels 
 * @param series 
 */
konymp.charts.donut.prototype.createDonutChart = function(id,labels,series,options,opacity,enableAnimation){
  var ptr=0;
  var chart = new Chartist.Pie(id, {
    labels:labels,
    series: series[0]

  }, options, [
    ['screen and (min-width: 640px)', {
      chartPadding: 60,
      labelOffset: 40,
      labelDirection: 'implode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 40,
      chartPadding: 20
    }]
  ]);
  chart.on('draw', function (data) {
     
    if (data.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      var pathLength = data.element._node.getTotalLength();
      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      var wid = document.getElementById('pie1').offsetHeight;
      wid = wid/5;
      data.element.attr({
        style:'opacity:'+opacity+';stroke-width:'+wid+"px;",
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      }); 
     
      // Create animation definition while also assigning an ID to the animation for later sync usage
     
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 500 * data.value / data.totalDataSum,
          from: -pathLength + 'px',
          to: '0px',
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };

      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if(!enableAnimation){
        return;
      }
      if (data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }

      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data.element.attr({

        'stroke-dashoffset': -pathLength + 'px'
      });

      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      
      data.element.animate(animationDefinition, false);

      // add (naive) bounce
      if (parseInt(data.endAngle) === 360) {
        var index = data.index;
        var dur = 1000 * data.value / data.totalDataSum / 2;
        var from = 0;
        var to = -pathLength / 3;
        for (var i = 0; i < 4; i++) {
          data.element.animate({
            'stroke-dashoffset': {
              id: 'anim' + (index + 1),
              dur: dur,
              from: from + 'px',
              to: to + 'px',
              fill: 'freeze',
              begin: 'anim' + index + '.end'
            }
          }, false);

          index++;
          dur /= 1.75;

          var t = from;
          from = to;
          to = t / 2.5;
        }
      }
    }
  });
}   ; 
/**
 * @function
 *
 * @param lbls 
 * @param srs 
 */
konymp.charts.donut.prototype.createDonutCharts_UI = function(lbls,srs,legends,enableAnimation)
{
  var myNode = document.getElementById("legends");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  var sum = function(a, b) { return a + b;};
  var offset  = document.getElementById('pie1').offsetWidth;
  var width = parseInt(offset/3);
  this.createDonutChart.call(this,'#pie1',lbls,srs,{
    showLabel:true,
    labelInterpolationFnc: function(srs,sum,value, idx) {
      return  srs[0][idx].value || srs[0][idx];
    }.bind(this,srs,sum),
    plugins:legends===true? [
      Chartist.plugins.legend( {
        classNames: ['ct-dimmed', 'ct-hidden', ''],
        horizontalAlign: "right",
        clickable:false,
        position: document.getElementById('legends')
      })
    ]:[],
    donut: true,
    donutWidth: width,
  },0.9,enableAnimation);

};
/**
 * @function
 *
 * @param colors 
 */
konymp.charts.donut.prototype.Updatecss = function(colors)
{
   var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
  for(var i in colors)
    {
      if(colors[i]!==""&&regColorcode.test(colors[i]))
      {  
       createClass('.ct-legend .ct-series-'+i+':before',"  background-color:"+colors[i]+"; border-color:"+colors[i]+";");
        var _char = String.fromCharCode(parseInt(97+Number(i)));
        createClass('.ct-series-'+_char+' .ct-slice-donut',"  stroke:"+colors[i]+";");
      }
    }
};
/**
 * @function
 *
 * @param properties 
 */
konymp.charts.donut.prototype.setProperties = function(properties){
//   createClass('Title_Properties',"font-family: '" +properties._titleFont+"'; font-size :"+
//               									parseInt(properties._titleFontSize)*10+
//               									 "%; color : "+properties._titleFontColor+";");
    createClass(".ct-legend.ct-legend-inside","position: absolute;top: 0;left: 0;margin-left:0px;"+
                 "font-family :Arial, Helvetica, sans-serif;"+
		         " font-size : "+parseInt(properties._legendFontSize)*10+"%; color : "+properties._legendFontColor+";"
                );
 
         //_titleFontColor
 // createClass('Title_Properties',"  font-family:'" +properties._titleFont+"'; font-size :"+parseInt(properties._titleFontSize)+"%; text-align:center;");
};
/**
 * @function
 *
 * @param title 
 * @param labels 
 * @param data 
 * @param colors 
 */
konymp.charts.donut.prototype.Generate_DoughnutChart = function(title,labels,data,colors,properties){
  if(document.readyState === "complete")
  {
    document.ontouchmove = function (e) {
  e.preventDefault();
};
  
   this.setProperties(properties);
   document.getElementById('lblTitle').style.color = properties._titleFontColor||'#000000';
   document.getElementById('lblTitle').style.fontSize =properties._titleFontSize!==undefined? parseInt(properties._titleFontSize)*10+'%':'120%'; 
   document.getElementById('lblTitle').style.fontFamily = 'Arial, Helvetica, sans-serif';
   document.getElementById('lblTitle').innerHTML = title;
   document.body.style.backgroundColor = properties._bgColor;
    this.Updatecss(colors);
  //  properties ={_enableLegend:true};
    this.createDonutCharts_UI(labels,[data],properties._enableLegend,properties._enableChartAnimation);
    return true;
  }
  else
  {
    return false;
  }
};


/**
 * @function
 * @Test Function
 */
window.onload = function(){
  console.log(navigator.userAgent);
  	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	return true;
	}
  var x = new konymp.charts.donut();
    var data = [
                            {
                                "colorCode": "#1B9ED9",
                                "label": "Data1",
                                "value": "40"
                            },
                            {
                                "colorCode": "#E8672B",
                                "label": "data2",
                                "value": "20"
                            },
                            {
                                "colorCode": "#76C044",
                                "label": "data3",
                                "value": 20
                            },
                            {
                                "colorCode": "#FFC522",
                                "label": "data4",
                                "value": 10
                            },
                            {
                                "colorCode": "#97CDED",
                                "label": "data5",
                                "value": 10        
                            }
                        ];
  
  var Data = data.map(function(obj){
          return Number(obj.Value||obj.value);
        });
        var labels = data.map(function(obj){
          return obj.label;
        });
        var colors = data.map(function(obj){
          return obj.colorCode;
        });
  var properties = {_titleFontSize:12,
                    _titleFontColor:"#000000",
                    _enableLegend:true,
                    _legendFontSize:10,
                    _legendFontColor:"#000000",
                    _bgColor:"#ffffff",
                    _enableChartAnimation:true
    
  };
  x.Generate_DoughnutChart("Donut Chart",labels,data,colors,properties);
};
