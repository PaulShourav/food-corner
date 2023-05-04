const loadData=async()=>{
const chefDataRes=await fetch('https://server-food-corner-paulshourav.vercel.app/chefData');
const chefData=await chefDataRes.json();
return chefData;
}
export {loadData}