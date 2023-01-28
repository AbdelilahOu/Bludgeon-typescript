import { ChartLine } from "@/components/charts/ChartLine";
import { ChartBar } from "@/components/charts/ChartBart";
import { useStockStore } from "@/stores/stockStore";
import { useStatsStore } from "@/stores/statsStore";
import { defineComponent, ref } from "vue";
import { storeToRefs } from "pinia";

export const StatsView = defineComponent({
  name: "Stats",
  components: { ChartBar, ChartLine },
  setup() {
    const { stockMouvements } = storeToRefs(useStockStore());
    const stockMvmData = ref(stockMouvements.value);

    stockMvmData.value = useStatsStore().getStockMouvementStats(
      stockMvmData.value
    );

    return () => (
      <main class="w-full h-full px-3 py-1">
        <div>
          <ChartBar
            id="stock-mouvements-for-past-three-months"
            chartData={{
              labels: ["January", "February", "March"],
              datasets: [
                {
                  backgroundColor: "rgba(255, 200, 0, 0.2)",
                  borderColor: "rgba(255, 200, 0,0.5)",
                  data: [11, 89, 10],
                  borderWidth: 2,
                },
                {
                  data: [13, 7, 97],
                  backgroundColor: "rgba(255, 200, 0, 0.6)",
                  borderColor: "rgba(255, 200, 0,1)",
                  borderWidth: 2,
                },
              ],
            }}
            chartOptions={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "rgba(25,23,17,0.6)",
                    textStrokeWidth: 10,
                  },
                  border: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    lineWidth: 1,
                    drawBorder: false,
                  },
                  border: {
                    display: false,
                  },
                  ticks: {
                    color: "rgba(25,23,17,0.6)",
                    min: 0,
                    textStrokeWidth: 1,
                    padding: 10,
                  },
                },
              },
            }}
          />
          {/* <ChartLine
            id="stock-mouvements-for"
            chartData={{
              labels: ["January", "February", "March"],
              datasets: [
                {
                  label: "",
                  borderColor: "rgba(255, 200, 0,0.5)",
                  data: [11, 89, 10],
                  // borderWidth: 2,
                  tention: 0.3,
                },
                {
                  data: [13, 7, 97],
                  borderColor: "rgba(255, 200, 0,1)",
                  // borderWidth: 2,
                  tention: 0.5,
                },
              ],
            }}
            chartOptions={{
              responsive: true,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    color: "rgba(25,23,17,0.6)",
                    textStrokeWidth: 10,
                  },
                  border: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    lineWidth: 1,
                    drawBorder: false,
                  },
                  border: {
                    display: false,
                  },
                  ticks: {
                    color: "rgba(25,23,17,0.6)",
                    min: 0,
                    textStrokeWidth: 1,
                    padding: 10,
                  },
                },
              },
            }}
          /> */}
        </div>
      </main>
    );
  },
});
