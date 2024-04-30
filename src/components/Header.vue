<script>
import Cart from './Cart.vue';
export default {
    components: { Cart },
    data() {
        return {
            logo: `src/assets/vue.svg`,
            isHidden: false,
            isOpen: false,

            arrowBack: 'src/assets/arrowBack.svg',
        }
    },

    methods: {
        openCart() {
            this.isHidden = !this.isHidden;
        }
    },
}
</script>


<template>
<div class="nav-container flex justify-between items-center border-b border-black py-12 px-40">
    <div class="logo-block flex flex-row">
        <img class="cursor-pointer w-16" :src="logo" alt="Logo">
        <div class="info-block flex-flex-col ml-6">
            <h2 class="font-bold text-5xl mb-1">Богу-Чай</h2>
            <span class="text-slate-500">Лучшиий чай в Богучаре только у нас!</span>
        </div>
    </div>
    <nav class="menu-block text-2xl">
        <ul class="flex gap-6">
            <li><a class="select-none tel" href="tel:+79507608461">+7 (950) - 760 - 84 - 61</a></li>
            <li @click="openCart" class="font-bold cursor-pointer cart-item select-none">Корзина</li>
        </ul>
    </nav>
</div>
    <div class="drawer" v-if="this.isHidden">
        <div @click="this.isHidden = !this.isHidden"
        class="fixed left-0 top-0 w-full h-full z-10 bg-black opacity-50 cursor-pointer text-emerald">Нажмите, чтобы выйти</div>
    <Cart>
        <img :src="arrowBack" @click="this.isHidden = !this.isHidden"
        class="cursor-pointer opacity-50 hover:opacity-100 transition fixed top-4 right-4 z-20" alt="Arrow back">
    </Cart>

    </div>
</template>


<style scoped>
.tel:hover {
    color: black;
}
@media (max-width: 768px) {
    .nav-container {
        padding: 12px 16px;
    }
    .info-block {
        display: none;
    }
    .menu-block {
        font-size: 16px;
    }
    ul {
        gap: 15px;
    }
}
.cart-item {
    transition: all 400ms;
}
.cart-item:hover {
    color: #059669;
}
@media (max-width: 1200px) {
    .nav-container {
        padding: 22px 36px;
    }
    .menu-block {
        font-size: 22px;
    }
}
</style>