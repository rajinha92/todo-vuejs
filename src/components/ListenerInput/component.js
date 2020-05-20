import speechCapture from "../../services/SpeechCapture";
import _ from "lodash";
export default {
  name: "listener-input",
  data() {
    return {
      speechCapture: null,
      taskDescription: "",
      recording: false,
    };
  },
  methods: {
    addTask() {
      this.recording = false;
      if (this.taskDescription !== "") {
        this.$emit("onAddTask", this.taskDescription);
        this.taskDescription = "";
      }
    },
    listen() {
      this.speechCapture.start();
      this.recording = true;
    },
    onSpeechCapture(event) {
      this.taskDescription = event.results[0][0].transcript;
    },
  },

  mounted() {
    this.speechCapture = speechCapture;
    this.speechCapture.onresult = this.onSpeechCapture;
    this.speechCapture.onspeechend = _.debounce(this.addTask, 700);
  },
};
