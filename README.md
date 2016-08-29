# nodejsにおける同期、非同期、ストリーム処理の違い

## 環境構築

node v5.10.1

大きなファイルを用意する

```
$ dd if=/dev/urandom of=file bs=102400 count=1000
```

## 比較

### 同期
https://github.com/a4t/nodejs_stream/blob/master/sync.js

```
$ node sync.js
process-end-timer: 2148.406ms
```

### 非同期
https://github.com/a4t/nodejs_stream/blob/master/async.js

```
$ node async.js
async
first-buffer-timer: 2108.882ms
```

### Stream
https://github.com/a4t/nodejs_stream/blob/master/stream.js

```
$ node stream.js
first-buffer-timer: 2.451ms
process-end-timer: 1973.257ms
```

## まとめ
非同期処理でも一見同じように見えるが、非同期処理は全部読み込んだ後にその後の処理が実行される  
それと比べてStream処理は読み込めた分だけ順次処理する  
大きなファイルを扱う時とかに非常に便利  
csvとかもparseできた分だけ先に処理するとかするとかそんなことができる  

例として、CSVをストリームで読み込みつつ、DynamoDBに非同期でPutリクエストを投げる  
読み込めた行数分だけDynamoDBにリクエストがいき、DynamoDBにも非同期でリクエストを投げているので  
DynamoDBのレスポンス待ちというロックもかからない。  
もしDynamoDBへのリクエストが失敗してもリトライ処理がかけるので問題ない
