import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import EnhancedTable from "../components/Table";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { url } from "../../consts/urls";

const QuotationDetails = () => {
    const { id } = useParams();

    const [expand, setExpand] = useState(false);
    const [quotation, setQuotation] = useState({});
    const [quotItems,setQuotItems] = useState({
        unit:"",
        quantity:0,
        rate:0,
        cts:"",
        description:""

    });

    const handleinputOnChange = (e,key) => {
        setQuotItems(prev => ({
            ...prev,
            [key]:e.target.value
        }))
    }

    const handleDelete = (id) => {
        console.log(id);
    };

    const TableBtn = ({ id }) => (
        <button
            className="bg-red-500 text-white text-sm font-[500] p-2 rounded"
            onClick={() => handleDelete(id)}>
            DELETE
        </button>
    );

    const EditBtn = ({ id }) => (
        <Link to={`/editItem/${id}`}>
            <button className="bg-green-500 text-white text-sm font-[500] p-2 rounded">
                EDIT
            </button>
        </Link>
    );

    const apiData = [
        {
            id:1,
            itemNo: 'item-1',
            desc: 'Electrical appliances',
            quantity: 2,
            unit: 'Meters',
            rate: 1200,
            total: 2400,
            cts: 0,
        },
    ];

    const rows = apiData.map((row) => ({
        ...row,
        detailaBtn: <EditBtn id={row.id} />,
        deleteBtn: <TableBtn id={row.id} />,
    }));

    const columns = [
        { id: "itemNo", label: "Item No", align: "left" },
        { id: "desc", label: "Description", align: "left" },
        { id: "quantity", label: "Quantity", align: "left" },
        { id: "unit", label: "Unit", align: "left" },
        { id: "rate", label: "Rate(Ksh)", align: "left" },
        { id: "total", label: "Total(Ksh)", align: "left" },
        { id: "cts", label: "Cts", align: "left" },
        { id: "detailaBtn", label: "#", align: "left" },
        { id: "deleteBtn", label: "#", align: "left" },
    ];

    const handleOnClick = () => {
        setExpand(!expand);
    };

    const handleDownload = () => {
        window.open(`/recept/${id}`, '_blank');
    };

    const fetchQuotationDetails = async () => {
        try{
            const responseData = await axios.get(`${url}/quotation/one`,{params:{id}});
            setQuotation(responseData.data);
        }catch(error){
            return error;
        }
    }

    const handleSubmit = async () => {
        console.log(quotItems);
    }
    useEffect(() => {
        fetchQuotationDetails();
    },[])
    return (
        <>
            <ToastContainer />
            <div className="flex w-[100%] justify-center">
                <div className="w-[90%] md:w-[80%] flex flex-col gap-5">
                    <SubHeading
                        name={`${quotation.QuoteNo}; To: ${quotation.toName}; Grand Total: Ksh 76000`}
                        handleOnClick={handleOnClick}
                        handleDownload={handleDownload}
                        download={true}/>
                    <div
                        className={`w-full flex mb-10 justify-center overflow-hidden transition-all duration-500 ${
                            expand ? "max-h-[600px]" : "max-h-0"}`}>
                        <div 
                            className="w-full px-2 lg:px:0 lg:w-3/4 flex flex-col gap-4 pt-6">
                            <textarea
                                onChange={(e) => handleinputOnChange(e, 'description')}
                                placeholder="Description"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"></textarea>
                            <input

                                onChange={(e) => handleinputOnChange(e, 'quantity')}
                                type="number"
                                placeholder="Quantity"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                onChange={(e) => handleinputOnChange(e, 'unit')}
                                type="text"
                                placeholder="Unit"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                onChange={(e) => handleinputOnChange(e, 'rate')}
                                type="number"
                                placeholder="Rate"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>
                            <input
                                onChange={(e) => handleinputOnChange(e, 'cts')}
                                type="text"
                                placeholder="Cts"
                                className="p-2 pl-4 bg-[#f1f0f0] rounded focus:outline-none focus:border-[#4956e2] focus:ring-2 focus:ring-[#4956e2]"/>

                            <button 
                                onClick={handleSubmit}
                                className="bg-blue-500 w-full p-3 pl-4 text-white font-[600]">SUBMIT</button>
                        </div>
                    </div>
                    <EnhancedTable 
                        rows={rows} 
                        columns={columns} 
                        title={"Quotation Items"} />
                </div>
            </div>
        </>
    );
};

export default QuotationDetails;
