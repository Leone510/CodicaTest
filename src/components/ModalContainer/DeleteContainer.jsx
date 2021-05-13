import { useParams } from "react-router"
import { StyledModalContainer } from "./StyledModalContainer"

export const DeleteContainer = () => {
   const { deleteCity } = useParams();

   return (
      <StyledModalContainer>
         <div className="deleteBox">
            <div className="deleteTitle">
               <h3>Do you really want to delete {deleteCity}</h3>
            </div>
            <div className="deleteButtons">

            </div>
         </div>
      </StyledModalContainer>
   )
}