import { grammar } from "./Grammar";

const SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
const speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

let recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = true;
recognition.grammars = speechRecognitionList;

export default recognition;
