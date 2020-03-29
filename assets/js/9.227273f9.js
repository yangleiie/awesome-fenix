(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{204:function(e,t,r){e.exports=r.p+"assets/img/Roy_Thomas_Fielding.b48aa969.jpg"},224:function(e,t,r){"use strict";r.r(t);var n=r(28),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"√-服务设计风格"}},[e._v("√ 服务设计风格")]),e._v(" "),n("p",[e._v("在软件业发展的初期，程序编写都是以算法为核心的，程序员会把数据和过程分别作为独立的部分来考虑，数据代表问题空间中的客体，程序代码则用于处理这些数据，这种思维方式直接站在计算机的角度去抽象问题和解决问题，被称为面向过程的编程思想。与此相对，面向对象的编程思想则站在现实世界的角度去抽象和解决问题，它把数据和行为都看作是对象的一部分，这样可以让程序员能以符合现实世界的思维方式来编写和组织程序。")]),e._v(" "),n("p",[e._v("这两种思想出现的时间有先后，但在人类使用计算机语言来处理数据的工作中，无论提倡以计算机的思维还是提倡以人类的思维来抽象问题，都是合乎逻辑的，并不应该是评价它们先进性的标准。")]),e._v(" "),n("p",[e._v("12年一轮回，经过了上世纪90年代末到21世纪初期面向对象编程的火热之后，又出现了另一种考虑如何对内封装逻辑、对外重用服务的新思想：面向资源的编程思想。这种思想是把问题空间中的数据对象作为抽象的主体，把解决问题时从输入数据到输出结果的处理过程，看作是一个（组）数据资源的状态不断发生变换而导致的结果。这种思想有其生根的土壤基础：在跨越进程、跨越网络主机、跨越编程语言的分布式系统中，人们尝试过将之前在单进程应用里行之有效的面向过程、面向对象的服务设计方法改造迁移，使之适应分布式环境，这项工作总体上获得了成功，但在分布式环境里多少还是出现了一些新瑕疵，所以为另一种服务设计风格，即面向资源的编程思想留出了成长的空间。")]),e._v(" "),n("p",[e._v("尽管在2020年还谈论什么RESTful、RPC，大概是确实有点落伍了，可这个问题是一个架构设计者必须有明确取舍权衡的重要技术决策，今天笔者仍准备来谈一下这个话题。")]),e._v(" "),n("h2",{attrs:{id:"远程服务调用"}},[e._v("远程服务调用")]),e._v(" "),n("p",[e._v("分布式系统各个节点中的机器大都通过特定的网络协议（HTTP、TCP等公有协议或"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Java%E8%BF%9C%E7%A8%8B%E6%96%B9%E6%B3%95%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[e._v("JRMP"),n("OutboundLink")],1),e._v("、"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E5%AF%B9%E8%B1%A1%E8%AF%B7%E6%B1%82%E4%BB%A3%E7%90%86%E9%97%B4%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[e._v("GIOP"),n("OutboundLink")],1),e._v("这样专有协议）相互访问，但网络协议只是负责往目标机器发送了一段文本或二进制的数据，为了建立可靠的服务，还有很多问题需要考虑：")]),e._v(" "),n("ul",[n("li",[e._v("服务所需的参数，服务返回的结果以什么格式传输？")]),e._v(" "),n("li",[e._v("服务变化了，如何兼容前后不同版本的格式？")]),e._v(" "),n("li",[e._v("如何提高网络利用的效率，譬如连接是否可被多个请求复用以减少开销？多个请求是否可以同时发往一个连接上?")]),e._v(" "),n("li",[e._v("如何提高数据序列化的效率？")]),e._v(" "),n("li",[e._v("如何保证网络的可靠性？譬如调用期间某个链接忽然断开了怎么办？")]),e._v(" "),n("li",[e._v("怎样进行异常处理？异常该如何让调用者获知？")]),e._v(" "),n("li",[e._v("万一发送的请求服务端不回复该怎么办？")]),e._v(" "),n("li",[e._v("……")])]),e._v(" "),n("p",[e._v("早在1988年，绝大多数人都对分布式、远程服务没有什么概念的时候（这话轻了，说那时候多数人对计算机没什么概念都不嫌过分），Sun Microsystems就起草并向IETF提交了"),n("a",{attrs:{href:"https://tools.ietf.org/html/rfc1050",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 1050"),n("OutboundLink")],1),e._v("规范，正式提出了远程服务调用（Remote Procedure Call，RPC）的概念，并设计了一套面向C语言的RPC协议（但最后并没有被实际采用）。")]),e._v(" "),n("div",{staticClass:"quote"},[n("p",{staticClass:"title"},[e._v("远程服务调用")]),n("p",[e._v("Remote Procedure Call is a protocol that one program can use to request a service from a program located in another computer on a network without having to understand the network's details. A procedure call is also sometimes known as a function call or a subroutine call.")])]),n("p",[e._v("1991年，万维网还没正式诞生的年代，"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%AF%B9%E8%B1%A1%E7%AE%A1%E7%90%86%E7%BB%84%E7%BB%87",target:"_blank",rel:"noopener noreferrer"}},[e._v("对象管理组织"),n("OutboundLink")],1),e._v("（Object Management Group，OMG）发布了跨进程、面向异构语言的服务调用协议：CORBA 1.0（Common Object Request Broker Architecture，1.0版本只提供了C语言的调用）。到1997年发布的CORBA 2.0版本，CORBA支持了C、C++、Java（1998年新加入的Java语言映射）等主流编程语言，这是第一套由国际标准组织牵头，多个主流软件提供商共同参与的分布式规范，当时影响力只有微软私有的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Distributed_COM",target:"_blank",rel:"noopener noreferrer"}},[e._v("DCOM"),n("OutboundLink")],1),e._v("可以与之媲美。")]),e._v(" "),n("p",[e._v("不过，CORBA与DCOM都没有获得最终的胜利，在1999年末，SOAP 1.0（Simple Object Access Protocol）规范的发布。SOAP是由微软和DevelopMentor共同起草的远程服务标准，随后提交给W3C成为国际标准，SOAP使用XML作为远程过程调用的编码载体（实际上并不绑定于XML-RPC，有SOAP Over UDP这类其他载体的应用），当时XML是计算机工业最新的银弹，只要是定义为XML的东西几乎就都是好的，连微软自己都主动放弃了DCOM转投SOAP。")]),e._v(" "),n("p",[e._v("SOAP没有天生属于哪家公司的烙印，商业运作非常成功，很受市场欢迎，大量的厂商都想分一杯羹。但从技术角度来看，SOAP设计得并不优秀，甚至可以说是有显著缺陷的。对于开发者而言，SOAP最大的缺点是它那过于严格的规范定义，需要专门的客户端去调用和解析SOAP，也需要专门的服务去部署SOAP（如Apache Axis/CXF）。SOAP协议家族中，除它本身外包括了服务描述的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/WSDL",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web服务描述标准"),n("OutboundLink")],1),e._v("（Web Service Description Language，WSDL）协议、服务发现的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/UDDI",target:"_blank",rel:"noopener noreferrer"}},[e._v("统一描述、发现和集成"),n("OutboundLink")],1),e._v("（Universal Description / Discovery and Integration，UDDI）协议、还有一堆几乎谁都说不清有多少个的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Web%E6%9C%8D%E5%8A%A1%E8%A7%84%E8%8C%83%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[e._v("WS-*"),n("OutboundLink")],1),e._v("的子功能协议，对开发者来说都是很大的学习负担。")]),e._v(" "),n("p",[e._v("人们对SOAP的热情迅速兴起，又逐渐冷却之后，远程服务器调用这个小小领域，开始进入了群雄混战、百家争鸣的战国时代，延续至今。相继出现了RMI（Sun/Oracle）、Thrift（Facebook）、Dubbo（阿里巴巴）、gRPC（Google）、Motan2（新浪）、Finagle（Twitter）、brpc（百度）、Arvo（Hadoop）、JSON-RPC 2.0（公开规范，JSON-RPC工作组）等等一系列的协议/框架。这些框架功能、特点各不相同，有的是某种语言私有，有的能支持跨越多门语言，有的运行在HTTP协议之上，有的能直接运行于TCP/UDP之上的，但总体而言，RPC在朝着三个主要方向发展：")]),e._v(" "),n("ul",[n("li",[e._v("朝着"),n("strong",[e._v("对象")]),e._v("发展，不满足于RPC将面向过程的编码方式带到分布式，希望在分布式系统中也能够进行跨进程的面向对象编程，代表为RMI、.NET Remoting，之前的CORBA和DCOM也可以归入这类，这条线有一个别名叫做"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Distributed_object",target:"_blank",rel:"noopener noreferrer"}},[e._v("分布式对象"),n("OutboundLink")],1),e._v("（Distributed Object）。")]),e._v(" "),n("li",[e._v("朝着"),n("strong",[e._v("效率")]),e._v("发展，代表为gRPC和Thrift，传输效率（主要是Payload所占传输数据的比例大小，使用的传输协议和协议的设计都会影响到这点）和序列化效率的影响是最大的因素，gRPC和Thrift都有自己优秀的私有序列化器，传输协议一个是HTTP2，支持多路复用和Header压缩，另一个直接基于TCP。")]),e._v(" "),n("li",[e._v("朝着"),n("strong",[e._v("简化")]),e._v("发展，代表为JSON-RPC，说要选速度最快的RPC可能会有争议，但选速度最慢的，JSON-RPC大概是逃不了的。牺牲了功能和效率，换来的是协议的简单，接口与格式都更为通用。")])]),e._v(" "),n("p",[e._v("不同的RPC框架所提供的不同特性多少是有矛盾的，很难有某一种框架说“我全部都要”。譬如，要把面向对象那套全搬过来，就注定不会太简单（如建Stub、Skeleton就很烦了）；功能多起来，协议就要弄得复杂，效率一般就会受影响；要简单易用，那很多事情就必须遵循约定而不是配置才行；要重视效率，那就需要采用二进制的序列化器和较底层的传输协议，支持的语言范围容易受限。")]),e._v(" "),n("p",[e._v("也正是每一种RPC框架都有不完美的地方，所以才导致不断有新的RPC出现，也导致了有跳出RPC的新想法出现，REST便有了它诞生的土壤。")]),e._v(" "),n("h2",{attrs:{id:"restful服务"}},[e._v("RESTful服务")]),e._v(" "),n("p",[e._v("REST是这篇文章内定的主角，无论是思想上、概念上还是应用目标上，它与各种RPC协议只能算是有所关联，但本质上并不是同一种东西。思想上的不同之前已经提到过，面向过程的编程思想与面向资源的编程思想，什么是面向资源编程，稍后我们再谈。")]),e._v(" "),n("p",[e._v("而概念上不同是指REST并不是一种远程服务调用协议，甚至可以把定语去掉，它就不是一种协议。协议都带有一定的规范性和强制性，至少也得有个文档吧，JSON-RPC再简单，也要有个《"),n("a",{attrs:{href:"https://www.jsonrpc.org/specification",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON-RPC Specification"),n("OutboundLink")],1),e._v("》来规定它的格式细节、异常、响应码等信息，但REST并没有这些东西，尽管有一些指导原则，但实际上并不受约束。常有人批评某个系统“设计得不是RESTful”，其实这句话本身就有争议，能完全达到REST所有指导原则的系统是很少见的，这一点我们也将在稍后详细讨论。")]),e._v(" "),n("p",[e._v("至于应用目标，REST与RPC在范围上是确有重合的，但实际上重合的区域并不大。上面列举的RPC三个方向中，分布式对象这一条线的应用与REST可以说是毫无关系；而重视”效率“这个方向的应用，基本上就限制了只能是后端应用（前端应用对于网络协议、序列化器这两点都没有选择的余地，想要高效率也有心无力），在分布式服务各个后端节点之间通讯这一块，REST虽然照样可以用于任何语言（只要有个HTTP Client就可以用）之间的调用，但其实在需要“效率”的纯后端应用场景里REST使用率真算不得高。我们开发的REST服务，可能有百分之八九十是提供给前端去消费的。在前端这一块，最多也就是JSON-RPC有机会和REST产生竞争，其他所有RPC框架，哪怕是支持HTTP协议，哪怕提供了JavaScript版本的客户端（如gRPC），也是为了去支持node.js，没见过有谁把它们用到浏览器上的。")]),e._v(" "),n("p",[e._v("但尽管有如此多的不同，这两者还是产生了很多的比较与争论，就如同当年面向对象与面向过程一样，非得争出个高低不可。网上许多REST vs RPC的口水仗中说REST不好的，通常也并不是支持哪个RPC框架/协议比它好用，大多都只是不赞成REST的设计风格，心中说的本意其实是“面向资源编程”的思想不好，不如“面向过程编程”来得好用好理解。")]),e._v(" "),n("h3",{attrs:{id:"理解rest"}},[e._v("理解REST")]),e._v(" "),n("p",[e._v("个人会有好恶偏爱，但计算机科学是务实的，有了面向过程之后，还能产生面向资源，并引起广泛的关注、使用和讨论，后者一定是有一些面向过程没有的闪光点，或者解决/避免了一些面向过程中的缺陷。我们不妨先去理解REST为什么出现、解决什么问题、方法是什么，然后再来评价它。")]),e._v(" "),n("p",[e._v("许多人都知道REST源于Roy Thomas Fielding在2000年发表的博士论文：《"),n("a",{attrs:{href:"https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Architectural Styles and the Design of Network-based Software Architectures"),n("OutboundLink")],1),e._v("》，此文的确是REST的源头，但我们不能忽略Fielding的身份和之前工作的背景，这对理解REST的设计思想至关重要。")]),e._v(" "),n("p",[e._v("首先，Fielding是一名很优秀的软件工程师，他是Apache服务器的核心开发者，后来成为了著名的Apache软件基金会的合作创始人；同时，Fielding也是HTTP 1.0协议（1996年发布）的专家组成员，后来还成为了HTTP 1.1协议（1999年发布）的负责人。HTTP 1.1协议设计的极为成功，以至于发布之后长达十年的时间里，都没有多少人认为有修订的必要。用来指导HTTP 1.1协议设计的理论和思想，最初是以备忘录的形式在专家组成员之间交流，除了IETF、W3C的专家外，并没有在外界广泛流传。")]),e._v(" "),n("div",{staticClass:"custom-block center"},[n("p",[n("img",{attrs:{src:r(204),alt:""}}),e._v("\nRoy Thomas Fielding")])]),e._v(" "),n("p",[e._v("从时间上看，对HTTP 1.1协议的设计工作贯穿了Fielding的整个博士研究生涯，当起草HTTP 1.1协议的工作完成后，Fielding回到了加州大学欧文分校继续攻读自己的博士学位。第二年，他更为系统、严谨地阐述了这套理论框架，并且以这套理论框架导出了一种新的编程风格，他为这种风格取了一个很多人难以理解，但是今天已经广为人知的名字REST（"),n("strong",[e._v("Re")]),e._v("presentational "),n("strong",[e._v("S")]),e._v("tate "),n("strong",[e._v("T")]),e._v("ransfer），即“表征状态转移”的缩写。")]),e._v(" "),n("p",[e._v("哪怕对编程和网络都很熟悉的同学，只从标题中也不太可能直接弄明白什么叫“表征”、啥东西的“状态”、从哪“转移”到哪。尽管在论文原文中确有论述这些概念，但写得确实相当晦涩（不想读英文的同学从此"),n("a",{attrs:{href:"https://www.infoq.cn/article/2007/07/dlee-fielding-rest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("获得中文版本"),n("OutboundLink")],1),e._v("），我推荐一种比较好的方式是先理解什么是HTTP，再配合一些实际例子来进行类比，你会发现“REST”实际上是“HTT”（"),n("strong",[e._v("H")]),e._v("yper "),n("strong",[e._v("T")]),e._v("ext "),n("strong",[e._v("T")]),e._v("ransfer）的进一步抽象，两者就如同接口与实现类之间的关系一般。")]),e._v(" "),n("p",[e._v("HTTP中使用的“超文本”一词是美国社会学家Theodor Holm Nelson在1967年于《"),n("a",{attrs:{href:"https://archive.org/details/SelectedPapers1977",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brief Words on the Hypertext"),n("OutboundLink")],1),e._v("》一文里提出的，下面引用的是他本人在1992年修正后的定义：")]),e._v(" "),n("div",{staticClass:"quote"},[n("p",{staticClass:"title"},[e._v("Hypertext")]),n("p",[e._v('By now the word "hypertext" has become generally accepted for branching and responding text, but the corresponding word "hypermedia", meaning complexes of branching and responding graphics, movies and sound – as well as text – is much less used. Instead they use the strange term "interactive multimedia": this is four syllables longer, and does not express the idea of extending hypertext.')]),e._v(" "),n("div",{staticClass:"custom-block right"},[n("p",[e._v("—— Theodor Holm Nelson "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Literary_Machines",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Literary Machines"),n("OutboundLink")],1),e._v(", 1992")])])]),n("p",[e._v("以上定义描述的“超文本（或超媒体）”是一种“能够对操作进行判断和响应的文本（或声音、图像等）”，这个概念在上世纪60年代提出时应该还属于科幻的范畴，但是今天大众已经完全接受了它，互联网中一段文字可以点击、可以触发脚本执行、可以调用服务端，这一切已稀松平常，毫不稀奇。那我们继续尝试从“超文本”或者“超媒体”的含义来理解什么是“表征”以及REST中其他关键概念，笔者使用一个具体事例来将其描述如下：")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("资源")]),e._v("（Resource）：譬如你现在正在阅读一篇名为《服务设计风格》的文章，这篇文章中的内容本身（你将其视作是某种信息、数据）我们称之为“资源”。无论你是在网上看的网页、是打印出来看的文字稿、是在电脑屏幕上阅读抑或是手机上浏览，尽管呈现的样子各不相同，但其中的信息是不变的，你所阅读的仍是同一个“资源”。")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("表征")]),e._v("（Representation）：当你通过电脑浏览器阅读此文章时，浏览器向服务端发出请求“我需要这个资源的HTML格式”，服务端向浏览器返回的这个HTML就被称之为“表征”，你可能通过其他方式拿到本文的PDF、Markdown、RSS等其他形式的版本，它们也同样是一个资源的多种表征。可见“表征”这个概念是指信息与用户交互时的表示形式，这与我们应用分层中常说的“表示层”（Presentation Layer）的语义其实是一致的。")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("状态")]),e._v("（State）：当你把这篇文章阅读完毕，想看下一篇文章是什么内容的时候，你向服务器请求“给我下一篇文章”，但是“下一篇”是个相对概念，必须依赖“当前你正在阅读的文章是哪一篇”才能正确回应，这类在特定语境中才能产生的上下文信息即被称为“状态”。我们所说的有状态（Stateful）还是无状态（Stateless），都是只相对于服务端来说的，服务器要完成“取下一篇”的请求，要么自己记住用户的状态（这个用户现在阅读的是哪一篇文章，这是有状态），要么客户端来记住状态，在请求的时候明确告诉服务器（我正在阅读某某文章，现在要读下一篇，这是无状态）。")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("转移")]),e._v("（Transfer）：无论状态是由服务端还是客户端来提供的，“取下一篇文章”这个行为逻辑必然只能由服务端来提供。服务器通过某种方式，把“用户当前阅读的文章”转变成“下一篇文章”，这就被称为“"),n("strong",[e._v("表征状态转移")]),e._v("”")])])]),e._v(" "),n("p",[e._v("借着这个故事的上下文，笔者顺便再介绍几个现在不涉及但稍后要用到的概念名词：")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("统一接口")]),e._v("（Uniform Interface）：上面说的“服务器通过某种方式”具体是什么方式？请把本文拉倒结尾处，右下角有下一篇文章的"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[e._v("URI"),n("OutboundLink")],1),e._v("超链接地址，这是服务端渲染这篇文章时就预置好的，点击它让页面跳转到下一篇，就是一种所谓的“某种方式”。但URI的含义是统一资源标识符，如何能表达出“转移”的含义呢？HTTP协议中提前约定好了一套“统一接口”，包括：GET、HEAD、POST、PUT、DELETE、TRACE、OPTIONS七种操作，任何一个支持HTTP协议的服务器都会遵守这套规定，对特定的URI采取这些操作，服务器自然就会触发相应的表征状态转移。")]),e._v(" "),n("li",[n("strong",[e._v("超文本驱动")]),e._v("（Hypertext Driven）：尽管表征状态转移是由浏览器主动向服务器发出请求，该请求导致了“在我们浏览器的屏幕上显示出了下一篇文章的内容”这个结果的出现，但浏览器其实根本不知道系统中这套转移逻辑。它根据是用户输入的URI地址请求网站首页，服务器给予的首页超文本内容，我们是通过内部的超链接导航到了这篇文章，阅读结束时再导航到下一篇。浏览器作为所有网站的通用的客户端，任何网站的导航（状态转移）行为都是不可能预置于浏览器之中，而是由服务器每一个请求中的返回信息（超文本）来驱动的。这点大家习以为常，但其实与其他带有客户端的软件有很本质的区别，在那些软件中，业务逻辑往往是预置于客户端之中的，有专门的页面控制器（无论在服务端还是在客户端中）来驱动页面的状态转移。")]),e._v(" "),n("li",[n("strong",[e._v("自描述消息")]),e._v("（Self-Descriptive Messages）：由于资源的表征可能存在多种不同形态，在消息中应当有明确的信息来告知客户端该消息的类型以及该如何处理这条消息。一种被广泛采用的自描述方法是在名为“Content-Type”的HTTP Header中标识出"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E5%AA%92%E4%BD%93%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[e._v("互联网媒体类型"),n("OutboundLink")],1),e._v("（MIME type），譬如“Content-Type : application/json; charset=utf-8”，则说明该资源会以JSON的格式来返回，请使用UTF-8字符集进行处理。")])]),e._v(" "),n("p",[e._v("建立了上面这些概念之后，我们就可以开始讨论面向资源的编程思想与REST所提出的几个具体的软件架构设计原则了。请注意，Fielding提出REST时所谈论的范围是“架构风格与网络的软件架构设计”（ Architectural Styles and Design of Network-based Software Architectures），而不是现在被人们所狭义理解的一种“服务（API）设计风格”，这两者的范围差别就好比本站全站所谈论的话题“现代软件架构探索”与本篇文章谈论的“服务设计风格”一般，前者是后者的一个很大的超集（但是基于本文的主题和多数人的关注点，后文还是会从着重于“服务设计”的视角出发的）。")]),e._v(" "),n("p",[e._v("Fielding认为，一套理想的、完全满足REST的系统应该满足以下六个原则：")]),e._v(" "),n("ol",[n("li",[n("strong",[e._v("服务端与客户端分离")]),e._v("（Client-Server）"),n("br"),e._v("将用户界面所关注的逻辑和数据存储所关注的逻辑分离开来有助于提高用户界面的跨平台的可移植性，这一点正越来越受到广大开发者所认可，以前完全基于服务端控制和渲染的JSF这类框架实际用户已甚少，而在服务端进行界面控制（Controller），通过服务端或者客户端的模版渲染引擎来进行界面渲染（Render）的框架（Struts、SpringMVC）也受到了颇大的冲击。这一点主要推动力量与REST关系并不大，前端技术（从ES规范，到语言实现，到前端框架等）的近年来的高速发展，使得前端表达能力大幅度加强才是真正的幕后推手。")]),e._v(" "),n("li",[n("strong",[e._v("无状态")]),e._v("（Stateless）"),n("br"),e._v("这是REST的一条关键原则，部分开发者在做服务接口规划时，觉得RESTful风格的API怎么设计都别扭，很有可能的一种原因是在服务端持有着比较重的状态。REST希望服务器能不负责维护状态，每一次从客户端发送的请求中，应包括所有的必要的上下文信息，会话信息也由客户端保存维护，服务器端依据客户端传递的状态信息来进行业务处理，并且驱动整个应用的状态变迁。至于客户端承担状态维护职责后的认证、授权等各方面的可信问题，都有针对性的解决方案（详见下一篇："),n("a",{attrs:{href:"system-security"}},[e._v("安全架构")]),e._v("）"),n("br"),e._v("但必须承认的现状是，目前大多数的系统是达不到这个要求的，越复杂、越大型的系统越是如此。服务端无状态可以在分布式环境中获得非常高价值的好处，但大型系统的上下文状态数量完全可能膨胀到让客户端在每次请求时提供变得不切实际的程度，在服务端的内存、会话、数据库或者集中式缓存等地方持有一定的状态成为一种是事实上被广泛使用的主流的方案。")]),e._v(" "),n("li",[n("strong",[e._v("可缓存")]),e._v("（Cacheability）"),n("br"),e._v("无状态服务虽然提升了系统的可见性、可靠性和可伸缩性，但降低了系统的网络性。这句话通俗的解释就是，某个功能使用有状态的架构只需要一次请求就能完成，而无状态的服务则可能会需要多个请求才行。为了缓解这个矛盾，REST希望软件系统能够如同万维网一样，客户端和中间的通讯传递者（代理）可以将部分服务端的应答缓存起来。当然，应答中必须明确地或者间接地表明本身是否可以进行缓存，以避免客户端在将来进行请求的时候得到过时的数据。运作良好的缓存机制可以减少客户端、服务器之间的交互，甚至有些场景中可以完全避免交互，这就进一步提了高性能。")]),e._v(" "),n("li",[n("strong",[e._v("分层系统")]),e._v("（Layered System）"),n("br"),e._v("这里所指的并不是表示层、服务层、持久层这种意义上的应用分层。而是指客户端一般不需要知道是否直接连接到了最终的服务器，抑或是路径上的中间服务器。中间服务器可以通过负载均衡和共享缓存的机制提高系统的可扩展性，这样可也便于缓存、伸缩和安全策略的部署。譬如，一种典型的应用是内容分发网络（CDN），如你现在访问这个站点，你所发出的请求一般（假设你在中国国境内的话）并不是直接访问位于GitHub Pages的源服务器，而是访问了位于腾讯云的CDN，但你并不需要感知到这一点。")]),e._v(" "),n("li",[n("strong",[e._v("统一接口")]),e._v("（Uniform Interface）"),n("br"),e._v("这是REST的另一条关键原则，REST希望开发者面向资源编程，希望设计软件系统的核心放在抽象系统该有哪些资源，而不是抽象系统该有哪些行为（服务）。对资源的操作是可数的、固定的、统一的，由于REST并没有设计新的协议，所以这些操作都借用了HTTP协议中固有的操作命令来完成。"),n("br"),e._v("这一点也是REST最容易陷入争论的地方，基于网络的软件系统，到底是面向资源更好，还是面向服务更好，这事情哪怕到了今天仍然是没有个定论，也许永远都没有。但是，有一个基本清晰的结论是，面向资源编程是的抽象程度通常更高，这意味着坏处是往往距离人类的思维方式更远，而好处是往往通用程度会更好。这样诠释REST大概本身就挺抽象的，还是举个例子来说明：譬如几乎每个系统都有的登录和注销功能，如果你理解成登录对应于login()服务，注销对应于logout()服务这样两个服务，这是“符合人类思维”的；如果你理解成登录是CREATE Session，注销是REMOVE Session，这样你只需要设计一种“Session资源”即可满足需求，甚至以后对Session的其他需求，譬如查询或者修改登陆用户的信息，都可以在这一套设计中囊括在内，这便是“抽象程度更高”带来的好处。"),n("br"),e._v("想要在架构设计中合理恰当地利用统一接口，Fielding建议系统应能做到每次请求中都包含资源的ID，所有操作均通过资源ID来进行；建议每个资源都应该是自描述的消息；建议通过超文本来驱动应用状态的转移。")]),e._v(" "),n("li",[n("strong",[e._v("按需代码")]),e._v("（"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Code_on_demand",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code-On-Demand"),n("OutboundLink")],1),e._v("）"),n("br"),e._v("这被Fielding列为一条可选原则。按需代码指任何按照客户端软件（譬如浏览器）的请求，将可执行的软件程序从服务器计算机发送到客户端的技术。这是可选的原因并非是它特别难以达到，而更多是出于必要性和性价比的考虑。举个例子，譬如你使用Element-UI组件库开发一个Web应用，但其实只用了里面一两个组件，却没有好好配置"),n("a",{attrs:{href:"https://github.com/QingWei-Li/babel-plugin-component",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel-plugin-component"),n("OutboundLink")],1),e._v("来做按需引入，一下子把几十个组件都打包进脚本中，这便是没有贯彻好按需代码的原则。这类事情（引入一个类库可能只使用其中很少量的一部分代码）是相当普遍的，但我个人并不赞成不考虑实际场景的唯性能论，在关键场景肯定要抠细节，但所有场景都无限度的“精益求精”并无必要。")])]),e._v(" "),n("p",[e._v("REST的基本思想是面向资源来抽象问题，基本手段是尽可能复用HTTP协议中已经定义的语义和相关基础支持来解决问题，以上六个原则都是在这个指导思路下设计的。因为HTTP本来就是面向资源而设计的网络协议，只要面向资源的软件架构确实行得通的话，本文开篇中所列的“远程服务调用需要考虑的问题”便几乎不再需要独立考虑了，HTTP协议已经有效运作了30年，其相关的技术基础设施已是千锤百炼，无比成熟，这些问题早已解决过无数遍。唯一需要权衡的是你的软件系统、设计和开发人员是否能够适应面向资源的思想来设计软件，来编写代码。")]),e._v(" "),n("h3",{attrs:{id:"rmm成熟度"}},[e._v("RMM成熟度")]),e._v(" "),n("p",[e._v("https://martinfowler.com/articles/richardsonMaturityModel.html")]),e._v(" "),n("p",[e._v("CN： https://blog.csdn.net/dm_vincent/article/details/51341037")]),e._v(" "),n("h3",{attrs:{id:"graphql"}},[e._v("GraphQL")]),e._v(" "),n("p",[e._v("REST只提供了增删改查的基本语义，其他的语义基本上不管。比如批量添加，批量删除")]),e._v(" "),n("p",[e._v("不能说 GraphQL 是要完全取代 REST，因为前者只是一个工具，而 REST 是一种架构模式")])])}),[],!1,null,null,null);t.default=i.exports}}]);