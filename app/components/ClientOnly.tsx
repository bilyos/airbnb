'use client';

import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const[hasMoounted, setHasMounted] = useState(false);
    useEffect(()=>{
        setHasMounted(true);
    }, [])

    if(!hasMoounted){
        return null;
    }
  return (
    <>
        {children}
    </>
  ) 
}

    


export default ClientOnly