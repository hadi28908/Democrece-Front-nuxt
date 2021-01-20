<template>
  <div class="kode_breaking_news" style="z-index: 999">
    <div
      class="kode_breaking_hdg"
      style="border-bottom: 3px #032f60 solid !important"
    >
      <h6>Breaking News</h6>
    </div>

    <marquee
      direction="left"
      onmouseover="this.stop();"
      onmouseout="this.start();"
      class="br"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci excepturi labore, magnam odio recusandae sit?
    </marquee>
    <!-- <v-carousel
      v-model="currentItem"
      height="50"
      hide-delimiters
      :light="true"
      class="br"
    >
      <v-carousel-item v-for="(i, index) in items" :key="index">
        <v-sheet height="100%" tile color="">
          <v-row class="fill-height" align="center" justify="center">
            <p style="color: black; margin-bottom: 0">{{ i.newsContent }}</p>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>    -->
  </div>
</template>


<script>
export default {
  created: function () {
    setInterval(this.changeNews, 5000);
  },
  mounted() {
    this.LoadNews();
  },
  data: () => ({
    allNews: "",
    currentItem: 0,
    items: [
      {
        newsContent:
          "Download the Vue Devtools extension for a better development",
      },
      { newsContent: "You are running Vue in development mode." },
      {
        newsContent:
          "sure to turn on production mode when deploying for production",
      },
    ],
    loadData: false,
  }),
  methods: {
    LoadNews() {
      this.loadData = true;

      this.$axios
        .get("/BrackingNews/GetNews")
        .then((response) => {
          console.log(response.data);
          this.loadData = false;
          this.items = response.data;
          console.log(this.items);
          this.items.forEach((element) => {
            this.allNews = this.allNews + "      "+ element.newsContent ;
          });
        })
        .catch((error) => {
          console.log(error.data);
          this.loadData = false;
        });
    },

    changeNews() {
      if (this.currentItem < this.items.length) {
        this.currentItem = this.currentItem + 1;
      } else {
        this.currentItem = 0;
      }
    },
  },
};
</script>
<style >
#breaking-news-carousel,
.br {
  position: relative !important;
  top: 54% !important;
  width: calc(100% - 196px) !important;
  color: #666666;
  font-size: 16px;
  margin-top: 12px;
}
/*
#breaking-news-carousel .v-window__prev,
.br .v-window__prev {
  right: 35px !important;
  left: auto !important;
}

#breaking-news-carousel .v-window__prev,
.v-window__next,
.br .v-window__prev {
  border-radius: 0 !important;
  background: transparent !important;
}

#breaking-news-carousel .v-btn.v-btn--icon,
.br .v-btn.v-btn--icon {
  color: #1976d2;
} */
</style>
