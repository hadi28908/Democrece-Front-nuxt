<template>
  <footer>
    <div class="kode_newsletter_bg">
      <div class="container">
        <div class="kode_newsletter_des">
          <h5>Subcribe Our</h5>
          <h3>Newsletter</h3>
        </div>
        <div class="kode_newsletter_form">
          <form>
            <input
              class="placeholder2"
              type="text"
              placeholder="Enter your Place Holder Here"
            />
            <button><i class="fa fa-send"></i></button>
          </form>
        </div>
      </div>
    </div>

    <div class="kode_footer_bg">
      <div class="container">
        <!--Footer Logo Wrap Start-->
        <div class="kode_footer_logo" style="border-bottom: none">
          <figure>
            <a href="#">
              <img src="/image/logo.png" alt="logo" style="max-height: 100px" />
            </a>
          </figure>
          <ul>
            <li>
              <a target="_blank"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a target="_blank"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a  target="_blank"><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a target="_blank"><i class="fa fa-pinterest-p"></i></a>
            </li>
            <li>
              <a  target="_blank"><i class="fa fa-support"></i></a>
            </li>
          </ul>
        </div>
        <!--Footer Logo Wrap End-->

        <!--Footer Site map Wrap Start-->
        <div class="kode_site_map" style="border-bottom: none">
          <ul>
            <li><n-link to="/">Home</n-link></li>
            <li><n-link to="/about">About</n-link></li>
            <!-- <li><n-link to="/comming">Comming</n-link></li> -->
            <li><n-link to="/contact">Contact</n-link></li>
          </ul>
        </div>
        <!--Footer Site map Wrap End-->

        <!--Copy Right Wrap Start-->
        <div class="kode_copyright text-center">
          <p>Copyright ©</p>
          <a class="kode-back-top" href="#" id="hide_me" style="opacity: 0"
            ><i class="fa fa-angle-up"></i
          ></a>
        </div>
        <!--Copy Right Wrap End-->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      //
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
</style>



