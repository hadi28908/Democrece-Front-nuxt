<template>
  <v-app>
    <div class="main-404">
      <HeaderAndMenu></HeaderAndMenu>
      <div class="kode_about_bg">
        <div class="container">
          <div class="kode_aboutus_wrap">
            <h4>404 Page</h4>
            <div class="kode_bread_crumb">
              <ul>
                <li><a href="http://kodeforest.net/html/democracy/404.html#">Home</a></li>
                <li><a href="http://kodeforest.net/html/democracy/404.html#">404 Page</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="kode_content">

      <!--404 page Wrap Start-->
      <section class="kf_404_bg">
        <v-container>
          <v-row>
            <v-col md="8" sm="8" cols="12" class="mr-sm-auto ml-sm-auto">
              <div class="kf_404_wrap mr-sm-auto ml-sm-auto text-center">
                <h2>4<span> {&nbsp;} </span>4</h2>
                <h4>opps</h4>
                <h5 style="width: 65%;">We can't seem to find the page <span>You'r looking for.</span> </h5>
                <p style="width: 65%;">You can use the form below to search for what you need.</p>
                <div class="kf_page_list mr-sm-auto ml-sm-auto">
                  <p style="width: 65%;">You can browse the following links that may help you for what you are looking.</p>
                  <ul>
                    <li><n-link to="/">Home Page</n-link></li>
                    <li><n-link to="/about">about</n-link></li>
                    <li><n-link to="/contact">Contact Us</n-link></li>
                  </ul>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <!--404 page Wrap End-->

    </div>
  </v-app>
</template>

<script>
import HeaderAndMenu from "@/components/HeaderAndMenu";
export default {
  components: {HeaderAndMenu},
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
