let express = require(`express`);
let app = express();
let cors = require('cors');
let port = 3005;
app.use(cors(`http://localhost:${port}`));
app.use(express.json());

app.listen(port, () => {
    console.info('http://localhost:3005');
})

let goods = [
    {
        img: 'src/assets/tea.jpg',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 250,
        isHas: true,
    },
    {
        img: 'https://kreda.pro/upload/medialibrary/9cf/9hy1b6q10jkn4rr2hw2kpcvq3mwnrqmn.jpg',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 300,
        isHas: false,
    },
    {
        img: 'https://sun9-50.userapi.com/impg/jawbYKJUYsLwSYQfAWogZSDtBXSPmYXNFyi5HQ/4xaZ7KydAX0.jpg?size=640x715&quality=96&sign=157ab7b0cb27c79811994606d1cdf240&c_uniq_tag=DiSJxkYB3LipCOIEE7LYls80I_tyVBuk_RQjhhcSXXw&type=album',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 180,
        isHas: true,
    },
    {
        img: 'https://avatars.mds.yandex.net/get-mpic/5323566/img_id714816769431328280.jpeg/orig',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 400,
        isHas: true,
    },
    {
        img: 'https://goo.su/4X4bHf',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 800,
        isHas: true,
    },
    {
        img: 'https://goods-photos.static1-sima-land.com/items/7301738/2/700-nw.jpg',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 70,
        isHas: false,
    },
    {
        img: 'https://avatars.mds.yandex.net/get-marketpic/8608310/pic59f40cce23378a948d2cdc70f7283838/orig',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 140,
        isHas: true,
    },
    {
        img: 'https://sun9-85.userapi.com/s/v1/ig2/2jhZifJD-eh8dOjnsRhc_15lkNCZSI2i7KbwqgDu_Rpm7dGC6roI4sfEpliTO5j7Jf_SnFxSklFDlbcrdOjRDT4W.jpg?size=400x400&quality=95&crop=326,470,468,468&ava=1',
        name: `Чайная бомба`,
        discr: `Небольшая чайная бомбочка с лимоном, китайским чаем, 
        облепихой и малиной, которая расторяется в воде всего за 10 секунд!`,
        price: 250,
        isHas: true,
    },
];

app.get('/goods', function (req, res) {
    res.send(goods);
});

app.get('/good', function (req, res) {
    let id = req.query.id;
    let good = goods[id];

    if(id) {
        res.status(200).send(good)
    } else {
        res.status(400).send('Что-то пошло не так')
    }
});

let cart = [];

app.get('/cart', function (req, res) {
    res.send(cart)
});

app.post('/cart/good', function (req, res) {
    let { img, name, discr, price, count } = req.body
    
    if (name) {
        let good = {
            img: img,
            name: name,
            discr: discr,
            price: price,
            count: count
        }
        cart.push(good);
        res.status(200).send('Успех!');
    } else {
        res.send('Не найдено');
    }
});

app.delete('/itemCart', function (req, res) {
    let id = req.query.id;
    let good = cart[id];
    if(id) {
        cart.splice(good, 1);
        res.status(200).send(good)
    } else {
        res.status(400).send('Что-то пошло не так')
    }
});


let request = [];

app.get('/requests', function (req, res) {
    res.send(request);
});

app.post('/request/user', function (req, res) {
    let user = req.body.user;
    if(user) {
        request.push(user);
        res.status(200);
    } else {
        res.status(500).send('Ошибка \n исправь дебил!');
    }
});