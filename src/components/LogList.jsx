export const LogList = (props) => {
 const { records, onClickDelete } = props;
 return (
         <table className="table  table-striped mt-3">
             <thead>
                 <tr>
                     <th style={{ width: '24px' }} scope="col">
                         #
                     </th>
                     <th style={{ width: '96px' }} scope="col">
                         日時
                     </th>
                     <th style={{ width: 'auto' }} scope="col">
                         内容
                     </th>
                     <th
                         className="text-center"
                         style={{ width: '96px' }}
                         scope="col"
                     >
                         時間
                     </th>
                     <th
                         className="text-center"
                         style={{ width: '96px' }}
                         scope="col"
                     ></th>
                 </tr>
             </thead>
             <tbody>
                 {records.map((record, index) => (
                     <tr key={record.id} className="align-middle">
                         <th scope="row">{index + 1}</th>
                         <td>
                             {new Date(record.createdAt).toLocaleDateString()}
                         </td>
                         <td>{record.content}</td>
                         <td className="text-end">{record.hour}</td>
                         <td className="text-center">
                             <button className="btn btn-success" onClick={() => onClickDelete(record.id)}>削除</button>
                         </td>
                     </tr>
                 ))}
             </tbody>
         </table>
 );
}
