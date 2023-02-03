import { defineComponent, type PropType } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
} from "chart.js";

export const ChartLine = defineComponent({
  name: "ChartLine",
  props: {
    chartData: {
      type: Object as PropType<{
        labels: string[];
        datasets: { [key: string]: any; data: number[] }[];
      }>,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    ChartJS.register(
      PointElement,
      Title,
      Tooltip,
      Legend,
      LineElement,
      CategoryScale,
      LineController,
      LinearScale
    );

    return () => (
      <Line id={props.id} options={props.chartOptions} data={props.chartData} />
    );
  },
});
