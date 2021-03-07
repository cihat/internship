# Building a Restful CRUD API with Node.js, Express and MongoDB

```javascript
// package.json'daki paketleri indirin
npm install
// server'ı ayağa kaldırın
npm run dev
```

- Öncelikle express ve body-parser modüllerini içe aktarıyoruz. Express, bildiğiniz gibi, REST API'lerini oluşturmak için kullanacağımız bir web çerçevesidir ve body-parser, isteği (çeşitli içerik türlerinden) ayrıştıran ve erişebileceğimiz bir req.body nesnesi oluşturan bir modüldür. rotalarımızda. Ardından, bir ekspres uygulama oluşturuyoruz ve express'in app.use () yöntemini kullanarak iki vücut ayrıştırıcı ara yazılım ekliyoruz. Ara yazılım(middleware), istek ve yanıt nesnelerine erişimi olan bir işlevdir. Herhangi bir kodu çalıştırabilir, istek nesnesini dönüştürebilir veya bir yanıt döndürebilir. Ardından, istemcilere bir karşılama mesajı döndüren basit bir GET yolu tanımlarız. Son olarak, gelen bağlantılar için 3000 portunu dinliyoruz. Tamam! Şimdi sunucuyu çalıştıralım ve az önce tanımladığımız route'a erişmek için http: //localhost:3000'e gidelim.

- controllers/note.controller'ın içindeki FindByIdAndUpdate() yöntemindeki {new: true} seçeneği, değiştirilen belgeyi orijinal yerine then () işlevine döndürmek için kullanılır.

<hr>
<br>

## Kaynak

[Bu yazıdan bütün bilgileri ve kaynak kodları alınmıştır.](https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/)<br>
[Kaynak Kodları]()
