# CSS

- !important, attribute'ü eğer ezilmesini istemediniz bir özelliğin yanına koyarsanız değişmez.örneğin 'color: red !important'.

- border özelliği margin ve padding arasında kalan sınırdır.Dıştan içe doğru margin > border > padding

- width(genişlik-x) ve height(uzunluk-y) değerlerine %'li değerler vererek, tarayıcını boyutuna göre davranır.

- Bir element bulunduğu parent elemente göre width ve height gibi özellikleri şekil alır. Örneğin div.box-1 > div.box-2 elementlerinde width=%50 özelliği varsa box-2 box-1'e göre küçülür veya büyür.

- max-width özelliği ile responsive tasarımlar yapabiliriz. Örneğin max-width = 700px dediğimiz element maximum 700px olabilir eğer pencere 700px küçük olursa elementimiz küçülebilir.

- inline elementlerine width ve height değerleri veremeyiz ama display özelliğini blok yaparsak verebiliriz. Ayrıca inline-blog özelliği vardır bu hem inline hem de blok gibi davranır. Yani inline element gibi yanına element alabilir(bulunduğu satırın tamamını blok özellik gibi kaplayamıyor) ayrıca blok elemente verebildiğimiz width ve height özelliklerini vermemize imkan tanıyor.

- border(sınır) ile content arasındaki kısım 'padding' oluyor. border(sınır) ile dış elementler arasındaki kısım 'margin' oluyor.

- border, margin, padding gibi elementlerin değerlerini -top right bottom left- şeklinde yukarıdan saat yönünde verebiliriz.

- border, margin, padding gibi elementlerin "top-bottom right-left" şeklinde de verebiliriz.

### - margin: auto auto; özelliği aşağıdan-yukarıdan, sağdan-soldan ortalamaya yarıyor. Genelde "width: 50%;margin: auto auto;" özellikleri birlikte kullanılır. Ayrıca margin: 0 auto; özelliği ile üsten ve altdan boşluk verme ama sağdan ve soldan boşlukları ortala.

- Width ve height değerleri sadece content alanına verilir ama elemente padding değerleri verdiğimizde o elementin width ve height değerleri artar bunun önüne geçmek için box-sizing: border-box; özelliği vererek verdiğimiz width ve height değerleri aşmıyoruz sadece içindeki content alanını küçültüyoruz. Yani elemente verdiğimiz padding değeri o elementi artırmıyor.

```css
div.box-1 {
  width: 500px;
  height: 200px;
  border: 5px solid black;
  padding: 50px;
}
div.box-2 {
  box-sizing: border-box;
  width: 500px;
  height: 200px;
  border: 5px solid black;
  padding: 50px;
}
```

- box-sizing: border-box; özelliğini reset.css olarak da kullanbilirz yani önceden tanımlayarak.

- text-align: center ile yazılarımızı ortalaya bilirzi. letter-spacing: 1px ile harflerinin arasını 1px açabiliriz

- em releative uzunluğu nedir ? Bir p elemanın içindesin be font-size'ı 14px ise p elementin içindeki elementin boyutuna 2em verirseniz 28px olur.

- rem ise html'in root'taki değeri baz alır. html'in default olarak 16px'dir ancak bu default değeri değiştirebilirsiiz eğer diğer elementleri rem olarak tanımlamışsanız o değerlerde artacaktır. Siz herhangi bir yerde herhangi bir elemente 2.5rem verirseniz 40px font-size'ı olmuş olur.

- vw ise sayfanın görünen kısmının genişliğini %'lik olarak değer verirmesidir. örnegin %1 ise sayfanın görünen kısmının genişliği %1'lik kısmına denk gelir.

- vh ise sayfanın görünen kısmının yüksekliğini %'lik olarak değer verirmesidir. örnegin %1 ise sayfanın görünen kısmının yüksekliğin %1'lik kısmına denk gelir.

- % uzunluk bulunduğu parent scope'da font-size'ın %'lik değerine denk gelir.. Örneğin 16px ise parent scope %50'si 8px dir ve o element 8px olacaktır.

- icon için "https://cdnjs.com/"'de cdn linkleri mevcut fonw-awesome aratarak cdn'e ulaşabilir ardından "https://fontawesome.com/"'den istediğin bedava ikonu kullanabilirsin.

# CSS Pseudo Class -> Videonun sonuna kadar

- Pseudo classları -> &:hover, &:visited gibi örnekleri vardır.
- Pseudo elementi -> &::after veya &::before şeklinde kullanılabilinir.

- nth-child selecetor -> p:nth-child(1){...} veya p:first-child{...} çocuklardan 1.elementi alır.

- position: fixed; right 0px ; top: 0px ile sağ üste sabitleyebilirsin.

- position: relative ise sadece bulunduğu yerden yani ekranda neredeyse ona göre left, right, top, bottom: 20px gibi örneklerle hareket etme kabiliyeti sağlar.

- z-index: değeri yükseldikçe daha görülür(default 0'dır).

### - position: absoulte bulunduğu kapsayıcıya göre hereket eder ama kapsayıcısıda position: static dışında relative veya fixed olmalı ama zaten relative yapıyorum.

- float:left, float: right ile sağa ve sola konumlandırabilirsiniz.
- eski bir yöntem <div> style="clear: both</div> ile sağındaki ve solundakileri temizler.
- text-align ile center, right, left olarak konumlandırılır.

## Flexbox Ana Kapsayıcaya verilen özellikler

- ilk olarak kapsayıcının display: flex; dememiz gerekiyor.

- flex-direction: row(default) olarak gelir bu satır mu sütün mu olacağına karar verir. column kullanılırsa yukarıdan aşağıya doğru olur.

- justify-content ise yatayda nasıl konumlandırılacağını belirler.

- align-items ise dikeyde konumlandırmaya yarar.(default olarak stretch gelir.)

- flex-wrap ile bir satırda yer kalmazsa elemanları aşağıya indirir(default olarak no-wrap vardır ve bu sağması için küçültür.)

## Flexbox itemlara verilen özellikler

- order ile öncelik, sıralama gibi kolaylıklar sağlar.

- align-self ile item'a özgü özellikler verilebilir.

- flex-grow ile alandaki alacağı uzunluğu oranlayabiliriz. Eğer sadece bir item'a flex-grow verilirse alanı doldurmaya çalışır. ayrıca flex:1 gibi yazılırsa de olur.

- Responsive dizayn içn @medi(max-width: 768px){ body {...}} gibi kullanabiliriz. Yani max 768px ve altında ise içndeki kurallar geçerli olsun.

- Responsive tasarımlarda px değilde %'li değerler vermek daha mantıklı.Yani Responsive Units dediğimiz, em, rem, %, vw, vh gibi değerleri kullnmak bizim için daha kolay sürectir.

- em parent elemanın font-size ile ilgiliydi
- rem html'deki yani root'taki font-size göre çalışır.
- % html'deki font-size eğer 16px ise 50% ise 8px olur.
- vw, safyanın görenin kısmının genişliğine %'delik değerine tekabül eder
- vh, safyanın görenin kısmının yüksekliğine %'delik değerine tekabül eder

## Grid layout Yapısı

display: grid;
grid-template-columns: 110px 110px 110px;
grid-template-rows: 110px 110px 110px;
grid-template: 110px 110px 110px / 110px 110px 110px;
grid-template: 1fr 1fr 1fr / 2fr 3fr 1fr;  ---> daha basit bir şekilde bolmelendirme yapılır

grid-row-start: 1;  ----> 1.satırdan başlayan yeri ilgili elemente koy
grid-row-end: 1; -----------> 2.satrıdaki biten yere ilgili elementi yerleştir.
grid-column-start: 1;  ----> 1.sütündan başlayan yeri ilgili elemente koy
grid-column-end: 1; -----------> 2.sütüna kadar biten yere ilgili elementi yerleştir.

Yukardakilerin kısa yolu
grid-row : 1/ 2; ----> yazarak 1.'den 2'.ci satıra olan bölmeyi alırız.
grid-column: 1 / 2; -------> yazarak 1.'den 2'.ci sütündaki  olan bölmeyi alırız.