let express = require(`express`);
let app = express();
let cors = require('cors');
let port = 3005;
app.use(cors(`http://localhost:${port}`));
app.use(express.json());

app.listen(port, () => {
    console.info(`http://localhost:${port}`);
})

let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/BoguTea')

let goodsSchema = new mongoose.Schema({
    img: String,
    name: String,
    discr: String,
    price: Number,
    isHas: Boolean
});

let Goods = mongoose.model('good', goodsSchema);

//Routes

app.get('/goods', async function (req, res) {
    let data = await Goods.find();
    res.send(data);
});

app.get('/good', async function (req, res) {
    let id = req.query.id;
    let good = await Goods.findOne({
        _id: id
    });

    if(id) {
        res.status(200).send(good);
    } else {
        res.status(400).send('Что-то пошло не так');
    }
});

//Cart route

let cartSchema = new mongoose.Schema({
    img: String,
    name: String,
    price: Number,
    count: Number
}, {
    versionKey: false
});

let Cart = mongoose.model('cart', cartSchema);

app.get('/cart', async function (req, res) {
    let data = await Cart.find();
    res.send(data);
});

app.post('/cart', async function (req, res) {
    let { img, name, price, count } = req.body;
    
    if (name) {
        let good = new Cart({
            img: img,
            name: name,
            price: price,
            count: count
        });
        await good.save();
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.delete('/cart', async function (req, res) {
    let id = req.query.id;
    if(id) {
        await Cart.deleteOne({ _id: id });
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

// Request route

let requestShema = new mongoose.Schema({
    username: String,
    phoneNumber: String,
    email: String,
    message: String
}, {
    timestamps: true,
    versionKey: false
});

let Request = mongoose.model('request', requestShema);

app.get('/requests', async function (req, res) {
    let data = await Request.find();
    res.status(200).send(data);
});

app.post('/requests', async function (req, res) {
    let { username, phoneNumber, email, message } = req.body;
    
    if(phoneNumber) {
        let request = new Request({
            username: username,
            phoneNumber: phoneNumber,
            email: email,
            message: message,
        });
    
        await request.save();
        res.sendStatus(200);
    } else {
        res.status(500).send('Ошибка!');
    }
});