(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,e,a){"use strict";a.r(e);var r=a(42),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"策略模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),a("h2",{attrs:{id:"模式定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式定义"}},[t._v("#")]),t._v(" 模式定义")]),t._v(" "),a("p",[t._v("定义一系列算法,把它们一个个封装起来,并且使它们可互\n相替换(变化)。该模式使得算法可独立于使用它的客户程\n序(稳定)而变化(扩展,子类化)。")]),t._v(" "),a("h2",{attrs:{id:"要点总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要点总结"}},[t._v("#")]),t._v(" 要点总结")]),t._v(" "),a("p",[t._v("Strategy及其子类为组件提供了一系列可重用的算法,从而可以使\n得类型在运行时方便地根据需要在各个算法之间进行切换。\n"),a("strong",[t._v("Strategy模式提供了用条件判断语句以外的另一种选择,消除条件")]),t._v(" "),a("strong",[t._v("判断语句,就是在解耦合。含有许多条件判断语句的代码通常都需")]),t._v(" "),a("strong",[t._v("要Strategy模式。")]),t._v("\n如果Strategy对象没有实例变量,那么各个上下文可以共享同一个\nStrategy对象,从而节省对象开销。")]),t._v(" "),a("h2",{attrs:{id:"由遇到的问题引出策略模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#由遇到的问题引出策略模式"}},[t._v("#")]),t._v(" 由遇到的问题引出策略模式")]),t._v(" "),a("p",[t._v("策略模式和 Template 模式要解决的问题是相同（类似）的，都是为了给业务逻辑（算法）具体实现和抽象接口之间的解耦。策略模式将逻辑（算法）封装到一个类（Context）里面，通过组合的方式将具体算法的实现在组合对象中实现，再通过委托的方式将抽象接口的实现委托给组合对象实现。State 模式也有类似的功能，他们之间的区别将在讨论中给出。")]),t._v(" "),a("p",[a("strong",[t._v("这里的关键就是将算法的逻辑抽象接口（DoAction）封装到一个类中（Context），再通过委托的方式将具体的算法实现委托给具体的策略类来实现（ConcreteStrategeA类）。")])]),t._v(" "),a("h2",{attrs:{id:"关于策略模式的讨论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于策略模式的讨论"}},[t._v("#")]),t._v(" 关于策略模式的讨论")]),t._v(" "),a("p",[t._v("可以看到策略模式和 Template 模式解决了类似的问题，也正如在 Template 模式中分析的，"),a("strong",[t._v("策略模式和 Template 模式实际是实现一个抽象接口的两种方式：继承和组合之间的区别。要实现一个抽象接口，继承是一种方式：我们将抽象接口声明在基类中，将具体的实现放在具体子类中。组合（委托）是另外一种方式：我们将接口的实现放在被组合对象中，将抽象接口放在组合类中。这两种方式各有优缺点，先列出来：")]),t._v('\n继承：\n优点：易于修改和扩展那些被复用的实现。\n缺点：①破坏了封装性，继承中父类的实现细节暴露给子类了；②"白盒"复用，原因在 1）中；③当父类的实现更改时，其所有子类将不得不随之改变；④从父类继承而来的实现在运行期间不能改变（编译期间就已经确定了）。\n组合：\n优点：①"黑盒"复用，因为被包含对象的内部细节对外是不可见的；②封装性好，原因为 1）；③实现和抽象的依赖性很小（组合对象和被组合对象之间的依赖性小）；④可以在运行期间动态定义实现（通过一个指向相同类型的指针，典型的是抽象基类的指针）。\n缺点：系统中对象过多。')]),t._v(" "),a("p",[t._v("从上面对比中我们可以看出，组合相比继承可以取得更好的效果，因此在面向对象的设计中的有一条很重要的原则就是：优先使用（对象）组合，而非（类）继承（FavorComposition Over Inheritance）。")]),t._v(" "),a("p",[t._v("实际上，继承是一种强制性很强的方式，因此也使得基类和具体子类之间的耦合性很强。例如在模板方法模式中在 ConcreteClass1 中定义的原语操作别的类是不能够直接复用（除非你继承自 AbstractClass，具体分析请参看模板方法模式文档）。而组合（委托）的方式则有很小的耦合性，实现（具体实现）和接口（抽象接口）之间的依赖性很小，例如在本实现中，ConcreteStrategyA 的具体实现操作很容易被别的类复用，例如我们要定义另一个 Context 类 AnotherContext，只要组合一个指向策略的指针就可以很容易地复用 ConcreteStrategyA 的实现了。")]),t._v(" "),a("p",[t._v("我们在 桥接模式的问题和桥接模式的分析中，正是说明了继承和组合之间的区别。请参看相应模式解析。")]),t._v(" "),a("p",[t._v("另外策略模式很状态模式也有相似之处，但是状态模式注重的对象在不同的状态下不同的操作。两者之间的区别就是状态模式中具体实现类中有一个指向 Context的引用，而策略模式则没有。具体分析请参看相应的状态模式分析中。")])])}),[],!1,null,null,null);e.default=n.exports}}]);