<template>
  <section class="kode_welcome_bg">
    <div class="container">
      <ul class="kode_tab_lnk nav nav-tabs" id="tabs">
        <li class="active"><a href="#about">about</a></li>
      </ul>
      <v-row class="kode_wel_outr_wrap tab-content" id="my-tab-content">
        <v-row class="tab-pane active" id="about">
          <v-col md="10" lg="5" sm="10" cols="12" class="mr-auto ml-auto">
            <div class="kode_welcome">
              <figure>
                <img src="/image/welcome-demo-01.jpg" alt="Image Here" />
              </figure>
            </div>
          </v-col>

          <v-col md="10" lg="7" sm="10" cols="12" class="mr-auto ml-auto p-5">
            <div class="kode_wel_demo_des p-5">
              <h6>About our Party</h6>
              <h4>Welcome to Democracy</h4>
              <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi delectus dolor dolorem fugit hic illo ipsam ipsum minima neque nisi non numquam qui reprehenderit saepe, similique totam! Facilis, temporibus.
              </p>
              <a class="kode_link_1">
                SEE MORE
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  methods: {},
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
