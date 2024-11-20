import {useParams} from 'react-router-dom'
import { storeData } from '../store';



function ProductItem(){

    //load the matcehd producet according to the sent id
    const theItemId = useParams().itemId;
    const item = storeData[theItemId - 1];

  return (
    <section>
      <h2>name : {item.title}</h2>
      <h3>price : {item.price}</h3>
      <h3>id : {item.id} </h3>
    </section>
  );
}
export default ProductItem