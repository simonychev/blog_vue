<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="$router.push('/')">Vue 3</div>
    <div class="nav__bars">
      <my-button @click="$router.push('/')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px;">О приложении</my-button>
<!--      <my-button @click="$router.push('/store')" style="margin-left: 20px;">Store</my-button>-->
<!--      <my-button @click="$router.push('/composition')" style="margin-left: 20px;">Composition</my-button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar-page",
}
</script>

<style scoped>
  .navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .nav__bars {
    margin-left: auto;
  }
</style>