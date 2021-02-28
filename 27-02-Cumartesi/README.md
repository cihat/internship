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

    İlişkisel veritabanı, 1970 yılında E. F. Codd tarafından önerildiği gibi, ilişkisel veri modeline
    dayanan dijital bir veritabanıdır.
    İlişkisel veritabanlarını korumak için kullanılan bir yazılım sistemi, ilişkisel bir veritabanı yönetim sistemidir
    (Relational Database Management System (RDBMS).)
    Birçok ilişkisel veritabanı sistemi, veritabanını sorgulamak ve sürdürmek için SQL (Structured Query Language)
    (Yapılandırılmış Sorgu Dili) kullanma seçeneğine sahiptir.

    İlişkisel veritabanı, birbiriyle ilişkili veri noktalarını depolayan ve bunlara erişim sağlayan bir veritabanı türüdür.
    İlişkisel veritabanları, verileri tablolarla temsil etmenin sezgisel, kolay anlaşılır bir yolu olan ilişkisel modeli temel alır.
    İlişkisel veritabanında, tablodaki her satır, anahtar adı verilen benzersiz kimliğe sahip bir kayıttır.
    Tablonun sütunlarında verilerin öznitelikleri bulunur ve her kayıt genellikle her öznitelik için bir değer taşır.
    Bu da veri noktaları arasında ilişki kurmayı kolaylaştırır.

    İlişkisel Model
    Veritabanlarının ilk yıllarında, her uygulama yazılımı kendi benzersiz yapısında veri depolardı.
    Geliştiriciler, bu verileri kullanmak için uygulama yazılımları oluşturmak istediklerinde ihtiyaç duydukları verileri
    bulmak için söz konusu veri yapıları hakkında çok şey bilmek zorundaydılar. Bu veri yapıları verimsiz,
    bakımı zor ve iyi uygulama yazılımı performansı sağlamak için optimize etmesi zor yapılardı.
    İlişkisel veritabanı modeli çoklu rastgele veri yapıları problemini çözmek için tasarlandı.
    İlişkisel model, tüm uygulama yazılımlarının kullanabileceği verileri temsil etmek ve sorgulamak için standart bir yol sağladı.
    Geliştiriciler, en baştan itibaren ilişkisel veritabanı modelinin temel gücünün, yapılandırılmış bilgileri depolamak ve
    bunlara erişmek için sezgisel, verimli ve esnek bir yol olan tabloları kullanmakta olduğunu fark etti.

    Zamanla, geliştiriciler bir veritabanında veri yazmak ve sorgulamak için yapılandırılmış sorgu dilini (SQL)
    kullanmaya başladıkça ilişkisel modelin bir diğer gücü ortaya çıktı. SQL uzun yıllardır veritabanı sorgulama dili
    olarak yaygın şekilde kullanılmaktadır. İlişkisel cebire dayanan SQL, tüm veritabanı sorgularının performansını
    iyileştirmeyi kolaylaştıran, dâhilî tutarlılığa sahip bir matematik dili sağlar. Buna karşılık, diğer yaklaşımlar
    tekil sorgular tanımlamalıdır.


    - PostgreSQL
        PostgreSQL, güçlü özellikler ve avantajlara sahip, açık kaynaklı ve tamamen ücretsiz nesne
        ilişkisel veri tabanı sistemidir. SQL dilinin güvenlik, depolanabilirlik ve ölçeklendirilebilme
        özelliklerinden faydalanan PostgreSQL, birçok alanda veri tabanı yöneticisi olarak da kullanılmaktadır.

        Bir çok işletim sisteminde kullanılabilinir. PostgreSQL’i rakipleri karşısında en güçlü kılan özelliği transaction,
        subselect, trigger, view, foreign key referential integrity ve sophisticated locking gibi (user-defined types),
        rules, inheritance ve lock cakışmalarını düşürmek için multi-version uyumluluk özelliklerine sahip olmasıdır.
        Performans açısından ise PostgreSQL diğer ticari veya açık kaynak kodlu veri tabanlarıyla kıyaslandığında başarılı
        metrik elde etmektedir. Kimi veri tabanı sistemleri karşısında bazı açılardan hızlıyken bazı açıdan ise yavaştır.
        PostgreSQL, MySQL ve aynı klasmandaki veri tabanlarıyla kıyaslandığında INSERT/UPDATE işlemlerinde, transaction
        bazlı çalıştığından ötürü daha yavaştır. Fakat yukarıda belirtmiş olduğumuz özelliklerin bir çoğu MySQL ve klasmanındaki
        veri tabanlarında bulunmamaktadır. Bazı açılardan PostgreSQL, MySQL ve klasmanındaki veri tabanlarının gerisinde kalmasına
        rağmen özellikler, güvenilirlik ve esneklik adına kayda değer avantajlara sahiptir.

    - MySQL

    - MariaDB

    - MS SQL

    - Oracle

### 9. More About Database

    - ORMs

    - ACID

    - Transactions

    - N + 1 Problem

    - Database Normalization

    - Indexes and how they work

    - Data Replication

    - Sharding Strategies

    - CAP Theorem

### &: 10. NoSQL Databases

     - MongoDB

     - RethinkDB

     - CouchDB

     - DynameDB

### 11. Learn about APIs

    - REST
    Read Roy Fielding's Paper

    - JSON APIs

    - SOAP

    - HATEOAS

    - Open API Spec and Swagger

    - Authentication
        - Cookie Based
        - OAuth
        - Basic Authentication
        - Token Authentication
        - JWT
        - OpenID
        - SAML

### 12. Caching

    - CDN

    - Server Side
      - Redis
      - Memcached

    - Client Side

### 13. Web Security Knowledge

    - Hashing Algorithms
      - MD5 and why not to use it
      - SHA Family
      - scrypt
      - bcrypt

    - HTTPS

    - CORS

    - SSL/TLS

    - OWASP Security Risks

    - Content Policy

### 14. Testing

    - Integration Testing

    - Unit Testing

    - Functional Testing

### 15. CI / CD

      CI/CD

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
