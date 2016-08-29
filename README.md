# nodejsにおける同期、非同期、ストリーム処理の違いについて

## 環境構築

大きなファイルを用意する

```
$ dd if=/dev/urandom of=file bs=102400 count=1000
```

## 比較

### 同期

```
$ node sync.js
process-end-timer: 2148.406ms
```

### 非同期

```
$ node async.js
async
first-buffer-timer: 2108.882ms
```

### Stream

```
$ node stream.js
first-buffer-timer: 2.451ms
process-end-timer: 1973.257ms
```

## まとめ
Stream処理をすると読み込めた分だけ順次処理する
大きなファイルを扱う時とかに非常に便利
csvとかもparseできた分だけ先に処理するとかするとかそんなことができる
