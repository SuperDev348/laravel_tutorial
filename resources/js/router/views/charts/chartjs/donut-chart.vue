<script>
import { Doughnut } from "vue-chartjs";

/**
 * Donut-chart
 */
export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(
      {
        labels: ["Desktops", "Tablets"],
        datasets: [
          {
            data: [300, 210],
            backgroundColor: ["#3c4ccf", "#ebeff2"],
            hoverBackgroundColor: ["#3c4ccf", "#ebeff2"],
            hoverBorderColor: "#fff"
          }
        ]
      },
      {
        maintainAspectRatio: true
      }
    );
  }
};
</script>