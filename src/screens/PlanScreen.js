// import React, { useEffect, useState } from 'react'
// import { selectUser } from '../features/userSlice'
// import db from '../firebase'
// import "./PlanScreen.css"

// import { loadStripe } from '@stripe/stripe-js'

// function PlanScreen() {

//     const [products,setProducts]=useState([])
//     const user=userSelector(selectUser);

//     useEffect(()=>{
//         db.collection('products').
//         where('active','==',true).get().then((querySnapshot)=>{
//             const products={};
//             querySnapshot.forEach(async productDoc=>{
//                 products[products.id]=productDoc.data();
//                 const priceSnap=await productDoc.ref.collection('prices').get();
//                 priceSnap.docs.forEach(price=>{
//                    products[productDoc.id].prices=
//                    {
//                     priceId:price.id,
//                      priceData:price.data()
//                    }
//                 })
//             })
//             setProducts(products)
//         })
//     },[]) ;

//     const loadCheckout=async(priceId)=>{
//         const docRef=await db.collection('customers').doc(user.uid).collection("checkOut Session").add({
//             price:priceId,
//             success_url:window.location.origin,
//             cancerl_url:window.location.origin,
//         });
//             docRef.onSnapshot(async(snap)=>{
//                 const{error, sessionId}=snap.data();
//                 if(error)
//                 {
//                     alert(`Something went Wrong..${error.message}`)
//                 }
//                 if(sessionId)
//                 {
//                     const stripe=await loadStripe('Publishable KEY')
//                 }
//                 stripe.redirectToCheckout({sessionId});
//             })
//     }

//   return (
//     <div className="planScreen">
//        {Object.entries(products).map(({productId,productData})=>{
//         return(
//             <div className='plansScreen_plan'>
//                 <div className='plansScreen_info'>
//                     <h5>{productData.name}</h5>
//                     <h6>{productData.description}</h6>
//                     </div>
//                     <button
//                     onClick={()=>loadCheckout(productData.prices.priceId)}
//                     className="btn">Subscribe</button>
//             </div>

//         )
//        })}
      
//     </div>
//   )
// }

// export default PlanScreen
