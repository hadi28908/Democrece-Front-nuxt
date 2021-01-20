<template>
  <section class="kode_about_welcome">
    <div class="container">
      <div class="row col-12 col-lg-9 col-xl-9" style="margin: auto">
        <div class="col-md-5 col-lg-5 col-xl-5">
          <div class="kode_welcome">
            <figure>
              <img src="/image/welcome-demo-01.jpg" alt="Image Here" />
            </figure>
          </div>
        </div>

        <div class="col-md-7 col-lg-7 col-xl-7">
          <div class="kode_wel_demo_des">
            <h6>About our Party</h6>
            <h4>Welcome to Democracy</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi dignissimos dolore esse est ex exercitationem fugit illo itaque iure non officia possimus praesentium saepe similique sunt, suscipit tempore voluptatem.
            </p>
            <a class="kode_link_1" href="#"
              >See More <i class="fa fa-angle-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About_Democrace",
  mounted() {
    this.LoadData();
  },
  data: () => ({
    mainAbout: {},
  }),
  methods: {
    LoadData() {
      this.$axios
        .get("/Post/GetPostsForDash", {
          params: { code: "8" },
        })
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;

          this.mainAbout = this.posts.filter((x) => x.categorys === "about1");
          if (this.mainAbout.length > 0) {
            this.mainAbout = this.mainAbout[0];
          }

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
.kode_link_1:hover {
  color: white !important;
  background-color: #ef4a2b !important;
  transition: 0.4s;
}

.kode_link_1 {
  background-color: #373434 !important;
  border: 1px solid black !important;
  display: inline-block !important;
  outline: 2px solid #fff !important;
  outline-offset: 3px !important;
  overflow: hidden !important;
  padding: 12px 68px 10px 20px !important;
  position: relative !important;
  z-index: 9999 !important;
  text-transform: uppercase !important;
  font-weight: bold !important;
  letter-spacing: -1.2px !important;
  font-family: "Sintony", sans-serif !important;
  color: #ffffff !important;
  transition: 0.4s;
}

.kode_link_1:before {
  background-color: #ffffff !important;
  color: #624747 !important;
  content: "" !important;
  height: 100% !important;
  padding: 33px 34px !important;
  position: absolute !important;
  right: -42px !important;
  top: -43px !important;
  transform: rotate(71deg) !important;
  transition: 0.4s;
}

.kode_welcome:before {
  content: "";
  position: absolute;
  top: -23px;
  left: -50px;
  width: 84%;
  height: 93%;
  border: 9px solid #27282d;
  background-color: transparent;
  z-index: 0;
}

.kode_link_1 i {
  color: #000000 !important;
  font-size: 19px !important;
  font-weight: bold !important;
  height: 100% !important;
  position: absolute !important;
  right: 16px !important;
  top: 10px !important;
  transition: 0.4s;
}
</style>
