
export const InputTextarea = (props) => {
    const { label, name, value, placeholder, onChange } = props;

    return (
        <>
            <label htmlFor="study-content" className="form-label">
                {label}
            </label>
            <textarea
                className="form-control"
                id="study-content"
                rows="3"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required
            ></textarea>
        </>
    );
};
