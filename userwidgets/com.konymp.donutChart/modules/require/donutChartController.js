/**
 * @controller: Doughnut Chart UDW
 * @author: Sumeet Bartha and Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates doughnut chart by taking the data as input
 */
define(function() {
  var konyLoggerModule = require('com/konymp/donutChart/konyLogger');
  konymp = {};
  konymp.logger = new konyLoggerModule("Donut Chart Component");
  return {
    /**
		 * @function constructor
         * @private
		 * @params {Object} baseConfig, layoutConfig, pspConfig
		 */
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
      konymp.logger.trace("----------Exiting constructor---------", konymp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function initGetterSetters
		 * @private
         * @description: Logic for getters/setters of custom properties
		 */
    initGettersSetters: function() {
      this.view.doughnutBrowser.onPageFinished = this.myPostShow.bind(this);
      this._chartProperties = {};
      konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
      defineSetter(this, "chartData", function(val) {
        konymp.logger.trace("----------Entering data Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._data = val.data;
        konymp.logger.trace("----------Exiting data Setter---------", konymp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "chartTitle", function(val) {
        konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartTitle = val;
        konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
      });
    
      defineSetter(this, "titleFontSize", function(val) {
        konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartProperties._titleFontSize = val;
        konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "titleFontColor", function(val) {
        konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartProperties._titleFontColor = val;
        konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
      });
       defineSetter(this, "enableLegend", function(val) {
        konymp.logger.trace("----------Entering enableLegend Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartProperties._enableLegend = val;
        konymp.logger.trace("----------Exiting enableLegend Setter---------", konymp.logger.FUNCTION_EXIT);
      });

            defineSetter(this, "legendFontSize", function(val) {
        konymp.logger.trace("----------Entering legendFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartProperties._legendFontSize = val;
        konymp.logger.trace("----------Exiting legendFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
      });
            defineSetter(this, "legendFontColor", function(val) {
        konymp.logger.trace("----------Entering legendFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartProperties._legendFontColor = val;
        konymp.logger.trace("----------Exiting legendFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
      });
        defineSetter(this, "bgColor", function(val) {
        konymp.logger.trace("----------Entering bgColor Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartProperties._bgColor = val;
        konymp.logger.trace("----------Exiting bgColor Setter---------", konymp.logger.FUNCTION_EXIT);
      });
       defineSetter(this, "enableChartAnimation", function(val) {
        konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
        this._chartProperties._enableChartAnimation = val;
        konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
      });
      konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
    },
    /**
       	 * @function createDonutChart         
       	 * @param {JSON array} dataSet - data for the chart
         * @description: initiates the creation of doughnut chart
       	 */
    createChart: function(dataSet) {
      konymp.logger.trace("----------Entering createDonutChart Function---------", konymp.logger.FUNCTION_ENTRY);
      try {
      
        var data = dataSet.map(function(obj){
          return Number(obj.Value||obj.value);
        });
        var labels = dataSet.map(function(obj){
          return obj.label;
        });
        var colors = dataSet.map(function(obj){
          return obj.colorCode;
        });
        if(this.validateAllParams(this._chartTitle, data, labels, colors)) {
         this.view.doughnutBrowser.evaluateJavaScript('var x = new konymp.charts.donut();x.Generate_DoughnutChart('+
                                                       JSON.stringify(this._chartTitle)+
                                                       ','+JSON.stringify(labels)+','+
                                                       JSON.stringify(data)+','+
                                                       JSON.stringify(colors)+','+
                                                       JSON.stringify(this._chartProperties)+');');
        }
      }
      catch(exception) {

        konymp.logger.error(JSON.stringify(exception),konymp.logger.EXCEPTION);
      }
    },
    /**
         * @function _validationData
         * @private
         * @param {String/js array} data - the paramater to be validated
         * @param {String} type - the type in which the parameter should be
         * @description: validates the datatype of a single paramater passed
         */
    _validationData: function(data, type) {
      konymp.logger.trace("----------Entering _validationData Function---------", konymp.logger.FUNCTION_ENTRY);
      if(type == 'array') {
        konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
        return Array.isArray(data);
      }
      else if(typeof data === type) {
        konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
        return true;
      }
      else {
        konymp.logger.trace("----------Exiting _validationData Function---------", konymp.logger.FUNCTION_EXIT);
        return false;
      }
    },
    /**
       	 * @function validateAllParams
       	 * @private
       	 * @param {String} title 
       	 * @param {js array} data 
       	 * @param {js array} labels 
       	 * @param {js array} colors 
         * @description: validates the datatypes of all the paramaters
       	 */
    validateAllParams: function(title, data, labels, colors) {
      konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
      if(!this._validationData(title,'string')) {
        throw {code:100,msg:"wrong dataType for title " + title};
      }
      if(!this._validationData(data,'array')) {
        throw {code:100,msg:"wrong dataType for data " + JSON.stringify(data)};
      }
      if(!this._validationData(labels,'array')) {
        throw {code:100,msg:"wrong dataType for labels " + JSON.stringify(labels)};
      }
      if(!this._validationData(colors,'array')) {
        throw {code:100,msg:"wrong dataType for bgColor " + JSON.stringify(colors)};
      }
      konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
      return true;
    },
     /**
       * @function
       *@description: called to create using data
       */
    myPostShow : function(){
      try {
        this.createChart(this._data);
        return;
      }
      catch(exception) {

        konymp.logger.error(JSON.stringify(exception),konymp.logger.EXCEPTION);
      }
    }
  };
});