<template>
  <div class="grading-page">
    <h1>USKT Grading Policy</h1>

    <table>
      <tr>
        <th>Marks</th>
        <th>Grade</th>
        <th>GPA</th>
        <th>Remarks</th>
      </tr>

      <tr v-for="item in grades" :key="item.grade">
        <td>{{ item.marks }}</td>
        <td>{{ item.grade }}</td>
        <td>{{ item.gpa }}</td>
        <td>{{ item.remarks }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
const grades = [
  {
    marks: "85 - 100",
    grade: "A+",
    gpa: "4.00",
    remarks: "Exceptional"
  },
  {
    marks: "80 - 84.99",
    grade: "A",
    gpa: "3.66",
    remarks: "Outstanding"
  },
  {
    marks: "75 - 79.99",
    grade: "B+",
    gpa: "3.33",
    remarks: "Excellent"
  },
  {
    marks: "71 - 74.99",
    grade: "B",
    gpa: "3.00",
    remarks: "Very Good"
  },
  {
    marks: "68 - 70.99",
    grade: "B-",
    gpa: "2.66",
    remarks: "Good"
  },
  {
    marks: "64 - 67.99",
    grade: "C+",
    gpa: "2.33",
    remarks: "Above Average"
  },
  {
    marks: "61 - 63.99",
    grade: "C",
    gpa: "2.00",
    remarks: "Average"
  },
  {
    marks: "58 - 60.99",
    grade: "C-",
    gpa: "1.66",
    remarks: "Satisfactory"
  },
  {
    marks: "54 - 57.99",
    grade: "D+",
    gpa: "1.33",
    remarks: "Marginal Pass"
  },
  {
    marks: "50 - 53.99",
    grade: "D",
    gpa: "1.00",
    remarks: "Pass"
  },
  {
    marks: "0 - 49.99",
    grade: "F",
    gpa: "0.00",
    remarks: "Fail"
  }
];
</script>

<style scoped>
.grading-page {
  max-width: 900px;
  margin: auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #d4b08c;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #111a2e;
}

th,
td {
  border: 1px solid #333;
  padding: 12px;
  text-align: center;
}

th {
  background: #d4b08c;
  color: black;
}

tr:hover {
  background: #1c2742;
}
</style>