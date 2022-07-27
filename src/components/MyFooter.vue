<template>
  <footer>
    <div class="footer">
      <a href="#twitter">
        <img
          class="icon-image"
          src="../assets/twitter.png"
          alt="twitter-icon"
        />
      </a>

      <a href="#instagram">
        <img
          class="icon-image"
          src="../assets/instagram.png"
          alt="instagram-icon"
        />
      </a>
    </div>
    <p>&copy; Copyright 2022 WebDesign</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
}

.icon-image {
  width: 20px;
  height: 20px;
  margin: 0 17px;
}

p {
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
}
</style>
