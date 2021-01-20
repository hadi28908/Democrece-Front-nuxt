<template>
  <section class="kf_comming_bg">
    <div class="container">
      <div class="kf_comming_wrap">
        <a href="http://kodeforest.net/html/democracy/comming-soon.html#"><img src="/image/demo_logo.png"
                                                                               alt="Image Here"></a>
      </div>
      <div class="kf_comming_counter">
        <h2>COMING SOON!</h2>
        <h4>BE READY,THERE IS JUST: </h4>
        <ul class="countdown">
          <v-container>
            <v-row class="justify-center">
              <li>
                <span class="days">00</span>
                <p class="days_ref">Week</p>
              </li>
              <li>
                <span class="hours">00</span>
                <p class="hours_ref">Days</p>
              </li>
              <li>
                <span class="minutes">00</span>
                <p class="minutes_ref">Hours</p>
              </li>
              <li>
                <span class="seconds last">00</span>
                <p class="seconds_ref">Second</p>
              </li>
            </v-row>
          </v-container>
        </ul>
      </div>

      <div class="kf_comming_form">
        <form>
          <input type="text" placeholder="Your Mail" class="form-control">
          <button>keep me updated</button>
        </form>
      </div>

      <div class="kf_comming_social">
        <ul>
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
          <li><a href="#"><i class="fa fa-youtube"></i></a></li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Coming_Coming_Son"
}
</script>

<style scoped>

</style>
