export const TotalHours = (props) => {
 const { totalHours } = props;
 return (
     <p className="mt-5 text-end fw-bold">
         <span>累計時間:</span>
         {totalHours}時間
     </p>
 );
}
