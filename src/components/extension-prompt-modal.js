import React, {useState} from 'react';
import { ReactComponent as CloseIcon } from '../assets/close-circle.svg';
import { ReactComponent as SettingsIcon } from '../assets/setting.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as HelpMeOut } from '../assets/HelpMeOut.svg';
import { ReactComponent as MicIcon } from '../assets/microphone.svg';
import { ReactComponent as VideoIcon } from '../assets/video-camera.svg';
import { CgScreen } from "react-icons/cg";
import { FiCopy } from "react-icons/fi";
import RecorderMenu from './recorderMenu';

const PromptModal = ({onClose}) => {
    const[showRecordMenu, setShowRecordMenu]= useState(false);

    return ( 
        <div>
        <div className='p-4 absolute top-1 right-5 rounded-[24px] shadow-md bg-white z-20 w-[300px]'>

            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <Logo  className='w-[30px]'/> 
                    <HelpMeOut  className='w-[90px]'/>
                </div>
                <div className='flex items-center gap-2'>
                    <SettingsIcon className='cursor-pointer' />
                    <CloseIcon onClick={onClose} className='cursor-pointer' />
                </div>
            </div>
            <p className='text-[#413C6D]'>This extension helps you record and share help videos with ease.</p>
            <div className='flex text-sm gap-6 justify-center py-3'>
                <div className='text-[#928FAB] flex flex-col items-center'>
                    <CgScreen size={32}  />
                    <p>Full Screen</p>
                </div>
                <div className='text-[#928FAB] flex flex-col items-center'>
                    <FiCopy size={32}  />
                    <p>Current Tab</p>
                </div>
                
            </div>
            <div className='border-2 border-[#100A42] text-[#100A42] rounded-md p-2 flex font-medium'>
                <VideoIcon />
                <p className='ml-2'>Camera</p>
            </div>
            <div className='border-2 border-[#100A42] text-[#100A42] rounded-md p-2 flex font-medium mt-4'>
                <MicIcon />
                <p className='ml-2'>Audio </p>
            </div>
            <button onClick={()=>setShowRecordMenu(true)} className='bg-[#120B48] text-white w-full rounded-md h-[50px] mt-4'>
                Start Recording
            </button>
            
        </div>
        {showRecordMenu && 
            <RecorderMenu onClose={()=>setShowRecordMenu(false)} />
        }
        </div>
     );
}
 
export default PromptModal;