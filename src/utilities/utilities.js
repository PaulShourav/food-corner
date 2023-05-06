// const data =async () => {
    
   
//     console.log(chefData);
//      return {chefData,chefRecipeData};
// }


const data = async () => {
    const chefDataRes=await fetch('https://server-food-corner-paulshourav.vercel.app/chefData');
    const chefData=await chefDataRes.json();
    const chefRecipe=await fetch('http://localhost:5000/chefRecipeData');
    const chefRecipeData=await chefRecipe.json();
   
    return {chefData,chefRecipeData};
}
console.log(data);
export {data} ;