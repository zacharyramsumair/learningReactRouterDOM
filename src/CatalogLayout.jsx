import React from 'react'

import { Link, Outlet } from 'react-router-dom'

function CatalogLayout() {
  return (
    <>
    <div>
    <ul>
        <li>
            <Link to="/catalog/La%20La%20Land">La La Land</Link>
        </li>
        <li>
            <Link to="/catalog/Your%20Name">Your Name</Link>
        </li>
        <li>
            <Link to="/catalog/Detective%20Pikachu">
                Detective Pikachu
            </Link>
        </li>
        <li>
            <Link to="/catalog/new">
                Add to Catalog
            </Link>
        </li>
    </ul>
</div>
<Outlet/>
</>

  )
}

export default CatalogLayout