<template>
  <section class="kode_latest_wrk_bg">
    <div class="container">
      <div class="kode_hdg_1">
        <h6>Major Work we do</h6>
        <h4>Our Latest Work</h4>
      </div>

      <div class="kode_latest_galry">
        <ul class="kode_tab_lnk filter-item" id="filterable-item-filter-1">
          <li class="active"><a data-value="all" href="#">All</a></li>
        </ul>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!--Gallery List Wrap Start-->

    <v-row class="container mx-auto justify-center" style="max-width: 100%;">

       <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-02.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
       <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-02.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-08.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-04.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-05.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-06.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-07.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" sm="10">
        <div class="home_gallery filterable-item all 2">
          <div class="img-tabs">
            <img
              src="/image/latest-wrk-08.jpg"
              style="width: 100%; height: 100%"
            />
            <div class="img-text">
              <div class="img-lorem">
                <p>Foreign</p>
                <h6>Sed ut perspiciatis</h6>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!--Gallery List Wrap Start-->
  </section>
</template>

<script>
export default {
  name: "ImageTabs",
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
      // alert("7");
      this.$axios
        .get("/Post/GetPosts", {
          params: { code: "7" },
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
</style>
