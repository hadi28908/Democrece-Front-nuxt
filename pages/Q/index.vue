<template>
  <div>
    <div class="kode_about_bg">
      <HeaderAndMenu></HeaderAndMenu>
      <div class="container">
        <div class="kode_aboutus_wrap">
          <h4>Frequently asked questions</h4>
          <div class="kode_bread_crumb">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" md="10" sm="10" class="mx-auto">
          <v-card  class="mx-auto" style="padding: 25px">
            <p>Frequently asked questions</p>
            <v-row justify="center">
              <v-expansion-panels accordion>
                <v-expansion-panel
                  v-for="(item,i) in 5"
                  :key="i"
                >
                  <v-expansion-panel-header>{{item.question}}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{item.Answer}}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import HeaderAndMenu from "@/components/HeaderAndMenu";

export default {
  name: "Q",
  components: {
    HeaderAndMenu
  },
   mounted() {
    this.LoadData();
  },
  data() {
    return {      
      items: [],
    };
  },
  methods: {
    LoadData() {
      // alert("5");
      this.$axios
        .get("/FAQ/GetFAQs")
        .then((response) => {
          this.items = response.data;
          console.log(this.items);
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
    disapiarDialog(index) {
      console.log(this.dialog);
      var objIndex = this.dialog.findIndex((obj) => obj == true);

      console.log("Before update: ", this.dialog[objIndex]);

      //Update object's name property.
      this.dialog[objIndex] = false;

      //Log object to console again.
      console.log("After update: ", this.dialog[objIndex]);
    },
  },
}
</script>

<style scoped>

</style>
