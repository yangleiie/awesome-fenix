# 本地事务

本地事务（Local Transactions，其实应该翻译成局部事务才好与稍后的全局事务相对应，但现在几乎所有人都这么叫了）即独立的、不需要“事务管理器（稍后解释这是啥）”进行协调的事务，这是最基础的一种事务处理方案，只能适用于单个服务使用单个数据源的场景。本地事务其实是直接依赖于数据源（通常是DBMS，下面均以JDBC为例）本身的事务能力来实现的，在服务层面，最多只能说是对事务接口做了一层薄包装而已，它对真正的事务的运作并不能产生多少影响。

为了解释“薄包装”和后续讨论方便，我们将事例场景进一步具体化：假设书店的用户、商家、仓库所涉及的数据表都存储于同一个数据库，它们的服务运行于同一个JVM实例之上，使用Spring来进行程序组织，所有服务的[事务传播](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/annotation/Propagation.html)都是默认的“需要事务”。按照现在主流的开发习惯，其代码大致应如下所示：

```java
@Transactional
public void buyBook(PaymentBill bill) {
    userAccountService.pay(bill.getMoney());
    warehouseService.deliver(bill.getItems());
    businessAccountService.receipt(bill.getMoney());
}
```

我们将声明式事务手工还原回编程式事务：

```java
public void buyBook(PaymentBill bill) {
	transaction.begin();
	try {
    	userAccountService.pay(bill.getMoney());
	    warehouseService.deliver(bill.getItems());
    	businessAccountService.receipt(bill.getMoney());
	    transaction.commit();
	} catch(Exception e) {
    	transaction.rollback();
	}
}
```

代码的语义非常直白，但却不一定如字面所示那般严谨，看起来如果操作不出错，肯定会在commit()中提交事务，如果出错了，肯定会在rollback()中回滚事务。但并非绝对如此，譬如其中数据表采用引擎的是MyISAM，那即使调用了rollback()方法也无法回滚数据，原子性就无法得到保障。同理，对于隔离性，尽管Spring可以将用户所期望的隔离级别传递给数据库，但是具体数据库会不会按照所设置的参数调整隔离级别，如何进行事务隔离，Spring也是完全无法知晓且无法改变的。因此，本地事务具体能够提供怎样的能力，其实取决于底层的数据库本身。