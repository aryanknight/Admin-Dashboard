import React from 'react';
import FolderIcon from '@material-ui/icons/Folder';

export default function Folder() {
    return (
        <div className='folder'>
            <div className="folder-1">
                <FolderIcon fontSize="large" style={{color:'#C5CEE0',padding:'0px'}} />
                <div className="folder-text">
                    <div className="folder-head">Practice One</div>
                    <div className="folder-para">3 Files</div>
                </div>
            </div>
        </div>
    )
}
