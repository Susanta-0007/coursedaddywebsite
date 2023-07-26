

import React, { useState } from 'react';

const Payment = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditDebit');

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };


    return (
        <div className="container mx-auto my-4">
            <h2 className="text-2xl font-semibold mb-4 text-center ">Payment Page</h2>

            <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-md">
                <form>
                    <div className="mb-4 font-mono font-medium">
                        <label htmlFor="creditDebit" className="flex items-center cursor-pointer text-xl">
                            <input
                                type="radio"
                                id="creditDebit"
                                name="paymentMethod"
                                value="creditDebit"
                                checked={selectedPaymentMethod === 'creditDebit'}
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            Credit/Debit Card
                        </label>
                        <label htmlFor="upi" className="flex items-center cursor-pointer text-xl">
                            <input
                                type="radio"
                                id="upi"
                                name="paymentMethod"
                                value="upi"
                                checked={selectedPaymentMethod === 'upi'}
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            UPI
                        </label>
                        <label htmlFor="paytm" className="flex items-center cursor-pointer text-xl">
                            <input
                                type="radio"
                                id="paytm"
                                name="paymentMethod"
                                value="paytm"
                                checked={selectedPaymentMethod === 'paytm'}
                                onChange={handlePaymentMethodChange}
                                className="mr-2"
                            />
                            PayTM
                        </label>
                    </div>

                    {selectedPaymentMethod === 'creditDebit' && (

                        <div>
                            <div className="mb-4">
                                <div className="mb-4">
                                    <label htmlFor="cardNumber" className="block text-gray-700 font-semibold mb-2">Card Number</label>
                                    <input type="text" id="cardNumber" className="w-full px-3 py-2  border-black rounded-md border-2" />
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-2">
                                        <label htmlFor="expiryDate" className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                                        <input type="text" id="expiryDate" className="w-full px-3 py-2  border-black rounded-md border-2" />
                                    </div>
                                    <div className="w-1/2 ml-2">
                                        <label htmlFor="cvv" className="block text-gray-700 font-semibold mb-2">CVV</label>
                                        <input type="text" id="cvv" className="w-full px-3 py-2  border-black rounded-md border-2" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {selectedPaymentMethod === 'upi' && (
                        
                        <div>
                            <div className="mb-4">
                                <label htmlFor="upiId" className="block text-gray-700 font-semibold mb-2">UPI ID</label>
                                <input type="text" id="upiId" className="w-full px-3 py-2  border-black rounded-md border-2" />
                            </div>
                            
                        </div>
                    )}

                    {selectedPaymentMethod === 'paytm' && (
                        
                        <div>
                            <div className="mb-4">
                                <label htmlFor="paytmNumber" className="block text-gray-700 font-semibold mb-2">PayTM Number</label>
                                <input type="text" id="paytmNumber" className="w-full px-3 py-2  border-black rounded-md border-2" />
                            </div>
                           
                        </div>
                    )}

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;
