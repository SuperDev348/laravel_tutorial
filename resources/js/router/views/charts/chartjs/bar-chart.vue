<script>
import { Bar } from "vue-chartjs";

/**
 * Bar-chart component
 */
export default {
  extends: Bar,
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
          "July"
        ],
        datasets: [
          {
            label: "Sales Analytics",
            backgroundColor: "#02a499",
            borderColor: "#02a499",
            borderWidth: 1,
            hoverBackgroundColor: "#02a499",
            hoverBorderColor: "#02a499",
            data: [65, 59, 81, 45, 56, 80, 50, 20]
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false
              },
              stacked: false,
              ticks: {
                stepSize: 20
              }
            }
          ],
          xAxes: [
            {
              stacked: false,
              gridLines: {
                color: "rgba(0,0,0,0.01)"
              }
            }
          ]
        }
      }
    );
  }
};
</script>