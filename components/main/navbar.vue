<template>
  <div>
    <HeaderAndMenu class="header"/>
    <div
      class="main-container">
      <v-container fluid>
        <v-row class="justify-center">
          <v-col cols="6" md="6" sm="0">
            <div class="float-left">
              <div class="kode_caption">
                <h6>POLITICS</h6>
                <h2>
                  THE POWER OF <br/>
                  <span>YOUR VOICE</span>
                </h2>
                <p>

                </p>
                <a class="kode_link_1">
                  SEE MORE
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
        <br/>
        <br/>
        <v-row>
          <v-col cols="12" md="12">
            <test></test>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>


<script>
import HeaderAndMenu from "~/components/HeaderAndMenu";
import Test from "@/components/main/test";

export default {
  components: {
    Test,
    HeaderAndMenu,
  },

  data() {
    return {
      //

    };
  },

};
</script>


<style scoped>
@media screen and (max-width: 980px) {
  .btn-checking2{
    top: 10% !important;
  }
}
@media screen and (min-width: 1500px){
  .btn-checking2{
    top: 32% !important;
  }
}
@media screen and (max-width: 750px){
  .btn-checking2{
    left: 0%!important;
  }
}



.btn-checking2{
  display: table;
  margin-top: 15% !important;
  position: relative;
  top: 100%;
  left: 60%;
}



h1 {
  font-size: 60px;
  text-align: center;
  color: #fff;
}

h3 {
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  color: #fff;
}

.kode_link_1:hover {
  color: white !important;
  background-color: #ef4a2b !important;
  transition: 0.4s;
}

.kode_link_1 {
  background-color: #fffbfb !important;
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
  color: black !important;
  transition: 0.4s;
}

.kode_link_1:before {
  background-color: #1c1d22 !important;
  color: #fff !important;
  content: "" !important;
  height: 100% !important;
  padding: 33px 34px !important;
  position: absolute !important;
  right: -16px !important;
  top: -14px !important;
  transform: rotate(71deg) !important;
  transition: 0.4s;
}

.kode_link_1 i {
  color: #ffffff !important;
  font-size: 19px !important;
  font-weight: bold !important;
  height: 100% !important;
  position: absolute !important;
  right: 16px !important;
  top: 10px !important;
  transition: 0.4s;
}

.kode_link_1:hover i {
  color: #ef4a2b !important;
  transition: 0.4s;
}

.kode_link_1:hover:before {
  background-color: white !important;
  transition: 0.4s;
}
</style>>
