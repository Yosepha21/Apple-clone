import React from 'react'

function Joiphone() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("iphones.json")
        .then((response)=>{
            return response.json();
        })
        .then((x)=>{
            const iphonex=x.products;
            setData(iphonex);
        })
    },[])


  return (
    <div>
        
    </div>
  )
}

export default Joiphone