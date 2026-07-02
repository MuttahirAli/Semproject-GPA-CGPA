<template>
  <div class="previous-card">
    <h3>Previous Academic Record</h3>

    <div class="row">
      <div class="field">
        <label>Previous CGPA</label>

        <input
          type="number"
          min="0"
          max="4"
          :value="cgpa"
          @input="updateCgpa"
          placeholder="Enter Previous CGPA"
        />
      </div>

      <div class="field">
        <label>Total Credit Hours</label>

        <input
          type="number"
          min="0"
          :value="hours"
          @input="updateHours"
          placeholder="Enter Credit Hours"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cgpa: Number,
  hours: Number
})

const emit = defineEmits([
  "update-cgpa",
  "update-hours"
])

function updateCgpa(event) {
  emit("update-cgpa", Number(event.target.value))

  if (value > 4) {
    alert("Previous CGPA must be <= 4.00");
    event.target.value = 4;
    emit("update-cgpa", 4);
    return;
  }
}

function updateHours(event) {
  emit("update-hours", Number(event.target.value))
}
</script>

<style scoped>
.previous-card {
  background: #111a2e;
  padding: 25px;
  border-radius: 18px;
  margin-bottom: 25px;
}

h3 {
  text-align: center;
  color: #d4b08c;
  margin-bottom: 20px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  color: #d4b08c;
}

input {
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #1e2740;
  color: white;
}

input:focus {
  outline: 2px solid #d4b08c;
}

@media (max-width: 768px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>