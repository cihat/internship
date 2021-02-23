Warning: Your programming career# 1 Videoda HTML, CSS, Flexbox, Responsive Tasarım [ Web Geliştirme Eğitimi ]

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

<article class="article"><div><div></div>

<p><span class="seoSummary">This page&nbsp;lists all the <a href="/en-US/docs/Glossary/HTML">HTML</a> <a href="/en-US/docs/Glossary/Element">elements</a>, which are created using <a href="/en-US/docs/Glossary/Tag">tags</a>.</span> They are grouped by function to help you find what you have in mind easily. An alphabetical list of all elements is provided in the sidebar on every element's page as well as this one.</p>

<div class="note notecard">
<p>For more information about the basics of HTML elements and attributes, see <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML#elements_%e2%80%94_the_basic_building_blocks">the section on elements in the Introduction to HTML article</a>.</p>
</div></div><h2 id="main_root"><a href="#main_root" title="Permalink to Main root">Main root</a></h2><div><p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/html"><code>&lt;html&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;html&gt;</code> element</strong> represents the root (top-level element) of an HTML document, so it is also referred to as the <em>root element</em>. All other elements must be descendants of this element.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="document_metadata"><a href="#document_metadata" title="Permalink to Document metadata">Document metadata</a></h2><div><p>Metadata contains information about the page. This includes information about styles, scripts and data to help software (<a href="/en-US/docs/Glossary/Search_engine">search engines</a>, <a href="/en-US/docs/Glossary/Browser">browsers</a>, etc.) use and render the page. Metadata for styles and scripts may be defined in the page or link to another file that has the information.&nbsp;</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/base"><code>&lt;base&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;base&gt;</code> element</strong> specifies the base URL to use for all <em>relative</em> URLs in a document.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/head"><code>&lt;head&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;head&gt;</code> element</strong> contains machine-readable information (metadata) about the document, like its <a href="/en-US/docs/Web/HTML/Element/title">title</a>, <a href="/en-US/docs/Web/HTML/Element/script">scripts</a>, and <a href="/en-US/docs/Web/HTML/Element/style">style sheets</a>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/link"><code>&lt;link&gt;</code></a></td>
   <td>The <strong>HTML External Resource Link element (<code>&lt;link&gt;</code>)</strong> specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/meta"><code>&lt;meta&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;meta&gt;</code> element</strong> represents Metadata that cannot be represented by other HTML meta-related elements, like <code>base</code>, <code>link</code>, <code>script</code>, <code>style</code> or <code>title</code>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/style"><code>&lt;style&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;style&gt;</code> element</strong> contains style information for a document, or part of a document.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/title"><code>&lt;title&gt;</code></a></td>
   <td>The <strong>HTML Title element</strong> (<strong><code>&lt;title&gt;</code></strong>) defines the document's title that is shown in a Browser's title bar or a page's tab.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="sectioning_root"><a href="#sectioning_root" title="Permalink to Sectioning root">Sectioning root</a></h2><div><p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;body&gt;</code> Element</strong> represents the content of an HTML&nbsp;document. There can be only one <code>&lt;body&gt;</code> element in a document.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="content_sectioning"><a href="#content_sectioning" title="Permalink to Content sectioning">Content sectioning</a></h2><div><p>Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.&nbsp; &nbsp;</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;address&gt;</code> element</strong> indicates that the enclosed HTML provides contact information for a person or people, or for an organization.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;article&gt;</code> element</strong> represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/aside"><code>&lt;aside&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;aside&gt;</code> element</strong> represents a portion of a document whose content is only indirectly related to the document's main content.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;footer&gt;</code> element</strong> represents a footer for its nearest <a href="/en-US/docs/Web/Guide/HTML/Content_categories#sectioning_content">sectioning content</a> or <a href="/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_root">sectioning root</a> element. A footer typically contains information about the author of the section, copyright data or links to related documents.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/header"><code>&lt;header&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;header&gt;</code> element</strong> represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h1&gt;</code></a>, <a href="/en-US/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h2&gt;</code></a>, <a href="/en-US/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h3&gt;</code></a>, <a href="/en-US/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h4&gt;</code></a>, <a href="/en-US/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h5&gt;</code></a>, <a href="/en-US/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h6&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> elements</strong> represent six levels of section headings. <code>&lt;h1&gt;</code> is the highest section level and <code>&lt;h6&gt;</code> is the lowest.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/hgroup"><code>&lt;hgroup&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;hgroup&gt;</code> element</strong> represents a multi-level heading for a section of a document. It groups a set of <code><a href="/en-US/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;–&lt;h6&gt;</a></code> elements.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/main"><code>&lt;main&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;main&gt;</code> element</strong> represents the dominant content of the <code>body</code> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/nav"><code>&lt;nav&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;nav&gt;</code> element</strong> represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;section&gt;</code> element</strong> represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="text_content"><a href="#text_content" title="Permalink to Text content">Text content</a></h2><div><p>Use HTML text content elements to organize blocks or sections of content placed between the opening <a href="/en-US/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a> and closing <code>&lt;/body&gt;</code> tags. Important for <a href="/en-US/docs/Glossary/Accessibility">accessibility</a> and <a href="/en-US/docs/Glossary/SEO">SEO</a>, these elements identify the purpose or structure of that content.&nbsp; &nbsp;&nbsp;&nbsp;</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/blockquote"><code>&lt;blockquote&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a href="#usage_notes" rel="internal">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <code>cite</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/dd"><code>&lt;dd&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dd&gt;</code> element</strong> provides the description, definition, or value for the preceding term (<code>dt</code>) in a description list (<code>dl</code>).</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a></td>
   <td>The <strong>HTML Content Division element</strong> (<strong><code>&lt;div&gt;</code></strong>) is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like <a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a> is applied to its parent element).</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/dl"><code>&lt;dl&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dl&gt;</code></strong> element represents a description list. The element encloses a list of groups of terms (specified using the <code>dt</code> element) and descriptions (provided by <code>dd</code> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/dt"><code>&lt;dt&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dt&gt;</code> element</strong> specifies a term in a description or definition list, and as such must be used inside a <code>dl</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;figcaption&gt;</code> or Figure Caption element</strong> represents a caption or legend describing the rest of the contents of its parent <code>figure</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/figure"><code>&lt;figure&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;figure&gt;</code> (Figure With Optional Caption) element</strong> represents self-contained content, potentially with an optional caption, which is specified using the (<code>figcaption</code>) element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/hr"><code>&lt;hr&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;hr&gt;</code> element</strong> represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/li"><code>&lt;li&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;li&gt;</code> element</strong> is used to represent an item in a list.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/ol"><code>&lt;ol&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;ol&gt;</code> element</strong> represents an ordered list of items — typically rendered as a numbered list.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/p"><code>&lt;p&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;p&gt;</code> element</strong> represents a paragraph.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/pre"><code>&lt;pre&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;pre&gt;</code> element</strong> represents preformatted text which is to be presented exactly as written in the HTML file.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/ul"><code>&lt;ul&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;ul&gt;</code> element</strong> represents an unordered list of items, typically rendered as a bulleted list.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="inline_text_semantics"><a href="#inline_text_semantics" title="Permalink to Inline text semantics">Inline text semantics</a></h2><div><p>Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;a&gt;</code> element</strong> (or <em>anchor</em> element), with <a href="#href">its <code>href</code> attribute</a>, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/abbr"><code>&lt;abbr&gt;</code></a></td>
   <td>The <strong>HTML Abbreviation element </strong>(<strong><code>&lt;abbr&gt;</code></strong>) represents an abbreviation or acronym; the optional <code>title</code> attribute can provide an expansion or description for the abbreviation.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/b"><code>&lt;b&gt;</code></a></td>
   <td>The <strong>HTML Bring Attention To element (<code>&lt;b&gt;</code>)</strong> is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/bdi"><code>&lt;bdi&gt;</code></a></td>
   <td>The HTML <strong>Bidirectional Isolate element</strong> (<strong><code>&lt;bdi&gt;</code></strong>)&nbsp; tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/bdo"><code>&lt;bdo&gt;</code></a></td>
   <td>The <strong>HTML Bidirectional Text Override element</strong> (<strong><code>&lt;bdo&gt;</code></strong>) overrides the current directionality of text, so that the text within is rendered in a different direction.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/br"><code>&lt;br&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;br&gt;</code> element</strong> produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/cite"><code>&lt;cite&gt;</code></a></td>
   <td>The <strong>HTML Citation element</strong> (<strong><code>&lt;cite&gt;</code></strong>) is used to describe a reference to a cited creative work, and must include the title of that work.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/code"><code>&lt;code&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;code&gt;</code> element</strong> displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/data"><code>&lt;data&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;data&gt;</code> element</strong> links a given piece of&nbsp;content with a machine-readable translation. If the content is time- or date-related, the <code>time</code> element must be used.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/dfn"><code>&lt;dfn&gt;</code></a></td>
   <td>The <strong>HTML Definition element</strong> (<code><strong><dfn>&lt;dfn&gt;</dfn></strong></code>) is used to indicate the term being defined within the context of a definition phrase or sentence.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/em"><code>&lt;em&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;em&gt;</code> element</strong> marks text that has stress emphasis. The <code>&lt;em&gt;</code> element can be nested, with each level of nesting indicating a greater degree of emphasis.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code></a></td>
   <td>The <strong>HTML Idiomatic&nbsp;Text element (<code>&lt;i&gt;</code>)</strong> represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/kbd"><code>&lt;kbd&gt;</code></a></td>
   <td>The <strong>HTML Keyboard Input element</strong> (<strong><code>&lt;kbd&gt;</code></strong>) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/mark"><code>&lt;mark&gt;</code></a></td>
   <td>The <strong>HTML Mark Text element</strong> (<strong><code>&lt;mark&gt;</code></strong>) represents text which is <strong>marked</strong> or <strong>highlighted</strong> for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/q"><code>&lt;q&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;q&gt;</code> element</strong> indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/rb"><code>&lt;rb&gt;</code></a></td>
   <td>The <strong>HTML Ruby Base (<code>&lt;rb&gt;</code>) element</strong> is used to delimit the base text component of a&nbsp; <code>ruby</code> annotation, i.e. the text that is being annotated.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/rp"><code>&lt;rp&gt;</code></a></td>
   <td>The <strong>HTML Ruby Fallback Parenthesis (<code>&lt;rp&gt;</code>) element</strong> is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <code>ruby</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/rt"><code>&lt;rt&gt;</code></a></td>
   <td>The <strong>HTML Ruby Text (<code>&lt;rt&gt;</code>) element</strong> specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <code>&lt;rt&gt;</code> element must always be contained within a <code>ruby</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/rtc"><code>&lt;rtc&gt;</code></a></td>
   <td>The <strong>HTML Ruby Text Container (<code>&lt;rtc&gt;</code>) element</strong> embraces semantic annotations of characters presented in a ruby of <code>rb</code> elements used inside of <code>ruby</code> element. <code>rb</code> elements can have both pronunciation (<code>rt</code>) and semantic (<code>rtc</code>) annotations.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/ruby"><code>&lt;ruby&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;ruby&gt;</code> element</strong> represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/s"><code>&lt;s&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;s&gt;</code> element</strong> renders text with a strikethrough, or a line through it. Use the <code>&lt;s&gt;</code> element to represent things that are no longer relevant or no longer accurate. However, <code>&lt;s&gt;</code> is not appropriate when indicating document edits; for that, use the <code>del</code> and <code>ins</code> elements, as appropriate.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/samp"><code>&lt;samp&gt;</code></a></td>
   <td>The <strong>HTML Sample Element</strong> (<strong><code>&lt;samp&gt;</code></strong>) is used to enclose inline text which represents sample (or quoted) output from a computer program.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/small"><code>&lt;small&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;small&gt;</code></strong> <strong>element</strong> represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from <code>small</code> to <code>x-small</code>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/span"><code>&lt;span&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;span&gt;</code> element</strong> is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the <code>class</code> or <code>id</code> attributes), or because they share attribute values, such as <code>lang</code>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/strong"><code>&lt;strong&gt;</code></a></td>
   <td>The HTML <strong>Strong Importance Element</strong> (<strong><code>&lt;strong&gt;</code></strong>) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/sub"><code>&lt;sub&gt;</code></a></td>
   <td>The HTML <strong>Subscript element</strong> (<strong><code>&lt;sub&gt;</code></strong>) specifies inline text which should be displayed as subscript for solely typographical reasons.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/sup"><code>&lt;sup&gt;</code></a></td>
   <td>The <strong>HTML Superscript element</strong> (<strong><code>&lt;sup&gt;</code></strong>) specifies inline text which is to be displayed as superscript for solely typographical reasons.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a></td>
   <td>The HTML <strong><code>&lt;time&gt;</code> element</strong> represents a specific period in time.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/u"><code>&lt;u&gt;</code></a></td>
   <td>The <strong>HTML</strong> <strong>Unarticulated Annotation element</strong> (<strong><code>&lt;u&gt;</code></strong>) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/var"><code>&lt;var&gt;</code></a></td>
   <td>The HTML <strong>Variable element</strong> (<strong><code>&lt;var&gt;</code></strong>) represents the name of a variable in a mathematical expression or a programming context.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/wbr"><code>&lt;wbr&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;wbr&gt;</code> element</strong> represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="image_and_multimedia"><a href="#image_and_multimedia" title="Permalink to Image and multimedia">Image and multimedia</a></h2><div><p>HTML supports various multimedia resources such as images, audio, and video.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/area"><code>&lt;area&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;area&gt;</code> element</strong> defines an area inside an image map that has predefined clickable areas. An <dfn>image map</dfn> allows geometric areas on an image to be associated with Hyperlink.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;audio&gt;</code> element</strong> is used to embed sound content in documents. It may contain one or more audio sources, represented using the <code>src</code> attribute or the <code>source</code> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a <code>MediaStream</code>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/img"><code>&lt;img&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;img&gt;</code> element</strong> embeds an image into the document.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/map"><code>&lt;map&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;map&gt;</code> element</strong> is used with <code>area</code> elements to define an image map (a clickable link area).</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/track"><code>&lt;track&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;track&gt;</code> element</strong> is used as a child of the media elements, <code>audio</code> and <code>video</code>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/video"><code>&lt;video&gt;</code></a></td>
   <td>The <strong>HTML Video element</strong> (<strong><code>&lt;video&gt;</code></strong>) embeds a media player which supports video playback into the document. You can use <code>&lt;video&gt;</code> for audio content as well, but the <code>audio</code> element may provide a more appropriate user experience.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="embedded_content"><a href="#embedded_content" title="Permalink to Embedded content">Embedded content</a></h2><div><p>In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/embed"><code>&lt;embed&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;embed&gt;</code> element</strong> embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/iframe"><code>&lt;iframe&gt;</code></a></td>
   <td>The <strong>HTML Inline Frame element (<code>&lt;iframe&gt;</code>)</strong> represents a nested browsing context, embedding another HTML page into the current one.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/object"><code>&lt;object&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;object&gt;</code> element</strong> represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/param"><code>&lt;param&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;param&gt;</code> element</strong> defines parameters for an <code>object</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/picture"><code>&lt;picture&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;picture&gt;</code> element</strong> contains zero or more <code>source</code> elements and one <code>img</code> element to offer alternative versions of an image for different display/device scenarios.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/portal"><code>&lt;portal&gt;</code></a></td>
   <td>The <strong>HTML Portal element (<code>&lt;portal&gt;</code>)</strong> enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/source"><code>&lt;source&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;source&gt;</code> element</strong> specifies multiple media resources for the <code>picture</code>, the <code>audio</code> element, or the <code>video</code> element.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="svg_and_math"><a href="#svg_and_math" title="Permalink to SVG and MathML">SVG and MathML</a></h2><div><p>You can embed <a href="/en-US/docs/Web/SVG">SVG</a> and <a href="/en-US/docs/Web/MathML">MathML</a> content directly into HTML documents, using the <a href="/en-US/docs/Web/SVG/Element/svg"><code>&lt;svg&gt;</code></a> and <code><a href="/en-US/docs/Web/MathML/Element/math" title="<math>">&lt;math&gt;</a></code> elements.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/SVG/Element/svg"><code>&lt;svg&gt;</code></a></td>
   <td>The <code>svg</code> element is a container that defines a new coordinate system and <a href="/en-US/docs/Web/SVG/Attribute/viewBox">viewport</a>. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.</td>
  </tr>
  <tr>
   <td style="vertical-align: top;"><code><a href="/en-US/docs/Web/MathML/Element/math" title="<math>">&lt;math&gt;</a></code></td>
   <td>The top-level element in MathML is <code>&lt;math&gt;</code>. Every valid MathML instance must be wrapped in <code>&lt;math&gt;</code> tags. In addition you must not nest a second <code>&lt;math&gt;</code> element in another, but you can have an arbitrary number of other child elements in it.</td>
  </tr>
 </tbody>
</table></div><h2 id="scripting"><a href="#scripting" title="Permalink to Scripting">Scripting</a></h2><div><p>In order to create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/canvas"><code>&lt;canvas&gt;</code></a></td>
   <td>Use the <strong>HTML <code>&lt;canvas&gt;</code> element</strong> with either the <a href="/en-US/docs/Web/API/Canvas_API">canvas scripting API</a> or the <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> to draw graphics and animations.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/noscript"><code>&lt;noscript&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;noscript&gt;</code> element</strong> defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;script&gt;</code> element</strong> is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="demarcating_edits"><a href="#demarcating_edits" title="Permalink to Demarcating edits">Demarcating edits</a></h2><div><p>These elements let you provide indications that specific parts of the text have been altered.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/del"><code>&lt;del&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;del&gt;</code> element</strong> represents a range of text that has been deleted from a document.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/ins"><code>&lt;ins&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;ins&gt;</code> element</strong> represents a range of text that has been added to a document.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="table_content"><a href="#table_content" title="Permalink to Table content">Table content</a></h2><div><p>The elements here are used to create and handle tabular data.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/caption"><code>&lt;caption&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;caption&gt;</code> element</strong> specifies the caption (or title) of a table.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/col"><code>&lt;col&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;col&gt;</code> element</strong> defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <code>colgroup</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/colgroup"><code>&lt;colgroup&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;colgroup&gt;</code> element</strong> defines a group of columns within a table.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/table"><code>&lt;table&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;table&gt;</code> element</strong> represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/tbody"><code>&lt;tbody&gt;</code></a></td>
   <td>The <strong>HTML Table Body element</strong> (<strong><code>&lt;tbody&gt;</code></strong>) encapsulates a set of table rows (<code>tr</code> elements), indicating that they comprise the body of the table (<code>table</code>).</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/td"><code>&lt;td&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;td&gt;</code> element</strong> defines a cell of a table that contains data. It participates in the <em>table model</em>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/tfoot"><code>&lt;tfoot&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;tfoot&gt;</code> element</strong> defines a set of rows summarizing the columns of the table.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/th"><code>&lt;th&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;th&gt;</code> element</strong> defines a cell as header of a group of table cells. The exact nature of this group is defined by the <code>scope</code> and <code>headers</code> attributes.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/thead"><code>&lt;thead&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;thead&gt;</code> element</strong> defines a set of rows defining the head of the columns of the table.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/tr"><code>&lt;tr&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;tr&gt;</code> element</strong> defines a row of cells in a table. The row's cells can then be established using a mix of <code>td</code> (data cell) and <code>th</code> (header cell) elements.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="forms"><a href="#forms" title="Permalink to Forms">Forms</a></h2><div><p>HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application. There's a great deal of further information about this available in the <a href="/en-US/docs/Learn/Forms">HTML forms guide</a>.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/button"><code>&lt;button&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;button&gt;</code> element</strong> represents a clickable button, used to submit <a href="/en-US/docs/Learn/Forms">forms</a> or anywhere in a document for accessible, standard button functionality.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/datalist"><code>&lt;datalist&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;datalist&gt;</code> element</strong> contains a set of <code>option</code> elements that represent the permissible or recommended options available to choose from within other controls.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/fieldset"><code>&lt;fieldset&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;fieldset&gt;</code> element</strong> is used to group several controls as well as labels (<code>label</code>) within a web form.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/form"><code>&lt;form&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;form&gt;</code> element</strong> represents a document section containing interactive controls for submitting information.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;input&gt;</code> element</strong> is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/label"><code>&lt;label&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;label&gt;</code> element</strong> represents a caption for an item in a user interface.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/legend"><code>&lt;legend&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;legend&gt;</code> element</strong> represents a caption for the content of its parent <code>fieldset</code>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/meter"><code>&lt;meter&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;meter&gt;</code> element</strong> represents either a scalar value within a known range or a fractional value.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/optgroup"><code>&lt;optgroup&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;optgroup&gt;</code> element</strong> creates a grouping of options within a <code>select</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/option"><code>&lt;option&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;option&gt;</code> element</strong> is used to define an item contained in a <code>select</code>, an <code>optgroup</code>, or a <code>datalist</code>&nbsp;element. As such,&nbsp;<code>&lt;option&gt;</code>&nbsp;can represent menu items in popups and other lists of items in an HTML document.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/output"><code>&lt;output&gt;</code></a></td>
   <td>The <strong>HTML Output element</strong> (<strong><code>&lt;output&gt;</code></strong>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/progress"><code>&lt;progress&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;progress&gt;</code> element</strong> displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/select"><code>&lt;select&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;select&gt;</code> element</strong> represents a control that provides a menu of options</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/textarea"><code>&lt;textarea&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;textarea&gt;</code> element</strong> represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="interactive_elements"><a href="#interactive_elements" title="Permalink to Interactive elements">Interactive elements</a></h2><div><p>HTML offers a selection of elements which help to create interactive user interface objects.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/details"><code>&lt;details&gt;</code></a></td>
   <td>The <strong>HTML Details Element (<code>&lt;details&gt;</code>)</strong> creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/dialog"><code>&lt;dialog&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;dialog&gt;</code> element</strong> represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/menu"><code>&lt;menu&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;menu&gt;</code> element</strong> represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as <a href="/en-US/docs/Web/HTML/Element/menu#context_menu">context menus</a>, such as those that might appear underneath a button after it has been clicked.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/summary"><code>&lt;summary&gt;</code></a></td>
   <td>The <strong>HTML Disclosure Summary element</strong> (<strong><code>&lt;summary&gt;</code></strong>) element specifies a summary, caption, or legend for a <code>details</code> element's disclosure box.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="web_components"><a href="#web_components" title="Permalink to Web Components">Web Components</a></h2><div><p>Web Components is an HTML-related technology which makes it possible to, essentially, create and use custom elements as if it were regular HTML. In addition, you can create custom versions of standard HTML elements.</p>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/slot"><code>&lt;slot&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;slot&gt;</code> element</strong>—part of the <a href="/en-US/docs/Web/Web_Components">Web Components</a> technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/template"><code>&lt;template&gt;</code></a></td>
   <td>The <strong>HTML Content Template (<code>&lt;template&gt;</code>) element</strong> is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.</td>
  </tr>

 </tbody>
</table><p></p></div><h2 id="obsolete_and_deprecated_elements"><a href="#obsolete_and_deprecated_elements" title="Permalink to Obsolete and deprecated elements">Obsolete and deprecated elements</a></h2><div><div class="warning notecard">
<p><strong>Warning:</strong> These are old HTML elements which are deprecated and should not be used.&nbsp;<strong>You should never use them in new projects, and should replace them in old projects as soon as you can.</strong>&nbsp;They are listed here for informational purposes only.</p>
</div>

<p></p><table class="standard-table">
 <thead>
  <tr>

   <th scope="col">Element</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
 
  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/acronym"><code>&lt;acronym&gt;</code></a></td>
   <td>The HTML Acronym Element (<code>&lt;acronym&gt;</code>) allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/applet"><code>&lt;applet&gt;</code></a></td>
   <td>The obsolete <strong>HTML Applet Element</strong> (<strong><code>&lt;applet&gt;</code></strong>) embeds a Java applet into the document; this element has been deprecated in favor of <code>object</code>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/basefont"><code>&lt;basefont&gt;</code></a></td>
   <td>The obsolete <strong>HTML Base Font element</strong> (<strong><code>&lt;basefont&gt;</code></strong>) sets a default font face, size, and color for the other elements which are descended from its parent element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/bgsound"><code>&lt;bgsound&gt;</code></a></td>
   <td>The Internet Explorer only <strong>HTML Background Sound element</strong> (<strong><code>&lt;bgsound&gt;</code></strong>) sets up a sound file to play in the background while the page is used; use <code>audio</code> instead.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/big"><code>&lt;big&gt;</code></a></td>
   <td>The obsolete <strong>HTML Big Element</strong> (<strong><code>&lt;big&gt;</code></strong>) renders the enclosed text at a font size one level larger than the surrounding text (<code>medium</code> becomes <code>large</code>, for example).</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/blink"><code>&lt;blink&gt;</code></a></td>
   <td>The <strong>HTML Blink Element</strong> (<code>&lt;blink&gt;</code>) is a non-standard element which causes the enclosed text to flash slowly.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/center"><code>&lt;center&gt;</code></a></td>
   <td>The obsolete <strong>HTML Center Element</strong> (<strong><code>&lt;center&gt;</code></strong>) is a <a href="/en-US/docs/Web/HTML/Block-level_elements">block-level element</a> that displays its block-level or inline contents centered horizontally within its containing element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/content"><code>&lt;content&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;content&gt;</code> element</strong>—an obsolete part of the <a href="/en-US/docs/Web/Web_Components">Web Components</a> suite of technologies—was used inside of <a href="/en-US/docs/Web/Web_Components/Using_shadow_DOM">Shadow DOM</a> as an insertion point, and wasn't meant to be used in ordinary HTML.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/dir"><code>&lt;dir&gt;</code></a></td>
   <td>The obsolete <strong>HTML Directory element</strong> (<strong><code>&lt;dir&gt;</code></strong>) is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the user agent.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/font"><code>&lt;font&gt;</code></a></td>
   <td>The <em>HTML Font Element</em> (<code>&lt;font&gt;</code>) defines the font size, color and face for its content.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/frame"><code>&lt;frame&gt;</code></a></td>
   <td><code>&lt;frame&gt;</code> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <code>frameset</code>.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/frameset"><code>&lt;frameset&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;frameset&gt;</code> element</strong> is used to contain <code>frame</code> elements.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/image"><code>&lt;image&gt;</code></a></td>
   <td>The obsolete <strong>HTML Image element (<code>&lt;image&gt;</code>)</strong> is an obsolete remnant of an ancient version of HTML lost in the mists of time; use the standard <code>img</code> element instead.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/isindex"><code>&lt;isindex&gt;</code></a></td>
   <td><strong><code>&lt;isindex&gt;</code></strong> was an obsolete HTML element that put a text field in a page for querying the document.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/keygen"><code>&lt;keygen&gt;</code></a></td>
   <td>The HTML <code>&lt;keygen&gt;</code> element exists to facilitate generation of key material, and submission of the public key as part of an <a href="/en-US/docs/Learn/Forms">HTML form</a>. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <code>&lt;keygen&gt;</code> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/listing"><code>&lt;listing&gt;</code></a></td>
   <td>The <em>HTML Listing Element</em> (<code>&lt;listing&gt;</code>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML 2 standard recommended that lines shouldn't be broken when not greater than 132 characters.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/marquee"><code>&lt;marquee&gt;</code></a></td>
   <td>The HTML <code>&lt;marquee&gt;</code> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/menuitem"><code>&lt;menuitem&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;menuitem&gt;</code> element</strong> represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/multicol"><code>&lt;multicol&gt;</code></a></td>
   <td>The <strong>HTML Multi-Column Layout element</strong> (<strong><code>&lt;multicol&gt;</code></strong>) was an experimental element designed to allow multi-column layouts and must not be used.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/nextid"><code>&lt;nextid&gt;</code></a></td>
   <td><strong><code>&lt;nextid&gt;</code></strong> is an obsolete HTML element that served to enable the NeXT web designing tool to generate automatic NAME labels for its anchors.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/nobr"><code>&lt;nobr&gt;</code></a></td>
   <td>The non-standard, obsolete HTML <code>&lt;nobr&gt;</code> element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/noembed"><code>&lt;noembed&gt;</code></a></td>
   <td>The <code><strong>&lt;noembed&gt;</strong></code> element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <code>embed</code> element or do not support the type of <a href="/en-US/docs/Web/Guide/HTML/Content_categories#embedded_content">embedded content</a> an author wishes to use.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/noframes"><code>&lt;noframes&gt;</code></a></td>
   <td>The obsolete HTML <strong>No Frames</strong> or <strong>frame fallback</strong> element, <strong><code>&lt;noframes&gt;</code></strong>, provides content to be presented in browsers that don't support (or have disabled support for) the <code>frame</code> element.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/plaintext"><code>&lt;plaintext&gt;</code></a></td>
   <td>The <em>HTML Plaintext Element</em> (<code>&lt;plaintext&gt;</code>) renders everything following the start tag as raw text, ignoring any following HTML.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/shadow"><code>&lt;shadow&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;shadow&gt;</code> element</strong>—an obsolete part of the <a href="/en-US/docs/Web/Web_Components">Web Components</a> technology suite—was intended to be used as a shadow DOM insertion point.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/spacer"><code>&lt;spacer&gt;</code></a></td>
   <td><strong><code>&lt;spacer&gt;</code></strong> is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, <code>&lt;spacer&gt;</code> no longer supported by any major browser and the same effects can now be achieved using simple CSS.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/strike"><code>&lt;strike&gt;</code></a></td>
   <td>The <strong>HTML <code>&lt;strike&gt;</code> element</strong> (or <em>HTML Strikethrough Element</em>) places&nbsp;a strikethrough (horizontal line) over text.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/tt"><code>&lt;tt&gt;</code></a></td>
   <td>The obsolete <strong>HTML Teletype Text element</strong> (<strong><code>&lt;tt&gt;</code></strong>) creates inline text which is presented using the user agent default monospace font face.</td>
  </tr>

  <tr>
   <td style="vertical-align: top;"><a href="/en-US/docs/Web/HTML/Element/xmp"><code>&lt;xmp&gt;</code></a></td>
   <td>The <em>HTML Example Element</em> (<code>&lt;xmp&gt;</code>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.</td>
  </tr>

 </tbody>
</table><p></p></div></article>

<hr>
<br>

tavsiye

[frontendaily](https://www.youtube.com/playlist?list=PLfAfrKyDRWrGze_1T1bUU0qA9RknVKI5J)

### Kaynaklar

[1 Videoda HTML, CSS, Flexbox, Responsive Tasarım - Web Geliştirme Eğitimi(Yazılım Bilimi)](https://www.youtube.com/watch?v=y745R3Lv9WI)<br>
[HTML elements reference MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
