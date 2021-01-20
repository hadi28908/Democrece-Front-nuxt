<template>
  <section class="kode_services_abt_bg">
    <div class="container">
      <div class="row">

        <div class="col-md-4 col-sm-12">
          <div class="kode_about_services">
            <i class="fa fa-firefox"></i>
            <h5><a href="http://kodeforest.net/html/democracy/about-us.html#"> Our Campaign</a></h5>
            <p>You can join our campaigns in various cities all over the country. See the upcoming events for you</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="kode_about_services">
            <i class="fa fa-firefox"></i>
            <h5><a href="http://kodeforest.net/html/democracy/about-us.html#"> Our Campaign</a></h5>
            <p>You can join our campaigns in various cities all over the country. See the upcoming events for you</p>
          </div>
        </div>

        <div class="col-md-4 col-sm-12">
          <div class="kode_about_services">
            <i class="fa fa-home"></i>
            <h5> <a href="http://kodeforest.net/html/democracy/about-us.html#">Our Projects </a> </h5>
            <p>Our projects are our major hopes and goals. We are waiting for you to participate and contribute</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About_Services",
  mounted() {
    this.LoadData();
  },
  data: () => ({
    servicsesData: {},
  }),
  methods: {
    LoadData() {
      this.$axios
        .get("/Post/GetPostsForDash", {
          params: { code: "8" },
        })
        .then((response) => {
          console.log(response.data);
          this.servicsesData = response.data;

          this.servicsesData = this.servicsesData.filter(
            (x) => x.categorys === "about2"
          );

          console.log(this.mainAbout);
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
  },
};
</script>

<style scoped>
a:hover {
  color: #1976d2 !important;
}
a {
  color: #1a1a1a !important;
}
</style>
