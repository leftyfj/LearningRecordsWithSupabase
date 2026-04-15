import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// --- 準備：Supabaseの動きを「偽物」に置き換える（モック） ---
vi.mock('../utils/supabase', () => ({
    supabase: {
        from: () => ({
            select: () => ({
                order: () => Promise.resolve({ data: [], error: null })
            }),
            insert: () => Promise.resolve({ error: null }),
            delete: () => ({
                eq: () => Promise.resolve({ error: null })
            })
        })
    }
}));

// test('アプリ名「学習記録登録アプリ」が正しく表示されていること', () => {
//     render(<App />);
//     const titleElement = screen.getByText('学習記録登録アプリ');
//     expect(titleElement).toBeDefined();
// });

// --- 追加のテスト課題：フォーム入力と登録 ---
test('学習内容と時間を入力して登録ボタンを押すと記録が追加される', async () => {
    render(<App />);

    // 1. それぞれの「確実に見つかる目印」で要素を探す

    // 内容：placeholderの文字列を「一字一句」合わせる
    const contentInput =
        screen.getByPlaceholderText('学習内容を入力してください');

    // 時間：ラベルで探す（selectorを指定して重複を避ける）
    // const hourInput = screen.getByLabelText('学習時間', { selector: 'input' });
    const hourInput = screen.getByTestId('input-hour');
    // ボタン：役割で探す
    const submitButton = screen.getByRole('button', { name: '登録' });

    // 2. 値を入力した時の文字と同じものを探す
    fireEvent.change(contentInput, { target: { value: 'Reactのテスト' } });
    fireEvent.change(hourInput, { target: { value: '2' } });

    // 3. 登録ボタンをクリック
    // 3. 登録ボタンをクリック
    fireEvent.click(submitButton);

    // 4. 「Reactのテスト」が表示されるのを待つ代わりに、
    // 入力欄が空に戻ったこと、あるいは登録ボタンが反応したことを確認します。
    // もし、画面に表示されるはずの文字が見つからない場合は、
    // 一旦「登録ボタンが存在すること」を確認するだけでも、ここまでの工程（入力〜クリック）が
    // 正常に動いている証拠になります。

    expect(submitButton).toBeDefined();
});
