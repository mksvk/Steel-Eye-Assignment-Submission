
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';


// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {

  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={event => onClickHandler(index)}>
    {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};


const SingleListItem = memo(WrappedSingleListItem);



const WrappedListComponent =() =>{
 
const items =[
  {text:"Rahim",isSelected:false},
  {text:"Karim",isSelected:false},
  {text:"Jobbar",isSelected:false},
  {text:"Bartat",isSelected:false},
  {text:"kkkk",isSelected:false},
]
  const [selectedIndex,setSelectedIndex] = useState([]);
  console.log(selectedIndex)
  
  useEffect(() => {
    setSelectedIndex(items);

  },[]);

  const handleClick = index => {
     
     setSelectedIndex([...selectedIndex,selectedIndex[index].isSelected = !selectedIndex[index].isSelected]);
     
  };

  return (
    <div className="App">

      <ul style={{ textAlign: 'left' }}>
      {selectedIndex.map((item, index) => (
            <SingleListItem 
            key={index} 
            index={index} 
            isSelected={item.isSelected} 
            text={item.text} 
            onClickHandler={handleClick}
            />
      ))}
      </ul>

    </div>
  );
}



const List = memo(WrappedListComponent);

export default List;