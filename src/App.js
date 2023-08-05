import React, { useEffect, useState } from 'react';
import LoanRequestForm from './components/LoanRequestForm';
import LoanRequestList from './components/LoanRequestList';
import ScheduleRepayment from './components/ScheduleRepayment';
import axios from 'axios';

const App = () => {
  const [loanRequests, setLoanRequests] = useState([]);
  const [repaymentSchedule, setRepaymentSchedule] = useState([]);
  const [userData, setUserData] = useState({
    full_name: '',
    loan_amount: '',
    repayment_duration: '',
  })

  
  // Function to handle loan request submission
  const submitLoanRequest = async (full_name, loan_amount, repayment_duration) => {
    try {
      // Make a POST request to the API endpoint for loan request
      // Replace 'your-api-endpoint' with the actual API endpoint
      const response = await axios.post('https://okigwecreations.online/api/request_for_loan', {
        full_name, 
        loan_amount, 
        repayment_duration
      });
      console.log('Loan request submitted:', response.data);
      // Refresh loan requests list
      // fetchLoanRequests();
    } catch (error) {
      console.error('Error submitting loan request:', error);
    }
  };

  // Function to fetch all loan requests
  const fetchLoanRequests = async () => {
    try {
      // Make a GET request to the API endpoint to get all loan requests
      // Replace 'your-api-endpoint' with the actual API endpoint
      const response = await axios.get('https://okigwecreations.online/api/get_all_loan_request');
      setLoanRequests(response.data.loan_requests);
    } catch (error) {
      console.error('Error fetching loan requests:', error);
    }
  };

  // Function to fetch repayment breakdown for a specific loan request
  const fetchRepaymentSchedule = async (loanId) => {
    try {
      // Make a GET request to the API endpoint to get repayment schedule
      // Replace 'your-api-endpoint' and 'loanId' with the actual API endpoint and loan ID
      const response = await axios.get('https://okigwecreations.online/api/get_repayment_schedule/TRANS00120230801042657');
      setRepaymentSchedule(response.data.repaymentSchedule);
    } catch (error) {
      console.error('Error fetching repayment schedule:', error);
    }
  };

  useEffect(() => {
    // Fetch loan requests when the component mounts
    fetchLoanRequests();
  }, []);

  const handleChange = (input) => (e) => {
    setUserData({ ...userData, [input]: e.target.value});
}

  return (
    <section className='bg-slate-800'>
      <div className='h-screen shadow-xl'>
      <h1 className='flex justify-center text-lg font-sans  text-gray-300'>Loan Management System</h1>
      <LoanRequestForm submitLoanRequest={submitLoanRequest} values={userData} handleChange={handleChange} />
      <LoanRequestList loanRequests={loanRequests} />
      <ScheduleRepayment repaymentSchedule={repaymentSchedule} />
    </div>
    </section>
    
  );
};

export default App;
