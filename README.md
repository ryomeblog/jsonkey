# JSON Key Matcher

このNode.jsスクリプトは、2つのJSONファイルを比較し、1つ目のJSONファイルのキーに基づいて2つ目のJSONファイルから値を抽出し、新しいJSONファイルを作成します。

## 機能

1. 1つ目のJSONファイルからすべてのキーを抽出
2. キーの照合処理：
   - キーが両方のファイルに存在する場合：2つ目のJSONファイルの値を使用
   - キーが2つ目のファイルに存在しない場合：1つ目のJSONファイルの値を使用
3. 抽出したキーと値のペアを新しいJSONファイルに保存

## 必要条件

- Node.js (バージョン12以上推奨)

## インストール

```bash
git clone https://github.com/[ユーザー名]/json-key-matcher.git
cd json-key-matcher
```

## 使用方法

```bash
node index.js <jsonファイル1のパス> <jsonファイル2のパス> <出力ファイルパス>
```

### パラメータ

- `<jsonファイル1のパス>`: キーを抽出する元となるJSONファイル
- `<jsonファイル2のパス>`: 値を抽出する元となるJSONファイル
- `<出力ファイルパス>`: 結果を保存するJSONファイル

## 使用例

### 入力ファイル1 (sample1.json)
```json
{
  "name": "John",
  "age": 30,
  "city": "Tokyo",
  "email": "john@example.com",
  "hobby": "reading"
}
```

### 入力ファイル2 (sample2.json)
```json
{
  "name": "Jane",
  "age": 25,
  "city": "Osaka",
  "email": "jane@example.com",
  "phone": "123-456-7890",
  "country": "Japan"
}
```

sample2.jsonにないキー"hobby"を追加したsample1.jsonの例：
```json
{
  "name": "John",
  "age": 30,
  "city": "Tokyo",
  "email": "john@example.com",
  "hobby": "reading"
}
```

### コマンド実行
```bash
node index.js sample1.json sample2.json output.json
```

### 出力ファイル (output.json)
```json
{
  "name": "Jane",
  "age": 25,
  "city": "Osaka",
  "email": "jane@example.com"
,
  "hobby": "reading"
}
```

## 注意事項

- 入力JSONファイルは有効なJSON形式である必要があります
- 出力ファイルが既に存在する場合は上書きされます

## ライセンス

ISC