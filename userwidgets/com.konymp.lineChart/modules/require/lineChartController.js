/**
 * @controller: Line Chart UDW
 * @author: Tejaswini Tubati and Sumeet Bartha
 * @category: Reusable Component
 * @componentVersion: 1.0
 * @description: Generates line chart by taking the required parameters as input
 */
define(function() {
	var konyLoggerModule = require('com/konymp/lineChart/konyLogger');
  	konymp = {};
  	konymp.logger = new konyLoggerModule("Line Chart Component");
	return {
      	/**
	  	 * @function constructor
         * @private
		 * @params {Object} baseConfig, layoutConfig, pspConfig
		 */
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			konymp.logger.trace("----------Entering constructor---------", konymp.logger.FUNCTION_ENTRY);
      		konymp.logger.trace("----------Exiting constructor ---------", konymp.logger.FUNCTION_EXIT);
		},
		/**
		 * @function initGetterSetters
		 * @private
         * @description: Logic for getters/setters of custom properties
		 */
		initGettersSetters: function() {
          this._chartProperties = {};
			konymp.logger.trace("----------Entering initGettersSetters Function---------", konymp.logger.FUNCTION_ENTRY);
          	defineSetter(this, "chartTitle", function(val) {
              	konymp.logger.trace("----------Entering chartTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartTitle = val;
              	konymp.logger.trace("----------Exiting chartTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "lineColor", function(val) {
              	konymp.logger.trace("----------Entering graphColor Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._lineColor = val;
              	konymp.logger.trace("----------Exiting graphColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "chartData", function(val) {
              	konymp.logger.trace("----------Entering chartData Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartData = val.data;
              	konymp.logger.trace("----------Exiting chartData Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "xAxisTitle", function(val) {
              	konymp.logger.trace("----------Entering xAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._xAxisTitle = val;
              	konymp.logger.trace("----------Exiting xAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "yAxisTitle", function(val) {
              	konymp.logger.trace("----------Entering yAxisTitle Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._yAxisTitle = val;
              	konymp.logger.trace("----------Exiting yAxisTitle Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "titleFontColor", function(val) {
              	konymp.logger.trace("----------Entering titleFontColor Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._titleFontColor = val;
              	konymp.logger.trace("----------Exiting titleFontColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "titleFontSize", function(val) {
              	konymp.logger.trace("----------Entering titleFontSize Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._titleFontSize = val;
              	konymp.logger.trace("----------Exiting titleFontSize Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          	defineSetter(this, "bgColor", function(val) {
              	konymp.logger.trace("----------Entering backgroundColor Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._bgColor = val;
              	konymp.logger.trace("----------Exiting backgroundColor Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGrid", function(val) {
              	konymp.logger.trace("----------Entering enableGrid Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._enableGrid = val;
              	konymp.logger.trace("----------Exiting enableGrid Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableGridAnimation", function(val) {
              	konymp.logger.trace("----------Entering enableGridAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._enableGridAnimation = val;
              	konymp.logger.trace("----------Exiting enableGridAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
            defineSetter(this, "enableChartAnimation", function(val) {
              	konymp.logger.trace("----------Entering enableChartAnimation Setter---------", konymp.logger.FUNCTION_ENTRY);
              	this._chartProperties._enableChartAnimation = val;
              	konymp.logger.trace("----------Exiting enableChartAnimation Setter---------", konymp.logger.FUNCTION_EXIT);
            });
          
          	konymp.logger.trace("----------Exiting initGettersSetters Function---------", konymp.logger.FUNCTION_EXIT);
		},
      	/**
      	 * @function generateLineChart
      	 * @access exposed to user
         * @param {JSON} dataSet
         * @description: generates line chart by taking the data and the other params as input
      	 */
      	generateLineChart: function(dataSet) {
          	konymp.logger.trace("----------Entering generateLineChart Function---------", konymp.logger.FUNCTION_ENTRY);
          	try {
              	var labels, series, data;
              	if(dataSet !== null && dataSet !== undefined && dataSet !== "") {
                  	labels = dataSet.map(function(obj) {
                      	return obj.lblName;
                    });
                  	series = dataSet.map(function(obj) {
                      	return Number(obj.dataVal);
                    });
                }
              	else if(this._chartData !== null && this._chartData !== undefined && this._chartData !== "") {
                  	data = this._chartData;
                  	labels = data.map(function(obj) {
                      	return obj.lblName;
                    });
                  	series = data.map(function(obj) {
                      	return Number(obj.dataVal);
                    });
                }
              	series = [series];
              	if(this.validateAllParams(this._chartTitle, labels, series, this._chartProperties)) {
                	var x = this.view.lineChartBrowser.evaluateJavaScript('var chartObj = new konymp.charts.lineChart(); chartObj.drawLineChart(' + 
                                                                               JSON.stringify(this._chartTitle) + ',' + 
                                                                               JSON.stringify(labels) + ',' + 
                                                                               JSON.stringify(series) + ',' + 
                                                                               JSON.stringify(this._chartProperties) + ');');
                }
              	konymp.logger.trace("----------Exiting generateLineChart Function---------", konymp.logger.FUNCTION_EXIT);
            }
          	catch(exception) {
              	konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
      	/**
      	 * @function validateData
         * @private
      	 * @param {String/Array/JSON} data
         * @param {String(datatype)} type
         * @description: validates the data param based on the corresponding type param
      	 */
      	validateData: function(data, type) {
          	konymp.logger.trace("----------Entering validateData Function---------", konymp.logger.FUNCTION_ENTRY);
      		if(type == 'array') {
        		konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
        		return Array.isArray(data);
      		}
      		else if(typeof data === type) {
        		konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
        		return true;
      		}
      		else {
        		konymp.logger.trace("----------Exiting validateData Function---------", konymp.logger.FUNCTION_EXIT);
        		return false;
      		}
        },
      	/**
      	 * @function validateAllParams
      	 * @private
      	 * @params {String} title, color, xAxisTitle, yAxisTitle
      	 * @params {JS Array} labels, series 
         * @description: invokes the validation of all params and returns a true only if all are validated
      	 */
      	validateAllParams: function(title, labels, series, properties) {
          	konymp.logger.trace("----------Entering validateAllParams Function---------", konymp.logger.FUNCTION_ENTRY);
      		if(!this.validateData(title, 'string')) {
        		throw {code: 100, msg: "Wrong dataType for title " + JSON.stringify(title)};
      		}
          	if(!this.validateData(labels, 'array')) {
              	throw {code: 100, msg: "Wrong datatype for labels " + JSON.stringify(labels)};
            }
          	if(!this.validateData(series, 'array')) {
              	throw {code: 100, msg: "Wrong datatype for series " + JSON.stringify(series)};
            }
      		if(!this.validateData(properties._lineColor, 'string')) {
        		throw {code: 100, msg: "Wrong dataType for lineColor " + JSON.stringify(properties._lineColor)};
      		}
          	if(!this.validateData(properties._xAxisTitle, 'string')) {
        		throw {code: 100, msg: "Wrong dataType for xAxisTitle " + JSON.stringify(properties._xAxisTitle)};
      		}
          	if(!this.validateData(properties._yAxisTitle, 'string')) {
        		throw {code: 100, msg: "Wrong dataType for yAxisTitle " + JSON.stringify(properties._yAxisTitle)};
      		}
          	if(!this.validateData(properties._titleFontColor, 'string')) {
              	throw {code: 100, msg: "Wrong dataType for titleFontColor " + JSON.stringify(properties._titleFontColor)};
            }
          	if(!this.validateData(properties._titleFontSize, 'string')) {
              	throw {code: 100, msg: "Wrong dataType for titleFontSize " + JSON.stringify(properties._titleFontSize)};
            }
          	if(!this.validateData(properties._bgColor, 'string')) {
              	throw {code: 100, msg: "Wrong dataType for backgroundColor " + JSON.stringify(properties._bgColor)};
            }
      		konymp.logger.trace("----------Exiting validateAllParams Function---------", konymp.logger.FUNCTION_EXIT);
      		return true;
        },
       	myPostshow: function(){
        	this.generateLineChart(this._chartData);
      	}
	};
});