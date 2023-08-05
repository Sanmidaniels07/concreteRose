import React from 'react';

const LoanRequestList = ({ loanRequests }) => {
  return (
    <div className='flex justify-center items-center mt-5'>
      <h2 className='text-gray-300 text-xl'>List of Loan Requests</h2>
      <ul>
        {loanRequests.map((request) => (
          <li key={request.id}>
            {/* Display loan request details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoanRequestList;
