import React from "react";
import Pagination from 'react-bootstrap/Pagination';

export default function Paginator({coinsPerPage, allCoins, activePage, paginate}) {
    let items = [];
    for (let number = 1; number <= Math.ceil(allCoins / coinsPerPage); number++) {
      items.push(
        <Pagination.Item key={number} active={number === activePage}
          onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>,
      );
    }

    return (
        <Pagination>{items}</Pagination>
    )
}
