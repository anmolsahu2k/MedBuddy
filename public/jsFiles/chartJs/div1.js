function DrawTheChart(ChartData, ChartOptions, ChartId, ChartType) {
  eval(
    'var myLine = new Chart(document.getElementById(ChartId).getContext("2d"),{type:"' +
      ChartType +
      '",data:ChartData,options:ChartOptions});document.getElementById(ChartId).getContext("2d").stroke();'
  );
}
WebFontConfig = {
  google: { families: ["Open Sans"] },
  active: function () {
    DrawTheChart(ChartData, ChartOptions, "div1", "line");
  },
};

function MoreChartOptions() {}
var ChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      data: [65, 450, 53, 56, 107, 56, 55, 40, 65, 45, 56, 78, 56, 55, 40],
      backgroundColor: "#3498db",
      borderColor: "rgba(136,136,136,0.5)",
      pointBackgroundColor: "#3498db",
      pointBorderColor: "#fff",
      label: "2013",
    },
  ],
};
ChartOptions = {
  responsive: true,
  layout: { padding: { top: 12, left: 12, bottom: 12 } },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],

    yAxes: [
      {
        display: false,
      },
    ],
  },
  plugins: {
    datalabels: { display: false },
  },
  legend: { display: false },
  elements: {
    arc: {},
    point: { radius: 0 },
    line: { tension: 0.4 },
    rectangle: {},
  },
  tooltips: { enabled: false },
  hover: {},
};
DrawTheChart(ChartData, ChartOptions, "div1", "line");
