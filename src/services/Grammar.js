const words = ["refactor", "code", "ticket", "JIRA"];
export const grammar =
  "#JSGF V1.0; grammar words; public <words> = " + words.join(" | ") + " ;";
