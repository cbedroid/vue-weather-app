<template>
  <div id="main_app" class="text-center" :class="bg_image ? bg_image : ''">
    <div class="overlay py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <main class="p-0 border-success">
              <Header :title="'Weather App'"></Header>
              <hr class="h-2 my-1" />
              <WeatherApp :weather="weather"></WeatherApp>
            </main>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Footer></Footer>
=======
>>>>>>> 8aa008c4023a1300fb47dc43c495b249f7b58c3d
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import WeatherApp from "./components/WeatherApp";
import Header from "./components/Header";
<<<<<<< HEAD
import Footer from "./components/Footer";
=======
>>>>>>> 8aa008c4023a1300fb47dc43c495b249f7b58c3d
import WeatherService from "./services/WeatherService.js";

export default {
  name: "App",
  components: {
    WeatherApp,
    Header,
<<<<<<< HEAD
    Footer,
=======
>>>>>>> 8aa008c4023a1300fb47dc43c495b249f7b58c3d
  },

  data() {
    return {
      weather: new WeatherService(),
      tester: "",
    };
  },
  computed: {
    bg_image() {
      let condition = this.weather["condition"];
      let found = "none";
      if (condition) {
        let cid = condition.id;
        let images = this.bgImageList;

        images.forEach((t, r) => {
          const prev = r > 1 ? r - 1 : r;
          const next = r <= images.length ? r + 1 : r - 1;
          try {
            if (images[prev]["id"] <= cid <= images[next]["id"]) {
              found = images[r].image;
            }
          } catch {
            null;
          }
        });
      }
      return found;
    },
    bgImageList() {
      return [
        { id: 200, image: "thunder" },
        { id: 300, image: "drizzle" },
        { id: 500, image: "rain" },
        { id: 600, image: "snow" },

        { id: 700, image: "mist" },
        { id: 710, image: "smoke" },
        { id: 720, image: "haze" },
        { id: 730, image: "dust" },
        { id: 740, image: "fog" },
        { id: 750, image: "sand" },
        { id: 760, image: "dust" },
        { id: 762, image: "ash" },
        { id: 770, image: "squall" },
        { id: 780, image: "tornado" },
        { id: 800, image: "clear" },
        { id: 801, image: "mist" },
      ];
    },
  },
};
</script>

<style scoped>
#main_app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "montserrat", sans-serf;
  font-size: 16px;
  transition: 0.4s;
  color: #fff;
  background: #1c1c1c;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.overlay {
  display: block;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.75)
  );
}
#main_app.clear {
  background-image: url("./assets/images/clear.png");
}
#main_app.clouds {
  background-image: url("./assets/images/clouds.png");
}
#main_app.thunder {
  background-image: url("./assets/images/thunder.png");
}
#main_app.rain {
  background-image: url("./assets/images/rain.png");
}
#main_app.snow {
  background-image: url("./assets/images/snow.png");
}
#main_app.rain {
  background-image: url("./assets/images/rain.png");
}
#main_app.rain {
  background-image: url("./assets/images/rain.png");
}
#main_app.rain {
  background-image: url("./assets/images/rain.png");
}
#main_app.rain {
  background-image: url("./assets/images/rain.png");
}
main {
  display: block;
  min-height: 80vh;
  height: 100%;
  overflow: hidden;
  background: rgba(60, 60, 60, 0.9);
  border-radius: 7px;
  box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.5);
  opacity: 0.95;
  background-image: url("https://img.freepik.com/free-photo/room-with-concrete-floor-smoke-background_9083-2991.jpg?size=626&ext=jpg");
  background-image: url("https://image.freepik.com/free-vector/modern-city-skyline-background_77417-791.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
