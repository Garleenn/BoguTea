<script>
import Header from './components/Header.vue';
import Goods from './components/Goods.vue';
import FAQ from './components/FAQ.vue';
import Form from './components/Form.vue';
import Footer from './components/Footer.vue';
export default {
  components: { Header, Goods, FAQ, Form, Footer }
}

</script>

<template>
  
  <header>
    <Header />
  </header>


  <main>
    <Goods />
    <FAQ />
    <Form />
  </main>

  
  <footer>
    <Footer />
  </footer>

</template>

<style>
  
</style>