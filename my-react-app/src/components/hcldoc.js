// npx create-react-app country-capital-pagination

// cd country-capital-pagination

// touch src/data.js

// // src/data.js

// export const data = [

//   { country: 'United States', capital: 'Washington, D.C.' },

//   { country: 'Canada', capital: 'Ottawa' },

//   // Add more countries as needed

// ];

// import React from 'react';

// const Table = ({ data }) => (
// <table data-testid="table">
// <thead>
// <tr>
// <th>Country</th>
// <th>Capital</th>
// </tr>
// </thead>
// <tbody data-testid="tableBody">

//       {data.map((item, index) => (
// <tr key={index}>
// <td>{item.country}</td>
// <td>{item.capital}</td>
// </tr>

//       ))}
// </tbody>
// </table>

// );

// export default Table;

// import React from 'react';

// const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {

//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   return (
// <div data-testid="buttonDiv">
// <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>

//       {Array.from({ length: totalPages }, (_, i) => (
// <button key={i + 1} onClick={() => onPageChange(i + 1)}>{i + 1}</button>

//       ))}
// <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
// </div>

//   );

// };

// export default Pagination;

// import React, { useState } from 'react';

// import { data } from './data';

// import Table from './components/Table';

// import Pagination from './components/Pagination';

// const App = () => {

//   const [currentPage, setCurrentPage] = useState(1);

//   const [itemsPerPage, setItemsPerPage] = useState(15);

//   const handlePageChange = (page) => setCurrentPage(page);

//   const indexOfLastItem = currentPage * itemsPerPage;

//   const currentItems = data.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);

//   return (
// <div>
// <h1>Countries and Capitals</h1>
// <Table data={currentItems} />
// <Pagination 

//         totalItems={data.length} 

//         itemsPerPage={itemsPerPage} 

//         currentPage={currentPage} 

//         onPageChange={handlePageChange} 

//       />
// <select 

//         data-testid="selectinput" 

//         onChange={(e) => {

//           setItemsPerPage(Number(e.target.value));

//           setCurrentPage(1);

//         }}

//         value={itemsPerPage}
// >
// <option value={5}>5</option>
// <option value={10}>10</option>
// <option value={15}>15</option>
// </select>
// </div>

//   );

// };

// export default App;
 