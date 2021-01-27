<script>
import { Pie } from "vue-chartjs";

/**
 * Pie chart component
 */
export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 180],
            backgroundColor: ["#02a499", "#ebeff2"],
            hoverBackgroundColor: ["#02a499", "#ebeff2"],
            hoverBorderColor: "#fff"
          }
        ]
      },
      {
        maintainAspectRatio: true,
        responsive: true
      }
    );
  }
};
</script>