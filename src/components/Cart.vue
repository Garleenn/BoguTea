<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3005';
export default {
    data() {
        return {
            count: 0,
            cardGoods: [],

            summ: 0,
            action: 0,
            actionPrecent: 0.95,

            is2: true
        }
    },
    mounted() {
        this.loadCart();
        setInterval(() => {
            this.loadCart();
        }, 20000);
    },
    methods: {
        async loadCart() {
            let responce = await axios.get('/cart');
            this.cardGoods = responce.data;
            this.sum();
            if(this.cardGoods.length > 2) {
                this.is2 = false;
            } else { 
                this.is2 = true;
            }
        },

        async removeGood(index) {
            await axios.delete(`/itemCart?id=${index}`);
            this.loadCart();
        },

        sum() {
            this.cardGoods.forEach(item => {
                if(this.cardGoods.length != 0 && item) {
                    this.summ += item.price;
                };
            });
        },
    }
}
</script>


<template>
    <div class="cart fixed right-0 top-0 xl:w-1/3 bg-white z-20 h-full border-l-2
        border-black shadow-2xl p-5 overflow-auto pb-10">
        <div class="cart-container flex flex-col justify-benween p-4">
            <h2 class="font-bold text-4xl flex gap-3 items-center mb-5">Корзина: </h2>
            <span v-if="this.cardGoods.length == 0" class="text-slate-500 text-xl">
                Добавьте товары в корзину и они вскоре появятся здесь)
            </span>
            <div class="goods-conteiner flex flex-col items-center gap-5 mb-12">
                <div class="good-card flex flex-row items-center gap-8 p-8 border border-black rounded-xl cursor-pointer"
                    v-for="(good, index) in cardGoods">
                    <img class="rounded-xl" :src="good.img" :alt="good.name">
                    <div class="info-card flex flex-col">
                        <h3 class="text-emerald-500 text-cold font-bold">{{ good.name }}</h3>
                        <span class="font-bold text-cold">{{ good.price }} рублей</span>
                        <span class="text-slate-500">Количество: {{ good.count }}</span>
                    </div>
                    <div @click="removeGood(index)" role="btn" class="btn-down border rounded-md p-3">x</div>
                </div>
            </div>
            <div class="flex flex-col gap-4" :class="{'bottom-menu': is2, 'buy-menu': !is2}">
                <div class="summ-block flex justify-between items-center">
                    <span class="text-slate-500">Cумма: </span>
                    <span class="text-slate-500">{{ summ }} руб.</span>
                </div>
                <div class="action-block flex justify-between items-center">
                    <span class="text-slate-500">С учётом скидки(5%): </span>
                    <span class="text-slate-500">{{ action }} руб.</span>
                </div>
                <button>Заказать!</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.bottom-menu {
    position: absolute;
    bottom: 20px;
    width: 92%;
}
.buy-menu {
    width: 100%;
}
@media (max-width: 768px) {
    .cart {
        width: 92%;
        right: 3%;
        left: 4%;
        top: 50px;
        border-radius: 10px;
        border-left: none;
        padding: 2px;
    }
    .good-card {
        padding: 20px;
        flex-direction: column;
        gap: 5px;
        align-items: start;
    }
    .good-card img {
        width: 60%;
    }
    .text-cold {
        font-size: 28px;
    }
    .btn-down {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .cart-container h2 {
        display: flex;
        justify-content: center;
    }
}
.good-card {
    position: relative;
    width: fit-content;
}
.good-card img {
    width: 250px;
}
.text-cold {
    font-size: 28px;
}
.btn-down {
    position: absolute;
    bottom: 15px;
    right: 15px;
}
</style>