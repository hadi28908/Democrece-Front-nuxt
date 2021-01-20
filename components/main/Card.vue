<template>
  <!--سه تا کارد اول بعد از هدر-->
  <v-row class="">

    <v-col cols="11" md="6" sm="10" lg="4" xl="4" class="mr-auto ml-auto">
      <div class="con">
        <div class="text">
          <div class="lorem">
            <h4>election campaign</h4>
            <p>Compaign Starting for the Elections</p>
            <i class="fa fa-bullhorn"></i>
          </div>
        </div>
        <div class="info">
          <div>
            <h5>election campaign</h5>
            <p>
              A political campaign is an organized effort which seeks to
              influence the decision making process within a specific group.
            </p>
            <v-dialog
              v-model="dialog2"
              width="600px"
              style="z-index: 1000 !important"
            >
              <template v-slot:activator="{ on, attrs }">
                <a href="#" v-bind="attrs" v-on="on"> Click Me!</a>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline text-center"
                  >Use Google's location service?</span
                  >
                </v-card-title>
                <v-card-text class="text-center">
                  Lorem ipsum dolor sit amet, semper quis, sapien id natoque
                  elit. Nostra urna at, magna at neque sed sed ante imperdiet,
                  dolor mauris cursus velit, velit non, sem nec. Volutpat sem
                  ridiculus placerat leo, augue in, duis erat proin condimentum
                  in a eget, sed fermentum sed vestibulum varius ac, vestibulum
                  volutpat orci ut elit eget tortor. Ultrices nascetur nulla
                  gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor
                  debitis, ipsum pellentesque, vitae id quam ut mauris dui
                  tempor, aptent non. Quisque turpis. Phasellus quis lectus
                  luctus orci eget rhoncus. Amet donec vestibulum mattis
                  commodo, nulla aliquet, nibh praesent, elementum nulla. Sit
                  lacus pharetra tempus magna neque pellentesque, nulla vel
                  erat. Justo ex quisque nulla accusamus venenatis, sed quis.
                  Nibh phasellus gravida metus in, fusce aenean ut erat commodo
                  eros. Ut turpis, dui integer, nonummy pede placeat nec in sit
                  leo. Faucibus porttitor illo taciti odio, amet viverra
                  scelerisque quis quis et tortor, curabitur morbi a. Enim
                  tempor at, rutrum elit condimentum, amet rutrum vitae tempor
                  torquent nunc. Praesent vestibulum integer maxime felis. Neque
                  aenean quia vitae nostra, tempus elit enim id dui, at egestas
                  pulvinar. Integer libero vestibulum, quis blandit scelerisque
                  mattis fermentum nulla, tortor donec vestibulum dolor amet
                  eget, elit nullam. Aliquam leo phasellus aliquam curabitur
                  metus a, nulla justo mattis duis interdum vel, mollis vitae et
                  id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula
                  convallis, et nulla wisi, amet vestibulum risus, quam ac
                  egestas.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog2 = false">
                    Disagree
                  </v-btn>
                  <v-btn color="green darken-1" text @click="dialog2 = false">
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="11" md="6" sm="10" lg="4" xl="4" class="mr-auto ml-auto">
      <div class="con">
        <div class="text">
          <div class="lorem">
            <h4>election campaign</h4>
            <p>Compaign Starting for the Elections</p>
            <i class="fa fa-bullhorn"></i>
          </div>
        </div>
        <div class="info">
          <div>
            <h5>election campaign</h5>
            <p>
              A political campaign is an organized effort which seeks to
              influence the decision making process within a specific group.
            </p>
            <v-dialog
              v-model="dialog2"
              width="600px"
              style="z-index: 1000 !important"
            >
              <template v-slot:activator="{ on, attrs }">
                <a href="#" v-bind="attrs" v-on="on"> Click Me!</a>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline text-center"
                  >Use Google's location service?</span
                  >
                </v-card-title>
                <v-card-text class="text-center">
                  Lorem ipsum dolor sit amet, semper quis, sapien id natoque
                  elit. Nostra urna at, magna at neque sed sed ante imperdiet,
                  dolor mauris cursus velit, velit non, sem nec. Volutpat sem
                  ridiculus placerat leo, augue in, duis erat proin condimentum
                  in a eget, sed fermentum sed vestibulum varius ac, vestibulum
                  volutpat orci ut elit eget tortor. Ultrices nascetur nulla
                  gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor
                  debitis, ipsum pellentesque, vitae id quam ut mauris dui
                  tempor, aptent non. Quisque turpis. Phasellus quis lectus
                  luctus orci eget rhoncus. Amet donec vestibulum mattis
                  commodo, nulla aliquet, nibh praesent, elementum nulla. Sit
                  lacus pharetra tempus magna neque pellentesque, nulla vel
                  erat. Justo ex quisque nulla accusamus venenatis, sed quis.
                  Nibh phasellus gravida metus in, fusce aenean ut erat commodo
                  eros. Ut turpis, dui integer, nonummy pede placeat nec in sit
                  leo. Faucibus porttitor illo taciti odio, amet viverra
                  scelerisque quis quis et tortor, curabitur morbi a. Enim
                  tempor at, rutrum elit condimentum, amet rutrum vitae tempor
                  torquent nunc. Praesent vestibulum integer maxime felis. Neque
                  aenean quia vitae nostra, tempus elit enim id dui, at egestas
                  pulvinar. Integer libero vestibulum, quis blandit scelerisque
                  mattis fermentum nulla, tortor donec vestibulum dolor amet
                  eget, elit nullam. Aliquam leo phasellus aliquam curabitur
                  metus a, nulla justo mattis duis interdum vel, mollis vitae et
                  id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula
                  convallis, et nulla wisi, amet vestibulum risus, quam ac
                  egestas.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog2 = false">
                    Disagree
                  </v-btn>
                  <v-btn color="green darken-1" text @click="dialog2 = false">
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="11" md="6" sm="10" lg="4" xl="4" class="mr-auto ml-auto">
      <div class="con">
        <div class="text">
          <div class="lorem">
            <h4>election campaign</h4>
            <p>Compaign Starting for the Elections</p>
            <i class="fa fa-bullhorn"></i>
          </div>
        </div>
        <div class="info">
          <div>
            <h5>election campaign</h5>
            <p>
              A political campaign is an organized effort which seeks to
              influence the decision making process within a specific group.
            </p>
            <v-dialog
              v-model="dialog3"
              width="600px"
              style="z-index: 1000 !important"
            >
              <template v-slot:activator="{ on, attrs }">
                <a href="#" v-bind="attrs" v-on="on"> Click Me!</a>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline text-center"
                  >Use Google's location service?</span
                  >
                </v-card-title>
                <v-card-text class="text-center">
                  Lorem ipsum dolor sit amet, semper quis, sapien id natoque
                  elit. Nostra urna at, magna at neque sed sed ante imperdiet,
                  dolor mauris cursus velit, velit non, sem nec. Volutpat sem
                  ridiculus placerat leo, augue in, duis erat proin condimentum
                  in a eget, sed fermentum sed vestibulum varius ac, vestibulum
                  volutpat orci ut elit eget tortor. Ultrices nascetur nulla
                  gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor
                  debitis, ipsum pellentesque, vitae id quam ut mauris dui
                  tempor, aptent non. Quisque turpis. Phasellus quis lectus
                  luctus orci eget rhoncus. Amet donec vestibulum mattis
                  commodo, nulla aliquet, nibh praesent, elementum nulla. Sit
                  lacus pharetra tempus magna neque pellentesque, nulla vel
                  erat. Justo ex quisque nulla accusamus venenatis, sed quis.
                  Nibh phasellus gravida metus in, fusce aenean ut erat commodo
                  eros. Ut turpis, dui integer, nonummy pede placeat nec in sit
                  leo. Faucibus porttitor illo taciti odio, amet viverra
                  scelerisque quis quis et tortor, curabitur morbi a. Enim
                  tempor at, rutrum elit condimentum, amet rutrum vitae tempor
                  torquent nunc. Praesent vestibulum integer maxime felis. Neque
                  aenean quia vitae nostra, tempus elit enim id dui, at egestas
                  pulvinar. Integer libero vestibulum, quis blandit scelerisque
                  mattis fermentum nulla, tortor donec vestibulum dolor amet
                  eget, elit nullam. Aliquam leo phasellus aliquam curabitur
                  metus a, nulla justo mattis duis interdum vel, mollis vitae et
                  id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula
                  convallis, et nulla wisi, amet vestibulum risus, quam ac
                  egestas.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog3 = false">
                    Disagree
                  </v-btn>
                  <v-btn color="green darken-1" text @click="dialog3 = false">
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {
      dialog1: false,
      dialog: [false, false, false, false, false, false, false, false, false],
      //
      posts: [],
    };
  },
};
</script>

<style scoped>
.con {
  position: relative;
  width: 95% !important;
  /* height: 252px !important; */
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background-image: url("/image/program-01.jpg");
  background-size: 100% 100%;
  color: white;
  padding-bottom: 55.6%;
  height: auto !important;
}

.text {
  position: absolute;
  transform: rotate(-31deg);
  width: 590px;
  background-color: rgba(55, 45, 44, 0.65);
  z-index: 9;
  box-shadow: 0px 0px 0px 7px rgba(0, 0, 0, 0.65);
  color: white;
  height: 100%;
  width: 119%;
  left: -26%;
  bottom: 40%;
  opacity: 1;
  transition: 0.5s;
}

.text:before {
  left: -166px;
  color: white;
}

.text:before:hover {
  top: -100%;
  left: -100%;
  opacity: 0;
  color: white;
  transition: 0.3s;
}

.lorem {
  position: relative;
  /* top: 200px;
  left: 140px; */
  transform: rotate(31deg);
  color: white;
  top: 70%;
  left: 16%;
}

.lorem i {
  font-size: 80px;
}

.lorem h4 {
  font-size: 30px;
  color: white;
}

.lorem p {
  color: white;
}

.con:hover .text {
  left: -100%;
  overflow: hidden;
  color: white;
  box-shadow: none;
  opacity: 0;
  transition: 0.5s;
}

.con .text {
  transition: 0.4s;
  color: white;
}

.info {
  background-color: #05b0b0;
  color: white;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  transition: 0.5s;
  color: white;
}

.info div {
  width: 95%;
  height: 95%;
  border: 1px solid white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
  color: white;
}

.con:hover .info {
  opacity: 0.9;
  transition: 0.5s;
  color: white;
}

.info h5 {
  /* font-size: 35px; */
  padding: 0px;
  margin-top: 11px;
  margin-bottom: 5px;
  color: white;
}

.info p {
  /* font-size: 18px; */
  color: white;
}

a {
  display: block;
  width: 150px;
  line-height: 40px;
  background: orangered;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0px auto;
}

a:before,
a:after {
  position: absolute;
  content: "";
  transition: all 0.25s;
}

a:before {
  border-bottom: 2px solid yellow;
  border-left: 2px solid yellow;
  width: 10%;
  height: 33%;
  left: -10px;
  bottom: -10px;
}

a:after {
  border-top: 2px solid yellow;
  border-right: 2px solid yellow;
  width: 10%;
  height: 33%;
  top: -10px;
  right: -10px;
}

a:hover:before {
  width: 112%;
  height: 140%;
}

a:hover:after {
  width: 112%;
  height: 140%;
}
</style>
