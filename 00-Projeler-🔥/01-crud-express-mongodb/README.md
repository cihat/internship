# Tutorial Projesini Yaparken Öğrendiklerim

```javascript
// package.json'daki paketleri indirin
npm install
// server'ı ayağa kaldırın
npm run dev
```

- Görünüşe göre Express, öğedeki verileri <form> kendi başına okumaz. Bu işlevi elde etmek için body-parser adlı başka bir paket eklemeliyiz .

- Make sure you place body-parser before your CRUD handlers!
  const bodyParser= require('body-parser')

  ```javascript
  app.use(bodyParser.urlencoded({ extended: true }));
  ```

  Body-parser içindeki urlencoded metot, body-parser'a <form> öğesinden veri almasını ve bunları istek nesnesindeki body özelliğine eklemesini söyler.

- Buradaki "\_\_dirname" dosyanın konumu gösteriyor yani "/home/kali/Me/Staj-Programı/00-02-Pazartesi-🔥/Yapılması Gereken Projeler/01-crud-express-mongodb" ondan sonra "+/index.html" ise yapılan get isteğini \_\_dirname'deki konumdaki dosyanın index.html dosyasını "/" route'una getir.

```javascript
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname + "/index.html");
});
```

## CRUD - CREATE (continued)

Öğeleri bir veritabanına depolamadan önce bir koleksiyon oluşturmamız gerekiyor. MongoDB'deki terimleri netleştirmenize yardımcı olacak basit bir benzetme;

- Bir veritabanının bir oda olduğunu hayal edin.
- Bir oda kutuları(colleciton) içerir.

Veritabanları gibi, koleksiyonları istediğiniz şekilde adlandırabilirsiniz. Bu durumda, quotes dediğim inputu bir quotes adında collection'nunda saklayalım. Koleksiyonu belirtmek için db.collection kullanıyoruz.Bu da aşağıdaki gibi;

```javascript
MongoClient.connect(/* ... */).then((client) => {
  // ...
  const db = client.db("star-wars-quotes");
  const quotesCollection = db.collection("quotes");

  // ...
});
```

- Bir MongoDB collection'ına öğe eklemek için insertOne method'unu kullanabiliriz.

- Şimdi ne oldu MongoBD Atlas da bedava bir 512mb'lık bir Clusters kurduktan sonra bize bir db ve collection yaratmamız gerekiyor yani
  const db = client.db("all-quotes");
  const quotesCollection = db.collection("quotes");

  bunun gibi bişiler yazmamız gerekiyor.
  Yani basit bir mongoDB Atlasa basit bir içinde name ve quote adlarında 2 tane input verisini(ve her post isteği için bir de \_id verisi var bu veri her post isteğinde farklıdır. Ayrıca ilgili db ve collection ismiyle olmalıdır. Yoksa başka bir isimle bir db içindeki colletion yazdıysanız oraya kaydeder.) post isteğimiz bu şekildedir;

  ```javascript
  MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then((client) => {
      console.log("Connected to Database");
      const db = client.db("all-quotes");
      const quotesCollection = db.collection("quotes");

      app.post("/quotes", (req, res) => {
        quotesCollection
          .insertOne(req.body)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => console.error(error));
      });
    })
    .catch(console.error);
  ```

  Tabi yukarıdaki işlemlerle beraber formu submit ettiğimizde browser server'dan bir şey beklemesi neden oluyor. Biz bir post işlemi gerçekleştirdik ve sonra yukarıdaki kodta ise res.redirect('/') komutunu ekleyerek konumu yeniden gönderebiliriz. Burayı ben de pek anlamadım.

## Kullanıcılara quotes'larını gösterme (OKUMA işlemi) yani GET işlemi

- MongoDB Atlas'tan alıntıları kullanıcılarımıza göstermek için iki şey yapmamız gerekiyor.

1. MongoDB Atlas'tan quotes alın.
2. quotes'ları bir şablon motoruyla HTML'de oluşturma işlemi.

- MongoDB'de sakladığımız quotes'ları find methodu ile alabiliyoruz. Bu method, collection methodunda bulunan find() yöntemini kullanarak mLab'den alınır.
  Ama burda bir düzeltme yapmak gerekiyor çünkü gelen veriler karmaşık geliyor bu yüzden .toArray() methodunu da ekliyoruz ve kodumuz bu şekilde oluyor;

```javascript
app.get("/", (req, res) => {
  db.collection("quotes")
    .find()
    .toArray()
    .then((results) => {
      console.log(results);
    })
    .catch((error) => console.error(error));
  // ...
});
```

## HTML'yi Oluşturma

GET ile alınan veriler belli bir şekille .html dosyasına görünmesi gerekiyor bundan olayı ejs adlı paketi kurduk.Görünüm motorunu(view engine) ejs olarak ayarlamamız gerekiyor. Bu, Express'e şablon motoru olarak EJS'yi kullandığımızı söyler. Bunu herhangi bir app.use, app.get veya app.post methodunun önüne yerleştirmeniz gerekebilir.

- Sonra views/index.ejs yarattık ardından res.render methoduna index.ejs parametre olarak veriyoruz cünkü index.ejs'i render etmesi için. index.ejs içinde <%= quotes %> yazarak ilgili değişkeni ilgili yere ekleyebiliyoruz.

- index.ejs html dosyasının içine yani view klasörünün içindeki .ejs dosyalarına değişkenleri tanımlayabildiğimiz formattır.TAbi değişkenleri <%arasına ararak%> ekleyebilinir. Aşağıdaki kodu ekleyerek;

```html
<h2>Quotes</h2>

<ul class="quotes">
  <!-- Loop through quotes -->
  <% for(var i = 0; i < quotes.length; i++) {%>
  <li class="quote">
    <!-- Output name from the iterated quote object -->
    <span><%= quotes[i].name %></span>:
    <!-- Output quote from the iterated quote object -->
    <span><%= quotes[i].quote %></span>
  </li>
  <% } %>
</ul>
```

## CRUD - UPDATE

- Bir şeyi değiştirmek istediğimizde UPDATE işlemini kullanırız. Bir PUT isteği ile tetiklenebilir. POST gibi, PUT da JavaScript veya bir <form> öğesi aracılığıyla tetiklenebilir.

- Bir PUT isteğini yürütmek için harici bir JavaScript dosyası da oluşturacağız. Express kurallarına göre, bu JavaScript genel adlı bir klasörde tutulur.

- MongoDB Koleksiyonları, findOneAndUpdate adlı bir yöntemle gelir. Bu yöntem, veritabanındaki bir öğeyi bulmamızı ve değiştirmemizi sağlar. Aşağıdaki sözdizimine sahiptir:

## CRUD - DELETE

## Şimdiye kadar yaptıklarımız;

- npm init -y komutu ile package.json dosyasını yarattık projenin temeli gibi bişi.
- İlk olarak express'i npm ile indirdik
- Sonra nodemon'da indirdik.
- server.js dosyasını yarattık ve package.json dosyasının içine aşağıdaki komutu ekledik.

```json
"scripts": {
    "dev": "nodemon server.js"
  }
```

- Sonra basit bir index.html dosyası yarattık. Sonra server.js dosyasının içine
  require tanımladıktan sonra basit bir get isteği ile route'taki bu yere "/"
  index.html dosyasının \_\_dirname ile konumu bulduktan sonra sendFile komutu ile response ile geri döndürdük.

- index.html dosyasının içine form elementi ile basit bir isim ve alıntı inputları ile veri girişini sağladık. Sonra bu verileri json formata dönüştürecek body-parser paketini npm ile indirdik.

- body-parser'i kullanmak için require ettik ve yukarıda belirttiğim işlemleri yaptık ve POST işlemi ile json formatına döndürdük. Bu json verisini bir database'e bağlamak için mongoDB yi npm ile indireceğim. Ardında bu projeye bir veritabanı ekleme işlemi gerçekleştireceğiz.

- Veritabanı için mongoDB Atlas'ı kullanıcağız. Bunun için internetden bir dizi işlem ücretsiz veritabanı kurma işlemleri olacak.Bunlar mongoDB Atlas yazarak sitesine girilecek sonra Google hesabıyla veya üye olarak hiçbir kredi kartı bilgisi istemeden giriş yapabilirsiniz. Ardından New Create Cluster diyerek yeni bir alan açabilirsiniz ve free versionunu seçerek istediğiniz işi görecek kadar bir yer ayırabilir. Bulunduğun cihazın IP adresini verdiktek sonra bir kullanıcı adı ve şifre belirterek internette bedavaya bir 512 mb'lık sunucunuz olmuş olur. Ardında server.js'e gelerek passport ve username yere kendinizin belirlediği şifre ve kullanıcı adını yazarak canlıdaki sunucunuza gönül rahatlığıyla bağlanabilirsiniz.

```javascript
const MongoClient = require("mongodb").MongoClient;

const connectionString = `mongodb+srv://<username>:<passport>@quotes.r0ufe.mongodb.net/<dbname>?retryWrites=true&w=majority`;
MongoClient.connect(
  connectionString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) return console.error(err);
    console.log("Connected to Database");
  }
);
```

- MongoDB and Server
  MongoDB'ye erişmek için bağlantıdan db değişkenine ihtiyacımız var. Bu, express istek işleyicilerimizi MongoClient’ın arasına koymamız gerektiği anlamına gelir. O işlemlerde bu şekildedir;
  ```javascript
  MongoClient.connect(/* ... */)
    .then((client) => {
      // ...
      const db = client.db("star-wars-quotes");
      app.use(/* ... */);
      app.get(/* ... */);
      app.post(/* ... */);
      app.listen(/* ... */);
    })
    .catch(console.error);
  ```

<br>
<hr>

## Kaynak

[Bu yazıdan bütün bilgileri ve kaynak kodları alınmıştır.](https://zellwk.com/blog/crud-express-mongodb/)
