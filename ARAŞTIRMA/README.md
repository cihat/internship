# Researching technologies in roadmap

## [Backend Roadmap](https://roadmap.sh/roadmaps/backend.png)

### 1. İnternet

    - How does the internet work ?
        İnternet, birbirine bağlı cihazlar üzerinden çeşitli veri ve ortamları ileten dünya çapında bir bilgisayar ağıdır.
        İnternet Protokolünü (IP) ve Aktarım Kontrol Protokolünü (TCP) izleyen bir paket yönlendirme ağı kullanarak çalışır.

    - What is HTTP ?
        HTTP(Hyper Text Transfer Protocol), HTML dokümanları gibi kaynakların alınmasına izin veren bir protokoldür.
        Web üzerindeki herhangi bir veri alışverişinin temelidir ve bir istemci-sunucu protokolüdür,
        yani isteklerin alıcı tarafından, genellikle Web tarayıcısı tarafından başlatıldığı anlamına gelir.

    - Browsers and how they work ?
        Bir client(istemci) / server(sunucu) modeli olarak tarayıcı, Web sunucusuyla iletişim kuran
        ve bilgi isteyen bir bilgisayarda çalışan istemcidir.
        Web sunucusu bilgileri, sonuçları bilgisayarda veya tarayıcıyı destekleyen diğer
        ternet etkin cihazlarda görüntüleyen Web tarayıcısına geri gönderir.

    - DNS and how it works ?
        Domain Name Server(Alan Adı Sistemi) (DNS), internetin merkezi bir parçasıdır ve isimleri (aradığınız bir web sitesi)
        sayılarla (web sitesinin adresi) eşleştirmenin bir yolunu sağlar.
        ... DNS, alan adlarını IP adresleriyle senkronize ederek insanların unutulmaz alan adlarını kullanmasına olanak sağlarken,
        internetteki bilgisayarlar IP adreslerini kullanabilir.

    - What is Domain Name ?
        Bir domain name( alan adı), İnternet içinde bir idari özerklik, yetki veya kontrol alanını tanımlayan bir tanımlama dizesidir.
        Etki alanı adları, çeşitli ağ bağlamlarında ve uygulamaya özel adlandırma ve adresleme amaçları için kullanılır.

    - What is hosting ?
        Web hosting(barındırma) tanımı. Bir hosting provider(barındırma sağlayıcısı),
        bir web sitesinin dosyalarını depolaması için bir web sunucusunda yer ayırdığında,
        bir web sitesini barındırıyor demektir. ...
        Bir sunucuda bir web sitesine ayrılan alan miktarı barındırma türüne bağlıdır.
        Ana barındırma türleri paylaşımlı, adanmış, VPS ve bayidir.

### 2. Basic Frontend Knowledge

    - HTML
        HTML, Hyper Text Markup Language(Hiper Metin Biçimlendirme Dili) anlamına gelir.
        HTML, Web sayfaları oluşturmak için standart markup language(biçimlendirme dilidir).
        HTML, bir Web sayfasının yapısını tanımlar. HTML bir dizi öğeden oluşur. HTML öğeleri,
        tarayıcıya içeriğin nasıl görüntüleneceğini söyler.

    - CSS
        CSS, Cascading Style Sheets(Basamaklı Stil Şablonu) anlamına gelir. CSS, HTML öğelerinin ekranda,
        kağıtta veya diğer ortamlarda nasıl görüntüleneceğini açıklar.
        CSS, çok fazla işten tasarruf sağlar. Birden fazla web sayfasının düzenini aynı anda kontrol edebilir.

    - JavaScript
        Genellikle JS olarak kısaltılan JavaScript, ECMAScript spesifikasyonuna uyan bir programlama dilidir.
        JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
        It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
        (JavaScript yüksek seviyelidir, genellikle tam zamanında derlenir ve çoklu paradigmadır.
        Kıvrımlı parantez sözdizimi, dinamik yazım, prototip tabanlı nesne yönelimi ve birinci sınıf işlevlere sahiptir.)

### 3. OS and General Knowledge

    - Terminal Usage
        Bir terminal kullanmak, bir dizinde gezinmek veya bir dosyayı kopyalamak gibi şeyler yapmak için
        bilgisayarımıza basit metin komutları göndermemize ve daha birçok karmaşık otomasyon
        ve programlama becerisinin temelini oluşturmamıza olanak tanır.

    - How OSs work in General
        Operating System(İşletim Sistemi) (OS), bir bilgisayar kullanıcısı ile bilgisayar donanımı arasındaki bir arayüzdür.
        Bir işletim sistemi, dosya yönetimi, bellek yönetimi, süreç yönetimi, giriş ve çıkışı işleme ve
        disk sürücüleri ve yazıcılar gibi çevresel aygıtları kontrol etme gibi tüm temel görevleri gerçekleştiren bir yazılımdır.

    - Process Management
        Process management involves various tasks like creation, scheduling, termination of processes, and a dead lock.
        The OS must allocate resources that enable processes to share and exchange information.
        It also protects the resources of each process from other methods and allows synchronization among processes.
        (Süreç yönetimi, oluşturma, zamanlama, süreçlerin sonlandırılması ve kilitlenme gibi çeşitli görevleri içerir.
        Süreç, günümüz işletim sistemlerinin önemli bir parçası olan yürütülmekte olan bir programdır.
        İşletim sistemi, işlemlerin bilgi paylaşmasını ve değiş tokuşunu sağlayan kaynakları tahsis etmelidir.
        Ayrıca her işlemin kaynaklarını diğer yöntemlerden korur ve işlemler arasında senkronizasyona izin verir.)

    - Threads and Concurrency
        Hafif işlem olarak da adlandırılan bir iş parçacığı, temel CPU kullanımıdır; bir iş parçacığı kimliğini,
        bir program sayacını, bir yazmaç kümesini ve bir yığını tehlikeye atar.
        Birden çok iş parçacığı birbiriyle eşzamanlı olarak yürütülür ve bu da tek bir tüm sürecin yürütülmesiyle sonuçlanır.

    - Basic Terminal Commands
    grep, awk, sed, lsof, curl, wget, tail head, less, find, ssh, kill
        Bu temel Terminal komutlarını,
        Terminal'in bazı özelliklerini tanıtmak ve uygulamanın çalışma anlayışını sağlamak için sunuyorum.,


    - Memory Management
        Bellek yönetimi, bilgisayar belleğine uygulanan bir kaynak yönetimi biçimidir.
        Bellek yönetiminin temel gerekliliği, bellek bölümlerini programlara istekleri üzerine
        dinamik olarak tahsis etmenin yollarını sağlamak ve artık gerekmediğinde yeniden kullanım için serbest bırakmaktır

    - Interprocess Communication
        Bilgisayar biliminde, süreçler arası iletişim veya işlemler arası iletişim, özellikle bir işletim sisteminin,
        işlemlerin paylaşılan verileri yönetmesine izin vermek için sağladığı mekanizmaları ifade eder.

    - I/O Management
        Bir İşletim Sisteminin önemli işlerinden biri, fare, klavyeler, dokunmatik yüzey, disk sürücüleri,
        ekran bağdaştırıcıları, USB aygıtları, Bit eşlemeli ekran, LED, Analogdan dijitale dönüştürücü,
        Açık / Kapalı dahil olmak üzere çeşitli G / Ç aygıtlarını yönetmektir.

        Bir I / O sistemi, bir uygulama I / O talebini alıp fiziksel cihaza göndermek,
        ardından cihazdan gelen yanıtı almak ve uygulamaya göndermek için gereklidir.

    - POSIX Basics
    stdin, stdout, stderr, pipes
        Taşınabilir İşletim Sistemi Arayüzü (POSIX), işletim sistemleri arasında uyumluluğa ve taşınabilirliğe yardımcı
        olan bir IEEE standardıdır. Teorik olarak, POSIX uyumlu kaynak kodu sorunsuz bir şekilde taşınabilir olmalıdır.
        Gerçek dünyada, uygulama geçişi genellikle sisteme özgü sorunlarla karşılaşır.

    - Basic Networking Concepts
        Bu internetin çalışma konsepti, bir dizi olayların gerçekleşmesi ve protocollerin çalışma konsepti.

### &: 4.Learn a Language

    Make sure to learn it's quirks. Core detail about it's runtime e.g. concurrency, memory model etc.

    - JavaScript
        JavaScript sadece frontend'te kullanılmıyor artık NodeJS ile backend'te de kullanabileceğiz.
        Diğer programlama dillerine nazaran farklı bir yapısı var. Öğrenmesi kolay bir dildir.
        Frontend'te tarayıcıların (JavaScript Motorları) engineleri ile çalışırken server tarafında ise
        V8, Google Chrome'u destekleyen JavaScript motorunun adıdır.
        JavaScript'imizi alan ve Chrome ile gezinirken yürüten şey budur.
        V8, JavaScript'in yürütüldüğü çalışma zamanı ortamını sağlar.
        DOM ve diğer Web Platformu API'leri tarayıcı tarafından sağlanır.
        Harika olan şey, JavaScript motorunun barındırıldığı tarayıcıdan bağımsız olmasıdır.
        Bu anahtar özellik, Node.js'nin yükselmesini sağladı.
        V8, 2009 yılında Node.js'yi güçlendiren motor olarak seçildi ve Node.js'nin popülaritesi patladıkça,
        V8 şimdi JavaScript'te yazılmış inanılmaz miktarda sunucu tarafı koduna güç veren motor haline geldi.

    - Ruby
        Ruby ... Sadelik ve üretkenliğe odaklanan dinamik, açık kaynaklı bir programlama dilidir.
        Okuması doğal ve yazması kolay zarif bir sözdizimine sahiptir.
        Ruby on Rails diye bir frameworku vardır, Model-View-Controller'a (MVC) göre veritabanı destekli
        web uygulamaları oluşturmak için gereken her şeyi içeren bir web uygulaması çerçevesi

        Ruby, zengin tarihi boyunca son kullanıcılar ve şirketler için yazılım geliştirmek, işletme, bilim,
        mühendislik, teknoloji ve ticaret gibi çeşitli alanlara hizmet vermek için kullanılmıştır.
        Temel olarak, insanlar, uygulaması hızlı dijital çözümlere ihtiyaç duyan geliştiricileri
        veya offshore Ruby geliştirme projelerini işe alır.

    - Python
        Birçok Bilim alanlarında kullanılan sade öğrenmesi kolay, konuşma dili gibi bir dildir.
        Herhangi bir başka dilde deneyimli programcılar Python'u çok hızlı bir şekilde anlayabilir
        ve yeni başlayanlar temiz sözdizimi ve girinti yapısını öğrenmesi kolay bulur.
        Python 3'e genel bakışımızla iştahınızı kabartın.

    - Java
        Java, olabildiğince az uygulama bağımlılığına sahip olacak şekilde tasarlanmış,
        sınıf tabanlı, nesne yönelimli bir programlama dilidir.

        Java, bilgisayarlar, dizüstü bilgisayarlar, oyun konsolları, Blu-ray oynatıcılar,
         araç navigasyon sistemleri, tıbbi izleme cihazları, park sayaçları, piyango terminalleri ve
         akıllı telefonlar dahil olmak üzere bir dizi cihaz için uygulamalar ve platformlar oluşturmak için kullanılır.

    - C#
        C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped,
        imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.
        Arkasında Microsoft var. MVC için ASP.NET varıdr.

        C # programlama dili, modern bir programlama dilidir. Özelliklerini C ve C ++ gibi öncüllerinden alır.
         Farklı nişlerde çok çeşitli görevleri ve işlemleri gerçekleştirebilir.
         Diğer dillerin yanı sıra, C # web tabanlı uygulamalar geliştirmek için büyük bir popülerlik kazanıyor.
         Temel kavramları, etkileşimli bir ortam oluşturmaya yardımcı olur ve dinamik web platformunun gerektirdiği işlevleri sağlar.
         Kalkınan tam yığın geliştiricilerin çoğu bu çok yönlü dili seçer.
         Her iki platformda da çalışır: Windows .NET çerçevesi ve diğer açık kaynaklı platformlar.
         Bu nedenle inanılmaz verimlilik ve ölçeklenebilirlik sağlar.

    - PHP
        PHP, özellikle web geliştirmeye uygun, genel amaçlı bir betik dilidir.
         İlk olarak 1994 yılında Danimarka-Kanadalı programcı Rasmus Lerdorf tarafından oluşturulmuştur.
         PHP referans uygulaması şu anda The PHP Group tarafından üretilmektedir.

         PHP temel olarak sunucu tarafı komut dosyası oluşturmaya odaklanmıştır, bu nedenle form verilerini toplamak,
         dinamik sayfa içeriği oluşturmak veya tanımlama bilgileri göndermek ve almak gibi başka herhangi
         bir CGI programının yapabileceği her şeyi yapabilirsiniz. Ancak PHP çok daha fazlasını yapabilir.
         PHP betiklerinin kullanıldığı üç ana alan vardır. Sunucu tarafı komut dosyası.

    - Rust
        Cross Protform(çapraz platform) çözümleri için bugün Rust kullanıyor.
        Firefox, Dropbox ve Cloudflare gibi bildiğiniz ve sevdiğiniz yazılımlar Rust kullanır.
        Girişimlerden büyük şirketlere, gömülü cihazlardan ölçeklenebilir web hizmetlerine kadar, Rust mükemmel bir seçimdir.

        Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency.
        Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references.
        Rust achieves memory safety without garbage collection, and reference counting is optional

    - Go
        Go, Google'da Robert Griesemer, Rob Pike ve Ken Thompson tarafından tasarlanmış, statik olarak yazılmış,
        derlenmiş bir programlama dilidir. Go, sözdizimsel olarak C'ye benzer, ancak bellek güvenliği,
        garbage collection(çöp toplama), yapısal yazım ve CSP tarzı eşzamanlılık içerir.

### 5. Version Control Systems

        Yazılım mühendisliğinde sürüm kontrolü (revizyon kontrolü, kaynak kontrolü veya kaynak kodu yönetimi olarak da bilinir),
         bilgisayar programları, belgeler, büyük web siteleri veya diğer bilgi koleksiyonlarındaki
         değişiklikleri yönetmekten sorumlu bir sistem sınıfıdır. Sürüm kontrolü, yazılım konfigürasyon yönetiminin bir bileşenidir.

    What are they and why you should use one
    Çünkü birçok projeyi tek bir kişi yapmıyor ve bir projenin arkasında bazen 5 bazen 20 kişi olabiliyor. Version Control sistemi
    ise bu bir projedeki kontrolu sağlıyor. Hangi kodun yazılacağı, bir hata yapıldığında geriye dönmek gibi birçok faydası oluyor.

### &: 6.Basic Usage of Git

[Learn the Basics of Git in Under 10 Minutes](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)

    Git'de bir version kontrol sistemibir ve çok popülerdir. Github ve internetdeki bir çok servis bunu kullanıyor.

### &: 7.Repo hosting services

        En popüleri Github, ama Gitlab ve BitBucket de büyümeye devam ediyor.
        Revizyon ve sürüm geçmişini veya sürüm kontrolünü korumak için genellikle açık kaynaklı yazılım projeleri
        ve diğer çok geliştiricili projeler tarafından kullanılırlar.
        Birçok depo bir hata izleme sistemi sağlar ve sürüm yönetimi, posta listeleri ve wiki tabanlı proje belgeleri sunar.

    Create account and Learn to use Github
      - Github
      - Gitlab
      - Bitbucket

### 8. Relational Databases

    - İlişkisel Veritabanı Yöntemi ?

        - İlişkisel Veritabanı Yönetim Sistemlerinde veriler tablolar içerisinde satırlar ve sütunlarda tutulur. Birbiri ile ilişkili verileri tuttuğumuz tablolar arasında ilişki (bağ) kurarak veritabanımızı inşa etmemizi sağlayan sistemlere ise İlişkisel Veritabanı Yönetim Sistemleri denir.

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
    MySQL, en fazla tercih edilen açık kaynak veritabanlarından biri olarak öne çıkıyor. Web Hosting teknolojisinde kullanılan MySQL temel olarak web siteleri için geliştirilen özel bir sunucu yazılımı ve internet uygulaması anlamına geliyor. Yüksek boyutlu verilerin özel teknolojiler ile depolanmasını ve istenildiğinde hızlı biçimde verilere erişilmesini sağlıyor. Bu da web geliştiricilerinin database’leri MySQL yardımı ile kontrol etme taleplerini artırıyor.

    Bu özellikler, MySQL’i verimli sözdizimi ve yüksek yanıt hızı gerektiren dinamik web siteleri gibi uygulamalar için ideal hale getirir. Ücretsiz kullanılabilirlik ile bağlantılı olarak, MySQL veri tabanı ile web barındırma bu nedenle kendisini resmi olmayan standart olarak belirlemiştir. Genellikle bir Linux işletim sistemi, PHP ve bir Apache web sunucusu ile birleştirilir ve bu kombinasyonda LAMP (Linux, Apache, MySQL, PHP) veya nginx kullanılırken LEMP olarak da bilinir. MySQL aslında büyük veritabanlarını yönetmek için mevcut veritabanı yazılımlarından daha hızlı olması için geliştirildi. Zorlu operasyonel, işlemsel ve üretim ortamlarında onlarca yıldır kullanılan MySQL, hesaplama ve depolamanın buluta taşınması ile birlikte gelişimine devam etmekte.

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

    - MariaDB
        MySQL'den türetilmiştir. MySQL ile aynı özellikleri sağlıyor ama kurulması gerekiyor ve ek yeni özellikler ve geliştirmeler(Group commit ile daha hızlı ve güvenli replikasyon. Gereksiz karakter kodlama dönüşümleri yok, hız artışı var. Eklentilenebilir doğrulama yapısı, Sanal ve her satır için dinamik kolon. Daha geniş kullanıcı istatistikleri. Parçalı anahtar önbelleği) yapılıyor.
        Bir veritabanı sunucusu olarak güvenilir değil, veri kaybediyor. Büyük(!) veritabanları için uygun değildir. Kurumsal uygulamalarda MariaDB yerine MySQL tercih edilmelidir.

    - MS SQL
        Microsoft SQL Server olarak açılır. Microsoft SQL Server ile veri işleme, indeksleme, sorgulama, raporlama gibi çeşitli işlemler yapılabiliyor. Bu veritabanı gelişmiş özellikleri belli meblağlar karşısında sizlere sağlıyor. Masaüstü uygulama ve programları kullanacak olanların ve internet sistemleri tasarlayıp hazırlayanların veritabanı gereksinimini iyi derecede karşılıyor.
        MSSQL, Windows platformlar üzerinde .NET veya ASP programlama dili aracılığıyla oluşturulan web siteleri ve web yazılımlarda veritabanı görevi görmesi amacıyla kullanılır. Bu yazılım dilleri içerisinde MS SQL veri tabanına bağlanmak ve bu veri tabanı üzerinde işlemler gerçekleştirmek birçok programlama diline göre çok daha kolaydır.

    - Oracle
    Oracle veritabanı verilerin tamamını güvenli bir biçimde tutarak on binlerce insana aktarabildiğimiz yapıdır. Temelde veritabanı yönetimi olarak dünya üzerinde en büyük projelerin altında yer alır. Zaten Microsoft’tan sonra en büyük şirket Oracle olduğu için dünya genelinde büyük projeler için Oracle veritabanı kullanılır. Oracle veritabanı verilerin tamamını güvenli bir biçimde tutarak on binlerce insana aktarabildiğimiz yapıdır. Temelde veritabanı yönetimi olarak dünya üzerinde en büyük projelerin altında yer alır. Zaten Microsoft’tan sonra en büyük şirket Oracle olduğu için dünya genelinde büyük projeler için Oracle veritabanı kullanılır.

### 9. More About Database

    - ORMs(Object Relational Mapping)

    ORM ile kod içerisine yazılan sql satırları ortadan kalkmıştır. Veritabanımız içerisinde yer alan tablolar bir sınıf (class), kolondaki alanlarımızın her biri değişken (property) olarak tanımlanmakta, veritabanındaki kayıtlara da ait olduğu sınıfta bir obje olarak erişebilmekte ve kullanabilmekteyiz.
    Dillere göre sık kullanılan ORM örnekleri;
    C#: Entity Framework, Dapper, ECO, XPO, Norm
    Java: Hibernate, Ebean, Torque, JPA,MyBattis
    Php: CakePHP, Codelgniter, RedBean, Doctrine,Propel, PdoMap
    Python: Django, South,Storm

    - Neden ORM kullanmalıyım?
      ORM’nin sağladığı kolaylık ne diyecek olursak eğer bir örnek üzerinden  gidebiliriz.

      Id’sini bildiğimiz bir kullanıcının ismini almak isteyelim. Bunun için ado  net kullanılan bir projede aşağıdaki gibi bir kod sırası izlenmesi  gerekmekteydi.

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
         ACID kavramı, elektrik kesintisi, sistem çökmesi gibi durumlarda geçerliliği garanti etmeye yarayan veritabanı özelliklerinin bir dizi özelliğidir

        Veri tabanı sistemlerinde transaction / işlem ile ilgili tanımlanmış standart kurallardır. <p>ACID kelimesi <strong>A</strong>tomicity, <strong>C</strong>onsistency, <strong>I</strong>solation, <strong>D</strong>urability özelliklerinin baş harflerinden oluşan bir ifadedir.</p>
        Atomicity(bütünlük): İşlemler veri tabanı tarafından bir bütün olarak ele alınmalıdır. Yapılan işlem herhangi bir kesintiye uğradığında tüm işlemler geçersiz sayılır.
        Consistency(Tutarlık): İşlemler tutarlı olmalıdır. Bir ekleme işlemi sırasında çalışan Foreign Key, Trigger işlemi ekleme işlemi ile tutarlı olmalıdır.
        Isolation(bağımsızlık): Birden fazla işlem birbirinden bağımsız olarak ele alınmalıdır. Bir veri eklenmesi ve silinmesi sırayla yapılmalıdır. Önce silinme daha sonra ekleme yapılmamalıdır.
        Durability(Dayanıklılık): İşlem sırasında herhangi bir hata geldiğinde veri tabanı verileri önceki duruma getirmelidir.
        Yani özetlemek gerekirse: Bir hesaptan başka bir hesaba para aktarıldığında oluşacak herhangi bir hatada gönderme işleminin iptal edilmesi ve gönderilen paranın tekrar hesaba yatırılmasıdır.

        İlişkisel veritabanlarındaki Transaction(Transaction için olarak verilen örnek bir banka hesabından başka bir banka hesabına paranın transfer edilmesi olarak anlatılabilir. Burada 2 hesap gönderici ve alıcının hesabı üzerinde mantıksal bir operasyon gerçekleştiriliyor. Bu işleme Transaction deniyor.) için tanımlanmış özellik setidir.
        Bu transaction başarılı bir şekilde gerçekleşebilmesi için ACID ilkelerine uyması gerekmektedir.
        (Atomicity: Transaction işlemini bir bütün olarak görür. İşlem sırasında birden fazla veritabanı/tablodaki verinin güncellenmesi gerçekleşiyor ise tüm bunların hepsi birden başarılı olacaktır veya başarısız olacaktır)

    - Transactions
      Transaction, veritabanı işlemlerinde başarı ve hatayı garanti eden operasyonlar listesi olarak tanımlayabiliriz.
      Kısaca Transaction için SQL Server ortamında kullandığımız iş birimidir diyebiliriz. Çoğu zaman bir transaction yalnızca bir türde işlem yapar, yani sadece veri silme, veri güncelleme veya veri ekleme gibi tek türde işlem yapar. Ama bir transaction içinde birden fazla da işlem yapılabilir. Yine transaction içinde SELECT işlemleri de yapılabilmektedir.
      Transaction içinde yer alan tüm işlemler veritabanı server üzerinde yapılmak zorunda, aksi halde transaction içindeki işlemlerin tek bi adımı dahi başarısız olsa, tüm yapılan işlemler yapılmamış gibi eski haline döner.

    - N + 1 Problem
        ORM fonksiyonunu yanlış şekilde kullanırsak aslında bir SQL sorgusu ile yapabileceğimiz bir sorguyu, sorgumuzdan kaç adet satır döndüyse (yani N adet) o kadar fazla SQL sorgusu ile yapıyoruz.

    - Database Normalization
        Veri fazlalığını azaltmak ve veri bütünlüğünü iyileştirmek için bir veri tabanını, genllikle relational database'ler, bir dizi normal biçime(normal forms) göre yapılandırma sürecidir. Ve bunların sırası vardır.

    - Indexes and how they work
        Indexes(İndeksleme), bir dizi kaydı birden çok alanda sıralamanın bir yoludur. Bir tablodaki bir alanda bir indeks oluşturmak, alan değerini tutan başka bir veri yapısı ve bunun ilişkili olduğu kayda bir işaretçi oluşturur. Bu indeks yapısı daha sonra sıralanır ve bunun üzerinde İkili Aramaların gerçekleştirilmesine izin verir.

    - Data Replication
        Veri çoğaltma, birden çok veri kopyası oluşturma ve bunları bir ağ üzerinden genel erişilebilirliklerini iyileştirmek için farklı konumlarda saklama işlemidir. Data mirroring(Veri aynalamaya) benzer şekilde, Data Replication(veri replikasyonu) hem bireysel bilgisayarlara hem de sunuculara uygulanabilir. Veri kopyaları aynı sistem içinde, on-site ve off-site ana bilgisayarlar ve bulut tabanlı ana bilgisayarlar içinde depolanabilir.

    - Sharding Strategies
        Sharding(Paraçlama), tek bir mantıksal a single logical dataset(veri kümesini) birden çok veritabanında bölme ve depolama yöntemidir. Verileri birden çok makine arasında dağıtarak, bir veritabanı sistemi kümesi daha büyük veri kümesini depolayabilir ve ek istekleri karşılayabilir. Dahası, birçok Sharding Strategies(parçalama stratejisi) ek makinelerin eklenmesine izin verir.

[This article about this lesson](https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6#:~:text=Sharding%20is%20a%20method%20of,dataset%20and%20handle%20additional%20requests.&text=Moreover%2C%20many%20sharding%20strategies%20allow%20additional%20machines%20to%20be%20added.)

    - CAP Theorem
        The CAP theorem applies a similar type of logic to distributed systems—namely, that a distributed system can deliver only two of three desired characteristics: consistency(tutarlılık), availability(kullanılabilirlik), and partition tolerance(bölme toleransı) (the ‘C,’ ‘A’ and ‘P’ in CAP).
        Tutarlılık Tutarlılık, hangi düğüme bağlanırsa bağlansın, tüm istemcilerin aynı verileri aynı anda görmesi anlamına gelir. Bunun olması için, veri bir düğüme her yazıldığında, yazma "başarılı" olarak kabul edilmeden önce sistemdeki diğer tüm düğümlere anında iletilmeli veya kopyalanmalıdır.

        Kullanılabilirlik Kullanılabilirlik, veri talebinde bulunan herhangi bir müşterinin, bir veya daha fazla düğüm çalışmıyor olsa bile yanıt alması anlamına gelir. Bunu belirtmenin başka bir yolu - dağıtılmış sistemdeki tüm çalışan düğümler, istisnasız herhangi bir istek için geçerli bir yanıt döndürür.

        Bölme toleransı Bölüm, dağıtılmış bir sistemdeki bir iletişim kesintisidir - iki düğüm arasında kaybolan veya geçici olarak geciken bir bağlantı. Bölme toleransı, sistemdeki düğümler arasında herhangi bir sayıda iletişim arızasına rağmen kümenin çalışmaya devam etmesi gerektiği anlamına gelir.

### &: 10. NoSQL Databases

     - MongoDB
        In the simplest definition, MongoDB is an open source NoSQL (Not only SQL) database application. MongoDB, developed by MongoDB Inc. using C++ programming language in 2009, is a document-based and scalable application. Due to its fast and open source code, MongoDB has gained popularity all over the world, which is more preferred in structures where traditional relational databases cannot catch up and remain cumbersome. As GTech, we have answered some questions about the MongoDB database application and usage areas in our article. It has a scalable structure. Supports range queries, field regular definition searches. It can index any field in the document in Binary BsON format. It can create multiple copies of the original data and thus prevent data loss. It allows data to be processed collectively as well as collecting data. Driver support is available for most of the current programming languages
        MongoDB is widely used across various web applications as the primary data store. One of the most popular web development stacks, the MEAN stack employs MongoDB as the data store (MEAN stands for MongoDB, ExpressJS, AngularJS, and NodeJS).

        MongoDB is a NoSQL database and as a result, it is not ACID compliant (Atomicity, Consistency, Isolation, Durability). As a result, in the applications where ACID compliance (for example, applications that require database-level transactions) is required, MongoDB cannot be used. For instance, one might not want to use MongoDB when designing a core-banking system for a bank.

     - RethinkDB
        RethinkDB, JSON'u uygulamalarınıza real-time(gerçek zamanlı) olarak aktarır. Uygulamanız veri için anket yaptığında, veriler yavaş, ölçeklenemez ve bakımı zahmetli hale gelir. RethinkDB, gerçek zamanlı uygulamalar oluşturmayı önemli ölçüde kolaylaştıran açık kaynaklı, ölçeklenebilir veritabanıdır.


     - CouchDB
        CouchDB uses the semi-structured JSON format for storing data, as well as a RESTful HTTP API. Queries to a CouchDB database are made via this API using HTTP or JavaScript.
        CouchDB and MongoDB differ in their approach to the CAP theorem: CouchDB prefers availability and partition tolerance, while MongoDB prefers consistency and partition tolerance. The right choice here will depend on your database needs and use cases.

     - DynameDB
        Amazonundur. Amazon DynamoDB, anahtar-değer ve belge veri yapılarını destekleyen ve Amazon.com tarafından Amazon Web Hizmetleri portföyünün bir parçası olarak sunulan, tamamen yönetilen, tescilli bir NoSQL veritabanı hizmetidir. DynamoDB, benzer bir veri modelini Dynamo'ya sunar ve adını Dynamo'dan alır, ancak farklı bir temel uygulamaya sahiptir.

### 11. Learn about APIs

    - REST(REpresentational State Transfer)
    Read Roy Fielding's Paper
    Temsili durum aktarımı, Web hizmetlerini kullanan etkileşimli uygulamaların bir yazılım mimarisi için fiili bir standarttır. Bu standardı izleyen bir Web hizmetine RESTful denir. Genellikle RESTful sistemleri olarak adlandırılan REST uyumlu sistemler, durumsuz olmaları ve istemci ile sunucunun concerns'leri birbirinden ayırmasıyla karakterize edilir.
    - Statelessness REST paradigm'larını takip eden sistemler durumsuzdur. Yani sunucunun istemcinin hangi durumda olduğu hakkında hiçbir şey bilmesine gerek yoktur ve bunun tersi de geçerlidir. Bu şekilde, hem sunucu hem de istemci alınan herhangi bir mesajı, önceki mesajları görmeden bile anlayabilir.

[must reading this article very important about this subject](https://www.codecademy.com/articles/what-is-rest)

    - JSON APIs
    JSON API, ilgili veri kaynaklarının getirilmesi ve işlenmesi için istemci tarafından oluşturulacak isteklerin nasıl yapılması gerektiğini, ve sunucunun bu isteklere hangi şekilde yanıt vermesi gerektiğini belirler. JSON API, istemciler ve sunucular arasındaki istek sayısının ve giden/gelen veri boyutunun azaltılması için tasarlanmıştır. JSON API, oluşturulacak veri değiş-tokuşu için JSON API medya türünün (application/vnd.api+json) kullanımını gerektirir.

    - SOAP
    SOAP, bilgisayar ağlarında web hizmetlerinin uygulanmasında yapılandırılmış bilgi alışverişi için bir mesajlaşma protokolü belirtimidir. Amacı, genişletilebilirlik, tarafsızlık, ayrıntı ve bağımsızlık sağlamaktır.
    SOAP is an acronym for Simple Object Access Protocol. It is an XML-based messaging protocol for exchanging information among computers. SOAP is an application of the XML specification.


    - HATEOAS
    Hypermedia as the Engine of Application State (HATEOAS), REST uygulama mimarisinin onu diğer ağ uygulama mimarilerinden ayıran bir bileşenidir. HATEOAS ile bir istemci, uygulama sunucuları hiper medya aracılığıyla dinamik olarak bilgi sağlayan bir ağ uygulamasıyla etkileşime girer.
    HATEOAS'ın en önemli tek nedeni loose coupling(gevşek bağlantıdır). Bir REST hizmetinin tüketicisinin tüm kaynak URL'lerini sabit kodlaması gerekiyorsa, hizmet uygulamanızla sıkı bir şekilde birleştirilir. Bunun yerine, URL'leri döndürürseniz, eylemler için kullanabilir, sonra gevşek bir şekilde bağlanır. Yanıttan belirtildiği ve kullanıldığı için URI yapısına sıkı bir bağımlılık yoktur.

    - Open API Spec and Swagger
        Orijinal olarak Swagger Spesifikasyonu olarak bilinen OpenAPI Spesifikasyonu, RESTful web servislerini tanımlamak, üretmek, tüketmek ve görselleştirmek için makine tarafından okunabilir arayüz dosyalarına yönelik bir spesifikasyondur. OpenAPI Spesifikasyonu (OAS), RESTful API'lere standart, dilden bağımsız bir arayüz tanımlar; bu, hem insanların hem de bilgisayarların, kaynak koda, belgelere veya ağ trafiği incelemesine erişim olmadan hizmetin yeteneklerini keşfetmesine ve anlamasına olanak tanır. Doğru bir şekilde tanımlandığında, bir tüketici minimum miktarda uygulama mantığıyla uzak hizmeti anlayabilir ve etkileşime girebilir.

    - Authentication
    Kimlik doğrulama, bir bilgisayar sistemi kullanıcısının kimliği gibi bir iddiayı kanıtlama eylemidir. Tanımlamanın aksine, bir kişinin veya şeyin kimliğini belirtme eylemi, kimlik doğrulama, bu kimliği doğrulama sürecidir.
    - Cookie Based
    Cookie-based trageting(Çerez Tabanlı Hedefleme), web tarayıcısı davranışlarına göre küçük hedef kitle gruplarını hedeflemek için veri parçalarını veya "çerezleri" kullanır. Çerez tabanlı Hedefleme, şirketlerin, kullanıcının şirketin web sitesine ilgi gösterdiğini belirttikten sonra kullanıcının göz atma deneyimi boyunca reklam görüntülemesine olanak tanır.
    - OAuth
    OAuth, İnternet kullanıcılarının web sitelerine veya uygulamalara diğer web sitelerindeki bilgilerine erişim izni vermeleri için ancak parolaları vermeden erişim yetkilendirmesi için açık bir standarttır.
    - Basic Authentication
    Bir HTTP işlemi bağlamında, temel erişim kimlik doğrulaması, bir HTTP kullanıcı aracısının bir istekte bulunurken bir kullanıcı adı ve parola sağlama yöntemidir.
    - Token Authentication
    Bilgisayar sistemlerinde, bir erişim belirteci, bir oturum açma oturumu için güvenlik kimlik bilgilerini içerir ve kullanıcıyı, kullanıcının gruplarını, kullanıcının ayrıcalıklarını ve bazı durumlarda belirli bir uygulamayı tanımlar. Tipik olarak, normal parola yerine erişim belirtecini girmesi istenebilir.
    - JWT
    JSON Web Token, yükü bir takım iddiaları öne süren JSON'u tutan isteğe bağlı imza ve / veya isteğe bağlı şifreleme ile veri oluşturmak için İnternet tarafından önerilen bir standarttır. Belirteçler ya özel bir sır ya da genel / özel bir anahtar kullanılarak imzalanır.
    - OpenID
    OpenID, açık standart ve merkezi olmayan bir kimlik doğrulama protokolüdür. Kâr amacı gütmeyen OpenID Foundation tarafından tanıtılan bu uygulama, kullanıcıların üçüncü taraf bir hizmet kullanarak işbirliği yapan siteler tarafından kimliklerinin doğrulanmasına olanak tanır
    - SAML
    Security Assertion Markup Language, taraflar arasında, özellikle bir kimlik sağlayıcı ile bir hizmet sağlayıcı arasında kimlik doğrulama ve yetkilendirme verilerinin değiş tokuşu için açık bir standarttır. SAML, güvenlik iddiaları için XML tabanlı bir biçimlendirme dilidir.

### 12. Caching

    In computing(Bilgi işlemde) önbellek, verileri depolayan bir donanım veya yazılım bileşenidir, böylece bu verilere yönelik gelecekteki talepler daha hızlı karşılanabilir; bir önbellekte depolanan veriler, daha önceki bir hesaplamanın sonucu veya başka bir yerde depolanan verilerin bir kopyası olabilir.
    Bilgi işlemde, önbellek, bir veri alt kümesini depolayan yüksek hızlı bir veri depolama katmanıdır ve bu katmandır, tipik olarak doğası gereği geçici bir durumdur, böylece bu verilere yönelik gelecekteki istekler, verilerin birincil depolama konumuna erişilerek mümkün olandan daha hızlı bir şekilde sunulur. Önbelleğe alma, önceden alınmış veya hesaplanmış verileri verimli bir şekilde yeniden kullanmanızı sağlar.

    - CDN(Content delivery network)
    Bir içerik dağıtım ağı veya içerik dağıtım ağı, coğrafi olarak dağıtılmış bir proxy sunucuları ve bunların veri merkezleri ağıdır. Amaç, hizmeti son kullanıcılara göre mekansal olarak dağıtarak yüksek kullanılabilirlik ve performans sağlamaktır.
    A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.
    A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

![](https://www.cloudflare.com/img/learning/cdn/what-is-a-cdn/what-is-a-cdn.png)

    - Server Side
    Server-side refers to operations that are performed by the server in a client–server relationship in a computer network.(Sunucu tarafı, bir bilgisayar ağındaki bir istemci-sunucu ilişkisi içinde sunucu tarafından gerçekleştirilen işlemleri ifade eder.)
    Server Side Rendering:
    Sunucu tarafı işleme (SSR), web sayfalarını bir sunucuda işleme ve tarayıcıda görüntülemek yerine tarayıcıya (istemci tarafı) geçirme işlemidir. SSR, istemciye tamamen işlenmiş bir sayfa gönderir; müşterinin JavaScript paketi devreye girer ve SPA çerçevesinin çalışmasını sağlar.
      - Redis
      Redis, verileri bellekte anahtar-değer çiftleri olarak depolayan açık kaynaklı bir NoSQL veritabanıdır. Özellikle, bu veriler sabit sürücülere yazılmak yerine RAM'de (Random Access Memory) saklanır.
      - Memcached
      Memcached, genel amaçlı dağıtılmış bir bellek önbelleğe alma sistemidir. Genellikle, harici bir veri kaynağının okunması gereken sayıyı azaltmak için verileri ve nesneleri RAM'de önbelleğe alarak dinamik veritabanı odaklı web sitelerini hızlandırmak için kullanılır. Memcached, Revize BSD lisansı altında lisanslanan ücretsiz ve açık kaynaklı bir yazılımdır.

      server-side programlama server’da çalıştırılan bütün uygulamalara verilen genel bir addır. Asıl işi, dinamik olarak içerikleri üretmek ve client‘ın istediklerini göndermektir. Çoğu web sitesi statik bir yapıda olmadığı için, database’den gelecek verilerle işlem yaparlar ve bu verileri; örneğin bir siteye giriş yapmak istediğinizde kullanıcı adınızı ve şifrenizi yazıp giriş yapmak istediğiniz de, kullandığınız client yani browser’ınız, server’a istek yollar ve server tarafındaki uygulama sizin bilgilerinizi database’de karşılaştırma yaparak client‘a cevap verir.
      SEO kayginiz yoksa SSR kullanmaniza gerek olmayabilir, SSR’in ortaya cikisindaki en buyuk itme motivasyonu SEO’dur.

![](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_1600/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/94ac796d-f3fd-4984-8d62-5e3ca2134f13/ssg-ssr-08-ssr.png)

    - Client Side
    İstemci tarafı, bir bilgisayar ağındaki istemci-sunucu ilişkisi içinde istemci tarafından gerçekleştirilen işlemleri ifade eder.

![](https://miro.medium.com/max/1800/1*cRftPL0mxSxiVSg-E0P7IA.png)

![](https://experienceleague.adobe.com/docs/audience-manager-learn/assets/client-side_vs_server-side_aam_implementation.png?lang=en)

### 13. Web Security Knowledge

    - Hashing Algorithms
    Hashing Algorithms (Karma algoritmalar), belirli bir girdiden sabit uzunlukta bir sonuç (hash(karma) veya hash value(karma değer)) üreten işlevlerdir. Karma değer, orijinal verilerin bir özetidir. Örneğin, artık içeriğini okuyamayacağınız bir noktaya kadar buruşturduğunuz bir kağıt belge düşünün.
      - MD5 and why not to use it
      MD5(Message Digest Algorithm)(İleti Özeti Algoritması) veya MD5, bir şifreleme hash function'udur(karma işlevidir). Karma hale getirilmiş herhangi bir mesajın veya dosyanın bütünlüğünü doğrulamak için oluşturulan Mesaj Özeti Algoritması ailesinin bir parçasıdır. MD5 birkaç durumda hala kullanılmaktadır; ancak MD5 güvenli değildir ve herhangi bir uygulamada kullanılmamalıdır.
      - SHA Family
      ABD Federal Bilgi İşleme Standardı olarak yayınlanan bir kriptografik hash fonksiyonları ailesidir
      - scrypt
      Kriptografide, şifreleme, çevrimiçi yedekleme hizmeti için oluşturulan şifre tabanlı bir anahtar türetme işlevidir. Algoritma, büyük miktarlarda bellek gerektirerek büyük ölçekli özel donanım saldırıları gerçekleştirmeyi maliyetli hale getirmek için özel olarak tasarlanmıştır.
      - bcrypt
      bcrypt, Blowfish şifresine dayalı olarak tasarlanan ve 1999'da USENIX'te sunulan bir şifre karma işlevidir. ... bcrypt işlevi, OpenBSD ve bazı Linux dağıtımları dahil olmak üzere diğer sistemler için varsayılan şifre karma algoritmasıdır. SUSE Linux.

![](https://blog.jscrambler.com/content/images/2020/06/jscrambler-blog-hashing-algorithm-example.png)

    - HTTPS
    Hypertext Transfer Protocol Secure, HTTP( Hypertext Transfer Protocol) bir uzantısıdır. Bir bilgisayar ağı üzerinden güvenli iletişim için kullanılır ve İnternette yaygın olarak kullanılır. HTTPS'de iletişim protokolü, Taşıma Katmanı Güvenliği veya daha önce Güvenli Yuva Katmanı kullanılarak şifrelenir.

    - CORS(Cross-origin resource sharin)
    Cross-origin resource sharing(Kaynaklar arası kaynak paylaşımı), bir web sayfasındaki kısıtlı kaynakların, ilk kaynağın sunulduğu alanın dışındaki başka bir alandan talep edilmesine izin veren bir mekanizmadır. Bir web sayfası, çapraz kaynaklı görüntüleri, stil sayfalarını, komut dosyalarını, iframe'leri ve videoları serbestçe gömebilir.

    - SSL/TLS(Transport Layer Security)

    Transport Layer Security ve artık kullanımdan kaldırılmış öncülü olan Secure Socket Layer, bir bilgisayar ağı üzerinden iletişim güvenliği sağlamak için tasarlanmış kriptografik protokollerdir
    SSL, Secure Sockets Layer'ın kısaltmasıdır ve kısaca, bir internet bağlantısını güvende tutmak ve iki sistem arasında gönderilen hassas verileri korumak, suçluların potansiyel kişisel ayrıntılar da dahil olmak üzere aktarılan herhangi bir bilgiyi okumasını ve değiştirmesini engelleyen standart teknolojidir. İki sistem bir sunucu ve bir istemci (örneğin, bir alışveriş sitesi ve tarayıcı) veya sunucudan sunucuya (örneğin, kişisel tanımlanabilir bilgiler veya maaş bordrosu bilgileri içeren bir uygulama) olabilir.
    TLS(Transport Layer Security):
    TLS (Transport Layer Security), SSL'nin yalnızca güncellenmiş, daha güvenli bir sürümüdür. Daha yaygın olarak kullanılan bir terim olduğu için hala güvenlik sertifikalarımıza SSL olarak atıfta bulunuyoruz, ancak DigiCert'ten SSL satın aldığınızda, aslında ECC, RSA veya DSA şifreleme seçeneğiyle en güncel TLS sertifikalarını satın alıyorsunuz.

    - OWASP Security Risks

<ol>
<li><a href="/www-project-top-ten/2017/A1_2017-Injection"><strong>Injection</strong></a>. Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.</li>
<li><a href="/www-project-top-ten/2017/A2_2017-Broken_Authentication"><strong>Broken Authentication</strong></a>. Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users’ identities temporarily or permanently.</li>
<li><a href="/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure"><strong>Sensitive Data Exposure</strong></a>. Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.</li>
<li><a href="/www-project-top-ten/2017/A4_2017-XML_External_Entities_(XXE)"><strong>XML External Entities (XXE)</strong></a>. Many older or poorly configured XML processors evaluate external entity references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, and denial of service attacks.</li>
<li><a href="/www-project-top-ten/2017/A5_2017-Broken_Access_Control"><strong>Broken Access Control</strong></a>. Restrictions on what authenticated users are allowed to do are often not properly enforced. Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access other users’ accounts, view sensitive files, modify other users’ data, change access rights, etc.</li>
<li><a href="/www-project-top-ten/2017/A6_2017-Security_Misconfiguration"><strong>Security Misconfiguration</strong></a>. Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information. Not only must all operating systems, frameworks, libraries, and applications be securely configured, but they must be patched/upgraded in a timely fashion.</li>
<li><a href="/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS)"><strong>Cross-Site Scripting (XSS)</strong></a>. XSS flaws occur whenever an application includes untrusted data in a new web page without proper validation or escaping, or updates an existing web page with user-supplied data using a browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the victim’s browser which can hijack user sessions, deface web sites, or redirect the user to malicious sites.</li>
<li><a href="/www-project-top-ten/2017/A8_2017-Insecure_Deserialization"><strong>Insecure Deserialization</strong></a>. Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not result in remote code execution, they can be used to perform attacks, including replay attacks, injection attacks, and privilege escalation attacks.</li>
<li><a href="/www-project-top-ten/2017/A9_2017-Using_Components_with_Known_Vulnerabilities"><strong>Using Components with Known Vulnerabilities</strong></a>. Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover. Applications and APIs using components with known vulnerabilities may undermine application defenses and enable various attacks and impacts.</li>
<li><a href="/www-project-top-ten/2017/A10_2017-Insufficient_Logging%2526Monitoring"><strong>Insufficient Logging &amp; Monitoring</strong></a>. Insufficient logging and monitoring, coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence, pivot to more systems, and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring.</li>
</ol>

    - Content Policy
    Content Security Policy(İçerik Güvenliği Politikası), güvenilir web sayfası bağlamında kötü amaçlı içeriğin yürütülmesinden kaynaklanan siteler arası komut dosyası, tıklama hırsızlığı ve diğer kod yerleştirme saldırılarını önlemek için tanıtılan bir bilgisayar güvenlik standardıdır.

### 14. Testing

![](https://softwaretestingfundamentals.com/wp-content/uploads/2011/02/unit-testing.jpg)

    - Integration Testing
    Integration Testin(Entegrasyon testi), yazılım testinde bireysel yazılım modüllerinin bir araya getirildiği ve grup olarak test edildiği aşamadır. Entegrasyon testi, bir sistemin veya bileşenin belirtilen fonksiyonel gereksinimlere uygunluğunu değerlendirmek için yapılır. Unit Testing(Birim testinden) sonra ve validation testing(doğrulama testinden) önce gerçekleşir

    - Unit Testing
    Bilgisayar programlamasında, Unit Testin(birim testi), ayrı ayrı kaynak kodu birimlerinin (bir veya daha fazla bilgisayar programı modülünün yanı sıra ilişkili kontrol verileri, kullanım prosedürleri ve işletim prosedürleri ile birlikte) kullanıma uygun olup olmadıklarını belirlemek için test edildiği bir yazılım test yöntemidir. .

    - Functional Testing
    Functional Testing(Fonksiyonel test), bir kalite güvence süreci ve test senaryolarını test edilen yazılım bileşeninin özelliklerine dayandıran bir tür kara kutu testidir. Fonksiyonlar, girdi besleyerek ve çıktıyı inceleyerek test edilir ve dahili program yapısı nadiren dikkate alınır.

![](https://www.globalapptesting.com/hubfs/Screenshot%202019-11-13%20at%2012.46.42.png)

### 15. CI / CD

    CI/CD:
    Yazılım mühendisliğinde, CI / CD veya CICD genellikle sürekli entegrasyon ve sürekli teslimat veya sürekli dağıtım uygulamalarının birleşik uygulamalarını ifade eder. CI / CD, uygulamaların oluşturulması, test edilmesi ve konuşlandırılmasında otomasyonu güçlendirerek geliştirme ve operasyon faaliyetleri ile ekipler arasındaki boşlukları kapatır.

![](https://stackify.com/wp-content/uploads/2019/04/big-Feature-Image-on-What-Is-CI_CD-1280x720.jpg)

      CI / CD ardışık düzeni, kod değişikliklerini daha sık ve güvenilir bir şekilde sunmak için ekiplerin uygulayabileceği en iyi uygulamalardan biridir
      Continuous Integration(Sürekli İntegrasyon)
      CI'nin teknik amacı, uygulamaları oluşturmak, paketlemek ve test etmek için tutarlı ve otomatik bir yol oluşturmaktır. Entegrasyon sürecinde tutarlılık sağlandığında, ekiplerin kod değişikliklerini daha sık gerçekleştirme olasılığı daha yüksektir ve bu da daha iyi işbirliği ve yazılım kalitesine yol açar.

### 16. Design and Development Principles

    - SOLID

    - KISS

    - YAGNI

    - DRY

    - GOF Design Patterns

    - Domain Driven Design

    - Test Driven Development

### &:17. Architectural Patterns

    - Monolithis Apps

    - Microservices

    - SOA

    - CQRS and Event Sourcing

    - Serverless

### 18. Search Engines

    - Elasticsearch

    - Solr

### 19. Message Brokers

    - RabbitMQ

    - Kafka

### 20. Containerization vs Virtualization

    - Docker

    - rkt

    - LXC

### 21. GraphQL

    - Apollo

    - Relay Modern

### 22. Graph Databases

    - Neo4j

### 23. WebSockets

    - WebSockets

### 24. Web Servers

    - Nginx

    - Apache

    - Caddy

    - MS IIS

### 25. Building for Scale

    General topics that you should learn and core about for the sustainability of the product.

    - Building with Observability in mind
    Metrics loggin and other observable items that could help you in debugging
     and solving the issue when things go wrong

    - Migration Strategies

    - Horizontal vs Vertical Scaling

    - Mitigation Strategies
      - Graceful
      - Degradation
      - Throttling
      - Backpressure
      - Loadshifting
      - Circuit Breaker

    - Understand the Diff.
      - Instrumentation
      - Monitoring
      - Telemetry

<hr>
<br>
<hr>
<br>
<hr>
<br>
<hr>
<br>
<hr>
<br>

## [Frontend Roadmap](https://roadmap.sh/roadmaps/frontend.png)

### 1. İnternet

    - How does the internet work ?

    - What is HTTP ?

    - Browsers and how they work ?

    - DNS and how it works ?

    - What is Domain Name ?

    - What is hosting ?

### 2. HTML

    - Learn the basics

    - Writing Semantic HTML

    - Forms and Validations

    - Conventions and Best Practices

    - Accessibility

    - SEO Basics

### 3. CSS

    - Learn the basics

    - Making Layouts
      - Floats
      - Positioning
      - Display
      - Box Model
      - CSS Grid
      - Flex Box

    - Responsive design and Media Queries

### 4. JavaScript

    - Syntax and Basic Constructs

    - Learn DOM Manipulation

    - Learn Fetch API / Ajax (XHR)

    - ES6+ and modular JavaScript

    - Understanc the concepts Hoisting, Event, Bubbling, Scope, Prototype, Shadow, DOM, strict

### 5. Version Control Systems

    What are they and why you should use one

### &: 6.Basic Usage of Git

    Git

### &: 7.Repo hosting services

    Create account and Learn to use Github
      - Github

      - Gitlab

      - Bitbucket

### 8. Web Security Knowledge

    Get at least a basic knowledge of all these
    - HTTPS

    - CORS

    - Content Security Policy

    - OWASP Security Risks

### 9. Package Managers

    - npm

    - yarn

### 10. CSS Architecture

    With modern frameworks and CSS-in-JS you don't have to worry about these anymore
     but still it would be a good idea to get familiarized with BEM atleast.

    - BEM

    - OOCSS

    - SMACSS

### 11. CSS Preprocessors

    With how the modern frameworks there has been more push towards CSS-in-JS
    so you may not need these but still a good idea to familiarize yourself.

    - Sass

    - PostCSS

    - Less

### 12. Build Tools

    - Task Runners
      - npm scripts

      - Gulp

    - Linters and Formatters
      - Prettier

      - ESLint

      - StandartJS

    - Module Bundlers
      - Webpack

      - Rollup

      - Parcel

### 13. Pick a Framework

    - Vue.js
      - VueX

    - React.js
      - Redux
      - MobX

    - Angular
      - RxJS
      - NgRx

    - Modern CSS
      - Styled Components

      - CSS Modules

      - Styled JSX

      - Emotion

      - Radium

      - Glamorous

### 14. Web Components

    - HTML Templates

    - Custom Elements

    - Shadow DOM

### 15. CSS Frameworks

    - JS based and better to use with your framework based JavaScript applications.
      - Reactstrap
      - Materail UI
      - Tailwind CSS
      - Chakra UI

    - CSS first frameworks which don't come with JavaScript components by default.
      - Bootsrap
      - Marerial CSS
      - Bulma

    - Testing your Apps
    Learn the difference between Until, Integration and Functional tests
    and learn how to write them with the tools listed on the left.
      - Mocha
      - Chai
      - Ava
      - Jasmine

    - You can fill all your testing needs with just these.
      - Jest
      - react-testing-library
      - Cypress
      - Enzyme

### 16. Type Checkers

    - TypeScript

    - Flow

### 17. Progressive Web Apps

    - Learn different Web APIs used in PWAs
      - Storage

      - Web Sockets

      - Service Workers

      - Location

      - Notifications

      - Device Orientation

      - Payments

      - Credentions

    - Calculating, Measuring and improving performance

### 18. Server Side Rendering(SSR)

    - Vue.js
      - Nuxt.js

    - React.js
      - Next.js
      - After.js

    - Angular
      - Universal

### 19. GraphQL

    - Apollo
    - Relay Modern

### 20. Static Site Generators

    - Next.js
    - GatsbyJS
    - Nuxt.js
    - Vuepress
    - Jekyll
    - Hugo

### 21. Mobile Applications

    - React Native
    - NativeScript
    - Flutter
    - Ionic

### 22. Desktop Applications

    - ElectronJS
    - Carlo
    - Proton Native

### 23. Web Assembly

There are five layers of software:

🌍 Hosting - where data is stored.

📦 Database - how data is stored.

🤔 Logic - how data is processed.

🔁 API - how data is fetched.

🖥 UI - how data is presented.
