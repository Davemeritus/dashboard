import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { MdOutlineSupervisorAccount, MdOutlineArrowDropDown, MdOutlineArrowDropUp} from 'react-icons/md';

import {  Button, LineChart } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData  } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { BiBuildings } from 'react-icons/bi';
import Area from '../pages/Charts/Area'
 

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-5  " >
      {/* div for a and b */}
<div className='flex'>
  {/*A--- div for d1 and d3 */}
  <div style={{ width: "100%" }} >
         {/* div1 */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center  ">
        
        <div style={{ width: "100%" }} className="flex m-2 flex-wrap justify-between gap-1  items-center  w-full">
          {earningData.map((item) => (
            <div style={{ width: "49.3%" }} key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3" >
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* div1 */}
         {/* div3 */}
         <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-full ">
          {/* <div className="md:w-full overflow-auto"> */}
            <Area />
          {/* </div> */}
        </div>
         {/* div3 */}
      </div>
     


     
      
       
      

</div>
    </div>
  );
};

export default Dashboard
;