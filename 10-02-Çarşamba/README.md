# 1 Videoda HTML, CSS, Flexbox, Responsive Tasarım [ Web Geliştirme Eğitimi ]

## Eğitime Giriş ->HTML Semantic Elements

### Önemli Notlar

- height ve weight sadece blog level elemetlere uygulayabiliriz.(blog-level element = bulunduğu alanı bir blog olarak kaplayan elementlerdir örneğin div, table, canvas, address. Bu elementlerin tersi ise inline elementlerdir örnegin a, span,).

- id seçicisi sadece belirli bir elemente verilmelidir. class ise birbirine benzeyen birden çok verilmesi gerekn elementlere verilebilir. Ayrıca bir elemente hem class hem de id verilebilir.

- id seçicisini kullanarak bookmarks görevi görebiliriz. Örnegin a elementinin href attributune "#elementId" verirsek sayfayı elementId'sinin olduğu yere yönlendirir(odaklar).

```html
<form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" />
</form>
```

- Yukarıda basit bir form işlemleri bulunmaktadır. label'daki for attribute ile ilgili id'li elemente odaklanabiliriz.
- name attribute'nün bir özelliği ise submit ederseniz formu name özelliği ile girilen veriye ulaşabiliriz.

- radio buttonu sadece bir tane seçeneği işaretlemek için kullanılır örneğin cinsiyette kullanılır. checkbox ise birden fazla seçeneki için örneğin hobiler gibi.

- semantic elementler
<div style="width:374px;float:left">
 <ul>
  <li>&lt;article&gt;</li>
  <li>&lt;aside&gt;</li>
  <li>&lt;details&gt;</li>
  <li>&lt;figcaption&gt;</li>
  <li>&lt;figure&gt;</li>
  <li>&lt;footer&gt;</li>
  <li>&lt;header&gt;</li>
  <li>&lt;main&gt;</li>
  <li>&lt;mark&gt;</li>
  <li>&lt;nav&gt;</li>
  <li>&lt;section&gt;</li>
  <li>&lt;summary&gt;</li>
  <li>&lt;time&gt;</li>
</ul>
</div>

<img src="https://www.w3schools.com/html/img_sem_elements.gif"/>

- Örnek bir semantic template'ti

```html
<body>
  <header>
    <h1>Title</h1>
    <nav id="top-nav">
      <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">Service</a>
    </nav>
  </header>
  <section id="section-little">
    <article>Story1</article>
    <article>Story2</article>
    <article>Story3</article>
  </section>
  <section id="section-big">
    <article>Story1</article>
    <article>Story2</article>
    <article>Story3</article>
  </section>
  <aside id="side-nav"></aside>
  <footer>CopyRight</footer>
</body>
```

<hr>
<br>

## Makaleden Çıkardıklarım

- Sürekli kod yazmayın, ara verin kendiniz için. Büyük resmi görmeye çalışın. Eğer gecelere kadar kod yazıyorsanız bir sorun var demektir. Hem de büyük bir sorun var demektir projenin mirmarisi hakkında zayıf kararlar verebilecek kadar. Ne kadar çok kodlarsanız o kadar iyi değildir.Demek istediğim iyi veya kötü kod yazmak önemli değil. Önemli olan iyi veya kötü yazdığınız kod üzerinde düşünmek, zaman geçirmek, anlamak ve özümsemektir.

- Basit faaliyetlerle nasıl becerilerimizi geliştirebiliriz ?

- Oyun oynamak. Ancak bu oyunlar beyni geliştiren, düşünmeyi sevk eden oyunlar olmalıdır. Örneğin strateji, bulmaca oyunları sizi planlamaya, problem çozmeye sevk edebilecek oyunlardır. Kaynakları yönetmek, bir saldırı planlamak veya bir bulmacayı çözmek, sizi daha keskin bir geliştirici yapmanıza katkıda bulunur.
  Bu tür oyunlarda ileriyi düşünmeye ve stratejileri test etmeye zorlanırsınız . Bir şey inşa edebilir, taşıyabilir, yeniden inşa edebilirsiniz. Kaynakları farklı araştırma alanlarına tahsis edebilir ve genel teknoloji ağacını nasıl etkilediğini görebilirsiniz. Bu öğelerin tümü, kodlamaya büyük paralellikler kurar. Bir uygulama geliştirdiğinizde aynı şeyi yaparsınız. Stratejileri test ediyor ve bulmacaları çözüyorsunuz. Tek fark, genellikle işle ilişkili süslü grafiklerin olmamasıdır.

- Elektronik Projeler

- Elektronik projeler yani basit bir devre ile programlama arasında çok yakından bir ilişki var, örneğin elektronik devrede bir bağlantıyı yanlış yere bağladın ve o yanlışı görmedin saatlerce yanlışı ararsın ve bu yanlışları yapa yapa ustaşır ve daha deneyim sahibi olursunuz.

- :burdan sonrası 

- Ahşap İşleme
  Ahşap işlemeninde büyük katkısı vardır, bunlar; Bileşenler, soyutlama katmanlarının ve arabirimlerinin arkasına gizlenmez. Ahşap ahşaptır. Eğer bir hata yaparsanız hemen görürsünüz. Ahşap nesnelerin elle işlenmesi, ayrıntılara dikkat etmeyi gerektirir ve size yüksek derecede sabır öğretir.
  Bir dahaki sefere bir kodun derlenmesini beklemekten şikayet ederken, tutkalın oluşması için 8 saat beklemek zorunda olduğunuzu hayal edin. İşçiliğe gösterilen bu sabır ve özen, geri döndüğünüzde mühendislik çalışmalarınıza kolayca dönüşecektir.
  Yeni başlayanlar için ahşap işleme kılavuzları ve tavsiyeleri için Woodcraft'a göz atın .

- Çizim / Şema Oluşturma
  Bir ara verin ve kalemi kağıda, kalemi beyaz tahtaya veya tüy kalemini parşömene koyun. Hangi çizim ortamı size uygun olursa olsun, fikirleri çizmek için zaman ayırmak veya hatta sadece doodle beyninize çok ihtiyaç duyulan bir sıfırlama sağlayacaktır. Bir fikrin basit olduğunu düşünseniz ve ilgili tüm parçaları bilseniz bile, onu bir şema veya taslak gizli öğeleri ortaya çıkaracağı için çizme olasılığı yüksektir.
  Bir fikrin bileşenlerini kağıda çizdiğinizde adalar olarak başlarlar. Fikir ortaya çıktıkça, her şeyi görsel olarak birbirine bağlar ve işlerin nasıl işleyebileceğini görürsünüz. Bağımlılıkların eksik olduğu yerlerde, başlangıçta düşündüğünüz gibi bir bağlantı nasıl çalışmayabilir. Bu süreç, doğrudan kodlama / problem çözme moduna uçmak yerine beyninizi bir fikrin mimarisi boyunca yavaşça dolaştırır.
  Kalem ve kağıt hala size göre değilse, Mermaid gibi görsel bir diyagram oluşturma uygulamasıyla her zaman "kodsuz" zaman geçirebilirsiniz . Check out Diyagramlar Fun With Mermaid yapma yoluyla Ozan Tunca mükemmel rehberi.

  - Egzersiz yapmak

  Koşarken kaç fikir bulduğumu ve çözdüğümü size anlatamam. Egzersiz yaparken bölgelere ayırmak, çözüm bulmak için etkili bir yol gibi görünmeyebilir, ancak aslında oldukça iyi çalışıyor. Bazen tek yapmanız gereken, dikkatinizi çözmeye çalıştığınız sorundan uzaklaştırmaktır . Aynı düşünce sürecine çok uzun süre karşı koymaya devam ederseniz, sadece tekerleklerinizi döndüren bir tekdüze ile karşılaşacaksınız. Hızlı bir fiziksel aktivite için kaçmak zihninizi dolaşmaktan kurtarır ve bilinçaltı çözümleri ön plana çıkarır.

  -Egzersizin fiziksel sağlık açısından bariz faydalarının yanı sıra, birçok zihinsel faydası vardır. Daha keskin bir hafıza ve problem çözme yeteneği, geliştiriciler için avantajlar listesinin başında gelir. Ben şahsen daha verimli kod yazdığımı ve iyi bir çalışmadan sonra daha az hata ürettiğimi fark ettim. Antrenmanın da yoğun yoğunlukta olması gerekmiyor, bazen kısa bir yürüyüş o "Aha!" an.
  Mükemmel bir parça olarak, Spor Daha İyi Bir Web Developer içine Me Dönüştürülmüş Nasıl , Rachel Lum bir geliştirici becerilerini geliştirmek için egzersiz için yeteneği içine ayrıntılı bir görünüm sağlar.

<hr>
<br>

### Kaynaklar

[1 Videoda HTML, CSS, Flexbox, Responsive Tasarım - Web Geliştirme Eğitimi(Yazılım Bilimi)](https://www.youtube.com/watch?v=y745R3Lv9WI)<br>
[Non-Coding Activities That Boost Developer Skills(Makale Linki)](https://medium.com/swlh/non-coding-activities-that-boost-developer-skills-bcae28cb8847)
