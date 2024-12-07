import React, { useEffect } from 'react';
import '@fontsource/great-vibes'; // Import the signature font

const QuotationReceipt = () => {
    useEffect(() => {
        window.print();
    }, []);

    return (
        <div 
            className="p-6 max-w-3xl mx-auto bg-white shadow-md border rounded-md print:border-none print:shadow-none print:border-none">
            {/* Header Section */}
            <div 
                className="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                    <h1 
                        className="text-2xl font-bold text-gray-800">Quotation</h1>
                    <p 
                        className="text-gray-600">Quotation #: Quote-08</p>
                    <p 
                        className="text-gray-600">Date: 07/12/2024</p>
                </div>
                <div>
                    <h2 
                        className="text-xl font-semibold text-gray-800">MBEREREKIM INSTALLATION CO.LTD</h2>
                    <h1 
                        className="text-2sm font-semibold text-gray-800">P.O BOX 186787, NAIROBI</h1>
                    <h1 
                        className="text-2sm font-semibold text-gray-800">EMAIL: mbererekim@mbererekiminstallationcoltd.info</h1>
                    <h1 
                        className="text-2sm font-semibold text-gray-800">PHONE NUMBER: +254721841408/+254714566214</h1>
                    <h1 
                        className="text-2sm font-semibold text-gray-800">KRA PIN: WGHDFJWE</h1>
                    <div className="flex flex-row gap-4 items-center">
                        <h1
                            className="text-2sm font-semibold text-gray-800">Authorized Signature:</h1>
                        <span
                            className="text-2xl text-gray-800"
                            style={{ fontFamily: '"Great Vibes", cursive' }}>
                            John Kimani
                        </span>
                    </div>
                </div>
            </div>

            {/* Recipient Section */}
            <div className="mb-6">
                <p className="text-gray-800 font-semibold">To:</p>
                <p className="text-gray-600">Peter</p>
                <p className="text-gray-600">0759595268</p>
            </div>

            {/* Table Section */}
            <div className="overflow-auto">
                <table className="w-full border-collapse border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Qty</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">1pole circuit breakers 32A dc</td>
                            <td className="border px-4 py-2">2 pcs</td>
                            <td className="border px-4 py-2">Ksh900.00</td>
                            <td className="border px-4 py-2">Ksh1800.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="border px-4 py-2 text-right font-semibold">Grand Total</td>
                            <td className="border px-4 py-2 font-semibold">Ksh1800.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            {/* Payment Instructions */}
            <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-800">Payment Instructions</h3>
                <p className="text-gray-600">Equity Bank</p>
                <p className="text-gray-600">Acc No.: 123456789123</p>
                <p className="text-gray-600">Name: Mberere Mbio Peter</p>
                <p className="text-gray-600 font-[800] mt-4">Alternatives</p>
                <p className="text-gray-600">Pay Bill: 12345</p>
                <p className="text-gray-600">A/C Number: 121322</p>
                <p className="text-gray-600 mt-4">Send Money: 0759595268</p>
            </div>
        </div>
    );
};

export default QuotationReceipt;
