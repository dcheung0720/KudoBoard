import { PlusIcon } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import React from 'react'

const Navbar = () => {
 const navigate = useNavigate();
  return (
    <header className = "bg-base-300 border-b border-base-content/10">
        <div className = "mx-auto max-w-6xl p-4">
            <div className = "flex items-center justify-between">
                <h1 className = "text-3xl font-bold text-primary font-mono tracking-tight">
                    Kudoboard
                </h1>                
                <div className = "flex items-center gap-4">
                    <button className="flex items-center space-x-2" onClick={() => navigate("/create")}>
                        <PlusIcon className="size-5" />
                        <span>Add Note</span>
                    </button>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Navbar
