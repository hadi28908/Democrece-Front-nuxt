<template>
  <div>
    <Comming_Navbar></Comming_Navbar>
    <div class="kode_content">
      <Coming_Coming_Son></Coming_Coming_Son>
    </div>
  </div>
</template>

<script>
import Comming_Navbar from "@/components/COMMING/Comming_Navbar";
import Coming_Coming_Son from "@/components/COMMING/Coming_Coming_Son";
export default {
  name: "index",
  components:{
    Coming_Coming_Son,
    Comming_Navbar,
  }
}
</script>

<style scoped>

</style>
