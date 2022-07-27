<template>
  <header class="header-area">
    <div class="navbar-area">
      <div class="container">
        <nav class="site-navbar">
          <a href="/" class="site-logo">kidzo toys</a>

          <ul>
            <li><a href="/">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">my account</a></li>
            <li>
              <a href="/cart">cart (0)</a>
            </li>
          </ul>

          <!-- nav-toggler for mobile version -->
          <button class="nav-toggler" @click.prevent="toggleActive">
            <span></span>
          </button>
        </nav>
      </div>
    </div>

    <div class="intro-area">
      <div class="container">
        <div class="principal">
          <h2>Award winning<br />toys for children</h2>
          <p>Creative, timeless for children of all ages!</p>

          <div class="mybutton">
            <my-button>shop now</my-button>
          </div>
        </div>

        <div class="toys-image">
          <img src="@/assets/construction-toy.png" alt="header-image" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  props: ["product", "quantity"],
  components: {
    MyButton,
  },

  data() {
    return {
      menuOpen: false,
    };
  },

  computed: {
    totalQuantity() {
      return this.$store.getters.totalQuantity;
    },
  },

  methods: {
    toggleActive() {
      const navToggler = document.querySelector(".nav-toggler");
      const navMenu = document.querySelector(".site-navbar ul");

      allEventListners();

      function allEventListners() {
        navToggler.addEventListener("click", togglerClick);
      }

      function togglerClick() {
        navToggler.classList.toggle("toggler-open");
        navMenu.classList.toggle("open");
      }
    },
  },
};
</script>

<style lang="css">
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 100px;
}

.header-area {
  background-color: rgb(241, 219, 219);
}

.navbar-area {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.site-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a.site-logo {
  font-size: 22px;
  font-weight: 800;
  text-transform: capitalize;
  color: #000;
  text-decoration: none;
}

.site-navbar ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

.site-navbar ul li a {
  color: #000;
  padding: 20px;
  display: block;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 15px;
}

.site-navbar ul li a:hover {
  background: rgba(145, 145, 145, 0.1);
}

.nav-toggler {
  border: 3px solid #fff;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  height: 39px;
  display: none;
}

.nav-toggler span,
.nav-toggler span:before,
.nav-toggler span:after {
  width: 28px;
  height: 3px;
  background-color: #000;
  display: block;
  transition: 0.3s;
}

.nav-toggler span:before {
  content: "";
  transform: translateY(-9px);
}

.nav-toggler span:after {
  content: "";
  transform: translateY(6px);
}

.nav-toggler.toggler-open span {
  background-color: transparent;
}

.nav-toggler.toggler-open span:before {
  transform: translateY(0px) rotate(45deg);
}

.nav-toggler.toggler-open span:after {
  transform: translateY(-3px) rotate(-45deg);
}

.intro-area {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
}

.intro-area .container {
  height: 100%;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.intro-area .principal h2 {
  font-size: 70px;
  font-weight: 300;
  line-height: 60px;
  letter-spacing: -1px;
}

.intro-area p {
  font-size: 18px;
  display: flex;
  justify-content: center;
  margin-top: -40px;
  word-spacing: 3px;
}

.intro-area .toys-image img {
  display: flex;
  justify-content: flex-end;
  height: 500px;
  width: 660px;
}

@media screen and (max-width: 767px) {
  .container {
    max-width: 720px;
  }

  .nav-toggler {
    display: block;
  }

  .site-navbar {
    min-height: 60px;
  }

  .site-navbar ul {
    position: absolute;
    width: 100%;
    height: calc(100vh - 60px);
    left: 0;
    top: 60px;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #444;
    background-color: rgba(0, 0, 0, 0.93);
    max-height: 0;
    overflow: hidden;
    transition: 0.3s;
  }

  .site-navbar ul li {
    width: 100%;
    text-align: center;
  }

  .site-navbar ul li a {
    padding: 25px;
    color: #fff;
  }

  .site-navbar ul li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .site-navbar ul.open {
    max-height: 100vh;
    overflow: visible;
  }

  .intro-area .container {
    flex-direction: column-reverse;
    height: 650px;
  }

  .intro-area .toys-image img {
    display: flex;
    height: 100%;
    width: 480px;
  }

  .intro-area .principal {
    margin-bottom: 40px;
    margin-top: -50px;
  }

  .intro-area .principal h2 {
    font-size: 38px;
    font-weight: bold;
    margin: 0 auto;
    line-height: 45px;
    padding-bottom: 30px;
  }

  .intro-area .principal p {
    font-size: 1em;
    padding: 18px 0;
    word-spacing: 0;
    width: 300px;
  }
}
</style>
