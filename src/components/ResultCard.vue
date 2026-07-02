<template>
  <div class="card">

    <h3>{{ title }}</h3>

    <div class="value">

      {{ value }}

    </div>

  </div>
</template>

<script setup>

defineProps({

  title: {
    type: String,
    required: true
  },

  value: {
    type: [String, Number],
    required: true
  }

})

</script>

<style scoped>

.card{

background:#111a2e;

border-radius:18px;

padding:25px;

text-align:center;

box-shadow:0 8px 20px rgba(0,0,0,.35);

transition:.3s;

}

.card:hover{

transform:translateY(-5px);

}

h3{

color:#d4b08c;

margin-bottom:15px;

font-size:18px;

}

.value{

font-size:32px;

font-weight:bold;

color:white;

}

</style>