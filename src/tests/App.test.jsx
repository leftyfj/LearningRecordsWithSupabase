import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App'; // 「../」で一つ上の階層に戻る


test('アプリ名「学習記録登録アプリ」が正しく表示されていること', () => {
    // 1. Appコンポーネントを仮想ブラウザに描画する
    render(<App />);

    // 2. 「学習記録登録アプリ」というテキストを持つ要素を探す
    const titleElement = screen.getByText('学習記録登録アプリ');

    // 3. その要素がちゃんと存在しているか確認（アサーション）
    expect(titleElement).toBeDefined();
});
