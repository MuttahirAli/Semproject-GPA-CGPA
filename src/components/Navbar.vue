<template>
  <nav class="navbar">

    <div class="logo">
      USKT Calculator
    </div>

    <div class="nav-links">

      <RouterLink to="/">
        GPA/CGPA
      </RouterLink>

      <RouterLink to="/grading-policy">
        Grading Policy
      </RouterLink>

    </div>

  </nav>
</template>

<style scoped>

.navbar{

background:#111a2e;

padding:20px;

display:flex;

flex-direction:column;

align-items:center;

gap:15px;

}

.logo{

font-size:38px;

font-weight:bold;

color:#d4b08c;

}

.nav-links{

display:flex;

gap:30px;

}

a{

color:white;

font-size:18px;

text-decoration:none;

font-weight:bold;

padding-bottom:5px;

}

.router-link-active{

color:#d4b08c;

border-bottom:2px solid #d4b08c;

}

</style>