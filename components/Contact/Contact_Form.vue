<template>
  <section>
    <div class="container">
      <div class="kode_hdg_1">
        <h6>What Going On</h6>
        <h4>Get in Touch with Us</h4>
      </div>

      <div class="row">
        <div class="col-md-9">
          <form>
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <div class="kf_touch_field">
                  <input
                    class="comming_place"
                    type="text"
                    placeholder="Your Name:"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="kf_touch_field">
                  <input
                    class="comming_place"
                    type="text"
                    placeholder="Email Address:"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="kf_touch_field">
                  <input
                    class="comming_place"
                    type="text"
                    placeholder="Phone Number:"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="kf_touch_field">
                  <input
                    class="comming_place"
                    type="text"
                    placeholder="subject:"
                  />
                </div>
              </div>

              <div class="col-md-12">
                <div class="kf_touch_field">
                  <textarea placeholder="Message" class="comming_place">
                  </textarea>
                </div>
              </div>

              <div class="col-md-12">
                <a href="#" class="float-right button-1">Send Messages</a>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-3">
          <div class="kf_touch_img">
            <img src="/image/get-touch-01.png" alt="Image Here" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact_Form",
  methods: {
     SaveChanges(i, section) {
      this.loading.savingChanges = true;

      var model;
      if (section === 1) {
        this.section1s[i].value = parseInt(this.section1s[i].value);
        model = this.section1s[i];
      } else {
        this.section2s[i].value = parseInt(this.section2s[i].value);
        model = this.section2s[i];
      }

      this.$axios
        .post("/statistics/CreateUpdate", model)
        .then((response) => {
          this.loading.savingChanges = false;
          console.log(response.data);
          if (section === 1) {
            this.section1s[i].id = response.data;
          } else {
            this.section2s[i].id = response.data;
          }
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
          this.loading.savingChanges = false;
        });
    },
  },
};
</script>

<style scoped>
</style>
