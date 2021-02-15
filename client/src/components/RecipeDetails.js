import React, { useState } from 'react'
import Button from "@material-ui/core/Button";
const RecipeList = (props) => {
  const prep = props.preparation.split(".");
  const ingredients = props.ingredients
  console.log(prep);

  return (
//         <div className="fav-div">
//           <div className="title-div">
//             <h3 className="fav-title" onClick={props.hide}>{props.title}</h3>

//           </div>
//           <div className="img-div">
            
//             <img className="fav-image" src={props.image}></img>
//             </div>
//           <div className="ing-div">
//             <h4 className="fav-label">Ingredients</h4>
//               <ul>
//                 {ingredients.map(i => <li className="ingredient-list">{i}</li>)}
//               </ul>
//           </div>
//           <div className="prep-div">
//             <h4 className="fav-label">Preparation</h4>
//               <ol >
//                 {prep.map(p => <li className="prep-list">{p}</li>)}
//               </ol>
//           </div>
//         </div>
//     );
// };
        <div className="fav-div">

    <div className="favcontainer" id="favcontainer">
      <div className="favcontinner" id="favcontinner">
        <div onClick={props.hide} className="Favline">
          <div className="title-div">
            <h2 className="fav-title">{props.title}</h2>
          </div>
        </div>
        <div className="img-div" id="favimgdiv">
          <img className="fav-image" src={props.image}></img>
        </div><br />
        <h3 >Ingredients</h3>
          <ul>
            {ingredients.map(i => <li className="ingredient-list">{i}</li>)}
          </ul>
        <br />
        <h3>Preparation</h3>
        <ol >
              {prep.map(p => <li className="prep-list">{p}</li>)}
          </ol>
        <br /><br />
        <Button color="secondary" variant="contained" className="favbutton" onClick={props.hide}>Close</Button>
      </div>
    </div>
    </div>
  )
}

export default RecipeList
