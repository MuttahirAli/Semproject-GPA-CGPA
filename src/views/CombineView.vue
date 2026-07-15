<template>
  <div class="combine-page">

    <h1>USKT GPA / CGPA</h1>

    <!-- Previous Record -->
    <PreviousCGPA :cgpa="previousCgpa" :hours="previousHours" @update-cgpa="previousCgpa = $event"
      @update-hours="previousHours = $event" />

    <!-- Subject Generator -->
    <div class="generate-card">

      <label>Number of Subjects</label>

      <div class="generate-row">

        <input type="number" min="1" max="12" v-model.number="subjectCount" placeholder="Enter Subjects" />

        <button @click="generateSubjects">
          Generate
        </button>

        <button class="reset" @click="resetCalculator">
          Reset
        </button>

        <button class="records-btn" @click="fetchRecords">
          View Record
        </button>

      </div>

    </div>

    <!-- Subject Rows -->
    <SubjectRow v-for="(subject, index) in subjects" :key="index" :index="index" :grade="subject.grade"
      :credit-hours="subject.creditHours" @update-grade="updateGrade" @update-credit="updateCredit"
      @remove="removeSubject" />

    <!-- Buttons -->
    <button class="calculate-btn" @click="calculate">
      Calculate GPA / CGPA
    </button>

    <button class="save-btn" @click="saveRecord">
      Save Record
    </button>

    <!-- Results -->
    <div class="result-grid">

      <ResultCard title="Semester SGPA" :value="semesterSGPA" />

      <ResultCard title="Overall CGPA" :value="overallCGPA" />

      <ResultCard title="Semester Credit Hours" :value="semesterHours" />

      <ResultCard title="Total Credit Hours" :value="totalHours" />

    </div>

    <!-- Saved Records -->
    <div v-if="records.length" class="records-section">

      <h2>Saved Records</h2>

      <table class="record-table">

        <thead>

          <tr>
            <th>Overall CGPA</th>
            <th>Total Credit Hours</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="record in records" :key="record._id">
            <td>{{ record.overallCGPA }}</td>
            <td>{{ record.totalHours }}</td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>
</template>
<script setup>
import { ref } from "vue"
import axios from "axios"

import PreviousCGPA from "../components/PreviousCGPA.vue"
import SubjectRow from "../components/SubjectRow.vue"
import ResultCard from "../components/ResultCard.vue"

const previousCgpa = ref("")
const previousHours = ref("")
const subjectCount = ref("")
const subjects = ref([])

const semesterSGPA = ref("0.00")
const overallCGPA = ref("0.00")
const semesterHours = ref(0)
const totalHours = ref(0)
const semesterPoints = ref("0.00")

// Saved Records
const records = ref([])

function generateSubjects() {

  if (subjectCount.value < 1 || subjectCount.value > 12) {

    alert("Subjects must be between 1 and 12.")
    return

  }

  subjects.value = []

  for (let i = 0; i < subjectCount.value; i++) {

    subjects.value.push({

      grade: "",

      creditHours: ""

    })

  }

}

function removeSubject(index) {

  subjects.value.splice(index, 1)

}

function updateGrade(data) {

  subjects.value[data.index].grade = data.grade

}

function updateCredit(data) {

  subjects.value[data.index].creditHours = data.credit

}

function resetCalculator() {

  previousCgpa.value = ""
  previousHours.value = ""
  subjectCount.value = ""
  subjects.value = []

  semesterSGPA.value = "0.00"
  overallCGPA.value = "0.00"
  semesterHours.value = 0
  totalHours.value = 0
  semesterPoints.value = "0.00"

}
function calculate() {

  const gradePoints = {
    "A+": 4.00,
    "A": 3.66,
    "B+": 3.33,
    "B": 3.00,
    "B-": 2.66,
    "C+": 2.33,
    "C": 2.00,
    "C-": 1.66,
    "D+": 1.33,
    "D": 1.00,
    "F": 0.00
  }

  let totalCreditHours = 0
  let totalPoints = 0

  for (const subject of subjects.value) {

    if (subject.grade === "") {

      alert("Please select grade for every subject.")
      return

    }

    if (subject.creditHours <= 0 || subject.creditHours > 10) {

      alert("Credit Hours must be between 1 and 10.")
      return

    }

    totalCreditHours += Number(subject.creditHours)

    totalPoints +=
      gradePoints[subject.grade] *
      Number(subject.creditHours)

  }

  if (totalCreditHours === 0) {

    alert("Please generate subjects first.")
    return

  }

  semesterHours.value = totalCreditHours

  semesterPoints.value = totalPoints.toFixed(2)

  semesterSGPA.value =
    (totalPoints / totalCreditHours).toFixed(2)

  const previousPoints =
    Number(previousCgpa.value) *
    Number(previousHours.value)

  totalHours.value =
    Number(previousHours.value) +
    totalCreditHours

  if (totalHours.value === 0) {

    overallCGPA.value = "0.00"

  } else {

    overallCGPA.value = (

      (previousPoints + totalPoints) /

      totalHours.value

    ).toFixed(2)

  }

}

async function saveRecord() {

  if (overallCGPA.value === "0.00" || totalHours.value === 0) {

    alert("Please calculate GPA / CGPA first.")
    return

  }

  try {

    await axios.post(
      "http://localhost:5000/api/students",
      {
        overallCGPA: Number(overallCGPA.value),
        totalHours: Number(totalHours.value)
      }
    )

    alert("Record Saved Successfully!")

    fetchRecords()

  } catch (error) {

    console.error(error)

    alert("Failed to Save Record!")

  }

}

async function fetchRecords() {

  try {

    const response = await axios.get(
      "http://localhost:5000/api/students"
    )

    records.value = response.data

  } catch (error) {

    console.error(error)

    alert("Failed to Load Records!")

  }

}
</script>
<style scoped>
.combine-page {
  max-width: 1200px;
  margin: auto;
}

h1 {
  text-align: center;
  margin: 25px 0;
  color: #d4b08c;
}

.generate-card {
  background: #111a2e;
  padding: 25px;
  border-radius: 18px;
  margin-bottom: 25px;
}

.generate-card label {
  display: block;
  margin-bottom: 10px;
  color: #d4b08c;
  font-weight: bold;
}

.generate-row {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.generate-row input {
  flex: 1;
  padding: 14px;
  background: #1e2740;
  color: white;
  border: none;
  border-radius: 10px;
}

.generate-row button {
  padding: 14px 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  background: #d4b08c;
}

.reset {
  background: #ff5252 !important;
  color: white;
}

.records-btn {
  background: #2196f3 !important;
  color: white;
}

.calculate-btn {
  width: 100%;
  padding: 18px;
  margin-top: 20px;
  border: none;
  border-radius: 12px;
  background: #d4b08c;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.save-btn {
  width: 100%;
  padding: 18px;
  margin-top: 15px;
  border: none;
  border-radius: 12px;
  background: #d4b08c;
  color: black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.calculate-btn:hover,
.save-btn:hover,
.records-btn:hover {
  opacity: 0.9;
}

.result-grid {
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

/* Saved Records */

.records-section {
  margin-top: 40px;
}

.records-section h2 {
  color: #d4b08c;
  text-align: center;
  margin-bottom: 20px;
}

.record-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.record-table th {
  background: #111a2e;
  color: #d4b08c;
  padding: 15px;
  border: 1px solid #2b3554;
}

.record-table td {
  background: #1e2740;
  color: white;
  padding: 15px;
  text-align: center;
  border: 1px solid #2b3554;
}

.record-table tr:hover td {
  background: #27314d;
}

@media (max-width: 768px) {
  .generate-row {
    flex-direction: column;
  }

  .record-table {
    font-size: 14px;
  }

  .record-table th,
  .record-table td {
    padding: 10px;
  }
}
</style>