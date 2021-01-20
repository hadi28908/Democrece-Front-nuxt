<template>
  <div>
    <About_Navbar></About_Navbar>
    <div class="kode_content">
      <About_Democrace></About_Democrace>
      <About_Services></About_Services>
      <About_Soial></About_Soial>
      <About_OURPEOPLE></About_OURPEOPLE>
    </div>
  </div>
</template>

<script>
import About_Navbar from "@/components/About/About_Navbar";
import About_Democrace from "@/components/About/About_Democrace";
import About_Services from "@/components/About/About_Services";
import About_Soial from "@/components/About/About_Soial";
import About_OURPEOPLE from "@/components/About/About_OURPEOPLE";
import Footer from "@/components/main/Footer";


export default {
  name: "index",
  components: {Footer, About_Soial, About_Services, About_Democrace, About_Navbar,About_OURPEOPLE}
}
</script>

<style scoped>

</style>
