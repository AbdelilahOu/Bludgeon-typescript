<<<<<<< HEAD
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
    // we got all the stock mouvements already
    // no need to make an api call
    const { stockMouvements } = storeToRefs(useStockStore());
    // reformate the data
    const [stockData, months] = useStatsStore().getStockMouvementStats(
      stockMouvements.value
    );
    console.log(stockData);
    return () => (
      <main class="w-full h-full px-3 py-1">
        <div class="w-full h-full grid grid-cols-1 grid-rows-1">
          <div>
            <h1 class="uppercase text-gray-600 font-semibold mb-1">
              sold and bought items during the last three months
            </h1>
            <ChartBar
              id="stock-mouvements-for-past-three-months"
              chartData={{
                labels: months,
                datasets: [
                  {
                    label: "BOUGHT",
                    backgroundColor: "rgba(255, 200, 0, 0.2)",
                    borderColor: "rgba(255, 200, 0,0.5)",
                    data: [
                      stockData[months[0]]?.IN ?? 0,
                      stockData[months[1]]?.IN ?? 0,
                      stockData[months[2]]?.IN ?? 0,
                    ],
                    borderWidth: 2,
                  },
                  {
                    label: "SOLD",
                    data: [
                      stockData[months[0]]?.OUT ?? 0,
                      stockData[months[1]]?.OUT ?? 0,
                      stockData[months[2]]?.OUT ?? 0,
                    ],
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
          </div>
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
=======
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
    // we got all the stock mouvements already
    // no need to make an api call
    const { stockMouvements } = storeToRefs(useStockStore());
    // reformate the data
    const [stockData, months] = useStatsStore().getStockMouvementStats(
      stockMouvements.value
    );
    console.log(stockData);
    return () => (
      <main class="w-full h-full px-3 py-1">
        <div class="w-full h-full grid grid-cols-1 grid-rows-2">
          <div>
            <h1 class="uppercase text-gray-600 font-semibold mb-1">
              sold and bought items during the last three months
            </h1>
            <ChartBar
              id="stock-mouvements-for-past-three-months"
              chartData={{
                labels: months,
                datasets: [
                  {
                    label: "BOUGHT",
                    backgroundColor: "rgba(255, 200, 0, 0.2)",
                    borderColor: "rgba(255, 200, 0,0.5)",
                    data: [
                      stockData[months[0]]?.IN ?? 0,
                      stockData[months[1]]?.IN ?? 0,
                      stockData[months[2]]?.IN ?? 0,
                    ],
                    borderWidth: 2,
                  },
                  {
                    label: "SOLD",
                    data: [
                      stockData[months[0]]?.OUT ?? 0,
                      stockData[months[1]]?.OUT ?? 0,
                      stockData[months[2]]?.OUT ?? 0,
                    ],
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
          </div>
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
>>>>>>> 0b7f70c6e632db25455c392e4e0f596d442c8834
