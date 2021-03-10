<template>
  <div>
    <navbar/>
    <div>
      <Card/>
      <Democrace></Democrace>
      <What></What>
      <News></News>
      <hr/>
      <br/>
      <ImageTabs></ImageTabs>
      <br/>
      <SEETHEAWESOMEFEATURE></SEETHEAWESOMEFEATURE>
      
      <OURPEOPLE></OURPEOPLE>
      <br/>
      <br/>
      <Progress></Progress>
      <Countup></Countup>
      <Latest></Latest>
      <Contact></Contact>
    </div>
  </div>
</template>


<script>
import navbar from "~/components/main/navbar";
import Card from "@/components/main/Card";
import News from "@/components/main/News";
import SEETHEAWESOMEFEATURE from "@/components/main/SEETHEAWESOMEFEATURE";
import Progress from "@/components/main/Progress";
import Countup from "@/components/main/Countup";
import Latest from "@/components/main/latest";
import ImageTabs from "@/components/main/ImageTabs";
import Democrace from "~/components/main/Democrace";
import What from "~/components/main/What";

import OURPEOPLE from "~/components/main/OURPEOPLE";
import Contact from "~/components/main/Contact";

export default {
  components: {
    Contact,
    OURPEOPLE,
    What,
    Democrace,
    ImageTabs,
    Latest,
    Countup,
    Progress,
    SEETHEAWESOMEFEATURE,
    News,
    navbar,
    Card,
  },
};
</script>
<style scoped>
</style>>
