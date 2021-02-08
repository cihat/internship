# DNS(Domain Name System)

DNS (İngilizce: Domain Name System, Türkçe: Alan Adı Sistemi) tarayıcınızın adres çubuğuna girdiğiniz site ismini, girmek istediğiniz sitenin gerçekte ikamet ettiği IP adresine çeviren ve internette gezinmeyi kolaylaştıran oldukça yararlı bir sistemdir. Örneğin hiç kimse şu anda Google’ın ikamet adresi olan 172.217.17.174 adresini tarayıcısına yazmaz. Onun yerine www.google.com yazar ve DNS sunucusu, bu adresi IP adresine yönlendirir.

<img src="https://www.webtekno.com/images/editor/default/0002/77/da27b462cb05cfb02694a4869b3488d661b5aa58.jpeg" width=500>

- ### DNS Görevi Nedir?

Bu sistemin görevi internet sitelerine erişmek için IP adresleri yerine kullanılan isimlerin sunucularda sorgulanarak kullanıcı ulaşımını sağlamaktadır. Böylece daha kolay bir şekilde internet sitelerine ulaşımı sağlar. Akılda kalıcı alan adlarının kullanılabilmesine imkan sağlar.

Sunucular internet ağına bağlı istemcilerden gelen IP adresi sorgularına karşılık gelen alan adlarını muhafaza eder. Bu alan adı sorgularını yanıtlayarak doğru sitelere yönlendirilmesini sağlar. Ağ üzerindeki iletişim için gerekli verileri tutar.

- ### DNS Sunucusunun Nasıl Çalışır?

  DNS sistemi isim sunucularından ve çözümleyicilerden oluşur. Bu isim sunucuları olarak kullanılan bilgisayarlar host ismine denk gelen IP adreslerini barındırırlar. Çözümleyiciler ise birer istemci olarak görev yaparlar. İstemcilerde DNS sunucusu (isim sunucusu) ya da bu sunucuların adresleri bulunmaktadır. İstemci bir bilgisayarın ismine denk gelen IP adresini bulmak istediğinde isim sunucusuna başvurur. İsim sunucusunun kendi veri tabanında sorgulanan isme karşılık gelen bir IP adresi varsa onu istemciye gönderir. Bu veri tabanına kayıtların manuel olarak yapılması gerekir.

  - İnternet adresleri ilk olarak yer aldıkları ülkelere göre ayrılır. İnternet adreslerinin sonunda yer alan tr, uk, nl gibi ifadeler sitenin bulunduğu ülkeyi ifade eder. DNS ve benzeri sistemleri yaratan ülke ABD olduğu için bu ülkenin internet sitesi adresleri için ülke takısı kullanılmaz. İnternet siteleri bulundukları ülkelere göre ayrıldıktan sonra com, net, gov gibi alt bölümlere de ayrılır. Bu ifadeler DNS içerisinde üst seviye alan adlarına karşılık kullanılır. Alan adları belirli bir kurala göre şekillenen ağaç yapısı biçiminde dallanan bir yapıdadır. ABD hariç, internet ağına bağlı olan tüm ülkelerde adresler, o ülkeye ait ülke kodu ile biter. Türkiye’de tüm alt alan adları .tr ile bitmektedir.

<table>
  <ul><li><strong>Com : </strong>Ticari kuruluşları gösterir.</li><li><strong>Edu : </strong>Eğitim kurumlarını gösterir.</li><li><strong>Org : </strong>Ticari olmayan, hükümete de bağlı bulunmayan kurumları gösterir.</li><li><strong>Net : </strong>İnternet omurgası işlevini üstlenen ağları gösterir.</li><li><strong>Gov : </strong>Hükümete bağlı kurumları gösterir.</li><li><strong>Mil : </strong>Askeri kurumları gösterir.</li><li><strong>Num : </strong>Telefon numaralarını bulabileceğiniz yerleri gösterir.</li><li><strong>Arpa : </strong>Ters DNS sorgulaması yapılabilecek yerleri gösterir.</li></ul>
</table>
<hr>

<ul><li>Google.com &gt; 172.217.17.174</li><li>Gmail.com &gt; 74.125.24.19</li><li>Microsoft.com &gt; 40.112.72.205</li><li>Hotmail.com &gt; 204.79.197.212</li><li>Apple.com &gt; 17.142.160.59</li><li>Instagram.com &gt; 3.234.67.196</li><li>Facebook.com &gt; 185.60.216.3</li></ul>
<hr>

## DNS Süreci Nasıl Çalışır?

- ### Adım 1: Web Sitesi Bilgileri İsteme

  Bir web tarayıcısına bir alan adı yazarak bir web sitesini ziyaret edelim. Bilgisayarımız, www.liquidweb.com gibi ana bilgisayar adını çözmeye başlayacaktır. Bilgisayarımız daha sonra yerel DNS önbelleğinde alan adıyla ilişkili IP adresini arayacaktır . Bu önbellek, bilgisayarımızın yakın zamanda kaydettiği bu bilgileri depolar. Yerel olarak mevcutsa, web sitesi görüntülenecektir. Bilgisayarımız bu bilgiye sahip değilse, doğru bilgiyi almak için bir DNS sorgusu gerçekleştirecektir.

- ### Adım 2: Yinelemeli DNS Sunucuları ile İletişim Kurun(Recursive DNS Servers)

  Bilgiler bilgisayarınızın yerel önbelleğinde değilse, başka bir sunucuyu sorgulayacaktır. Yinelemeli DNS sunucuları, tıpkı bilgisayarınız gibi kendi yerel önbelleğine sahiptir. Birçok ISS, aynı yinelemeli DNS sunucularını kullanır, ortak alan adının zaten önbelleğinde olması mümkündür. Etki alanı önbelleğe alınmışsa, sorgu burada sona erecek ve web sitesi kullanıcıya görüntülenecektir.

- ### Adım 3: Yetkili DNS Sunucularını Sorgulayın(Query the Authoritative DNS Servers)

  Özyinelemeli bir DNS sunucusu veya sunucuları, önbelleğinde saklanan bilgilere sahip değilse, başka yere bakar. Sorgu daha sonra yetkili DNS sunucuları zincirinde devam eder. Arama, etki alanı için bir ad sunucusu bulana kadar devam edecektir. Bu yetkili ad sunucuları , bu kayıtların ilgili alan adları için saklanmasından sorumludur.

- ### Adım 4: DNS Kaydına erişin

  Liquidweb.com'un IP adresini bulmak için, adres kaydı (A kaydı) için yetkili isim sunucusunu sorgulayacağız. Yinelemeli bir DNS sunucusu, yetkili ad sunucularından Liquidweb.com için A kaydına erişir. Daha sonra kaydı yerel önbelleğinde depolar. Başka bir sorgu, liquidweb.com için A kaydını isterse, cevabı özyinelemeli sunucuda olacaktır. Tüm DNS kayıtlarının, bir kaydın süresinin ne zaman dolacağını gösteren bir yaşam süresi değeri vardır. Bir süre geçtikten sonra, yinelemeli DNS sunucusu kayıtların güncellenmiş bir kopyasını isteyecektir.

- ### Adım 5: Son DNS Adımı
  Yinelemeli DNS sunucusu bu bilgilere sahiptir ve A kaydını bilgisayarınıza döndürür. Bilgisayarımız daha sonra kaydı yerel önbelleğinde saklar. IP adresini DNS kaydından okur ve tarayıcımıza iletir. Web tarayıcısı, A kayıtları IP'si ile ilişkili web sunucusuna bağlanacak ve web sitesini görüntüleyecektir.
  Baştan sona tüm arama sürecinin tamamlanması yalnızca milisaniyeler sürer. Daha iyi bir anlayış için, arama sürecini oluşturan bileşenleri parçalayalım.

<img src="https://lwstatic-a.akamaihd.net/kb/wp-content/uploads/2018/09/DNSProcess-768x432.gif" witdh=400>

- ### Bir İstekten sonra 10 temel DNS arama adımları

<ul>
<li>Alan adı yazılır ve bu alan adı tekrarlı çözümleyiciye gider.</li>
<li>Alan adı kök sunucusunda sorgulanır.</li>
<li>Kök sunucusu, alan adını TLD sunucusuna iletir.</li>
<li>Çözümleyici, TLD sunucusuna istekte bulunur.&nbsp;</li>
<li>TLD sunucusu <em>.com </em>uzantısına göre yanıt verir.</li>
<li>Tekrarlı çözümleyici, yetkili sunucuya bir istek gönderir.</li>
<li>IP adresi yetkili çözümleyiciye gönderilir.</li>
<li>Çözümleyici, internet tarayıcısına IP adresini iletir.</li>
<li>İnternet tarayıcısı, IP adresine http isteği yapar.</li>
<li>IP adresinin sunucusu, görüntülenebilir internet sayfasını oluşturur.</li>
</ul>

Bir internet sitesine ulaşabilmek için yapılan DNS sorgusu, türlü adımlardan ve alan adı sistemi yapılarından geçer. Domain yapısına göre istemcilerin sorgulamalarına karşılık veren farklı DNS isim sunucuları bulunmaktadır. Root isim sunucusu, TLD isim sunucusu gibi sunucular bu amaçla kullanılır.

Yani özetlemek gerekirse DNS internetin Telefon Rehberidir yani sizin kaydettiğiniz kişilerin telefon numaralarını ezberlemek zorunda bırakmayan sadece İsmini yazarak o kişiyi bulmaya yarayan hayatımızı kolaylaştıran bir yapıdır.

<img src="https://www.iienstitu.com/uploads/Enstitu-2020-foto-02/dns-1_w1145_h572_op.png" width=500>

- ### DNS Sunucusu Nedir?

DNS sunucusu ise, site isimlerini IP adresine yönlendiren bir veri tabanına sahip bilgisayar sunucusudur.

İnternet ağını oluşturan her birim sadece kendine ait bir IP adresine sahiptir. Bu IP adresleri kullanıcıların kullanımı için www.site_ismi.com gibi kolay hatırlanır adreslere karşılık düşürülür. DNS sunucuları, internet adreslerinin IP adresi karşılığını kayıtlı tutmaktadır.

- ### DNS Ayarları ?

İnternet ortamında çeşitli nedenlerle bazı sitelere karşı sansür uygulamaları yapılmaktadır. Yoğun şekilde ve büyük kullanıcı sayılarına ulaşan sitelerin sansürle karşılaştığı durumlarda bu sitelere erişim için kullanıcılar tarafından farklı yöntemlere başvurulmaktadır. Bu yöntemlerden en çok kullanılanı ise DNS ayarlarını değiştirmektir. Normal durumlarda internete bağlanan bir kullanıcı kullandığı internet servis sağlayıcısının otomatik olarak atadığı ayarları kullanmaktadır. Bu ayarların kullanıldığı bölgede internet sitelerine sansür uygulandığında o bölgeye ait olan DNS ayarlarının değiştirilmesi gerekir. Böylece, yeni ayarlar ile engellenen sitenin IP adresine farklı bölgeye ait bir isim sunucusu üzerinden erişim sağlanır.
DNS ayarlarının değiştirilmesinin sansür uygulanan internet sitelerine erişim sağlayabilmek dışında pek çok farklı nedeni olabilir.Örneğin İnternet hızını arttırmak içinde DNS ayarları değiştirilebilir.

<p><strong>DNS Dosyaları İçinde Kullanılan Anahtar Sözcükler</strong><br><strong>Directory:</strong>&nbsp;Belirtilen dosyaların bulunacağı dizin burada verilir.<br><strong>Cache:</strong><strong>&nbsp;</strong>Cache dosyasını belirtir.<br><strong>Primary:</strong>&nbsp;Ana sunucunun (Primary Name Server) adı burada verilir. Alana ait temel bilgiler burada bulunur ve program ilk olarak aramaya bu sunucudan başlar.<br><strong>Forwarders:</strong>&nbsp;Ana sunucuda makine bulunamazsa burada belirtilen sunucuda aramaya başlanır<br><strong>Serial:</strong>&nbsp;Burada seri numarası bulunur ve bu numaranın dosyada yapılan her değişiklikten sonra bir artırılması gerekir.<br><strong>Refresh:</strong>&nbsp;Burada, ayarlama yapılan dosyaların ne kadar sürede bir kendini yenilediği belirtilir.<br><strong>Retry:</strong><strong>&nbsp;</strong>Burada ne kadar sürede bir aramanın yeniden deneneceği belirtilir.<br><strong>Expire:</strong><strong>&nbsp;</strong>Ne kadar süre sonra aramanın sonlandırılacağı belirtilir.<br><strong>Ttl (Time-To-Live):</strong>&nbsp;Belirtilen süre kadar cache tutulabileceğini belirtir.<br><strong>Name:</strong>&nbsp;Makine adı belirtilir.<br><strong>Data:</strong>&nbsp;IP numarası belirtilir.</p>
<hr>

<br>
<hr>

#### Kaynaklar

[Kaynak1](iienstitu.com/blog/dns-nedir-ne-ise-yarar)<br>
[Kaynak2](https://www.technopat.net/2014/06/26/dns-nedir-dns-degistirmek-ne-ise-yarar/)<br>
[Kaynak3](https://www.webtekno.com/dns-nedir-h97501.html)<br>
[Kaynak4](https://turk.net/destek/sozluk/internet/dns-nedir-dns-nasil-calisir.html)<br>
[Kaynak5](https://www.liquidweb.com/kb/how-to-demystify-the-dns-process/)
