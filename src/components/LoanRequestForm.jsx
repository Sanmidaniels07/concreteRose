
const LoanRequestForm = ({ submitLoanRequest, values, handleChange }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLoanRequest();
  };

  return (
    <section className='bg-white flex justify-center items-center h-[300px] mt-5'>
        <form onSubmit={handleSubmit} className='flex justify-center items-center mt-5'>
          <div>

            <div>
            <input
          className='outline-none shadow-lg h-14 w-full sm:w-[500px] rounded-sm placeholder:text-center'
          type="text"
         value={values.full_name}
         onChange={handleChange('full_name')}
         placeholder="FullName"
          />
        </div>
          <br/>
        <div>
        <input
             className='outline-none shadow-lg h-14 w-full sm:w-[500px] rounded-sm placeholder:text-center'
             type="number"
            value={values.loan_amount}
            onChange={handleChange('loan_amount')}
            placeholder="Loan Amount"
            />
        </div>
        <br/>
         
         <div>
         <input
            className='outline-none shadow-lg h-14 w-full sm:w-[500px] rounded-sm placeholder:text-center'
            type="number"
            value={values.repayment_duration}
            onChange={handleChange('repayment_duration')}
            placeholder="Duration (Months)"
            />
         </div>
         <br/>
            
         <button onClick={submitLoanRequest} type="submit" className='bg-red-500 rounded-lg text-gray-300 font-bold font-serif w-40 h-10 hover:bg-slate-200'>Submit Request</button>
          </div>    
    </form>
    </section>
    
  );
};

export default LoanRequestForm;
