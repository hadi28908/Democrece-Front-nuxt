<style  scoped>
.kode_progress h6 {
  font-size: 18px !important;
  color: #ff5252 !important;
}
</style>
<template>
  <section class="kode_progress_bg">
    <v-container >
      <v-row>
        <v-col
          v-for="(p, index) in Statistics1"
          :key="index"
          md="6"
          sm="10"
          cols="12"
        >
          <div class="kode_progress">
            <h6>{{ p.title }}</h6>
            <v-progress-linear
              :value="p.value"
              color="error"
              height="5"
            ></v-progress-linear>
          </div>
        </v-col>

        <!-- <v-col md="6" sm="10" cols="12">
          <div class="kode_progress">
            <h6>Conviction</h6>
            <v-progress-linear
              value="15"
              color="red lighten-2"
            ></v-progress-linear>
          </div>
        </v-col>

        <v-col md="6" sm="10" cols="12">
          <div class="kode_progress">
            <h6>Courage</h6>
            <v-progress-linear
              value="15"
              color="red lighten-2"
            ></v-progress-linear>
          </div>
        </v-col>

        <v-col md="6" sm="10" cols="12">
          <div class="kode_progress">
            <h6>Sincerity</h6>
            <v-progress-linear
              value="15"
              color="red lighten-2"
            ></v-progress-linear>
          </div>
        </v-col> -->
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Progress",
  mounted() {
    this.LoadData();
  },
  data() {
    return {
      Statistics1: [],
    };
  },
  methods: {
    LoadData() {
      // alert("6");
      this.$axios
        .get("/Statistics/Get", {
          params: { section: "1" },
        })
        .then((response) => {
          this.Statistics1 = response.data;
          console.log(this.Statistics1);
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
