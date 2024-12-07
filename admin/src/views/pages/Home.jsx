import React, { useEffect, useState } from 'react';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Chart } from 'primereact/chart';
import DescBox from '../components/DescBox';
import Sales from '../components/Sales';
        

const dashboardDescData = [
    { id: 1, title: 'Total Quotations', value: '210',route:'/quotations',enabled:true,icon:<AttachMoneyRoundedIcon style={{ fontSize: '50px', color: '#EC6530FF' }}/> },
    { id: 2, title: 'Quotation Totals', value: 'KSH. 672,457',enabled:false,icon:<LaptopChromebookRoundedIcon style={{ fontSize: '50px', color: '#EC6530FF' }}/>  },
    { id: 3, title: 'Avarage Monthly Quotations', value: '23',enabled:false,icon:<PersonRoundedIcon style={{ fontSize: '50px', color: '#EC6530FF' }}/>  },
    { id: 4, title: 'Avarage Quotation Totals', value: 'KSH. 349',enabled:false,icon:<AddCircleRoundedIcon style={{ fontSize: '50px', color: '#EC6530FF' }}/>  }
];

const mostSalesData = [
    {id:1,name:'css & html full course',sales:'38', amount:'20,000'},
    {id:2,name:'javascript full course',sales:'32', amount:'23,000'},
    {id:3,name:'php full course',sales:'30', amount:'19,000'},
    {id:4,name:'python full course',sales:'25', amount:'21,000'},
    {id:5,name:'java full course',sales:'22', amount:'19,500'},
    {id:6,name:'flutter full course',sales:'19', amount:'16,000'},
    {id:7,name:'machine learning full course',sales:'17', amount:'33,000'},
    {id:8,name:'data science full course',sales:'14', amount:'18,000'},
    {id:9,name:'C# full course',sales:'11', amount:'11,000'},
    {id:9,name:'C+ full course',sales:'9', amount:'17,000'},
]

const Home = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Total Quotations',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Avarage Items',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    return (
        <div className="flex items-center flex-col gap-5 w-full mt-6">
            <div className="w-[90%] md:w-[80%] flex flex-row flex-wrap items-center justify-between gap-5">
                {dashboardDescData.map(item => (
                    <DescBox 
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                        enabled={item.enabled}
                        route={item.route}
                    />    
                ))}        
            </div>
            <div className="w-[90%] md:w-[80%] flex flex-row flex-wrap items-center justify-between my-5 gap-5">
                <div className="w-full xl:w-[55%] py-6 px-5 shadow-2xl">
                    <Chart type="line" data={chartData} options={chartOptions} />
                </div>
                <div className="w-full xl:w-[43%] h-auto flex flex-col gap-5 shadow-2xl p-5">
                    <span className="text-[15px] md:text-xl text-[#333333] font-[600]">Recent Quotations</span>
                    <div className="flex flex-col">
                        <div className="flex justify-between border-b-2 border-grey-50">
                            <div className="w-[40%]"><span className='text-[13px] md:text-3sm text-[#333333] text-[#33333] font-[700]'>#    Quote No</span></div>
                            <div><span className='text-[13px] md:text-3sm text-[#333333] text-[#33333] font-[700]'>Total Items</span></div>
                            <div><span className='text-[13px] md:text-3sm text-[#333333] text-[#33333] font-[700]'>Total Amount</span></div>
                        </div>
                        {mostSalesData.map(item => (
                            <Sales 
                                key={item.id} 
                                id={item.id}
                                name={item.name}
                                sales={item.sales}
                                amount={item.amount}
                                
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;
