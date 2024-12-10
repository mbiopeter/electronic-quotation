import React, { useState } from "react";
import SubHeading from "../components/SubHeading";
import EnhancedTable from "../components/Table";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

const Quotations = () => {
    const [expand, setExpand] = useState(false);

    const handleDelete = (id) => {
        console.log(id);
    }

    const TableBtn = ({ id }) => (
        <button
            className="bg-red-500 text-white text-sm font-[500] p-2 rounded"
            onClick={() => handleDelete(id)}>
            DELETE
        </button>
    );

    const DetailsBtn = ({ id }) => (
        <Link to={`/quotations/${id}`}>
            <button className="bg-blue-500 text-white text-sm font-[500] p-2 rounded">
                DETAILS
            </button>
        </Link>
    );

    const apiData = [
        {
            id: 1,
            QuoteNo: 'Quote-1',
            desc: 'Electrical appliances',
            toName: 'John',
            toPhone: '0759595268',
        },
    ];
    const rows = apiData.map((row) => ({
        ...row,
        detailaBtn: <DetailsBtn id={row.id} />,
        deleteBtn: <TableBtn id={row.id} />,
    }));

    const columns = [
        { id: "QuoteNo", label: "Quotation No", align: "left" },
        { id: "desc", label: "Description", align: "left" },
        { id: "toName", label: "To Name", align: "left" },
        { id: "toPhone", label: "To Phone", align: "left" },
        { id: "detailaBtn", label: "#", align: "left" },
        { id: "deleteBtn", label: "#", align: "left" },
    ];

    const handleOnClick = () => {
        setExpand(!expand);
    };

    return (
        <>
            <ToastContainer />
            <div 
                className="flex w-[100%] justify-center">
                <div 
                    className="w-[90%] md:w-[80%] flex flex-col gap-5">
                    <SubHeading 
                        name={"Create Quotation"} 
                        handleOnClick={handleOnClick} />
                    <div
                        className={`w-full flex mb-10 justify-center overflow-hidden transition-all duration-500 ${
                            expand ? "max-h-[600px]" : "max-h-0"
                        }`}>
                        <div 
                            className="w-full px-2 lg:px:0 lg:w-3/4 flex flex-col gap-4 pt-6">
                            <input
                                type="text"
                                placeholder="Quotation To Name"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                type="text"
                                placeholder="Quotation To Phone Number"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <textarea
                                placeholder="Quotation Description"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"></textarea>
                            <button className="bg-blue-500 w-full p-3 pl-4 text-white font-[600]">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                    <EnhancedTable 
                        rows={rows} 
                        columns={columns} 
                        title={"Quotations"} />
                </div>
            </div>
        </>
    );
};

export default Quotations;
