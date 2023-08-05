import React from 'react';

const ScheduleRepayment = ({ repaymentSchedule }) => {
  return (
    <div>
      <h2>Repayment Schedule</h2>
      <ul>
        {repaymentSchedule.map((repayment) => (
          <li key={repayment.installment_number}>
            {/* Display repayment schedule details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleRepayment;
