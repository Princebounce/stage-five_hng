import React, {useState} from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as HelpMeOut } from '../../assets/HelpMeOut.svg';
import { ReactComponent as VerifyIcon } from '../../assets/verify.svg';
import { ReactComponent as MedalIcon } from '../../assets/medal.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import { ReactComponent as CircleIcon } from '../../assets/circle.svg';
import PromptModal from '../../components/extension-prompt-modal';

const HomePage = () => {

  const menuTabs = ['Overview', 'Privacy practices', 'Review', 'Related'];
  const [tabs, setTabs] = useState(menuTabs[0]);
  const [showPromptModal, setShowPromptModal] = useState(false);


  return (
    <div className=''>

      <div className='flex flex-col md:flex-row justify-between border-b p-10'>

        <div className='flex gap-6'>
          <div>
            <Logo className='w-[50px] md:w-full' />
          </div>
          <div>
            <HelpMeOut className='w-[200px] md:w-full' />
            <div className='flex my-3'>
              <div className='flex gap-2'>
                <VerifyIcon />
                <p  className='text-[#0E75C5]'>Helpmeout.com</p>
              </div>
              <div className='flex gap-2'>
                <MedalIcon />
                <p className='text-[#0E75C5]'>Featured</p>
              </div>
            </div>
            <div className='flex '>
              <div className='flex gap-1'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <p>252</p>
                <CircleIcon className='pr-2' />  
              </div>
              <div className='text-[#0E75C5] border-x-2 border-[#606060] border-solid px-2 hidden md:flex'>
                Productivity
              </div>
              <div className='pl-2 text-[#606060] hidden md:flex'>
                80,000+ users
              </div>
            </div>

          </div>
        </div>

        <div className='mt-3 md:mt-0'>
          <button onClick={()=> setShowPromptModal(true)} className='bg-[#0E75C5] w-[166px] h-[45px] rounded-md text-white'>
            Add to Chrome
          </button>
        </div>
      </div>

      <div className='flex gap-4 justify-center py-5'>
        {menuTabs.map((item, index)=>(
        <div key={index} 
          onClick={() =>{setTabs(item)}} 
          className={`bg-white  p-2 text-[#606060] text-sm font-medium cursor-pointer ${item === tabs ? ' rounded-[24px] shadow-md text-[#0E75C5]': ''}`}>
          {item}
        </div>
        ))}
      </div>

      {tabs === menuTabs[0] &&
        <div className='bg-[#F0F0F0] py-10 px-[70px] h-[60vh] '>
          <div className='bg-white flex flex-col justify-center items-center p-5 gap-2'>
            <Logo />
            <HelpMeOut className='w-[200px] md:w-full'/>
            <p>Help out by creating videos on how to get things done and sending out</p>
          </div>
        </div>
      }

      {showPromptModal && 
        <PromptModal onClose={()=>setShowPromptModal(false)} />
      }
    </div>
  )
}

export default HomePage;