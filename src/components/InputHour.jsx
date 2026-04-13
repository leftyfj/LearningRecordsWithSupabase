export const InputHour = (props) => {
 const { label, type, name, value, placeholder, onChange } = props;
 return (
     <>
         <label htmlFor="study-time" className="form-label">
             {label}
         </label>
         <input
             className="form-control w-25 w-md-100"
             id="study-time"
             type={type}
             name={name}
             value={value}
             placeholder={placeholder}
             onChange={onChange}
             required
         />
     </>
 );
}
