<style scoped>
.menu-1 {
  font-size: 14px !important;
  padding-top: 7px !important;
}
</style>
<template>
  <header>
    <v-container style="background: #8d0c0c" fluid>
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="4"
          sm="4"
          class="mr-auto ml-auto float-md-left"
          style="padding-bottom: 0px; padding-top: 0px; z-index: 1000"
        >
          <div class="mr-auto ml-auto float-md-left">
            <ul>
              <li class="menu-1">
                <i class="fa fa-phone"></i>
                + 987 654 321
              </li>

              <li class="menu-1">
                <i class="fa fa-map-marker"></i>
                Lorum Ipsum st. 876, LA, US.
              </li>
            </ul>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="4"
          class="mr-auto ml-auto float-md-right"
          style="padding-bottom: 0px; padding-top: 0px; z-index: 1000"
        >
          <div class="mr-auto ml-auto float-md-right">
            <div class="kode_scl_icon">
              <ul>
                <li>
                  <a target="_blank">
                    <i
                      class="fa fa-facebook"
                      style="color: white; font-size: 14px"
                    ></i>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <i
                      class="fa fa-twitter"
                      style="color: white; font-size: 14px"
                    ></i>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <i
                      class="fa fa-instagram"
                      style="color: white; font-size: 14px"
                    ></i>
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    <i
                      class="fa fa-pinterest-p"
                      style="color: white; font-size: 14px"
                    ></i>
                  </a>
                </li>
                 <li>
                  <a>
                    <i
                      class="fa fa-dribbble"
                      style="color: white; font-size: 14px"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="kode_navigation_outr_wrap" style="z-index: 999">
      <div class="container">
        <!--Logo Wrap Start-->
        <div class="kode_logo">
          <a><img alt="Ipassa Logo" src="/image/logo.png" style="width: 154px; max-height: 57px"/></a>
        </div>
        <!--Logo Wrap Start-->

        <!--Navigation Wrap Start-->
        <div class="kode_ui_element">
          <!--Navigation Wrap Start-->
          <div class="kode_menu">
            <ul>
              <li class="active">
                <n-link to="/">Home</n-link>
              </li>
              <li>
                <n-link to="/about">About</n-link>
              </li>
              <li>
                <n-link to="/contact">Contact us</n-link>
              </li>
              <li>
                <n-link to="/q">FAQs</n-link>
              </li>
              <li>
                <n-link to="/privacy">Privacy Plicy</n-link>
              </li>
            </ul>
          </div>
          <!--Navigation Wrap End-->

          <!--DL Menu Start responsive-->
          <div
            id="kode-responsive-navigation"
            class="dl-menuwrapper"
            style="margin: auto; width: 100%"
          >
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="white text--dark" v-bind="attrs" v-on="on">
                  Dropdown
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :to="item.link"
                >
                  <v-list-item-title style="cursor: pointer">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <!--DL Menu END-->
        </div>
        <div class="bg-right"></div>
        <!--Navigation Wrap End-->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderAndMenu",
  data() {
    return {
      none: false,
      items: [
        { title: "", link: "/" },
        { title: "home", link: "/" },
        { title: "about", link: "/about" },
        { title: "Contact", link: "/contact" },
        { title: "FAQs", link: "/q" },
        { title: "Privacy Policy", link: "/privacy" },
      ],
      metadata: [],
      logo: "",
      phone: "",
      location: "",
      facebook: "",
      twitter: "",
      instagram: "",
    };
  },

};
</script>

<style scoped>
.container {
  padding: 0px !important;
}
.kode_scl_icon ul li a i {
  font-size: 8px;
}
</style>
