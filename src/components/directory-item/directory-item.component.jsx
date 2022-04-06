import { useNavigate } from "react-router-dom";
import { DirectoryItemContainer,BackgroundImage, DirectoryItemBodyContainer } from "./directory-item.styles";

const DirectoryItem = ({category}) =>{
    const {imageUrl,title,linkUrl,size} = category;
    const navigate = useNavigate();
    const onNavigateHandler = ()=>{
        navigate(linkUrl);
    }
    return(
       
        <DirectoryItemContainer size = {size} onClick = {onNavigateHandler} >
            <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}>
            </BackgroundImage>
            <DirectoryItemBodyContainer>
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </DirectoryItemBodyContainer>
        </DirectoryItemContainer>
    )

};
export default DirectoryItem;