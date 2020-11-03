import Observer from "./Observer";
import Subject from "./Subject";

const subjectA = new Subject({ name: "Alfredo", count: 0 });

const observerA = new Observer("A");
const observerB = new Observer("B");

subjectA.registerObserver(observerA);
subjectA.registerObserver(observerB);

function renderName() {
  document.getElementById("observerA").innerHTML =
    observerA.data.name || "No name";
}

function renderArepas(observerData) {
  if (observerData.name === "alfredish") {
    document.getElementById("observerB").innerHTML = "Everyone gets arepas! 🥙";
  } else {
    document.getElementById("observerB").innerHTML = "";
  }
}

observerB.subscribe(renderArepas);
observerA.subscribe(renderName);
observerA.subscribe((data) => console.log(`Logging new data:`, data));

renderName(); // initial name render

function handleUpdate(e) {
  subjectA.setState({ ...subjectA.getState(), name: e.target.value });
}

document.getElementById("basicInput").addEventListener("input", handleUpdate);
