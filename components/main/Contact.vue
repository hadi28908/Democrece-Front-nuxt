<template>
  <!-- کامپوننت ارتباط با ما -->
  <section class="kode_contact_bg">
    <v-container>
      <div class="kode_hdg_2">
        <h6>Tesitmoinals</h6>
        <h4>Contact With Us</h4>
      </div>
      <v-row>
        <v-col cols="12" md="8" sm="10" class="mr-sm-auto ml-sm-auto ml-md-0">
          <div class="kode_contact_wrap">
            <h5>contact us fields</h5>
            <v-row class="justify-center">
              <form class="comments-form" id="contactform">
                <v-row>
                  <v-col md="6" cols="10" sm="8" class="mr-auto ml-auto">
                    <div class="kode_contact_field">
                      <input type="text" name="name" placeholder="Your Name" />
                    </div>
                  </v-col>
                  <v-col md="6" cols="10" sm="8" class="mr-auto ml-auto">
                    <div class="kode_contact_field">
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </v-col>
                  <v-col md="6" cols="10" sm="8" class="mr-auto ml-auto">
                    <div class="kode_contact_field">
                      <input type="text" placeholder="Your Phone" />
                    </div>
                  </v-col>

                  <v-col md="6" cols="10" sm="8" class="mr-auto ml-auto">
                    <div class="kode_contact_field">
                      <input type="text" placeholder="Your Subject" />
                    </div>
                  </v-col>

                  <v-col md="8" cols="12" class="mr-auto ml-auto">
                    <div class="kode_contact_field">
                      <textarea
                        name="message"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </v-col>

                  <v-col md="8" cols="12" class="mr-auto ml-auto">
                    <div class="kode_contact_field">
                      <button>Sent Now</button>
                    </div>
                  </v-col>
                </v-row>
              </form>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="10" class="mr-sm-auto ml-sm-auto mr-md-0">
          <div class="kode_contact_info kode_contact_wrap">
            <h5>Email Address</h5>
            <i class="fa fa-envelope-o"></i>
            <div class="kode_contact_des">
              <span><a href="#">Info@democracy.com</a></span>
            </div>
          </div>

          <div class="kode_contact_info kode_contact_wrap">
            <h5>Phone</h5>
            <i class="fa fa-phone"></i>
            <div class="kode_contact_des">
              <span>0098223568955655</span>
              <span>0098223568955655</span>
            </div>
          </div>

          <div class="kode_contact_info kode_contact_wrap">
            <h5>Email Address</h5>
            <i class="fa fa-map-marker"></i>
            <div class="kode_contact_des">
              <span>Lorem ipsum dolor sit amet.</span>
              <span>Lorem ipsum dolor.</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
</style>
