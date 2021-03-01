# Relational Databases Nedir ?

- İlişkisel Veritabanı Yöntemi ?
  İlişkisel Veritabanı Yönetim Sistemlerinde veriler tablolar içerisinde satırlar ve sütunlarda tutulur. Birbiri ile ilişkili verileri tuttuğumuz tablolar arasında ilişki (bağ) kurarak veritabanımızı inşa etmemizi sağlayan sistemlere ise İlişkisel Veritabanı Yönetim Sistemleri denir.

- Veritabanı mantığı olmadan önce verilerin bakımı çok zor, güvenli değildi, verimsiz ve performanslı değildi. Veriler üzerinde işlem yapmak çok zordu.
  Bunun için verileri aralarında bir ilişki olacak şekilde tablolar halinde bir düzene koyulması gerektiği anlaşıldı. Ve bu sorun için ilişkisel vertabanı sistemi geliştirildi.

- Bir çok veritaabnı vardır ve bunların çeşitli olma sebebi ise farklı sorunlara aynı mantık üzerinde fark yaklaşımların olması gerektiğindendir.
  Bu sorunların dikkat ettiği konular vardır ki farklı yaklaşımlar oluşuyor. Bu konular yani kriterler şunlardır: Veri doğruluğu gereksinimlerimiz neler?, Ölçeklenebilirliğe ihtiyacımız var mı?, Eşzamanlılık ne kadar önemli?, Performans ve güvenilirlik ihtiyaçlarımız neler?
  Yani bu kriterlere göre veritabanını seçebilir ve sorunu en iyi çözebilecek yöntemi bulubiliriz.

- Birçok ilişkisel veritabanı, veritabanını sorgulamak ve sürdürmek için SQL (Structured Query Language)(Yapılandırılmış Sorgu Dili) kullanma seçeneğine sahiptir.
- Avantajları: Veri takrarını önler çünkü verilerin arasındaki ilişki ile istenilen veriye ulaşılabilinir. Veri Tutarlılığı: istenilen verilerin olmasını
  kontrol eder eğer veri yoksa bize hata gönderir ve eğer verinin kopyası var ise güncelleme işlemini yapar, Kalıcılık ve Atomisite.
  Güvenli, kurallara dayalı, Veri Güvenliği, Veri Paylaşımı, Veri Bağımsızlığı ve tutarlı bir şekilde yönetilmesi gereken tüm bilgi ihtiyaçları için ilişkisel veritabanı kullanabilirsiniz.

- PostgreSQL

  İlk olarak PostgreSQL opensource olduğu için hergün kendini yeniliyor arkasında büyük bir geliştirici topluluğu var ve bundan dolayı hergün kendini yeniliyor.
  Güncel teknolojiyi takip ediyor.Başka bir veritabanından postgresql'e taşıyabiliriz çünkü Foreign Data Wrappers özelliği vardır ve bu özellik buna imkan tanıyor. Ayrıca kurulumu basit, hızlıdır. Yedeklemesi ve Geri Yüklemesi Kolaydır. Yani diğer relational database'lere nazaran daha bazı noktalarda daha iyi özellikleri varken bazı noktalarda daha köyü olduğu oluyor. Bundan dolayı ihtiyacları iyi analiz edip hangi veritabanı ihtiyacı karşılıyorsa onu seçmeliyiz.

  Yük dengeleme ve yüksek erişilebilirlik için warm standby/hot standby/streaming ve logical (versiyon 10 ile birlikte) replikasyonu destekler.
  PostgreSQL, yük dengeleme ve kümeleme yapıları ile veritabanı sunucuları arasındaki iş yüklerinin dengelenmesini sağlar. Sunucuların herhangi birinde aşırı yüklenme önlenirken, kaynak kullanımı optimize edilir, verimlilik en üst düzeye çıkar ve yanıt süreleri en aza iner.
  PostgreSQL’de Multi-Master Replikasyonu ile birden çok sunucu master statüsüne sahip olabilirken, farklı lokasyonlarda dağıtık iş yükü yönetimini, yük dengelemeyi, Cluster Mimariyi destekler.
  Natif Asenkron Çoğaltma (Native Asynchronous Replication), Tam / Artırımlı Yedekleme (Full/Incremental Backup) ve kurtarma modları, veri yeniden senkronizasyon mekanizmalarının kolaylığı gibi özellikler ile PostgreSQL, Disaster Recovery Center (DRC) hazırlığının tam özellik setini destekleyerek, daha fazla maliyet / araç eklemeden veri tabanınızın herhangi bir felaketten kurtarılmasını sağlar.

  PostgreSQL, MYSQL ve diğer veritabanlarıyla kıyaslandığında INSERT/UPDATE işlemlerinde, transaction bazlı çalıştığından ötürü daha yavaştır. Ama bazı özellikleri, güvenilirliği, esnekliği ile diğerlerine nazaran daha avantajlıdır. Genişleyebilir mimariye sahiptir. Her işlem ve veri büyüklüğüne göre ölçeklenebilir, esnektir, genişleyebilir veya daraltılabilir. Eğer bir satır ve tabloda çok yüksek boyutlarla işlem yapılacaksa PostgreSQL ile çalışılır.

- MySQL
  MySQL'de opensource'dur. Dinamik web sitelerinin temelidir. Yani web'te yoğun bir şekilde kullanılır. Klasik görevi olan tablolardaki verileri yönetir, görüntüler, depolar ve değiştirir. Bir istemci-sunucu sistemi olarak çalışır: yani veritabanı sunucusudur. Hızlı, kararlı ve kullanıcı dostudur. Diğer şeylerin yanı sıra, çok kullanıcılı ve çok iş parçacıklı yeteneği, yönetimi kolay bir yetkilendirme konsepti ve yüksek trafik hacimlerinde bile optimum performans sunar. Hızlı, kararlı ve kullanıcı dostudur. Diğer şeylerin yanı sıra, çok kullanıcılı ve çok iş parçacıklı yeteneği, yönetimi kolay bir yetkilendirme konsepti ve yüksek trafik hacimlerinde bile optimum performans sunar. Bundan dolayı web için çok kullanılan bir veritabanıdır. Büyük miktarda veriyle bile yüksek performans, Üretken sistemlerde istikrar, Sunucu-istemci mimarisi, çok sayıda veri tabanının çalışmasına izin verir, Tabloların ve veri tabanlarının boyutunda doğrudan sınır yok.

  - PostgreSQL ve MySQL Arasındaki Farklar(Karşılaştırması)

    - MySQL ve PostgreSQL arasındaki mimari fark, MySQL'in ilişkisel bir veritabanı yönetim sistemi olması, PostgresSQL'in nesne-ilişkisel veritabanı yönetim sistemi olmasıdır.
    - MySQL, aşağıdaki işletim sistemi Windows, Mac OS X, Linux, BSD, UNIX, z / OS, Symbian, AmigaOS tarafından desteklenmektedir. Ancak, PostgreSQL Windows, Mac OS X, Linux ve BSD tarafından desteklenir, ancak UNIX, z / OS, Symbian, AmigaOS tarafından desteklenmez.
    - Linux ve BSD tarafından desteklenir, ancak UNIX, z / OS, Symbian, AmigaOS tarafından desteklenmez.
    - MySQL, Oracle Corporation'ın ürünüdür, PostgreSQL ise Global Development Group'un ürünüdür.
    - SQL programlama dilim genişletilebilir değil, PostgreSQL programlama dili oldukça genişletilebilir.
    - MySQL'de phpMyAdmin aracı GUI ve SQL arayüzü sağlar. Ancak, PostgreSQL'de pgAdmin aracı GUI ve SQL arayüzü sağlar.
    - MySQL'de Mysqldump ve XtraBackup araçları yedekleme sağlar. Diğer taraftan, PostgresSQL çevrimiçi olarak tam yedekleme sağlar.
    - MySQL geçici tablolar sunar ancak somutlaştırılmış görünüm sağlamaz. Bununla birlikte, PostgreSQL geçici tablo ve ayrıca somutlaştırılmış bir görünüm sunmaktadır.
    - MySQL, veri etki alanı nesnesini sunmaz, PostgreSQL ise veri etki alanı nesnesini sağlar.

  MySQL'in PostgreSQL veya tersinden daha iyi olması gerekmez. Programcının web uygulamasını veya web sitesini tasarlama gereğinin ne olduğuna bağlıdır.

  Bu özellikler, MySQL’i verimli sözdizimi ve yüksek yanıt hızı gerektiren dinamik web siteleri gibi uygulamalar için ideal hale getirir. Ücretsiz kullanılabilirlik ile bağlantılı olarak, MySQL veri tabanı ile web barındırma bu nedenle kendisini resmi olmayan standart olarak belirlemiştir. Genellikle bir Linux işletim sistemi, PHP ve bir Apache web sunucusu ile birleştirilir ve bu kombinasyonda LAMP (Linux, Apache, MySQL, PHP) veya nginx kullanılırken LEMP olarak da bilinir.
  MySQL aslında büyük veritabanlarını yönetmek için mevcut veritabanı yazılımlarından daha hızlı olması için geliştirildi. Zorlu operasyonel, işlemsel ve üretim ortamlarında onlarca yıldır kullanılan MySQL, hesaplama ve depolamanın buluta taşınması ile birlikte gelişimine devam etmekte.

- MS SQL
  Microsoft SQL Server olarak açılır. Microsoft SQL Server ile veri işleme, indeksleme, sorgulama, raporlama gibi çeşitli işlemler yapılabiliyor. Bu veritabanı gelişmiş özellikleri belli meblağlar karşısında sizlere sağlıyor. Masaüstü uygulama ve programları kullanacak olanların ve internet sistemleri tasarlayıp hazırlayanların veritabanı gereksinimini iyi derecede karşılıyor.
  MSSQL, Windows platformlar üzerinde .NET veya ASP programlama dili aracılığıyla oluşturulan web siteleri ve web yazılımlarda veritabanı görevi görmesi amacıyla kullanılır. Bu yazılım dilleri içerisinde MS SQL veri tabanına bağlanmak ve bu veri tabanı üzerinde işlemler gerçekleştirmek birçok programlama diline göre çok daha kolaydır.

- Oracle
  Oracle veritabanı verilerin tamamını güvenli bir biçimde tutarak on binlerce insana aktarabildiğimiz yapıdır. Temelde veritabanı yönetimi olarak dünya üzerinde en büyük projelerin altında yer alır. Zaten Microsoft’tan sonra en büyük şirket Oracle olduğu için dünya genelinde büyük projeler için Oracle veritabanı kullanılır. Oracle veritabanı verilerin tamamını güvenli bir biçimde tutarak on binlerce insana aktarabildiğimiz yapıdır. Temelde veritabanı yönetimi olarak dünya üzerinde en büyük projelerin altında yer alır. Zaten Microsoft’tan sonra en büyük şirket Oracle olduğu için dünya genelinde büyük projeler için Oracle veritabanı kullanılır.

# 9. More About Database

- ORMs(Object Relational Mapping)

  ORM ile kod içerisine yazılan sql satırları ortadan kalkmıştır. Veritabanımız içerisinde yer alan tablolar bir sınıf (class), kolondaki alanlarımızın her biri değişken (property) olarak tanımlanmakta, veritabanındaki kayıtlara da ait olduğu sınıfta bir obje olarak erişebilmekte ve kullanabilmekteyiz.
  Dillere göre sık kullanılan ORM örnekleri;
  C#: Entity Framework, Dapper, ECO, XPO, Norm
  Java: Hibernate, Ebean, Torque, JPA,MyBattis
  Php: CakePHP, Codelgniter, RedBean, Doctrine,Propel, PdoMap
  Python: Django, South,Storm

  - Neden ORM kullanmalıyım?
    ORM’nin sağladığı kolaylık ne diyecek olursak eğer bir örnek üzerinden gidebiliriz.

    Id’sini bildiğimiz bir kullanıcının ismini almak isteyelim. Bunun için ado.net kullanılan bir projede aşağıdaki gibi bir kod sırası izlenmesi gerekmekteydi.

  - ORM kullanmanın avantajları
    Nesne tabanlı programlama standartlarına uygun olarak kod yazma imkanı verir.
    Minimum SQL bilgisi ile veritabanı işlemleri yapmak imkanı tanır.
    Veritabanı platformu bağımlılığı yoktur. Oracle kullanıyorken MSSQL geçişini sorunsuzca gerçekleştirebiliriz.
    Ado.net’e karşı daha güvenlidir. Sql Injection gibi bilinen saldırılara karşı güvenlik önlemleri vardır.
    Kod yazma süresini kısaltır.
    Kod okunabilirliğini arttırır.
    Veritabanını harita olarak önümüze sunar böylece karmaşık veritabanlarını anlamak kolaylaşır.
    Geliştirme ve bakım maaliyeti düşüktür. Çünkü nesne-veritabanı, veritabanı-nesne dönüşümünü otomatik gerçekleştirir.
    Veritabanındaki tabloları, sınıflara çevirir. ORM sayesinde kod yazarken veritabanında daha az zaman harcarız.
    ORM; veri kaynağı değiştiğinde onu kapsüller (encapsulates) ve gizler.

- ACID
  ACID aslında bir dizi olayların başharflerinden oluşan veritabanı için önemli konuları yer alan olaylardır. Herbirini çok önemli görevleri vardır.
  Veri tabanı sistemlerinde transaction / işlem ile ilgili tanımlanmış standart kurallardır. <p>ACID kelimesi <strong>A</strong>tomicity, <strong>C</strong>onsistency, <strong>I</strong>solation, <strong>D</strong>urability özelliklerinin baş harflerinden oluşan bir ifadedir.</p>
  Atomicity(bütünlük): İşlemler veri tabanı tarafından bir bütün olarak ele alınmalıdır. Yapılan işlem herhangi bir kesintiye uğradığında tüm işlemler geçersiz sayılır.
  Consistency(Tutarlık): İşlemler tutarlı olmalıdır. Bir ekleme işlemi sırasında çalışan Foreign Key, Trigger işlemi ekleme işlemi ile tutarlı olmalıdır.
  Isolation(bağımsızlık): Birden fazla işlem birbirinden bağımsız olarak ele alınmalıdır. Bir veri eklenmesi ve silinmesi sırayla yapılmalıdır. Önce silinme daha sonra ekleme yapılmamalıdır.
  Durability(Dayanıklılık): İşlem sırasında herhangi bir hata geldiğinde veri tabanı verileri önceki duruma getirmelidir.
  Yani özetlemek gerekirse: Bir hesaptan başka bir hesaba para aktarıldığında oluşacak herhangi bir hatada gönderme işleminin iptal edilmesi ve gönderilen paranın tekrar hesaba yatırılmasıdır.

  İlişkisel veritabanlarındaki Transaction(Transaction için olarak verilen örnek bir banka hesabından başka bir banka hesabına paranın transfer edilmesi olarak anlatılabilir. Burada 2 hesap gönderici ve alıcının hesabı üzerinde mantıksal bir operasyon gerçekleştiriliyor. Bu işleme Transaction deniyor.
  ) için tanımlanmış özellik setidir.
  Bu transaction başarılı bir şekilde gerçekleşebilmesi için ACID ilkelerine uyması gerekmektedir.
  (Atomicity: Transaction işlemini bir bütün olarak görür. İşlem sırasında birden fazla veritabanı/tablodaki verinin güncellenmesi gerçekleşiyor ise tüm bunların hepsi birden başarılı olacaktır veya başarısız olacaktır)

- Transactions

- N + 1 Problem

- Database Normalization

- Indexes and how they work

- Data Replication

- Sharding Strategies

- CAP Theorem
