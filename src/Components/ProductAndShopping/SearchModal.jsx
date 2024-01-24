import React from 'react';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import apiRequest from '../../API-CALLS/ApiRequest';
import ApiRequest from '../../API-CALLS/ApiRequest';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  height: '720px',
  width: '700px',
  overflow: 'scroll',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export default function Modal({ isOpen, setIsOpen, onClose }) {
  const [modalData, setModalData] = useState([]);
  const [query, setQuery] = useState('');

  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const filteredItems = modalData.filter((item) => {
    return item.title.toString().toLowerCase().includes(query.toLowerCase());
  });

  console.log(filteredItems);

  useEffect(() => {
    ApiRequest().then((data) => {
      //   console.log('LOGGING DATA FROM API CALL WITHIN apiRequest file WITHIN SEARCH MODAL', data);
      setModalData(data);
    });

  }, []);


  console.log('logging data within Modal component', modalData);

  if (!isOpen) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        {/* <h1 className='error-msg-search-modal-styles'>{error}</h1> */}

        {/* {error && <h1 className="error-msg-search-modal-styles">{error}</h1>}
        {loading && <h1 className="error-msg-search-modal-styles">Loading...</h1>} */}

        <h6 className="modal-header-styles">Search for Items</h6>
        <input
          value={query}
          onChange={(e) => {
            // console.log(e.target.value);
            setQuery(e.target.value);
            console.log(query);
          }}
        ></input>
        <button>Go</button>
        <button onClick={onClose}>X</button>

        {query !== '' &&
          filteredItems.map((item) => {
            return (
              <>
                <Link to={`/ProductPage/${item.id}`} onClick={onClose}>
                  <div className="filteredItems-styles" key={item.key}>
                    {item.title}

                    <img src={item.image} style={{ width: '4em' }}></img>

                    <div>{item.price}</div>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  onClose: PropTypes.func,
};

// return (
//     <>
//     {/* <img src={item.title}></img> */}
//     {/* <h6>{item.title}</h6> */}
//     <div className='filteredItems-styles'>{item.title}
//     <img src={item.image} style={{ width: '4em' }}></img>
//     <div>{item.price}</div>
//     </div>
//     </>
// )