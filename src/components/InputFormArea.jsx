import { InputTextarea } from './InputTextarea';
import { InputHour } from './InputHour';

export const InputFormArea = (props) => {
    const { handleRegister, studyContent, onChangeContent, onChangeHour } =
        props;
    return (
        <form action={handleRegister}>
            <div className="mb-3">
                <InputTextarea
                    label="学習内容"
                    name="study-content"
                    value={studyContent.title}
                    placeholder="学習内容を入力してください"
                    onChange={onChangeContent}
                />
            </div>
            <div className="mb-3">
                <InputHour
                    label="学習内容"
                    type="number"
                    name="study-hour"
                    value={studyContent.hour}
                    placeholder="0"
                    onChange={onChangeHour}
                />
            </div>
            <h2 className="mt-4 fs-4">入力内容</h2>
            <p>
                <span className="fw-bold">学習内容</span>:
                <span id="input-content_text">{studyContent.title}</span>
            </p>
            <p>
                <span className="fw-bold">学習時間</span>:
                <span id="input-content_hours">{studyContent.hour}</span>
            </p>
            <button type="submit" className="btn btn-primary">
                登録
            </button>
        </form>
    );
};
