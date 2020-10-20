<template>
  <footer class="d-flex justify-content-around">
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
  position: fixed;
  width: 100%;
  top: 85%;
  bottom: 0;
  padding: 0;
  margin: 0;
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
</style>
