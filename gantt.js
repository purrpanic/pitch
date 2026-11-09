const tasks = [
  { stage: "Scope & Pre-Prod", task: "Define Vertical Slice Scope", owner: "Producer / PM + GD + Sr Dev + Lead Artist", duration: "3d", start: 1, end: 3 },
  { stage: "Scope & Pre-Prod", task: "Define Core Gameplay Loop", owner: "GD + Sr Dev", duration: "3d", start: 4, end: 6 },
  { stage: "Scope & Pre-Prod", task: "Define Technical Constraints", owner: "GD + Sr Dev", duration: "3d", start: 4, end: 6 },
  { stage: "Scope & Pre-Prod", task: "Technical Feasibility Check", owner: "Sr Dev + Middle Dev", duration: "3d", start: 7, end: 9 },
  { stage: "Scope & Pre-Prod", task: "Define Content & Asset Scope", owner: "GD + Lead Artist + UI UX", duration: "2d", start: 7, end: 8 },
  { stage: "Scope & Pre-Prod", task: "Define Team Workflow & Dependencies", owner: "Producer / PM + GD + Sr Dev + Lead Artist", duration: "2d", start: 10, end: 11 },

  { stage: "Game Design", task: "Define Level Structure", owner: "GD + UI UX", duration: "1d", start: 12, end: 12 },
  { stage: "Game Design", task: "Define Player Controls & Jump Logic", owner: "GD + Sr Dev", duration: "3d", start: 12, end: 14 },
  { stage: "Game Design", task: "Timer & Level Goal", owner: "GD", duration: "3d", start: 12, end: 14 },
  { stage: "Game Design", task: "Define Insect Catching Gameplay", owner: "GD", duration: "1d", start: 15, end: 15 },
  { stage: "Game Design", task: "Define Object Interaction Rules", owner: "GD + Sr Dev", duration: "1d", start: 15, end: 15 },
  { stage: "Game Design", task: "Define Insects Amount & Spawn Rules", owner: "GD", duration: "1d", start: 15, end: 15 },
  { stage: "Game Design", task: "Define Scoring & Progression", owner: "GD + UI/UX", duration: "3d", start: 16, end: 18 },
  { stage: "Game Design", task: "Define Power-Ups Balance", owner: "GD + dev", duration: "1-2d", start: 19, end: 20 },

  { stage: "Art Concept", task: "Define Visual Style", owner: "Lead Art + GD", duration: "2d", start: 12, end: 13 },
  { stage: "Art Concept", task: "Create Moodboard & References", owner: "Lead Art", duration: "2d", start: 12, end: 13 },
  { stage: "Art Concept", task: "Define Color Palette", owner: "Lead Art + UI/UX", duration: "3d", start: 14, end: 16 },
  { stage: "Art Concept", task: "Key Visual for Level", owner: "Lead Art + GD", duration: "2d", start: 17, end: 18 },
  { stage: "Art Concept", task: "Define HUD Elements", owner: "UI/UX + GD", duration: "3d", start: 19, end: 21 },
  { stage: "Art Concept", task: "Create Main UI Layout", owner: "UI/UX", duration: "3d", start: 19, end: 21 },
  { stage: "Art Concept", task: "Prepare UI Notes for dev", owner: "UI/UX + Sr Dev", duration: "2d", start: 22, end: 23 },
  { stage: "Art Concept", task: "Create Cat Character Assets", owner: "Lead Art + 2D artist", duration: "2d", start: 22, end: 23 },
  { stage: "Art Concept", task: "Create Insect Assets", owner: "Lead Art + 2D artist", duration: "2d", start: 24, end: 25 },
  { stage: "Art Concept", task: "Create Porcelain Props", owner: "Lead Art + GD + 2D artist", duration: "2d", start: 26, end: 27 },
  { stage: "Art Concept", task: "Create Room Environment Assets", owner: "Lead Art + 2D artist", duration: "2d", start: 28, end: 29 },

  { stage: "Asset Prod.", task: "Set Asset Production Guidelines", owner: "Lead Art + GD", duration: "1d", start: 30, end: 30 },
  { stage: "Asset Prod.", task: "Produce Props & Environment Assets", owner: "2D Artists + Lead Art + GD", duration: "5d", start: 31, end: 35 },
  { stage: "Asset Prod.", task: "Produce Character & Insect Assets", owner: "2D Artists + Lead Art", duration: "5d", start: 31, end: 35 },
  { stage: "Asset Prod.", task: "Prepare Assets for Spine & Unity", owner: "2D Artists + Spine Animators + Lead Art + dev", duration: "4-5d", start: 35, end: 38 },

  { stage: "Animation", task: "Cat & Insect Animation", owner: "Spine Animators + Lead Art + dev", duration: "3-4d", start: 39, end: 42 },
  { stage: "Animation", task: "Props Animation", owner: "Spine Animators + Lead Art + GD", duration: "3-4d", start: 39, end: 40 },
  { stage: "Animation", task: "HUD / UI Motion", owner: "UI/UX + Motion Designer", duration: "1-2d", start: 39, end: 40 },
  { stage: "Animation", task: "VFX / Gameplay Effects", owner: "VFX Artist + Lead Art", duration: "2-3d", start: 40, end: 42 },

  { stage: "Unity", task: "Project Setup", owner: "Sr Dev", duration: "2d", start: 31, end: 32 },
  { stage: "Unity", task: "Static Asset Integration", owner: "dev + Lead Art", duration: "3d", start: 36, end: 38 },
  { stage: "Unity", task: "Core Gameplay Integration", owner: "Sr Dev + dev + GD", duration: "6d", start: 33, end: 38 },
  { stage: "Unity", task: "Spine Animation Import", owner: "dev + Spine Animators", duration: "3d", start: 43, end: 45 },
  { stage: "Unity", task: "HUD / UI Integration", owner: "dev + UI/UX + GD", duration: "3d", start: 43, end: 45 },
  { stage: "Unity", task: "Playable Build", owner: "Sr Dev + QA", duration: "1d", start: 46, end: 46 },

  { stage: "QA", task: "QA Testing", owner: "QA Team (2-4 QA)", duration: "3d", start: 47, end: 49 },
  { stage: "QA", task: "Bug Reporting & Priority List", owner: "QA Lead + QA + Sr Dev + PM", duration: "1d", start: 50, end: 50 },
  { stage: "QA", task: "Bug Fixing", owner: "Sr Dev + dev", duration: "5d", start: 51, end: 55 },
  { stage: "QA", task: "Stable Build", owner: "PM + Sr Dev + QA Lead", duration: "1d", start: 56, end: 56 },

  { stage: "Release", task: "VS ready", owner: "Core team", duration: "Milestone", start: 57, end: 57, milestone: true }
];

const stageAccents = {
  "Scope & Pre-Prod": "#d5ae63",
  "Game Design": "#8faedb",
  "Art Concept": "#e0a475",
  "Asset Prod.": "#d6b54d",
  "Animation": "#ca8cad",
  "Unity": "#a48ac9",
  "QA": "#cc7474",
  "Release": "#d7b764"
};

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const board = document.querySelector("#gantt-board");

function div(className, text, role) {
  const element = document.createElement("div");
  element.className = className;
  if (text !== undefined) element.textContent = text;
  if (role) element.setAttribute("role", role);
  return element;
}

board.append(
  div("gantt-head gantt-head--stage", "Stage", "columnheader"),
  div("gantt-head gantt-head--task", "Task", "columnheader"),
  div("gantt-head gantt-head--owner", "Owner", "columnheader"),
  div("gantt-head gantt-head--duration", "Duration", "columnheader")
);

const calendar = div("gantt-calendar", undefined, "columnheader");
const weeks = div("gantt-weeks");
const days = div("gantt-days");

for (let week = 1; week <= 13; week += 1) {
  const label = document.createElement("span");
  label.textContent = `W${week}`;
  weeks.append(label);
  weekDays.forEach((day) => {
    const dayLabel = document.createElement("span");
    dayLabel.textContent = day;
    days.append(dayLabel);
  });
}

calendar.append(weeks, days);
board.append(calendar);

let previousStage = null;

tasks.forEach((item) => {
  const stageStart = item.stage !== previousStage;
  const stageClass = stageStart ? " stage-start" : "";
  const stageCell = div(`gantt-cell gantt-stage${stageClass}`, undefined, "cell");
  stageCell.style.setProperty("--stage-accent", stageAccents[item.stage]);

  if (stageStart) {
    const stageLabel = document.createElement("span");
    stageLabel.className = "gantt-stage-label";
    stageLabel.textContent = item.stage;
    stageCell.append(stageLabel);
  } else {
    stageCell.classList.add("gantt-stage-empty");
    stageCell.setAttribute("aria-label", item.stage);
  }

  const taskCell = div(`gantt-cell gantt-task${stageClass}`, undefined, "cell");
  const taskName = document.createElement("strong");
  taskName.textContent = item.task;
  taskCell.append(taskName);

  const ownerCell = div(`gantt-cell gantt-owner${stageClass}`, item.owner, "cell");
  const durationCell = div(`gantt-cell gantt-duration${stageClass}`, item.duration, "cell");
  const track = div(`gantt-track${stageClass}`, undefined, "cell");

  const bar = document.createElement("div");
  const dayCount = item.end - item.start + 1;
  bar.className = item.milestone ? "gantt-bar gantt-bar--milestone" : "gantt-bar";
  bar.style.setProperty("--start", item.start);
  bar.style.setProperty("--days", dayCount);
  bar.setAttribute("aria-label", `${item.task}: workdays ${item.start}-${item.end}`);

  if (!item.milestone) {
    for (let tick = 1; tick < dayCount; tick += 1) {
      const marker = document.createElement("i");
      marker.style.setProperty("--tick", `${(tick / dayCount) * 100}%`);
      bar.append(marker);
    }
  }

  track.append(bar);
  board.append(stageCell, taskCell, ownerCell, durationCell, track);
  previousStage = item.stage;
});
