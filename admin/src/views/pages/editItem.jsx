import React, { useEffect, useState } from "react";
import SubHeading from "../components/SubHeading";
import EnhancedTable from "../components/Table";
import { ToastContainer, toast } from 'react-toastify';


const EditItem = () => {


    const [expand, setExpand] = useState(false);

    const rows = [
        {
            itemNo:'item-1',
            desc:'Electrical appliances',
            quantity:2,
            unit:'Meters',
            rate:1200,
            total:2400,
            cts:0,

        }
    ]
    const columns = [
        { id: "itemNo", label: "Item No", align: "left" },
        { id: "desc", label: "Description", align: "left" },
        { id: "quantity", label: "Quantity", align: "left" },
        { id: "unit", label: "unit", align: "left" },
        { id: "rate", label: "Rate(Ksh)", align: "left" },
        { id: "total", label: "Total(ksh)", align: "left" },
        { id: "cts", label: "Cts", align: "left" },
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
                    <SubHeading name={"EDIT: Quote-1; Item-1; To: Peter; Phone: 0759595268"} handleOnClick={handleOnClick} />
                    <div
                        className={`w-full flex mb-10 justify-center overflow-hidden transition-all duration-500 ${
                            expand ? "max-h-[600px]" : "max-h-0"
                        }`}>
                        <div className="w-full px-2 lg:px:0 lg:w-3/4 flex flex-col gap-4 pt-6">
                            <input
                                type="text"
                                placeholder="Unit"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                type="text"
                                placeholder="Quantity"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                type="text"
                                placeholder="unit"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                type="text"
                                placeholder="Rate"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                type="text"
                                placeholder="Cts"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <textarea
                                placeholder="Description"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"></textarea>
                            <button
                                className="bg-blue-500 w-full p-3 pl-4 text-white font-[600]">SUBMIT</button>
                        </div>
                    </div>
                    <EnhancedTable rows={rows} columns={columns} title={"Item-1 Details"} />
                </div>
            </div>
        </>
    );
};

export default EditItem