<script>
import axios  from 'axios';
axios.defaults.baseURL = 'http://localhost:3005';
import CardItem from './CardItem.vue';
export default {
    components: { CardItem },
    data() {
        return {
            goods: null,
            isHide: true,
            count: 1,

            index: null
        }
    },
    mounted() {
        this.loadMenu();
        setInterval(() => {
            this.loadMenu();
        }, 60000);
    },
    methods: {
        openCard(index) {
            this.isHide = !this.isHide;
            this.index = index;
        },
        async loadMenu() {
            let responce = await axios.get('/goods');
            this.goods = responce.data;
        }
    }
}
</script>


<template>
    <div class="h-container mx-8 flex justify-between items-center mt-10 lg:mx-48 mb-6">
        <h1 class="font-bold text-5xl">Наши товары:</h1>
    </div>
    <div class="goods mx-8 flex justify-center items-center flex-wrap gap-x-20 gap-y-12 my-10">
        <div v-for="(good, index) in goods" class="good-card flex flex-col gap-0 w-1/4 border 
        border-slate-700 rounded-2xl shadow-xl transition-all ease-in-out duration-300 hover:-translate-y-2" 
        :class="{'hover:shadow-2xl': good.isHas}">
        <img class="rounded-t-xl cursor-pointer border-b border-black" :src="good.img">
            <div class="card info-block flex flex-col gap-4">
                <h2 class="font-bold text-3xl">{{ good.name }}</h2>
                <!-- <span class="text-slate-500">{{ good.discr }}</span> -->
                <i class="font-bold text-emerald-600" v-if="good.isHas">Товар в наличии</i>
                <i class="text-red-500 font-bold" v-else>Товар закончился(</i>
                <b class="text-2xl">{{ good.price }} руб.</b>
                <button @click="openCard(index)">Подробнее!</button>
            </div>
        </div>
    </div>

    <div class="drawer" v-if="!this.isHide">
        <div class="wrapper fixed left-0 top-0 w-full h-full z-10 bg-black opacity-50 cursor-pointer"
        @click="this.isHide = !this.isHide"></div>
        <card-item class="z-20 bg-white" :index="index"></card-item>
    </div>
</template>


<style scoped>
@media (max-width: 768px) {
    
    .h-container {
        margin-top: 15px;
        margin-bottom: 4px;
    }
    .h-container > h1 {
        font-size: 22px;
    }
    .goods {
        margin-top: 10px;
        font-size: 0.8rem;
        gap: 22px
    }
    .goods h2 {
        font-size: 22px;
    }
    .goods b {
        font-size: 20px;
    }
    .good-card {
        width: 100%;
        gap: 2px;
    }
}

main {
    margin: 0 0px!important;
}

.good-card img {
    max-width: 600px;
    height: 270px;
    object-fit: cover;
}
</style>