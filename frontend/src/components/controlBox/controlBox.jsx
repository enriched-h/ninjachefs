import { SignedIn, SignedOut } from "@clerk/clerk-react";


export default function ControlBox({ setDialog }) {

    const openSignInDialog = () => {
        setDialog(true);
    }

    const openModal = () => {
        window.scrollTo({ top: 0, left: 0});
        document.querySelector('.add-item-modal-wrapper').style.display = 'unset';
        document.querySelector('body').style.overflowY = 'hidden';
    }



    return (
        <div className="bg-[#D6F4EF] rounded-[10px] md:h-[275px] md:w-[300px] py-[20px] px-[30px] flex flex-col items-center">
            <h1 className="text-[#00654B] font-bold text-[1.7rem] font-poppins leading-9">Sharing is caring.</h1>
            <SignedIn>
                <button className="w-[250px] h-[50px] mt-[20px] bg-[#0F7556] rounded-[10px] font-poppins font-bold text-[17px] text-center text-white hover:opacity-90 cursor-pointer" 
                type="button" onClick={openModal}>Add Recipe</button>
            </SignedIn>
            
            <SignedOut>
                <button className="w-[250px] h-[50px] mt-[20px] bg-[#0F7556] rounded-[10px] font-poppins font-bold text-[17px] text-center text-white hover:opacity-90 cursor-pointer" type="button" onClick={openSignInDialog}>Sign In</button>
            </SignedOut>

        </div>
    );
  }