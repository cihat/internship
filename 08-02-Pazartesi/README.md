# Mongoose İle Crud işlemleri

- mongoose.Schema kullanarak MongoDB'de Schema'yı (belge / veri yapısı) tanımlıyoruz.
- Create Data Access Object file: Data Access Object (DAO) katmanında, veri tabanına doğrudan bağlı olan ve veri alıp veri tabanından ve veri tabanına kaydedilen işlevi tanımlayabiliriz.
- Tüm fonksiyonu mongoose.statics kullanarak tanımlıyoruz. Statikler, method'larlar hemen hemen aynıdır, ancak doğrudan Modelinizde bulunan işlevleri tanımlamaya izin verir.
- Create controller; Bu dosyaya tüm iş mantığını koyduk. Bu dosyada hero yaratma, hero listesi alma, ismine göre tek hero'yu alma, hero'yu güncelleme, hero'yu silme gibi tüm fonksiyonları oluşturuyoruz.

### !NOT Eğer mongodb-27017.sock dostyası bozuk veya silinmiş ise komutları takip edin yoksa localhost:27017'ye bağlanamayacaktır.

$ sudo rm -rf /tmp/mongodb-27017.sock
$ sudo service mongod start
$ sudo service mongod status

<hr>
<br>

## Kaynak

[Bu yazıdan bütün bilgileri ve kaynak kodları alınmıştır.](https://vsvaibhav2016.medium.com/create-crud-application-in-express-js-9b88a5a94299)<br>
[Kaynak Kodları]()
