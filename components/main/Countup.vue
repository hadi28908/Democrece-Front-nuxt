
<template>
  <section class="kode_countup_bg">
    <v-container >
      <v-row>
        <v-col
          v-for="(p, index) in Statistics1"
          :key="index"
          md="3"
          sm="10"
          cols="12"
        >
          <div class="kode_countup">
            <i :class="p.icon"></i>
            <h3 class="counter">{{ p.value }}</h3>
            <p>{{ p.title }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Countup",
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
          params: { section: "2" },
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
