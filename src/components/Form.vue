<script>
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3005';
export default {
    data() {
        return {
            username: ``,
            phone: ``,
            email: ``,
            message: ``,
            invalid: ``,
            valid: ``
        }
    },

    methods: {
        async addUser() {
            if(this.username == `` || this.phone == `` || this.email == `` || this.message == ``) {
                this.invalid = `Не все поля заполнены`;
                return;
            } else if(!(this.email.includes(`@`) && this.email.includes(`.`))) {
                this.invalid = `Email не верен`;
                return;
            } else if(this.message.length <= 19) {
                this.invalid = `Сообщение должно включать не менее 20 символов`;
                return;
            } else if(this.phone.length <= 10) {
                this.invalid = `Неправильный номер телефона`;
                return;
            } else {
                try {
                    this.invalid = ``;
                    this.valid = `Отправляется...`;
                    setTimeout(() => {
                        this.username = ``; 
                        this.phone = ``; 
                        this.email = ``; 
                        this.message = ``;
                        this.valid = `Отправленно!`
                    }, 1500);
                    setTimeout(() => {
                        this.valid = ``
                    }, 3500)
                    await axios.post('/requests', {
                        name: this.username,
                        phoneNumber: this.phone,
                        email: this.email,
                        message: this.message
                    });
                } catch(err) {
                    this.invalid = err
                }
            }
        },
    }
}
</script>


<template>
    <form @submit.prevent="addUser" class="form-container flex flex-col items-center justify-center gap-6 border
    border-black shadow-xl rounded-2xl p-8 mx-32 my-12">
        <h2 v-if="this.username == ``" class="font-bold text-4xl">Свяжитесь с нами!</h2>
        <h2 v-else class="font-bold text-4xl text-center">Свяжитесь с нами, {{ username }}!</h2>
        <input type="text" class="xl:w-1/5 p-4 rounded-2xl text-black bg-white border
        border-black" placeholder="Имя" v-model="username">
        <input type="tel" class="xl:w-1/5 p-4 rounded-2xl text-black bg-white border
        border-black" placeholder="Номер телефона" v-model="phone">
        <input type="email" class="xl:w-1/5 p-4 rounded-2xl text-black bg-white border
        border-black" placeholder="Email" v-model="email">
        <textarea type="text" class="xl:w-1/5 px-6 py-4 rounded-2xl text-black bg-white border
        border-black pr-8" placeholder="Ваше сообщение/предложение" v-model="message"></textarea>
        <span v-if="this.invalid != ``" class="text-red-700 text-xl">{{ invalid }}</span>
        <span v-if="this.valid != ``" class="text-emerald-700 text-xl font-bold">{{ valid }}</span>
        <button class="xl:w-1/4" type="submit">Отправить</button>
        <a href="#">Уже писали? Нажмите сюда!</a>
    </form>
</template>


<style scoped>
@media (max-width: 768px) {
    .form-container {
        margin: 12px 10px;
    }

    h2 {
        font-size: 25px;
    }
}
</style>