<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  padding: 15px 30px;
  border: 0;
  color: #fff;
  background-color: rgb(231, 122, 49);
  border-radius: 50px;
  font-size: 13px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}

button:hover {
  background-color: rgb(212, 100, 25);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
