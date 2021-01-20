<template>
  <section class="kode_news_bg ">
    <div class="">
      <div class="kode_hdg_1">
        <h6>Media Conference</h6>
        <h4>News &amp; Press Release</h4>
      </div>

      <div class="kode_press_new_lst">
        <div class="container row col-xl-8 mx-auto">
           <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4">
            <div class="kode_press_news">
              <figure class="kode_pres2_style">
                <img src="/image/press-news-02.jpg" alt="Image here" />
                <figcaption>
                  <a
                    data-rel="prettyPhoto[]"
                    href="./Democracy - Political Theme_files/banner-01.jpg"
                    ><i class="icon-add52"></i
                  ></a>
                </figcaption>
              </figure>

              <div class="kode_news_des">
                <h6><a href="#">Lorem ipsum dolor sit amet.</a></h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus esse facere laudantium, magnam natus odit quas. Ad
                  delectus, modi nam nostrum quam quo velit veniam.
                </p>
                <a href="http://kodeforest.net/html/democracy/#"
                  >Read More <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4">
            <div class="kode_press_news">
              <figure class="kode_pres2_style">
                <img src="/image/press-news-03.jpg" alt="Image here" />
                <figcaption>
                  <a
                    data-rel="prettyPhoto[]"
                    href="./Democracy - Political Theme_files/banner-01.jpg"
                    ><i class="icon-add52"></i
                  ></a>
                </figcaption>
              </figure>

              <div class="kode_news_des">
                <h6><a href="#">Lorem ipsum dolor sit amet.</a></h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus esse facere laudantium, magnam natus odit quas. Ad
                  delectus, modi nam nostrum quam quo velit veniam.
                </p>
                <a href="#"
                  >Read More <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4">
            <div class="kode_press_news">
              <figure class="kode_pres2_style">
                <img src="/image/press-news-03.jpg" alt="Image here" />
                <figcaption>
                  <a
                    data-rel="prettyPhoto[]"
                    href="./Democracy - Political Theme_files/banner-01.jpg"
                    ><i class="icon-add52"></i
                  ></a>
                </figcaption>
              </figure>

              <div class="kode_news_des">
                <h6><a href="#">Lorem ipsum dolor sit amet.</a></h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus esse facere laudantium, magnam natus odit quas. Ad
                  delectus, modi nam nostrum quam quo velit veniam.
                </p>
                <a href="#"
                  >Read More <i class="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-click">
        <button class="button">SEE MORE</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "News",
  mounted() {
    this.LoadData();
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    LoadData() {
      // alert("6");
      this.$axios
        .get("/Post/GetPosts", {
          params: { code: "6" },
        })
        .then((response) => {
          this.posts = response.data;
          console.log(posts);
        })
        .catch((error) => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
        });
    },
  },
};
</script>

<style scoped>
.btn-click {
  margin-left: auto !important;
  margin-right: auto !important;
  position: relative;
  display: table;
}
.button {
  position: relative;
  background-color: black;
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  font-size: 1.9em;
  transform: none;
  cursor: pointer;
}

.button:after {
  content: "";
  height: 100%;
  width: calc(100% + 20px);
  position: absolute;
  top: -2px;
  left: -10px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: 1s;
}

.button:before {
  content: "";
  height: calc(100% + 20px);
  width: 100%;
  position: absolute;
  top: -10px;
  left: -2px;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  transition: 1s;
}

.button:hover:before {
  transform: rotateY(180deg);
}

.button:hover:after {
  transform: rotateX(180deg);
}
</style>
