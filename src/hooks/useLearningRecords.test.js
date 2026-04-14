import { expect, test } from 'vitest';
// テストしたい関数をインポート
import { calculateTotalHours } from './useLearningRecords';

test('合計時間の計算：複数の記録がある場合、正しく合算されること', () => {
    // テスト用のダミーデータ（recordsの代わり）
    const mockRecords = [
        { title: 'React', hour: 1 },
        { title: 'Firebase', hour: 2.5 },
        { title: 'Jest', hour: 0.5 }
    ];

    const result = calculateTotalHours(mockRecords);

    // 1 + 2.5 + 0.5 = 4 になるはず！
    expect(result).toBe(4.0);
});

test('合計時間の計算：記録が空の場合、0になること', () => {
    const mockRecords = [];
    const result = calculateTotalHours(mockRecords);

    expect(result).toBe(0);
});
