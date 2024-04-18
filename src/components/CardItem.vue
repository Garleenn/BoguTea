<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3005';
export default {
    data() {
        return {
            count: 1,
            good: null,

            error: null
        }
    },
    props: {
        index: Number
    },
    mounted() {
        this.loadGood();
        setInterval(() => {
            this.loadGood();
        }, 60000);
    },
    methods: {
        async loadGood() {
            let responce = await axios.get(`/good?id=${this.index}`);
            this.good = responce.data;
        },
        plus() {
            if(this.good.isHas)
                this.count++
        },
        minus() {
            if(this.count > 1 && this.good.isHas) {
                this.count--
            }
        },
        buyPrice(price) {
            price *= this.count;
            return price;
        },
        async addToCart() {
            try {
                await axios.post(`/cart/good`, {
                        img: this.good.img,
                        name: this.good.name,
                        discr: this.good.discr,
                        price: this.good.price * this.count,
                        count: this.count
                });
            } catch (err) {
                this.error = err;
            }
        }
    }
}
</script>


<template>
<div class="draw fixed xl:top-60 top-28 flex justify-center bg-white z-20 xl:mx-56 mx-5 rounded-2xl xl:p-12 p-6" v-if="this.good">
    <div class="good-card flex justify-center items-center xl:flex-row flex-col xl:gap-16 gap-1">

        <img class="rounded-xl xl:w-1/2 cursor-pointer border border-black shadow-md" :src="good.img">

        <div class="info-block flex flex-col text-2xl gap-4 grow-1">
            <h2 class="font-bold text-emerald-500 text-5xl">{{ good.name }}</h2>
            <p class="text-slate-500">{{ good.discr }}</p>
            <span v-if="good.isHas" class="text-emerald-400 text-italic text-xl font-semibold">Товар в наличии</span>
            <span v-else class="text-red-500 text-italic text-xl font-medium">Товар закончился(</span>
            <div class="xl:flex gap-10 items-center flex-wrap">
                <b class="text-4xl text-black">{{ buyPrice(good.price) }} руб.</b>
                <div class="count-block border-2 border-black rounded-2xl flex justify-between py-2 px-5 items-center w-fit
                gap-16 select-none text-3xl">
                <span @click="minus" class="minus font-bold  cursor-pointer">-</span>
                <span class="count text-emerald-500 font-semibold">{{ count }}</span>
                <span @click="plus" class="plus font-bold cursor-pointer">+</span>
                </div>
            </div>
            <button class="mt-2" :disabled="!good.isHas" @click="addToCart">Добавить в корзину!</button>
            <span class="text-danger" v-if="this.error">{{ error }}</span>
        </div>
    </div>
</div>
</template>


<style scoped>
@media (max-width: 768px) {
    .info-block {
        gap: 10px !important;
    }
    .info-block h2 {
        font-size: 36px;
    }
    .info-block p {
        font-size: 14px;
    }
    .info-block > span {
        font-size: 13px;
    }
    .count-block {
        margin-top: 10px;
        font-size: 20px;
        padding: 10px 20px;
    }
    .info-block button {
        font-size: 20px;
    }
    .draw {
        position: absolute;
    }
    .good-card img {
        height: 200px !important;
        object-fit: cover;
    }
}
.good-card img {
    height: 400px;
    object-fit: cover;
}
</style>