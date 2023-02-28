import React from 'react';
import './Write.css';
import AddIcon from '@mui/icons-material/Add';

function Write() {
  return (
    <>
      <div className='write'>
        <img 
        className='writeImg'
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt="" />
        <form className='writeForm'>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <AddIcon className='writeIcon'/>
            </label>
            <input type="file" id='fileInput' style={{display:'none'}}/>
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea 
            placeholder='Tell your story...' 
            type='text' 
            className='writeInput writeText'></textarea>
          <button className='writeSubmit'>Publish</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Write;