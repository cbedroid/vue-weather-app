<template>
  <footer>
    <!--Initial display no hover-->
    <div class="initial justify-content-around">
      <p class="m-auto w-100">
        Made by
        <a
          class="text-light font-weight-bold mx-1"
          href="https://github.com/cbedroid"
          >Cbedroid
        </a>
        with
        <span> <i class="fa fa-heart text-danger"> </i> </span>
      </p>
    </div>

    <!-- Show on hover only-->
    <div class="hvo-wrapper justify-content-around hidden">
      <div class="row-left social text-light">
        <h3>Follow Me</h3>
        <div class="social__wrapper">
          <ul class="social-left my-1 font-weight-bold">
            <li>
              <a href="https://twitter.com/cbedroid">
                <i class="fa fa-twitter"> </i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/cbedroid">
                <i class="fa fa-github text-light "> </i>
                <span>Github</span>
              </a>
            </li>
          </ul>
          <ul class="social-right my-1" v-show="false">
            <li>
              <i class="fa fa-github"> </i>
              <span>twitter</span>
            </li>
            <li>
              <i class="fa fa-twitter"> </i>
              <span>twitter</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="row-middle">
        <h3 class="title">Contact</h3>
        <p>
          Made by
          <a
            class="text-light font-weight-bold mx-1"
            href="https://github.com/cbedroid"
            >Cbedroid
          </a>
          with
          <span> <i class="fa fa-heart text-danger"> </i> </span>
        </p>
        <p class="text-light font-weight-bold">
          Contact me:
          <a
            class="ml-2"
            href="mailto:cbedroid1614@gmail.com?subject=Business Inquiry&body=...Let's Talk"
          >
            Let's Talk
          </a>
        </p>
      </div>
      <div class="row-right">
        <h3 class="title">Projects</h3>
        <p class="text-light font-weight-bold">
          More Projects:
          <a href="https://github.com/cbedroid" class="ml-1"> Github</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {},
};
</script>

<style scoped>
footer {
  transition: 1s ease-in;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: auto;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  font-size: 16px;
}
ul {
  padding: 0;
}
li {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
h3 {
  font-weight: bold;
  border-bottom: 2px ridge grey;
}
.hidden {
  display: none;
}
.social__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 15px;
}
.fa {
  padding: 5px 8px;
  text-align: center;
  font-size: 1.3rem;
  border-radius: 7%;
  margin: auto;
  margin-right: 10px;
}
.fa::before,
.fa::after {
  display: block;
  text-align: center;
  margin: auto;
}

.fa-twitter {
  color: #1da1f2;
}
.initial {
  position: relative;
  transform-style: preserve-3d;
}

footer .hvo-wrapper {
  display: flex;
}

footer .hvo-wrapper.hidden {
  display: none;
}
footer:hover {
  padding: 0;
}

@media screen and (min-width: 574px) {
  footer:hover .initial {
    transform: rotateX(90deg);
    animation: foldup 1s ease-in-out forwards;
  }
  footer:hover .hvo-wrapper {
    display: flex;
    transform-style: preserve-3d;
    animation: rollup 1s ease-in-out;
  }
}

@keyframes rollup {
  0% {
    transform: rotateX(-90deg) translateZ(-50px);
    opacity: 0.2;
    width: 100%;
    height: 0%;
  }
  25% {
    transform: rotateX(-70deg) translateZ(-35px);
    opacity: 0.3;
    width: 100%;
    height: 25%;
  }

  50% {
    transform: rotateX(-45deg) translateZ(-25px);
    opacity: 0.4;
    width: 100%;
    height: 50%;
  }

  75% {
    transform: rotateX(-25deg) translateZ(-15px);
    opacity: 0.5;
    width: 100%;
    height: 75%;
  }
  90% {
    transform: rotateX(-15deg) translateZ(-5px);
    opacity: 0.75;
    width: 100%;
    height: 90%;
  }
  100% {
    transform: rotateX(0deg) translateZ(0);
    opacity: 1;
    height: 100%;
    width: 100%;
  }
}
@keyframes foldup {
  0% {
    transform: rotateX(0deg) translateY(0px);
    height: 50px;
  }
  25% {
    transform: rotateX(20deg) translateY(-10px);
    height: 40px;
  }
  50% {
    transform: rotateX(40deg) translateY(-20px);
    height: 30px;
  }

  75% {
    transform: rotateX(60deg) translateY(-30px);
    height: 20px;
  }
  90% {
    transform: rotateX(80deg) translateY(-45px);
    width: 100%;
    height: 10px;
  }
  100% {
    height: 0;
    transform: rotateX(90deg) translateY(-50px);
    display: none;
  }
}
</style>
