<script>
import { Line } from "vue-chartjs";

/**
 * Line-chart component
 */
export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October"
        ],
        datasets: [
          {
            label: "Sales Analytics",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(60, 76, 207, 0.2)",
            borderColor: "#3c4ccf",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#3c4ccf",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#3c4ccf",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
          },
          {
            label: "Monthly Earnings",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(235, 239, 242, 0.2)",
            borderColor: "#ebeff2",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#ebeff2",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#ebeff2",
            pointHoverBorderColor: "#eef0f2",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          intersect: false
        },
        hover: {
          intersect: true
        },
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [
            {
              reverse: true,
              gridLines: {
                color: "rgba(0,0,0,0.05)"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 20
              },
              display: true,
              borderDash: [5, 5],
              gridLines: {
                color: "rgba(0,0,0,0)",
                fontColor: "#fff"
              }
            }
          ]
        }
      }
    );
  }
};
</script>