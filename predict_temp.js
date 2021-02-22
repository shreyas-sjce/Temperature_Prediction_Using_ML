setChartLibrary('google-chart');
setChartTitle('Polynomial Regression'); //Your Graph Title
setChartType('predictionGraph');
setAxisName('time','temp'); //('X-axis Name','Y-axis Name')
mul(0.0977); //multiplication factor for displaying the values in celsius 
plotChart('time_stamp','temp'); //('time_stamp','your_variable_name')