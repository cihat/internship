# Bu Readme dosyasında Yapılması Gereken Projeler Klasöründeki Projeri Yapmak İçin Gereken Bilgiler Mevcuttur.

## Api Nedir, Nasıl Çalışır ?

- API Nedir?
  API(Application Programming Interface)

  ### Günlük hayatımızda API'lar

  - Gittiğiniz bir kafeyi veya restorana müşteri olarak gittiğinizi düşünün. Garson size ilk olarak bir menü verir ve bu menüden karar vermenizi ister. Bu menüde o restorandaki farklı türdeki yiyecek ve içecekler gruplanmış olarak ve bazen de ufak açıklamalarıyla yer alır. Böylelikle hem siz alabileceğiniz ürünleri bilir, seçtiğiniz ürün karşılığında nasıl bir cevap alacağınızı bilirsiniz. Eğer bir gurme değilseniz yemeği kimin pişirdiği, içerisine kaç kaşık tuz koyduğu, hangi tabağa koyulacağı gibi o restoranın mutfağında ilerleyen teknik akışı bilmeniz gerekmez, sizin beklentiniz sadece verdiğiniz sipariş olur.
    ![](https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/content2/How_to_use_ig_trading_infographic_1.png)

  ### Yazılımda API

  - Restoran menü örneğimizi yazılım alanına dönüştürecek olursak. Siz birer istemcisiniz(client), restoran kullandığınız bir uygulama, menü ise bir API diyebiliriz. Menüden restoranın size açtığı ürünlerini görüp istediğinizden talep edebilirsiniz.
    İhtiyaçlara göre üretilmiş servislerin bazen birbirleriyle haberleşmesi de gerekebilir. Örneğin bir finansal raporlama uygulaması yaptığınızı düşünün. Yabancı para biriminde yapılan işlemleri Türk Lirasına dönüştürmek için merkez bankasının API'ını kullanarak güncel kur bilgisini alabilirsiniz.
    Son olarak bir proje yaptığınızı ama hem web sitesinin hem de Android ve iOS üzerinde ayrı ayrı uygulamaları olduğunu düşünün. Her bir platform için tüm kontrolleri ve tekrar tekrar yazmak yerine tek bir yerde API olarak işlemleri yapıp bu uygulamalardan API'a erişmek büyük kolaylık sağlayıp karmaşıklığı en aza indirecektir.
    ![](https://caylakyazilimci.com/image.axd?picture=/Images/api.jpg)

  ### API Kullanımları

  - Farklı dilde , farklı platformlar üzerinden çalışan uygulamaların birbirleriyle haberleşmesi için ilk olarak SOAP API (Simple Object Access Protocol) servisleri kullanılmaktaydı. SOAP servisler HTTP, SMTP protokolleri üzerinden aldığı istekleri genellikle XML formatında dönüş yapar. Günümüzde kullanımı azalmış olsa da kullanan firmalar halen mevcuttur.

    Günümüzde ise yaygın olarak REST API (Representational State Transfer) olarak da bilinen bir mimari yaklaşım tercih edilmektedir. Sadece HTTP protokolü üzerinden cevap alıp genellikle JSON formatında dönüş sağlar(isteğe göre XML de dönüş sağlayabilir).

<hr>
<br>

## Crud İşlemleri nedir

### CRUD (Create - Read - Update - Delete) Nedir?

<p><span style="font-weight: 400;"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CRUD tabanlı API'ler, (c) reate, (r) ead, (u) pdate ve (d) elete yaşam döngüsü modelini taklit eden örnekler içeren kaynak koleksiyonları sunan API'leri ifade eder. </font><font style="vertical-align: inherit;">CRUD modeli, içeriği veya durumu temsil eden bir kaynak örnekleri koleksiyonumuz olduğunda kullanışlıdır. </font><font style="vertical-align: inherit;">Genellikle şu tanıdık kalıbı izler:</font></font></span></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">GET /articles </span><span style="font-weight: 400;">– Mevcut makalelerin listesini listeleyin / sayfalayın / filtreleyin</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">POST /articles </span><span style="font-weight: 400;">– Create a new article</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">GET /articles/{articleId} </span><span style="font-weight: 400;">– Retrieve the representation of an article instance</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">PATCH /articles/{articleId}</span><span style="font-weight: 400;">– Bir makale örneği için belirli alanları güncelleyin</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">DELETE /articles/{articleId} </span><span style="font-weight: 400;">– Delete a specific article instance</span></li>
</ul>

### Veritabanı Kayıt (Ekleme, Okuma, Güncelleme ve Silme) İşlemleri

<p><strong>CRUD</strong> veri yönetimi sürecinde veri havuzunda yapılacak dört temel işlemi ifade eder; ekleme, okuma, güncelleme ve silme. Veri doğrudan işlenir ve işleme süreci dışında veriler pasiftir<sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">1</a></sup>. MySQL gibi bir ilişkisel veritabanına sorgu eklenmesi, ekli sorguların güncellenmesi gibi işlemler örnek olarak gösterilebilir<sup id="fnref1:4"><a href="#fn:4" class="footnote-ref">2</a></sup>.</p>
<p>CRUD ifadesi ilk kez 1983 yılında <strong>James Martin</strong> tarafından <strong>Managing the Data-base Environment</strong> başlıklı kitabında kullanılmıştır. Kısaltmadaki her harf standart bir SQL ifadesi ve HTTP yöntemiyle eşleşebilir. Ancak, bir ek not eklemekte fayda var. CRUD işlemleri <a href="/en/rest-ve-restful" title="REST ve RESTful">REST</a> mimarisi temelinde kullanılan <code>GET</code>, <code>PUT</code>, <code>POST</code> ile benzerlik gösterse de birebir aynı prensibe dayandıklarını söylemek mümkün değil. CRUD ile REST kıyaslandığında, CRUD daha ilkel işlemler bütünü olarak nitelendirilebilir. REST ise CRUD üzerine inşa edilebilir. Bu bağlamda yapılmış tartışmalarla ilgili aşağıda yer alan bağlantıları inceleyebilirsiniz<sup id="fnref1:5"><a href="#fn:5" class="footnote-ref">3</a></sup>.</p>
<ul>
<li><a href="https://www.bmc.com/blogs/rest-vs-crud-whats-the-difference/" target="_blank" rel="noopener noreferrer">REST vs CRUD: Explaining REST and CRUD Operations</a></li>
<li><a href="https://restfulapi.net/http-methods/" target="_blank" rel="noopener noreferrer">HTTP Methods</a></li>
<li><a href="https://softwareengineering.stackexchange.com/questions/120716/difference-between-rest-and-crud" target="_blank" rel="noopener noreferrer">Difference between REST and CRUD</a></li>
<li><a href="https://tyk.io/rest-never-crud/" target="_blank" rel="noopener noreferrer">REST was NEVER about CRUD</a></li>
<li><a href="https://www.oreilly.com/library/view/rest-in-practice/9781449383312/ch04.html" target="_blank" rel="noopener noreferrer"><em>Chapter 4. CRUD Web Services</em>, REST in Practice by Jim Webber, Savas Parastatidis, Ian Robinson</a></li>
<li><a href="https://wpdatatables.com/crud-system-in-wordpress/" target="_blank" rel="noopener noreferrer">How to create a CRUD system in WordPress – 2020</a></li>
</ul>
<p><abbr title="Linux, Apache, MySQL, PHP">LAMP</abbr>, <abbr title="MongoDB, Express, Angular, Node">MEAN</abbr>, <abbr title="MongoDB, Express, React, Node">MERN</abbr>, <abbr title="MongoDB, Express, Vue.js, Node">MEVN</abbr> gibi yığın uygulamaları üzerine oluşturulmuş pek çok örneğe ulaşabilirsiniz.</p>

<hr>
<br>

## Rest(REpresentational State Transfer) Api nedir, Nasıl Çalışır ?

- REST client-server iletişimiyle ilgili bir mimari. HTTP protokol’ü ile paralel olarak gelişmiş olmasının yani sıra bugün en çok hepimizin aşina olduğu World Wide Web sisteminde kullanılıyor. REST mimarisini kullanan servislere genel olarak RESTful servis deniyor. Ana fikir aslında client-server arasında ki veri alışverişini SOAP, RPC gibi kompleks mimarilerle sağlamak yerine, HTTP protokolü üzerinden sağlamak. Çünkü zaten World Wide Web dediğimiz yapı HTTP protokolü üzerine kurulu. RESTful servisler SOAP, RPC’nin aksine basit ve hafiftirler.
  ![](https://miro.medium.com/max/398/0*nF0-MvxdUMzEgCWT.png)
- Basit olmalarının yanında oldukça da esnek ve yeteneklidirler. Aslında tipik Web Servislerle yapabileceğiniz herşeyi RESTful servislerle yapabilirsiniz. Ayrıca mimari olarak nasıl olması, ne gibi özelliklere sahip olması hakkında belli yönergeler olsa da, burada SOAP gibi keskin standartları olan bir mimariden bahsetmiyoruz. Üzerine çoğu platformda (C#,JAVA vs.), bir sürü Framework yazılılmış durumda, fakat birçok platformun standart library’leri kullanılarak, kendimiz de hızlıca REstful Servisler geliştirebiliriz. REST Mimarisi ve LEGO arasında bir takım benzerlikler vardır.
- SOAP ile en büyük farkı, SOAP gibi bizi proxy kullanmaya, bir WSDL’e zorlamıyor olması (tamam teorik olarak sizde WSDL importer’ları proxy generator’ları kullanmak zorunda değilsiniz, kendiniz de yapabilirsiniz). Bunun avantajları ve dezavantajları var tabiki.
  REST mimarisindeki önemli noktalardan biride her HTTP request’inde yapılması istenilen işlemin HTTP Method’larıyla (Verb) ifade edilmesi. POST, PUT, DELETE ,GET gibi. Böylece proxy ihtiyacı ortadan kalkmış oluyor ve platform bağımsız yapılar kurmak kolaylaşıyor. Şuanki modern uygulamalarda bu Method’ları harfiyen kullanmak bir zorunluluk olmasa da, standartlara uymak, işlem tutartlılığı ve güvenliği açısından önemli.
- RESTful servisler’in birçok farklı response tipi olabilir. Bugünlerde popüler olarak JSON kullanılıyor fakat XML, CSV veya amaca bağlı olarak HMTL bile kullanılabilir. İlginç olan, önceki yıllarda bandwith düşük olmasına rağmen SOAP tabanlı servisler kullanarak kocaman kocaman verileri XML gibi verinin boyutunu daha da şişiren yöntemlerle aktarıyorduk. Şuan bandwith inanılmaz boyutlara ulaşmış durumda ve biz veri transferinde verinin boyutunu XML’e göre inanılmaz küçülten JSON kullanıyoruz.

  SOAP’ın aksine RESTful servislerin response’ları insan tarafından daha rahat anlaşılabilirler.
  Bugün birçok şirket RESTful servisleri kullanıyor;

  - Twitter’ın, Facebook’un Rest API’si var.
  - Google’un, Amazon’un, Azure’un çeşitle amaçlarla kullanılabilecek bir sürü REST servisi var.
  - Dünyanın en ünlü oyun firmalarından Blizzard Word of Warcraf oyuncularına karakterleri ile ilgili bilgileri RESTful servisler aracılığıyla sunuyor. Hatta yakında Diablo 3'de benzer bir API gelicek.
  - Eve Online’ın da benzer bir REST API’si var.

  Rest servisler ;

  - Platform bağımsızlar. (Client’ın Windows, Server’ın Linux olmasının hiç bir önemi yok)
  - Dil bağımsızlar .
  - HTTP üzerinden çalışıyorlar.
  - Esnekler ve çok kolay genişletilebilirler.

  #### Ayrıca belli kısıtları da var ;

  Bunlara kısıttan daha çok REST mimarisinin hangi sınırlar içerisinde yer almasını belirleyen prensipler diyebiliriz.

  ### Kısıtlar

  - ### Clint-Server Mimarisi :

    Burada anlatılmak istenilen aslında Separation of Concerns prensibi. Client’ın Server tarafındaki veri kaynağı hakkında hiç birşey bilmemesi, Server’ın da doğru istekler geldiği sürece doğru yanıtı vermesi. Client ile Server’ın birbirlerinden bağımsız olması. Amaç aslında platform bağımsız çalışmayı ve scalability’i arttırmak. Ayrıca aralarında ki interface ortak kaldığı sürece birbirlerinden bağımsız bir şekilde gelişmeleri de sağlanmış oluyor.

  - ### Stateless

    Server tarafında client ile ilgili bir context veya Session tutulmaz. Client tarafından yapılan her request Server’ın response verebilmesi için gerekli bilgiyi taşır, yani her türlü state client tarafında tutulur, ihtiyaç duyulursa request içerisinde server’a bildirilir. Bu Scalability açısından da önemlidir, çünkü server’ın requestler arasında herhangi bir state’i saklamasını gereksiz kılar ve kaynak yönetimini kolaylaştırır. Visibility açısından önemlidir, çünkü request’in amacını anlamak için tek bir request’in içerdiği bilgiler yeterlidir.

    Tabi stateless olmasının bazı dezavantajlarıda var. Client her request’de gerekli bilgileri eklemek zorundadır bu da network trafiğini arttırır. Bu ayrıca server’ın uygulamanın davranışlarındaki tutarlığı kontrol etmesini zorlaştırır, çünkü birçok farklı client’dan farklı içerikli requestler gelebilir, server’a validasyon açısından daha fazla yük binebilir.

  - ### Cacheable

    HTTP response’ları client tarafından “cache”lenebilir, o yüzden Server gönderdiği response’ların cacheable olup olmadığını belirtmek durumundadır, bu performans açısından önemlidir.

  - ### Uniform Interface

    Client-Server’lar arasında ortak, tekbiçimli arayüzlerin olması REST’in en önemli prensiplerinden biridir. Bu hem iletişim yöntemini basitleştiriyor hem de ortak bir interface olması sayesinde her parçanın birbirinden bağımsız bir şekilde evrimleşmesine olanak sağlıyor. Bu konu daha önce bahsettiğim HTTP Methodları ilede alakalı.

  - ### Layered System

    Client’ın son server’a mı yoksa bir aracı server’a mı bağlandığını bilmiyor olması, yani her katman aslında tek bir katmanı biliyor. Bu tür bir yapıya olanak sağlamasıyla birlekte, aracı serverlar load-balancing yaparak scalability arttırabiliyor ve client’ları belli security policy’lerine zorlayabiliyorlar. Bu yapı ayrıca encapsulation yapılması gereken yerlerde kullanılabiliyorlar.

    Tabi böyle bir pipe-line’ın aşırı kullanımı client — server arasında gecikmelere sebep olabiliyor.

  - ### Code on Demand

    Server belli durumlar’da client tarafındaki fonksiyonaliteyi arttırmak veya değiştirmek için, client tarafına executable scriptler gönderebilir. Böyle bir kullanım bazı durumlarda Visibility’i düşürdüğü için, Code on Demand tek opsiyonel kısıttır.
    Eğer bir servis Code on demand kısıtı hariç diğer kısıtları içermiyorsa tam olarak RESTful servis değildir. Bu kısıtların çoğu, bugünün modern programlama ortramlarında endişe edilmesi veya uygulanması zor kısıtlar değiller. Ayrıca bu kısıtların çoğu bize yabancı gelen kavramlar değiller, çoğumuz kendi mimarilerimizde de kullanmışızdır. Bence zaten en dikkat edilmesi gereken kısıt REST’in Stateless olması. REST’in hedefledikleri aslında ; Scalability, Simplicity, Modifiability, Visibility, Portability ve Reliability. Yukarıdaki kısıtlara ne kadar uyarsanız, hedeflediklerini o kadar gerçekleştirmiş olursunuz.

  - ### Resource ve URI

    REST mimarisinin kalbinde Resouce kavramı yatmaktadır. Resource kavramı REST’e özel bir kavram değil, halihazırda Web Browser’larda kullanmaktayız. Resource’lar herşey olabilir, entity, item veya dışarıya açmak istediğiniz herhangi birşey. REST resource’larını URI üzerinden tanımlar, SOAP’daki gibi “GetProductName”, “GetProductPrice” gibi method’lar veya servisler üzerinden iletişim kurulmaz. Mesela ;

    ```
    /products/productname/25
    /users/username/45
    ve ya
    /users/GetUser
    /users/DeleteUser
    ```

    gibi daha tanıdık gelen resource’larda oluşturabilirsiniz.
    Aslında URI templateleri oluşturuyorsunuz ;

    ```
    weatherForecast/{state}/{city}
    weatherForecast/{state}/{city}?date={date}
    ```

    gibi. Hatta isterseniz ;
    /products/productname/25?dataFormat=json gibi şeyler yaparak verinin geri dönüş tipini de belirtebilirsiniz. Buna da Resource Representation deniyor, bir response’un nasıl bir veri tipiyle döndüğü tamamen sizin tasarımınıza kalmış, isterseniz bir çok farklı tipi de destekleyebilirsiniz ya da sadece tek bir tip desteklersiniz. Yukarıda HTTP Method’larından bahsetmiştim. Mesela /users/GetUser’a request’de bulunurken GET Method’u ile gitmek veya /users/DeleteUser DELETE Method’u ile gitmek sağlıklı olur. Dediğim gibi bununla ilgili daha detaylı açıklama yapacağım.

    Resource kavramı REST’in kalbi, o yüzden RESTful bir servis yazmadan önce mutlaka Resource’larınızı tasarlayın.

  - ### HTTP Method’ları ve REST’de Kullanımı

    REST’deki en önemli konulardan biride HTTP Method’ların nasıl kullanılması gerektiği mevzuu.

    Öncelikle Idempotent kavramından bahsedilim. Matematik ve bilgisayar biliminde bir fonksiyonun bir defa uygulanması ile birden fazla defa uygulanması, sonucu değiştirmiyor ise bu fonksiyon Idempotent’dir. HTTP methodları arasında GET, PUT, DELETE Idempotent methodlardır. POST değildir.

    Bugün aslında GET ve POST her işimizi görüyor. Peki neden POST yerine PUT ve ya silmek için ayriyetten DELETE method’larına da kullanmamız gerekiyor. Bunun birkaç sebebi olmasına rağmen bu sebeplerin hiç biri bizi PUT ve DELETE kullanmak zorunda bırakan sebepler değil. Ama REST’in tek amacı data’ya en basit şekilde ulaşmak değildir, REST aynı zamanda data’ya anlamlı bir şekilde ulaşma metadolojisidir, bir request’e baktığınız zaman onun ne iş yaptığını anlamanız önemlidir. Ayrıca idempotency kavramı da bu noktada önemli. Akla ilk gelicek sorulardan biri POST mu? PUT mu?

    PUT ve POST arasındaki kavramsal farktan daha öncede bahsettik, PUT idempotent bir method, yani aynı Resource’a yaptığınız aynı PUT request’ini bir veya birden fazla defa yapmanız sonucu değiştirmez. Fakat POST aynı şey değil, o yüzden browserlar bizi POST yapılan bir yerde refresh, back gibi şeyler yaptığımızda uyarır, çünkü server’da ilgili resource’un state’i değişebilir. Tamam uygulamayı biz yazıyoruz, requestleri karşılayan bizleriz, POST’un da aynı davranışını sergilmesini sağlayabiliriz fakat client açısından mesela browserlar açısından PUT ve POST arasında çok fark var. Uniform Interface kısıtında da aslında kast edilen bu.

    Demek istediğim create işlemlerinde PUT kullanın değil, kafanız karışmasın, tam anlamıyla gerektiği yerde kullanmak lazım. Mesela ;

        HTTP/1.1 PUT /DataStorage/Pictures/deniz.jpg
        ...
        <deniz.jpg'in içeriği ... >

    Şeklinde bir request ile deniz.jpg adında bir resource’u server’da yaratıyoruz, bu request’i 100 kere de göndersek fark etmez çünkü hep deniz.jpg’yi gönderiyoruz. Bütün content’i aynı spesifik bir Resource’a gönderiyoruz. Fakat ;

        HTTP/1.1 POST /DataStorage/Pictures
        ...
        -----------------------------
        <?xml version="1.0" encoding="UTF-8"?>
        <DataStorage operation="add" type="jpeg">
        <[CDATA[ <herhangi bir resmin içeriği > ]]>
        </DataStorage>

    Farklı anladınız mı? Eğer bu request’i birden fazla tekrarlarsak, aynı content’e sahip 2 adet resim server tarafında oluşur. POST’un gücü ve tehlikesi de bu, POST ile herşeyi yapabilirsiniz, Create,Delete,Update herşeyi.
    Mesela tekrar bir örnek verelim. Bir forum siteniz var ve bir başlığın altına yorum eklemek istiyoruz, ilgili alanları doldurduktan sonra POST ederiz, çünkü bu aşamada bize PUT’daki gibi HTTP 200 (No error, operation successful.) response’u yetmez, çünkü aynı zamanda bir resource’da değişiklik yapıyoruz ve yaptığımız değişikliği görmek isteriz, o yüzden ASP.NET’de Postback kavramı vardır.

    Aslında özetle;

    <ul class=""><li id="4679" class="jf jg fp jh b ji jj jk jl jm jn jo jp jq jr js jt ju jv jw jx jy jz ka kb kc le lf lg cf" data-selectable-paragraph="">Create = Eğer spesifik bir Resource’un bütün bir içeriğini gönderiyorsanız PUT kullanın.</li><li id="7677" class="jf jg fp jh b ji lh jk jl jm li jo jp jq lj js jt ju lk jw jx jy ll ka kb kc le lf lg cf" data-selectable-paragraph="">Create = Eğer server’a spesifik bir <strong class="jh ld">Resource’a bağlı</strong> olan içerik gönderiyorsanız POST kullanın.</li><li id="e40d" class="jf jg fp jh b ji lh jk jl jm li jo jp jq lj js jt ju lk jw jx jy ll ka kb kc le lf lg cf" data-selectable-paragraph="">Retrieve = GET.</li><li id="596a" class="jf jg fp jh b ji lh jk jl jm li jo jp jq lj js jt ju lk jw jx jy ll ka kb kc le lf lg cf" data-selectable-paragraph="">Update = Eğer spesifik bir Resource’un bütün bir içeriğini gönderiyorsanız PUT kullanın.</li><li id="ac6c" class="jf jg fp jh b ji lh jk jl jm li jo jp jq lj js jt ju lk jw jx jy ll ka kb kc le lf lg cf" data-selectable-paragraph="">Update = Eğer spesifik bir <strong class="jh ld">Resource’a bağlı </strong>bir veya birden fazla içerik değiştiriyorsanız POST kullanın.</li><li id="2b75" class="jf jg fp jh b ji lh jk jl jm li jo jp jq lj js jt ju lk jw jx jy ll ka kb kc le lf lg cf" data-selectable-paragraph="">DELETE = :)</li></ul>

    Ayrıca bu method’ların response kod’larıda client açısından büyük önem taşır, bu kodları incelerseniz, nerede hangi Method’u kullanmanız gerektiği kafanız daha iyi oturur.
    REST konusunu araştırırken en çok takıldığım konulardan biri de nerede POST nerede PUT konusuydu. O yüzden bu kısmın üzerinde bu kadar çok durdum.

### REST VE RESTFUL WEB SERVİS NEDİR?

- REST(Representational State Transfer)(Temsili Durum Aktarımı), 2000 yılında Roy Fielding tarafından doktora tezinde tanıtılmış ve tanımlanmıştır.REST, dağıtık sistemler tasarlamak için kullanılan bir **mimari tarzdır**.

- REST, client-server arasındaki haberleşmeyi sağlayan HTTP protokolü üzerinden çalışan bir mimaridir. REST ,servis yönelimli mimari üzerine oluşturulan yazılımlarda kullanılan bir transfer yöntemidir.İstemci ve sunucu arasında XML ve JSON verilerini taşıyarak uygulamanın haberleşmesini sağlar.REST’in tüm prensiplerini yerine getiren API’ler ise RESTful olarak nitelendirilir. **REST mimarisini kullanan servislere ise RESTful servis denir**.
  HTTP protokolünü kullanıyor olması nedeniyle REST API’i pratik olarak herhangi bir programlama dilinde kullanabilir. REST API’yi yazılımlarınızda kullanarak yazılımınızın uzun ömürlü olmasını sağlayabilir ve gelişimini pozitif yönde destekleyebilirsiniz.

  REST ile aktarılan verilerin formatı HTML, JSON, XML veya farklı bir formata sahip olabilir. Diğer katı kurallı ve dediğim dedik API’lerin aksine REST, geliştiriciler için bu konuya bir kısıtlama getirmiyor.

  ![](https://miro.medium.com/max/216/1*ToSMWo5Rs89wctuIcnOhzA.png)

    <p>REST API, <a href="https://wmaraci.com/nedir/parse" class="kelime" target="_blank">Parse</a> kullanarak herhangi bir isteği HTTP üzerinden kullanmaya yardımcı olur. REST için Parse tanım örneklerine göz atmak adına <a href="https://docs.parseplatform.org/rest/guide/" rel="nofollow external" target="_blank">buradaki linke uğrayabilirsiniz</a>. Kapsamlı olmasa <a href="https://wmaraci.com/nedir/da" class="kelime" target="_blank">da</a> REST API adına basit bir örnek vererek, bu API’nin tam olarak ne şekilde işleyeceğinizi, popüler bir REST API örneğiyle ilişkilendirebiliriz:</p>

  - Parse Nedir
    Aslında yukarıda kullanılan parse, bir npm packagedir, işlemleri daha rahat kullanmak için 3.parti bir yazılımdır.
    Parse, bilgisayar biliminde bileşenlerin daha kolay işlenmesi ve söz diziminin doğruluğunun kontrol edip etiketlenmesine yardımcı olan dönüşüm yöntemidir. Parse sayesinde bilgisayarlar her bir bileşene işleme alabilir ve zahmetsizce makine diline dönüştürebilirler.
    Parse’i kullanarak bileşenler içindeki cümleler ayrıştırılabilir ve kelimeler her birinin ayrı bileşenlere dağıtılabilirler. Parse yöntemi, yüksek seviyeli programlama dillerinin (high-level programming language) tümünde kullanılmaktadır.

### HTTP Metotları

- GET
  Veri listeleme ,veri görüntülemek için kullanılır.GET request’ler güvenli ve idempotent olmalıdır, yani aynı parametrelerle kaç kez tekrar ettiğine bakılmaksızın sonuçlar aynıdır.GET ile veri gönderilirken ,adres çubuğunda gönderilir.Gönderilen değişkenler ve veriler adres çubuğunda görüntülendiği için güvenilir değildir.Ancak veriler MD5 şifreleme ile güvenilir bir şekilde de gönderilebilir.

  Örneğin: Get ile sipariş detaylarını getirebiliriz.
  GET : /orders/{id}

- POST
  Veri eklemek için kullanılır ancak mevcut olan bir veriyi güncellemek için de kullanılır.Doğrudan sayfaya veri gönderilir ve veriler adres çubuğunda görünmez .Daha güvenilir yöntemdir.

  Örneğin: POST ile yeni bir sipariş oluştururuz.
  POST: /orders/
  Aşağıdaki şekilde GET ve POST farklılıkları daha rahat bir şekilde görülmektedir.

  ![](https://miro.medium.com/max/373/1*ok4i6h-pacq5H1OW8qYnMQ.png)<br>
  ![](https://miro.medium.com/max/373/1*KKA6NKSWxpQIKB4M5I9nIQ.png)

- İLİŞKİLİ APİ UÇLARI
  ![](https://miro.medium.com/max/1620/1*GIiYwvBEFReWH4QAdU0Mzw.png)

- PUT
  Veri güncellemek için kullanılır.PUT ‘un POST’dan farkı idempotent olmasıdır.Yani bir request birden fazla kez tekrarlansa da sonucunun aynı olmasıdır.

  Örneğin: PUT ile belirli sipariş güncelleriz.
  PUT : /orders/{id}
  Örneğin :
  PUT /orders de update edilecek bir sipariş yok.Tüm siparişleri de güncelleyemeyeceğimize göre PUT metodunu kullanamayız.

- PATCH
  Verinin sadece bir parçasını güncellemek için kullanılır.
  PATCH /addresses/1

- DELETE
  Kaynaktan veriyi silmek için kullanılır.

  Örneğin: Id’si verilen adresi sileriz.
  DELETE /addresses/id

- HTTP status codes
  <ul class=""><li id="c18e" class="if ig go ih b ii lj ij ik il lk im in io ll ip iq ir lm is it iu ln iv iw iy ly lz ma ew" data-selectable-paragraph="">1XX ile başlayan kodlar bilgi amaçlı kodlardır.</li><li id="f197" class="if ig go ih b ii mb ij ik il mc im in io md ip iq ir me is it iu mf iv iw iy ly lz ma ew" data-selectable-paragraph="">2XX ile başlayan kodlar başarı kodlarıdır.</li><li id="7067" class="if ig go ih b ii mb ij ik il mc im in io md ip iq ir me is it iu mf iv iw iy ly lz ma ew" data-selectable-paragraph="">3XX ile başlayan kodlar yönlendirme kodlarıdır.</li><li id="f201" class="if ig go ih b ii mb ij ik il mc im in io md ip iq ir me is it iu mf iv iw iy ly lz ma ew" data-selectable-paragraph="">4XX ile başlayan kodlar ise client(istemci) hatası kodlarıdır.</li><li id="735b" class="if ig go ih b ii mb ij ik il mc im in io md ip iq ir me is it iu mf iv iw iy ly lz ma ew" data-selectable-paragraph="">5XX ile başlayan kodlar ise server(sunucu) hatası kodlarıdır.</li></ul>
<hr>
<br>

## Rest API ve CRUD Arasındaki Farklar

Şimdi, CRUD, birçok uygulamada ortak bir özellik olduğu için kısaltılmış basit bir terimdir ve CRUD demek daha kolaydır . Veriler (veya bir kaynak) üzerinde gerçekleştirebileceğiniz 4 temel işlemi açıklar. Oluşturun, Okuyun, Güncelleyin, Silin.

Ancak REST, kendi başına bir teknoloji değil, adlandırılmış bir uygulamadır (tıpkı AJAX gibi). HTTP protokolünde uzun süredir var olan, ancak nadiren kullanılan yeteneklerin kullanımını teşvik eder.

Bir URL'niz olduğunda (Tekdüzen Kaynak Konum Belirleyici ) ve tarayıcınızı adres satırından ona yönlendirdiğinizde, bir HTTP isteği göndermiş olursunuz . Her HTTP isteği, sunucunun, isteği gönderen istemciye hangi HTTP yanıtının geri gönderileceğini bilmek için kullanabileceği bilgileri içerir .

Her istek bir URL içerir, böylece sunucu hangi kaynağa erişmek istediğinizi bilir , ancak bir method'da içerebilir . Bir method , o kaynakla ne yapılacağını açıklar .

Genellikle insanlar GET methodu ile sayfalara bağlanır ve POST methodu ile her türlü güncellemeyi (silme, ekleme, güncelleme) yayınlar.

Ve bu nedenle, bir kaynağı (URL) kendi başına gerçek bir kaynak olarak değerlendiremezsiniz. Aynı kaynağın silinmesi, eklenmesi veya güncellenmesi için ayrı URL'lere sahip olmanız gerekiyordu. Örneğin:

<pre><code>http://...com/posts/create- POST request  -&gt; Goes to posts.create() method in the server
http://...com/posts/1/show- GET request  -&gt; Goes to posts.show(1) method in the server
http://...com/posts/1/delete - POST request  -&gt; Goes to posts.delete(1) method in the server
http://...com/posts/1/edit- POST request  -&gt; Goes to posts.edit(1) method in the server
</code></pre>

REST ile, POST dışında diğer HTTP yöntemlerini kullandıkları için daha akıllı formlar oluşturursunuz ve sunucunuzu yalnızca URL'leri değil, yöntemler arasında ayrım yapabilecek şekilde programlarsınız . Yani mesela:

<pre><code>http://...com/posts - POST request  -&gt; Goes to posts.create() method in the server
http://...com/posts/1 - GET request  -&gt; Goes to posts.show(1) method in the server
http://...com/posts/1 - DELETE request  -&gt; Goes to posts.delete(1) method in the server
http://...com/posts/1 - PUT request  -&gt; Goes to posts.edit(1) method in the server
</code></pre>

- CRUD, bir veri havuzunda yapılacak temel işlemler anlamına gelir. Kayıtları veya veri nesnelerini doğrudan yönetirsiniz; bu işlemlerin dışında kayıtlar pasif varlıklardır. Tipik olarak sadece veritabanı tabloları ve kayıtlarıdır.
- Öte yandan REST, her biri bir URL ile tanımlanan kaynak temsilleri üzerinde çalışır. Bunlar tipik olarak veri nesneleri değil, karmaşık nesne soyutlamalarıdır.
- Kısaca, CRUD bir dizi ilkel işlemdir (çoğunlukla veritabanları ve statik veri depoları için), REST ise çok yüksek seviyeli bir API stilidir (çoğunlukla web hizmetleri ve diğer 'canlı' sistemler için).
  CRUD temel verileri işler, REST API karmaşık bir sistemle etkileşime girer.

  <hr>
  <br>

## RESTful API Nedir ?

- RESTful API,bir API’nin REST mimarisinin tüm sınırlamalarına sahip olması durumunda API’yi tasvir etmek için kullanılan sıfattır. Hemen aşağıda mini liste olarak yer verdiğimiz içeriklere sahip API’ler, RESTful API olarak adlandırırlar. Listedeki sınırlamalardan tek birinin sağlanmaması durumunda bile API, “RESTful” olma özelliğini kaybetmiş olur. Bir API’nin RESTful API mi, yoksa REST API mi olduğu ayrımını yapmak adına bu listeye hakim olmanız tavsiye edilir:

  <ul>
    <li><strong><a href="https://wmaraci.com/nedir/istemci" class="kelime" target="_blank">İstemci</a> ve <a href="https://wmaraci.com/nedir/sunucu" class="kelime" target="_blank">sunucu</a>:</strong> İstemci front-end, sunucu ise back-end ile ilgilenir. Her ikisi birbirinden bağımsız olarak değiştirilebilir.</li>
    <li><strong>Durumsuzluk:</strong> İstemcinin sorgu ve oturum durumuna dair depolama verileri hiçbir sunucu üzerinde barındırılmaz.</li>
    <li><strong>Önbellekleme:</strong> İstemciler performansı arttırmak için yanıtı <em>(tıpkı bir internet sayfasının statik elementi gibi)</em> önbellekleyebilirler.</li>
    <li><strong>Tabaklı sistem:</strong> İstemci sondaki sunucu veya aradaki süreç boyunca bir aracıya bağlı olup olmadığını söyleyemez.</li>
    <li><strong>Talep üzerine kod:</strong> Sunucular, istemcinin fonksiyonelliğini geçici olarak icra ederek kod yollayabilir, genişletebilir ya da özelleştirebilir.</li>
  </ul>
  <p><strong>Değişmeyen arayüz:</strong> Değişmeyen arayüz <em>(Uniform interface)</em>, RESTful API’nin değişmez temellerini temsil eder. Bu arayüz, mimariyi sadeleştirerek parçalara böler. Bu sayede her taraf birbirinden bağımsız gelişebilir. Değişmeyen arayüze ilişkin dört sınırlama vardır. Karışmaması namına bu maddeye ayrı bir mini listeyle devam edeceğiz ancak “değişmeyen arayüz” bir RESTful API’nin temeli olup, bu eleman yukarıdaki listeden bağımsız değildir.</p>
  <ul>
	<li><strong>Kaynakların belirlenmesi:</strong> Kaynakların belirlenmesi, RESTful API için bir esastır. Kaynaklar isteklerle belirlenir. Bu genellikle <a href="https://wmaraci.com/nedir/web-tabanli" class="kelime" target="_blank">web tabanlı</a> sistemlerde değişmeyen arayüz kaynak kimliği <em>(uniform resource identifier, URI)</em> kullanılarak gerçekleştirilir. Kaynaklar sunumlarla aynı değildirler. Sunucu hiçbiri dahili sunuma sahip olmamasına rağmen veritabanından gelen sonuç verisini HTML, JSON veya XML olarak gönderebilir.</li>
	<li><strong>Bu temsiller yoluyla kaynakların manipülasyonu:</strong> Herhangi bir istemci, temsili kaynağı bağlı bir metaveriyle birlikteyse kaynağı değiştirmek veya silmek için yeteri kadar bilgisi vardır.</li>
	<li><strong>Kendinden açıklayıcı mesajlar:</strong> Mesajların tümünde nasıl işleneceğine dair yeterli bilgi vardır. Örneğin ayrıştırıcının çalıştıracağı bir internet medya tipi ile belirlenmiştir.</li>
	<li><strong>Aplikasyon durumu motoru olarak hipermedya:</strong> İstemciler durumu değişikliğini sunucu tarafından belirlenen dinamik eylemlerle yapabilirler.</li>
</ul>

<hr>
<br>

## AJAX Nedir ?

- AJAX Nedir?” AJAX, Asynchronous JavaScript and XML, Türkçe olarak Eşzamansız ve XML’in kısaltılmışıdır. Sunucuya gelen herhangi bir isteği arkaplanda işleyerek web uygulamalarının eşzamanlı olmadan çalışmasına olanak sağlayan bir takım web geliştirme teknikleridir.

- eXtensible Markup Language – Genişletebilir İşaretleme Dili, XML, HTML gibi işaretleme dilinin başka bir değişkenidir. Eğer HTML veriyi göstermek için tasarlandıysa, XML veriyi kapsamak ve taşımak için tasarlanmıştır.

- Hem JavaScript, hem de XML AJAX’da eşzamanlı olmadan çalışır. Sonuç olarak, AJAX kullanan herhangi bir web uygulaması tüm sayfayı yenileme ihtiyacı olmadan veri yollayabilir ve alabilir.

  ### AJAX’ın Pratik Örnekleri

  - Google’un otomatik tamamlama özelliğini düşünün. Siz anahtar kelimelerinizi yazarken o size onları tamamlamanıza yardım eder. Sayfa aynı kalırken anahtar kelimeler gerçek zamanlı olarak değişir. 90’ların başlarında, internet şimdiki kadar gelişmediği zamanlarda aynı özellik Google’ın ekranınızda her yeni bir öneri çıktığında sayfanızı yeniden başlatmasını gerektirirdi. AJAX veri değişimi ve sunuş katmanının birbirlerinin fonksiyonlarına karışmadan aynı anda çalışmalarına olanak sağlar.

  - Oylama ve puanlama sistemi
    Hiç online olarak aldığınız bir ürün için puan verdiniz mi? Hiç online bir oylama formu doldurdunuz mu? Her türlü, iki işlem de AJAX kullanır. Puanlama veya oylama tuşuna tıkladığınızda, web site hesaplamayı güncelleyecek ancak bütün sayfa değişmemiş kalacaktır.

  - Sohbet odaları
    Bazı web siteleri ana sayfalarında müşteri desteği memurlarından birine konuşabileceğiniz, yerleşik bir sohbet odası kullanır. Eğer aynı anda sayfada dolaşmak istiyorsanız endişelenmenize gerek yoktur. AJAX, her mesaj attığınızda ve aldığınızda sayfanızı yenilemeyecektir.

  - Twitter’ın gündem bildirimi
    Twitter yakın zamanda güncellemeleri için AJAX kullandı. Belirli gündem konuları hakkında her yeni tweet atıldığında, Twitter ana sayfayı etkilemeden yeni rakamları güncelleyecektir.

### AJAX Nasıl Çalışır?

![](https://www.hostinger.web.tr/rehberler/wp-content/uploads/sites/6/2019/05/ajax-nedir-diyagram.jpg)

<hr>
<br>

## Node.js Nedir ?

- Javascript programlama dili bildiğiniz üzere eskiden sadece istemci tarafında (client-side) çalışan bir dildi. Tarayıcıda çalıştırdığımız Chrome V8 Engine kullanıma sunuldu ve artık sunucu tarafında da (server-side) Javascript dilini kullanabiliyoruz. İşte Javascript dilini sunucu tarafında kullanmamıza olanak sağlayan Chrome V8 Engine, Node.js olarak adlandırılmaktadır.

- Node.js temel olarak sunucu tarafında çalışan javascripttir. Javascript temelli olması sebebiyle çok dinamik ve hızlı yapısı vardır.
  Javascript dilinin Node.js vasıtasıyla Back-end’e taşınmasıyla artık sadece bir dil bilerek full-stack uygulama geliştirebilirsiniz. Zaten son dönemde artık React gibi Javascript Front-End kütüphane ve framework’leri de ciddi seviyede popüler olmaya başladı.
  - Örneğin şu an C#, Java, Python, Ruby, Php gibi ekstra bir dil öğrenmeye gerek kalmadan sadece Javascript bilerek Node ve React ile full-stack web uygulamaları geliştirebilirsiniz. Bir startup fikriniz varsa Node ve React ile hızlıca MVP geliştirip yayınlayabilirsiniz.
- Node.js’in en önemli özelliği asenkron yapıda çalışması ve non-blocking olması. Peki nedir bu asenkron çalışma ve non-blocking?

  - Asenkron ve non-blocking çalışma mantığını bir restoran örneği ile çok iyi bir şekilde anlayacağınızı düşünüyorum. Bir restorana gittiğinizi düşünün ve sipariş verin. Siz siparişi garsona vereceksiniz, o da aşçıya bildirecek ve aşçı sizin yemeğinizi yapmaya başlayacak. Diyelim ki sizin istediğiniz yemeğin yapılış süresi 30 dk. Bu arada tabi ki restorandaki tek kişi siz değilsiniz. Bir çok kişi aynı anda garsona sipariş verecek ve aşçılar yemekleri yapmaya başlayacak. Eğer garson diğer kişilerin siparişlerini sizin yemeğinizin yapılıp size teslim edilene kadar almasaydı sizden sonra sipariş vermeyi bekleyen insanlar çok zaman kaybetmiş olacaktı. Ama garson siparişi aldı ve ilettti, sonra başkasının siparişini aldı, onu da iletti. Dolayısıyla kimse diğerinin siparişinin bitmesini beklememiş oldu. İş bu sistemde bir kişinin isteği diğerinin işini engellememiş oldu.

    - Aynı sistem node.js çalışma mantığında da var. Node.js tarafına bir işlem için istek gönderildiğinde node.js onu alıp hemen işleme koyuyor ama diğer işlemi almak için bu işlemin bitmesini beklemiyor. Sırayla istekleri alıyor ve sonuçları beklemeden devam ediyor. Sonuçlar geldikçe iletiyor. Aynı restoran mantığında çalışıyor ve bu durumda bir istek diğer isteğin bitmesini beklemediği için diğer isteği engellememiş oluyor. Hangisi önce biterse o isteğin cevabı geliyor. İşte bu mantığa asenkron çalışma mantığı deniyor ve bir işlem diğer işlemi engellemediği içinde non-blocking oluyor.

      ![](https://miro.medium.com/max/373/0*APswsNi3CbEJhetW.png)

- <p id="b484" class="iq ir fe is b it iu iv iw ix iy iz ja jb jc jd je jf jg jh ji jj jk jl jm jn ew cm" data-selectable-paragraph="">Nodejs’in en büyük avantajlarından bir tanesi de modüler yapısı ve bu yapıyı destekleyen paket yönetim sistemi olan <strong class="is jw">npm (nodejs package manager). </strong>Npm’i Node.js projelerinde kullanılmak üzere içerisinde bir çok modül barındıran bir depo gibi düşünebiliriz. Bu modüller open-source geliştiricileri tarafından yazılarak <a href="https://www.npmjs.com/" class="cs jx" rel="noopener nofollow">npmjs.com</a> üzerine yüklenmektedir. Npm içerisinde şu an 1 milyondan fazla paket, modül eklenmiş durumda. Bu da aslında popülaritesini gerçekten net olarak gösteriyor.</p>

-

<hr>
<br>

## Express Nedir, Nasıl Çalışır, Görevleri nelerdir? Express Olmadan Önce Ne Kullanılıyordu, Alternatifleri?

- Node.js platformunun http modülü ile ilgili işlemleri kolay kullanılabilir bir hale getirmek için geliştirilmiş en popüler (express.js) pakettir.

- <p><strong>Express.js</strong> modülü / paketi, <a href="/en/node-js-nedir">Node.js</a> tabanlı bir web uygulama sunucu çatısıdır. Express.js’nin sunduğu sınırsız HTTP yardımcı araçları ve katmanlar sayesinde sağlam bir API oluşturmak oldukça hızlı ve kolaydır.</p>

- ### Express.js Modülünün Sağladığı Avantajlar

<ul>
<li>Kolay ve hızlı bir şekilde Web uygulamaları geliştirme imkanı sağlar,</li>
<li>Pug<sup id="fnref1:2"><a href="#fn:2" class="footnote-ref">2</a></sup>, EJS<sup id="fnref1:3"><a href="#fn:3" class="footnote-ref">3</a></sup>, <a href="/en/handlebars-nedir">Handlebars</a> gibi şablon motorları (template engine) uygulama geliştirme süreçlerinde kullanılabilir,</li>
<li>Orta katman (Middleware) modülleri ile kapsamlı uygulamalar geliştirilebilir,</li>
<li><a href="/en/routing-nedir">Route (Yönlendirme)</a> yöntemiyle web istekleri yönetilebilir,</li>
<li>MySQL, MongoDB, SQL SERVER gibi veritabanı uygulamaları uygulamalarda kullanılabilir.</li>
<li>Farklı uygulamalar için <a href="/en/rest-soap-api-nedir">REST API</a> oluşturmak mümkündür,</li>
<li>Statik dosyaların yönetimini kolaydır,</li>
</ul>

<hr>
<br>

## DataBase, Veri tabanları, Veri Yapısı Nedir, Nasıl çalışır ?

[DataBase Nedir](https://aycaakcay.medium.com/veri%CC%87-tabani-95a062cfdd8c#:~:text=Veritaban%C4%B1%2C%20kolay%20eri%C5%9Fim%20ve%20manip%C3%BClasyon,birbirleriyle%20ili%C5%9Fkili%20bilgilerin%20depoland%C4%B1%C4%9F%C4%B1%20alanlard%C4%B1r.&text=Veri%20tabanlar%C4%B1%3B%20b%C3%BCy%C3%BCk%20miktardaki%20bilgileri,sistemine''%20alternatif%20olarak%20geli%C5%9Ftirilmi%C5%9Ftir.)

<hr>
<br>

## MongoDB Nedir, Nasıl Çalışır ?

[Nedir Bu MongoDB ?](https://medium.com/@berkekurnaz/nedir-bu-mongodb-994a94a9d1df)<br>
[NoSQL veritabanı MongoDB](https://medium.com/@erhankocabuga/nosql-veritabani-mongodb-nodejs-16f3c350517d#:~:text=MongoDB%20Nedir%3F,tabanl%C4%B1%20bir%20database%20y%C3%B6netim%20sistemidir.&text=D%C3%B6k%C3%BCman%20tabanl%C4%B1%20dedim%20%C3%A7%C3%BCnk%C3%BC%20b%C3%BCnyesinde,verilen%20bir%20data%20yap%C4%B1s%C4%B1n%C4%B1%20kullan%C4%B1r.)<br>
[Veritabanı (Database) Nedir? Ne İşe Yarar?](https://medium.com/pamukkale-ybs/veritaban%C4%B1-database-nedir-ne-i%CC%87%C5%9Fe-yarar-d1cbba9243d0)

<hr>
<br>

## Mongoose Nedir ?

<br>
<hr>

## Bu bilgiler alıntılanmıştır. Aşağıda kaynak linkleri mevcuttur.

[Kaynak(Deniz İrgin'ının REstful Web Server Kavramı - Medium Yazısı)](https://denizirgin.com/rest-ve-restful-web-servis-kavram%C4%B1-30bc4400b9e0)
[Kaynak(Crud Nedir)](https://ceaksan.com/en/crud-create-read-update-delete)<br>
[Kaynak(Crud ve Rest API Arasındaki Farklar)](https://softwareengineering.stackexchange.com/questions/120716/difference-between-rest-and-crud)<br>
[Kaynak(REST API)](https://medium.com/@bsrutmn/rest-ve-restful-web-servi%CC%87s-nedi%CC%87r-7258b7db7f66)
[Kaynak (wnaraci.com)](https://wmaraci.com/nedir/rest-api)
[Kaynak(Apı Nedir)](https://caylakyazilimci.com/post/api-nedir)
[Kaynak(Ajax Nedir)](https://www.hostinger.web.tr/rehberler/ajax-nedir/)
[Kaynak(Nodejs Nedir - Mehmet TEK - Node.js Nedir, Avantajları Nelerdir ve Neden Çok Popüler?)(https://medium.com/e-anatolia/node-js-nedir-avantajlar%C4%B1-nelerdir-ve-neden-%C3%A7ok-pop%C3%BCler-cb15d1f137db)]
