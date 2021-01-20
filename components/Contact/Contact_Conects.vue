<template>
  <v-container class="mt-5">
    <ul class="kf_office_name nav nav-tabs">
      <li class="active"><a>Main office</a></li>
    </ul>
    <v-container>
      <v-container>
        <v-row class="p-16">
          <div class="col-md-4 col-sm-12">
            <div class="kf_location_info">
              <i class="fa fa-map-marker"></i>
              <h6>Location</h6>
              <p>{{ location }}</p>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="kf_location_info">
              <i class="fa fa-phone"></i>
              <h6>Phone Number</h6>
              <p>{{ phone }}</p>             
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="kf_location_info">
              <i class="fa fa-send"></i>
              <h6>Email address</h6>
              <a href="#">info@Ipassa.org</a>
              <!-- <ul class="kf_loc_socil_icon">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
              </ul> -->
            </div>
          </div>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Contact_Conects",
  mounted() {
    this.LoadData();
  },
  data() {
    return {
      metadata: [],
      phone: "",
      location: "",
    };
  },
  methods: {
    LoadData() {
      this.$axios
        .get("/websiteMetadata/Get")
        .then((response) => {
          this.metadata = response.data;

          console.log("contact us", this.metadata);

          //
          //location
          this.location = this.metadata.filter(
            (x) => x.title === "Location" || x.title === "location"
          );
          this.location.length > 0
            ? (this.location = this.location[0].metaContent)
            : "London";

          console.log(this.location);
          //
          //phone
          this.phone = this.metadata.filter(
            (x) => x.title === "Phone" || x.title === "phone"
          );
          this.phone.length > 0
            ? (this.phone = this.phone[0].metaContent)
            : "+1 23456789";
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
        });
    },
  },
};
</script>

<style scoped>
</style>
