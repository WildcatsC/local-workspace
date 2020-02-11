# 数据库设计

## 卡号集合 card

用户激化卡时，判断卡号是否合法。

Record格式：

```text
{
    card_number: "12345678"
}
```

权限：所有人可读

## 已激活卡号 used

用户激化卡时，判断卡是否已被别人激活。

Record格式：

```text
{
    card_number: "12345678"
}
```

权限：所有人可读，仅用户可写

## 用户激活记录 activation

用于判断用户是否已拥有卡。未来会用于记录用户的账号信息，比如访问次数等。

Record格式：

```text
{
    card_number: "12345678", 
    activation_date: 2020-01-01 00:00:00 GMT+8 // Date
}
```

权限：创建者可读写

## 用户使用记录 visit

用于记录用户的使用

Record格式：

```text
{
    visit_date: 2020-01-01 00:00:00 GMT+8, // Date
    merchant: "WECOOK" // string
}
```

权限：创建者可读写

