<template>
<div>
  <Contact_Navbar></Contact_Navbar>
  <div class="kode_content">
    <Contact_Conects></Contact_Conects>
    <Contact_Form></Contact_Form>
  </div>
</div>
</template>

<script>
import Contact_Navbar from "@/components/Contact/Contact_Navbar";
import Contact_Conects from "@/components/Contact/Contact_Conects";
import Contact_Form from "@/components/Contact/Contact_Form";
import Footer from "@/components/main/Footer";
export default {
name: "index",
  components: {Footer, Contact_Form, Contact_Conects, Contact_Navbar}
}
</script>

<style scoped>

</style>
