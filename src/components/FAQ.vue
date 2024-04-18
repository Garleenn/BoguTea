<script>
export default {
  data() {
    return {
        faqs: [
            {
                question: `Как забрать заказ?`,
                answer: `Чай будет доставлен в ближайшие часы, если вы заказали чай по доставке по 
                Богучару(стоимость услуги 100 рублей в город и бесплатно в военный городок) или самовывозом`
            },
            {
                question: `Что насчёт гарантии?`,
                answer: `Мы даём 100% гарантию, что продукт будет целым и сделанным с душой) У нас есть самовывоз, 
                вы знаете, где нас найти, в случае проблем`
            },
            {
                question: `Этот чай из натуральных продуктов?`,
                answer: `Чай готовится исключительно из проверенных продуктов, за их свойства мы ручаемся)`
            },
            {
                question: `Какие есть способы оплаты?`,
                answer: `Вы можете расплатиться переводом или наличкой у нас. Если же заказываете через этот сайт, 
                при внесении предоплаты из конечной стоимость будет вычтена предоплата и скидка 10%`
            },
        ]
    }
  }
}

</script>

<template>
<h2 class="text-center font-bold text-4xl my-6">FAQ:</h2>
<div class="FAQ-container flex flex-col gap-6 items-center mx-48 mb-8">
    <div v-for="faq in faqs" class="question border-2 border-slate-400 rounded-2xl 
    shadow-xl py-12 px-6 gap-4 w-full">
        <details class="text-2xl text-slate-600 flex text-center transition-all ease-out">
            {{ faq.answer }}
            <summary class="text-3xl font-bold cursor-pointer text-center text-black">
                {{ faq.question }}
            </summary>
        </details>
    </div>
</div>

</template>

<style scoped>
@media (max-width: 768px) {
    .FAQ-container {
        margin-right: 1px;
        margin-left: 1px;
    }
    .question {
        padding: 18px;
    }

    details {
        font-size: 14px;
    }

    summary {
        font-size: 20px;
    }
}
</style>