import { useState } from 'react';
import {storeData} from '../store';
import {Link} from 'react-router-dom';

function Products() {

  const theData =  useState(storeData)[0];
  const toPresent = theData.map((item) => (
    <Link to={`/Product/${item.id}`}>
      <h2>{item.title}</h2>
    </Link>
  ));

  return (
  <section>
    Products:
    <list>
      {toPresent}
    </list>
  </section>);
}
export default Products;
