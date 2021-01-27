<script>
import { PolarArea } from "vue-chartjs";

/**
 * Polar-area chart component
 */
export default {
  extends: PolarArea,
  mounted() {
    this.renderChart(
      {
        labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
        datasets: [
          {
            data: [11, 16, 7, 18],
            backgroundColor: ["#38a4f8", "#02a499", "#ec4561", "#3c4ccf"],
            label: "My dataset",
            hoverBorderColor: "#fff"
          }
        ]
      },
      {
        maintainAspectRatio: true,
        legend: {
          position: "top"
        }
      }
    );
  }
};
</script>