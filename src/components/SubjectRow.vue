<template>
  <div class="subject-row">

    <div class="subject">
      Subject {{ index + 1 }}
    </div>

    <!-- Grade -->
    <select :value="grade" @change="changeGrade">
      <option value="">Select Grade</option>
      <option>A+</option>
      <option>A</option>
      <option>B+</option>
      <option>B</option>
      <option>B-</option>
      <option>C+</option>
      <option>C</option>
      <option>C-</option>
      <option>D+</option>
      <option>D</option>
      <option>F</option>
    </select>

    <!-- Credit Hours -->
    <input
      type="number"
      min="1"
      max="10"
      placeholder="Credit Hours"
      :value="creditHours"
      @input="changeCredit"
    />

    <!-- Delete Button -->
    <button class="delete-btn" @click="$emit('remove', index)">
      Delete
    </button>

  </div>
</template>

<script setup>

const props = defineProps({
  index: Number,
  grade: String,
  creditHours: Number
})

const emit = defineEmits([
  "update-grade",
  "update-credit",
  "remove"
])

function changeGrade(event) {
  emit("update-grade", {
    index: props.index,
    grade: event.target.value
  })
}

function changeCredit(event) {
  emit("update-credit", {
    index: props.index,
    credit: Number(event.target.value)
  })
}

</script>

<style scoped>

.subject-row{
  display:grid;
  grid-template-columns:160px 1fr 1fr 100px;
  gap:15px;
  align-items:center;
  margin-bottom:15px;
}

.subject{
  color:#d4b08c;
  font-weight:bold;
}

select,
input{
  padding:12px;
  border:none;
  border-radius:10px;
  background:#1e2740;
  color:white;
}

.delete-btn{
  background:#ff4d4d;
  color:white;
  border:none;
  padding:12px;
  border-radius:10px;
  cursor:pointer;
}

.delete-btn:hover{
  background:#d63031;
}

@media(max-width:900px){

.subject-row{
  grid-template-columns:1fr;
}
}
</style>