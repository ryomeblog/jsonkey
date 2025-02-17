const fs = require('fs').promises;

async function processJsonFiles(file1Path, file2Path, outputPath) {
    try {
        // 1. JSONファイル1を読み込む
        const json1 = JSON.parse(await fs.readFile(file1Path, 'utf8'));
        
        // 2. JSONファイル1のキーをすべて取得
        const keys = Object.keys(json1);
        
        // 3. JSONファイル2を読み込む
        const json2 = JSON.parse(await fs.readFile(file2Path, 'utf8'));
        
        // 4. JSONファイル1のキーに基づいてJSONファイル2から値を抽出
        const result = {};
        keys.forEach(key => {
            if (key in json2) {
                result[key] = json2[key];
            }
        });
        
        // 5. 新しいJSONファイルを作成
        await fs.writeFile(outputPath, JSON.stringify(result, null, 2), 'utf8');
        console.log('処理が完了しました！');
        console.log(`出力ファイル: ${outputPath}`);
    } catch (error) {
        console.error('エラーが発生しました:', error.message);
        process.exit(1);
    }
}

// コマンドライン引数の検証
if (process.argv.length !== 5) {
    console.error('使用方法: node index.js <jsonファイル1のパス> <jsonファイル2のパス> <出力ファイルパス>');
    process.exit(1);
}

// プログラムの実行
const [,, file1Path, file2Path, outputPath] = process.argv;
processJsonFiles(file1Path, file2Path, outputPath);