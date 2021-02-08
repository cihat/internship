# Build ToDo List, With A RESTful Api, Node.js And Express.Js || Node.js ve Express.Js RESTful Api ile Görev Listesi Oluşturma

```javascript
// package.json'daki paketleri indirin
npm install
// server'ı ayağa kaldırın
npm run dev
```

1. Bir nodejs projesinde ilk olarak npm init -y komutu çalıştırılır ki package.json dosyası gelmesi için.
2. Gerekli olan paketleri yani express ve dahası indirilir.
3. Bu paketlerden babel-cli kurduk amacımız
4. ES6 sözdizimi yazacağımız için babel'i de yüklememiz gerekecek, Babel kodlarımızı ES6'dan ES5'e dönüştürmemize yardımcı oluyor. neden kodumuzu ES5'e derlememiz gerekiyor? Çünkü, tarayıcılarımızın ve nodejs'imizde henüz anlayamadığı bazı ES6 özellikleri var ve eski tarayıcılar ES6 kodlarını anlamıyor, bu yüzden hem eski tarayıcıların hem de yeni tarayıcıların anlayabilmesi için kodumuzu ES5'e derlemek için babel kullanıyoruz. Babel'i burada kullanma amacımız, nodejs'nin bir parçası olmayan ES6 özelliklerinin, nodejs'nin anlayacağı ES5'e kadar derlenebilmesidir. Ayrıca babel-preset-es2015'i yükleyeceğiz, ön ayarlar bir dizi eklenti içeriyor, bu eklentiler ES6 özellikleri içindir, babel-preset-es2015'i kurup yapılandırarak babel'e içinde bulunan herhangi bir ES6 özelliğini dönüştürmesini söylüyoruz. ES5 eşdeğeri için ön ayar.
5. Express'i içe aktardık, app.get ilk parametre olarak sağlanan route / endpoint ile sunucuya bir get isteği yapar, endpoint ise veritabanındaki tüm todos'u döndürmek içindir. İkinci parametre, o route her ulaştığımızda çalışan bir işlevdir. işlev, req ve res olmak üzere iki parametre alır. Req nesnesi, isteğimiz hakkında bilgi içerir ve request nesnesi, istemciye geri bilgi göndermek için kullanabileceğimiz yanıt ve yöntemler hakkında bilgiler içerir.
6. res.status (200), talebin durumunu geri göndermek için kullanılır, 200 tamam anlamına gelir ve başarılı bir istek olduğunu gösterir. Durum kodları, web uygulaması veya mobil uygulama gibi istemcilerin, bir şeylerin ters gidip gitmediğini kontrol etme yollarıdır. 404 alırsak (bu, Bulunamadı anlamına gelir) yükü kontrol etmemize gerek yok çünkü hiçbir şeyin gelmediğini biliyoruz. gerçekten ilgileniyoruz. 200 geri gelirse yükünü kontrol edebiliriz çünkü bir şey beklediğimizi biliyoruz. Burada HTTP durum kodları hakkında daha fazla bilgi edinebilirsiniz. res.send () istemciye bir yanıt göndermek için kullanılır, gönderime parametre olarak iletilen kaynak istemciye geri gönderilen şeydir. bu durumda, bazı bilgileri içeren bir nesneyi geri göndeririz, nesnenin todos özelliği, sahte veritabanımızdan app.js'nin en üstünde içe aktardığımız verileri içerir. app.listen bizim için bir web sunucusu oluşturur, iki parametre alır, ilk parametre uygulamamızın dinlemesini istediğimiz porttur, hangi portu sağlarsak sağlarız, bizim durumumuzda 5000, sunucumuzun üzerinde çalışacağı port olacaktır. sistemimizde. ikinci parametre isteğe bağlıdır, sunucu oluşturulduğunda ne olması gerektiğine dair bir geri arama işlevidir, bizim durumumuzda konsola bir mesaj kaydediyoruz. sunucu oluşturulduğunda, "/api/v1/todos" route'muza buradan erişebiliriz. sunucu, makinemizdeki bir localhost üzerinde 5000 portunda çalışacaktır. bu yüzden localhost'umuz olacak: port / api rotası Oluşturduğumuz uç noktaya şu şekilde: "localhost:5000/api/v1/todos". Şimdi bu kodu çalıştırmak için komut satırına gidelim. Ve node app.js komutunu Normalde nodejs uygulamamızı bu şekilde komut satırından çalıştıracağız.
7. Todo eklemek için bir route oluşturalım, ancak bundan önce body-parser adlı bir paket kuralım, body-parser, req.bodyproperty altında bulunan işleyicilerinizden önce bir ara yazılımda gelen istek gövdelerini ayrıştırır. Sunucuya veri gönderirken, veriler bir formdan geliyor olabilir veya bir json olabilir, body ayrıştırıcının yaptığı şey istemciden gelen bu verileri req.body adlı bir nesnede ayrıştırmasıdır. örneğin istemciden sunucuya gelen bir JSON verisine sahipsem.

```json
{
  "name": "Ola",
  "school": "unilag"
}
```

bunun gibi. body-parser'ın yaptığı, bu JSON verilerini ayrıştırması ve req.body altında bir özellik olarak kullanılabilir hale getirmesidir. req, bir API isteğinde bulunduğumuzda geri aramamız için sağladığımız ilk özelliktir ve req'in istemciden gelen istek hakkında bilgi içerdiğini söylediğimi unutmayın, bu nedenle body parser, formdan gelen verileri veya JSON verilerinin gelmesini sağlar req.body altında bir özellik olarak mevcut olan istemciden, böylece JSON verilerine req.body gibi örneğin req.body.name, req.body.school. 

8. POST işlemiyle kurduğumuz app.post('/api/v1/todos') route veri almak için sunucuya bir talepte bulunmuyoruz, bunun yerine veri gönderiyoruz. aynen açıkladığımız gibi, gelen veriler nitelikler olarak req.body olarak ayrıştırılır, bu yüzden req. body.title, vb. Vücut ayrıştırıcı aracılığıyla istemciden aldığımız bilgilerle bir yapılacak iş nesnesi oluşturuyoruz ve onu yeni bir yapılacak iş olarak sözde kurduğumuz db arrayine gönderiyoruz.Daha sonra Postman ile bu işlemi test edebiliriz.

9. Her zamanki gibi, bu endpoint iki parametre alır: route ve callback function. Burada farklı olan şey, bu uç noktadaki rotanın bir: id'ye sahip olmasıdır, kullandığımız parametreleri geçmek için uygulamamızda onlara ihtiyacımız olacağından uç noktalarımıza parametreler geçirmek istediğimiz zamanlar vardır: param.

10. (DELETE) 9'da oluşturan endpoint, tek bir yapılacak işler elde etmek içindir, tek bir yapılacak işler elde etmek için, bu yapılacak işi veritabanında tanımlamanın benzersiz bir yoluna ihtiyacımız olacaktır, bu nedenle yapılacak işin kimliğini bilirsek, elde etmek istediğimiz şeyin ardından onu alabiliriz. Veritabanından, bu nedenle bu uç noktaya her istekte bulunduğumuzda, almak istediğimiz yapılacak işin kimliğini iletiriz, callback function daha sonra o uygulamayla yapılacak işlem için veritabanını sorgular. 9'daki endpointe olan şey, req.params.id kullandığımız route'a geçen id değerini almak için parametre olarak almak istediğimiz todo id'sini route'a iletmemizdir, req.params bir route'lara aktarılan tüm parametreleri içeren nesne, id'yi bir int'e dönüştürüyoruz ve sonra kimliği URL'den aldığımızla aynı olacak todo'yu bulmak için kukla veritabanı db'de döngü yapıyoruz, eşleşen todo o zaman tek yapılacak iş olarak geri döndü.

11. Öyleyse burada ne yapıyoruz? temelde, silmek istediğimiz yapılacak işin kimliğini(id) bir parametre olarak route'a /api/v1/todos/:id'ye aktarıyoruz. Bu kimliği(id'yi) req.params.id ile alıyoruz, bu nedenle bu kimliğe sahip bir öğeyi silmek için önce onu veritabanında aramalıyız, bunu db dizisini eşleyerek ve mevcut yapılacak işin kimliğini kontrol ederek yaptık route'dan aldığımız id'ye karşı yinelemeyi bir eşleşme bulana kadar, daha sonra bu öğeyi veritabanından kaldırmak için dizi methodu splice() kullanırız. array.splice ve nasıl çalıştığı hakkında buradan daha fazla bilgi edinebilirsiniz. Hiçbir şey bulamadığımız durumda, kullanıcıya "bulunmaması gereken" mesajını döndürürüz.

12.(UPDATE) Her zamanki gibi, URL'den güncellemek istediğimiz yapılacak işin kimliğini alırız, bu kimliğe sahip yapılacak işi bulmak için kukla db'mizden geçeriz, yapılacak işi bulamazsak kullanıcıya todo diyen bir mesaj döndürürüz. bulunamadı. Yapılacak işi bulursak, kullanıcı tarafından sağlanan yeni girdiyi alırız, yeni girdi body ayrıştırıcısı tarafından req.body'ye ayrıştırılır, güncellenmiş girdileri req.body'den alır ve onunla güncellenmiş bir yapılacak işler yaratırız. Daha sonra db.splice'ı kukla db'de döngü oluşturduğumuzda yinelememize uyan eski todo'yu kaldırmak ve onu oluşturduğumuz güncellenmişTodo ile değiştirmek için kullanırız. Bunu test edelim. Şu anda veritabanımızdaki tüm görevleri alalım, Sunucunuz her yeniden başlatıldığında bellekteki girişlerinizi kaybettiğinizi unutmayın, bu nedenle, uygulamada kodladığımız dışında sunucumuz yeniden başladığında postacı aracılığıyla eklediğimiz görevi kaybettiğimizi unutmayın. .

13. Şimdiye kadar CRUD işlemleri ile ekleme, düzenleme, silme, listeleme işlemleriyle basit bir RESTful Api örneği yaptık. Şimdiye kadar oluşturmak, okumak, güncellemek ve silmek için bir API oluşturduk. Bu eğitimlerde kodumuzu iyileştirmeye bakacağız. Temel olarak iki şeye bakacağız: Birincisi, express yönlendirici Middleware olacak, ikincisi, callback function, endişeleri ayırmak ve kodumuzu temiz hale getirmek için ayrı bir dosyada yeniden düzenleyeceğiz.

14. Nedir bu middleware ? Express doc Ara yazılım işlevleri, istek nesnesine (req), yanıt nesnesine (res) ve uygulamanın istek-yanıt döngüsündeki bir sonraki ara yazılım işlevine erişimi olan işlevlerdir. Bir sonraki ara yazılım işlevi genellikle next adlı bir değişkenle gösterilir.

15. routes diye bir klasör yarattık içine index.js dosyasını kurduk ve sonra, Express'i içe aktarıyoruz ve ardından express.Router() ile bir yol işleyicisi oluşturuyoruz App.js'nizde uç noktanızın kodunu taşıyın ve routes klasörünün içindeki index.js'ye yapıştırın. app.get yerine, kullanıcı router.get ve diğer endpoint için aynısını yapın. 16. Uygulamamızda bu routes'ları kullanmak için onu app.js'ye aktarmamız, onu app.js'ye aktarmak için routes klasörünün içindeki index.js'den dışa aktarmamız gerekir, hadi bunu yapalım.

<hr>
<br>

## Kaynak

[Bu yazıdan bütün bilgileri ve kaynak kodları alınmıştır.](https://medium.com/@haybams/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb)<br>
[Kaynak Kodları](https://github.com/hay-bams/todo-app)
