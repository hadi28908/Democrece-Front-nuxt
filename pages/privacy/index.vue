<template>
  <div>
    <div class="kode_about_bg">
      <HeaderAndMenu></HeaderAndMenu>
      <div class="container">
        <div class="kode_aboutus_wrap">
          <h4>privacy</h4>
          <div class="kode_bread_crumb">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" md="10" sm="10" class="mx-auto">
          <v-card style="padding: 25px">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim illum ipsam neque sint voluptas voluptatum. Accusantium asperiores atque beatae consectetur deleniti, ea earum maxime perferendis quaerat quis, similique tempore, temporibus!</p>
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
  name: "index",
  components: {
    HeaderAndMenu
  }
}
</script>

<style scoped>

</style>
