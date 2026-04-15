export const InputHour = (props) => {
 const { label, type, name, value, placeholder, onChange } = props;

 const isInvalid = value < 0;
    return (
        <>
            <label htmlFor="study-time" className="form-label">
                {label}
            </label>
            <input
                className="form-control w-25 w-md-100"
                data-testid="input-hour" // ← これを追加
                id="study-time"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required
            />
            {isInvalid && (
                <div className="alert alert-danger mt-2" role="alert">
                    学習時間がマイナスになっています。
                </div>
            )}
        </>
    );
}
