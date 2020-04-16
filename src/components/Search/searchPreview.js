import React, { Fragment } from 'react';
import { Link } from "gatsby"
import { Input } from "reactstrap"
import { connectSearchBox, connectHits } from 'react-instantsearch-dom';
import "./search.css"

const SearchBox = ({ currentRefinement, refine }) => (
  <Fragment>
    <form noValidate role="search" >
      <Input value={currentRefinement} onChange={(event) => refine(event.currentTarget.value)} />
    </form>
  </Fragment>
);

export const CustomSearchBox = connectSearchBox(SearchBox);

// on page load do not display
const Hits = ({ hits }) => (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.length < 1 ? <li>No search results found</li> : ''}
    {hits.map((hit) => (
      <li key={hit.objectID}>
        <Link to={hit.uid}>
          <span className="search-title">{hit.title.text}</span>
          <p>{hit.date}</p>
        </Link>
      </li>

      //  Work on highlighting
      // /////////////////////////////////////////////////
      // <li key={hit.title}>
      //   <a href={hit}>
      //     <Highlight attribute="title" hit={hit} />
      //   </a>
      // </li>
      // ////////////////////////////////////////////////
    ))}
  </ul>
);

export const CustomHits = connectHits(Hits);