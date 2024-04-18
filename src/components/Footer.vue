<script>
export default {
    data() {
        return {

        }
    }
}
</script>


<template>
    <div class="footer-container flex p-10 text-xl flex-col justify-center border-t border-black mt-10">
        <ul class="flex items-center justify-evenly">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Гарантии</a></li>
            <li><a href="#">Соц. Сети</a></li>
            <li><a href="#">Лицензионное соглашение</a></li>
            <li><a href="#">Политика конфидициальности</a></li>
        </ul>
        <span class="text-clate-500 text-center mt-6 text-xl">Все права защищены©</span>
    </div>
</template>


<style scoped>
@media (max-width: 768px) {
    .footer-container {
        padding: 12px 32px;
        font-size: 16px;
        flex-direction: column;
        text-align: center;
    }

    ul {
        display: block;
    }

    span {
        font-size: 16px;
    }
}
</style>