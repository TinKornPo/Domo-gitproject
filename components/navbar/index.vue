<template>
  <section class="navbar">
    <div class="top">
      <h1><NuxtLink to="/">Main</NuxtLink></h1>
    </div>
    <li><NuxtLink to="/test">Test </NuxtLink></li>
    <li><NuxtLink to="/test1">Test 1 </NuxtLink></li>
    <li><NuxtLink to="/testapi">testapi</NuxtLink></li>
    <li><NuxtLink to="/input">input</NuxtLink></li>
    <li><NuxtLink to="/demo">demo</NuxtLink></li>
  </section>
</template>

<script>
export default {
  name: 'IndexNavber',
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  margin: 0;
  justify-content: space-between;
  background-color: white;
  padding: 1rem;
  max-width: 100%;
  height: auto;
  align-items: center;
  list-style: none;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}
@media screen and(max-width: 1000px) {
  .navbar {
    flex-direction: column;
  }
}
.top {
  width: 20%;
  display: flex;
  justify-content: center;
  
}
h1 {
    text-decoration: none;
  }


li a {
  display: block;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #d8d8d8;
}
</style>
