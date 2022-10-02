# Steel-Eye-Assignment-Submission
1) Explain what the simple List component does. 

    List component is takeing all the Items from an array and i have created a state named selectedInedex and useEffect hook is setting its initial data then we are useing selectedIndex and mapping through all the items and we are rendering another child component which is a single list item and it takes one function and some props and that function will trigger the parent component's state and changes its value and that will changeing the colour 
    
2) Explain what the simple List component does.
   
   # first error
   ```bash
     This is not the proper way to initalize the useState
     
     const [setSelectedIndex, selectedIndex] = useState();
     
     
     const [selectedIndex , setSelectedIndex] = useState();
     ```
     #second error
     ```bash
     
      <SingleListItem
         onClickHandler={() => handleClick(index)}  // handleClick is takeing the index this is a problem
          text={item.text}
          index={index}
          isSelected={selectedIndex}
          
        <SingleListItem 
        key={index}   
        index={index} 
        isSelected={item.isSelected} 
        text={item.text} 
        handleClick={handleClick}
        />
      
     ```
     #Third mistake
      
       For list items we need to add a unique key prop which is missing in the code
      
      #Fourth mistake
        Prop type is not matching with the prop, parent component is sending a number but it should send a boolean 
        
        
