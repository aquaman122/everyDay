import React from 'react';
import './Write.css';
import AddIcon from '@mui/icons-material/Add';
import Post from '../post/Post';

function Write({title, content, onChange, onSubmit}) {

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
            <input name='title' 
            type="text" 
            placeholder='Title' 
            className='writeInput'
            onChange={onChange}
            autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea 
            name='content'
            placeholder='Tell your story...' 
            type='text'
            onChange={onChange}
            className='writeInput writeText'></textarea>
          <button onSubmit={onSubmit} className='writeSubmit'>Publish</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Write;