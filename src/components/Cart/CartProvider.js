import React from 'react'

const CartContext=React.createContext({
    cart:[],
    addToCart:(data,km)=>{},
    removeFromCart:(data,km)=>{},
    setDHID:(data)=>{},
    clearDATA:()=>{}
})

class CartProvider extends React.Component{
    state={
        cart:this.getCookie("MonAn")
    }

    getCookie(name) {
        // Split cookie string and get all individual name=value pairs in an array
        if(document.cookie==="")
        this.setCookie(name,[])
        var cookieArr = document.cookie.split(";");
        
        // Loop through the array elements
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            
            /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
            if(name == cookiePair[0].trim()) {
                // Decode the cookie value and return
                return JSON.parse(cookiePair[1]);
            }
        }
        
        // Return null if not found
        return null;
    }
    setCookie(name,value)
    {
        document.cookie=`${name}=${JSON.stringify(value)}`
    }

    addToCart=(data,km)=>{

        const exist= this.state.cart.find((x)=>x.Mon_ID===data.Mon_ID);
        if(exist){
            const list=this.state.cart.map((x)=>
            x.Mon_ID===data.Mon_ID ? {...exist, SoLuongMua:exist.SoLuongMua+1,ThanhTien:exist.ThanhTien+data.DonGia-km}:x)
            console.log(JSON.stringify(list))
            this.setCookie("MonAn",list)
            // document.cookie=JSON.stringify(list)
            this.setState({cart:list})
        }
        else{
            const list=[...this.state.cart,{...data,SoLuongMua:1,ThanhTien:data.DonGia-km}]
            console.log(JSON.stringify(list))
            this.setCookie("MonAn",list)
            // document.cookie=JSON.stringify(list)
            this.setState({cart:list})
        }
    }

    removeFromCart=(data,km)=>{
        const exist= this.state.cart.find((x)=>x.Mon_ID===data.Mon_ID);
        if(exist.SoLuongMua===1){
            const list=this.state.cart.filter((x)=>x.Mon_ID!==data.Mon_ID)
            this.setCookie("MonAn",list)
            // document.cookie=JSON.stringify(list)
            this.setState({cart:list})
        }
        else{
            const list=this.state.cart.map((x)=>
            x.Mon_ID===data.Mon_ID ? {...exist, SoLuongMua:exist.SoLuongMua-1, ThanhTien:exist.ThanhTien-data.DonGia+km}:x)
            this.setCookie("MonAn",list)
            // document.cookie=JSON.stringify(list)
            this.setState({cart:list})
        }
        
    }

    setDHID=(data)=>{
        console.log(data)
        const list=this.state.cart.map((index,key)=>{this.state.cart[key]={...index,DONHANG_ID:data};})
        this.setCookie("MonAn",list)
        // document.cookie=JSON.stringify(this.state.cart)
        // this.setState({cart:list})
    }

    clearDATA=()=>{
        const list=[]
        this.setCookie("MonAn",list)
        // document.cookie=JSON.stringify([])
        this.setState({cart:list})
    }

    render(){
        return(
            <CartContext.Provider value={{
                cart:this.state.cart,
                addToCart:this.addToCart,
                removeFromCart:this.removeFromCart,
                setDHID:this.setDHID,
                clearDATA:this.clearDATA
                }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export {CartProvider, CartContext}