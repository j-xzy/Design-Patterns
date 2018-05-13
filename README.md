# 常用设计模式TypeScript版

1. [创建型模式(creational)](#创建型模式(creational))

   - [Abstract Factory](#abstract-factory)
   - [Builder](#builder)
   - [Factory Method](#factory-method)
   - [Prototype](#prototype)
   - [Singleton](#singleton)

2. [结构型模式(Structural)](#结构型模式(structural))
3. [行为型模式(Behavioral)](#行为型模式(behavioral))

## 创建型模式(creational)

创建型模式抽象了实例化的过程。它帮助一个系统独立于如何创建、组合和表示它的那些对象。

### [Abstract Factory](https://github.com/wu38607/Design-Patterns/blob/master/creational/abstract.ts)
 
 意图:

提供一个创建一系列相关或相互依赖的对象的接口，而无需指定它们具体的类。

 适用性:

- 一个系统要独立于它的产品创建、组合和表示时
- 一个系统要由多个产品系列中的一个来配置时
- 当强调一系列相关的产品对象的设计以便进行联合使用时
- 当提供一个产品类库，只是想显示它们的接口而不是实现时

### [Builder](https://github.com/wu38607/Design-Patterns/blob/master/creational/builder.ts)

 意图:

 将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

 适用性:

- 创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时
- 当构造过程必须允许被构造的对象有不同的表示时

Builder模式与Abstract Factory模式类似，也是给基于抽象类、可以创建复杂对象。主要区别在于Builder模式着重于一步步构造一个复杂对象，而Abstract Factory模式着重于多个系列的产品对象。Builder模式最后一步返回产品，Abstract Factory模式是立即返回的。

### [Factory Method](https://github.com/wu38607/Design-Patterns/blob/master/creational/factory-method.ts)

意图:

定义一个用于创建对象的接口，让子类决定实例化哪个一个类。Factory Method使一个类的实例化延迟到子类。

适用性:

- 当一个类不知道它所必须创建的对象的类的时候
- 当一个类希望它的子类来指定它所创建的对象的时候
- 当类将创建对象的职责委托给多个帮助子类中的某一个，并且你希望将哪一个帮助子类是代理者这一信息局部化的时候。

### [Prototype](https://github.com/wu38607/Design-Patterns/blob/master/creational/prototype.ts)

意图:

用原型实例指定创建的对象的种类，并且通过拷贝这些原型创建的新对象。

适用性:

- 当要实例化的类是在运行时刻指定的，例如动态装载
- 为了避免创建一个与产品类层次平行的工厂类层次时
- 当一个类的实例只能有几个不同状态组合中的一种时。建立相应数目的原型并克隆它们可能比每次用合适的状态手工实例化该类更方便。

### [Singleton](https://github.com/wu38607/Design-Patterns/blob/master/creational/singleton.ts)

意图:

保证一个类仅有一个实例，并提供一个访问它的全局访问点。

适用性:

- 当类只能有一个实例而且客户可以从一个众所周知的访问点访问它
- 当这个唯一实例应该是通过子类化可扩展的，并且客户应该无需更改代码就能使用一个扩展实例时。


## 结构型模式(Structural)

todo...

## 行为型模式(Behavioral)

todo...