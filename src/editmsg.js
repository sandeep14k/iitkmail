import React from "react";
import "./editmsg.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUpload,faPaperPlane,faPlus, faSave, faPen, faSpellCheck, faComment, faPaperclip, faBold, faItalic, faUnderline, faAlignRight, faAlignLeft, faAlignCenter, faFont, faTextHeight } from '@fortawesome/free-solid-svg-icons';

const Editmsg = () => {
    const [showRecipientOptions, setShowRecipientOptions] = useState(false);
    const toggleRecipientOptions = () => {
      setShowRecipientOptions(!showRecipientOptions);
    };

    const [formatting, setFormatting] = useState({
        bold: false,
        italic: false,
        underline: false
    });

    const [alignment, setAlignment] = useState('left');
    const [fontSize, setFontSize] = useState(14);
    const [fontFamily, setFontFamily] = useState('Arial');

    const handleFormatChange = (format) => {
        setFormatting(prevState => ({
            ...prevState,
            [format]: !prevState[format]
        }));
    };

    const handleAlignmentChange = (align) => {
        setAlignment(align);
    };

    const handleFontSizeChange = (size) => {
        setFontSize(size);
    };

    const handleFontFamilyChange = (family) => {
        setFontFamily(family);
    };

    const applyFormatting = () => {
        let styles = {};
        if (formatting.bold) {
            styles.fontWeight = 'bold';
        }
        if (formatting.italic) {
            styles.fontStyle = 'italic';
        }
        if (formatting.underline) {
            styles.textDecoration = 'underline';
        }
        return styles;
    };
  return (
    <>
    <div className="editmsg-container">
      {/* Text Area */}
      <div className="textarea">
        <div className="textarea-nav">
          <div className="item">
            <div className="icon-text">
              <FontAwesomeIcon icon={faSave} />
              <span>Save</span>
            </div>
          </div>
          <div className="item">
            <div className="icon-text">
              <FontAwesomeIcon icon={faPaperclip} />
              <span>Attachment</span>
            </div>
          </div>
          <div className="item">
            <div className="icon-text">
              <FontAwesomeIcon icon={faPen} />
              <span>Signature</span>
            </div>
          </div>
          <div className="item">
            <div className="icon-text">
              <FontAwesomeIcon icon={faSpellCheck} />
              <span>Spell Check</span>
            </div>
          </div>
          <div className="item">
            <div className="icon-text">
              <FontAwesomeIcon icon={faComment} />
              <span>Responses</span>
            </div>
          </div>
        </div>
        <div className="scrolable">
        <div className="input-section">
          <div className="from-section">
            <span>From</span>
            <input type="text" id="your-email" className="custom-input" value={'sandeepkj23@iitk.ac.in'}/>
          </div>
          <div className="to-section">
            <span>To</span>
            <input type="text"  className="custom-input"/>
            <div className="add-recipient-button" onClick={toggleRecipientOptions}>
            <FontAwesomeIcon icon={faPlus} className="plus" />
           </div>
      
      {/* Recipient Options */}
      {showRecipientOptions && (
       <div className="add-recipient-options">
       <div className="recipient-option">CC</div>
       <div className="recipient-option">BCC</div>
       <div className="recipient-option">Reply-To</div>
   </div>
      )}
            
          </div>
          <div className="subject-section">
            <span>Subject</span>
            <input type="text" className="custom-input"  id="subject"/>
          </div>
        </div>
        <div className="text-area">
        <div className="button-row">
                    <div className="button" onClick={() => handleFormatChange('bold')}>
                        <FontAwesomeIcon icon={faBold} />
                    </div>
                    <div className="button" onClick={() => handleFormatChange('italic')}>
                        <FontAwesomeIcon icon={faItalic} />
                    </div>
                    <div className="button" onClick={() => handleFormatChange('underline')}>
                        <FontAwesomeIcon icon={faUnderline} />
                    </div>
                    <div className="button" onClick={() => handleAlignmentChange('left')}>
                        <FontAwesomeIcon icon={faAlignLeft} />
                    </div>
                    <div className="button" onClick={() => handleAlignmentChange('center')}>
                        <FontAwesomeIcon icon={faAlignCenter} />
                    </div>
                    <div className="button" onClick={() => handleAlignmentChange('right')}>
                        <FontAwesomeIcon icon={faAlignRight} />
                    </div>
                    <select className="select-button" onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}>
                        <option value={14}>Font Size</option>
                        <option value={12}>12px</option>
                        <option value={14}>14px</option>
                        <option value={16}>16px</option>
                        <option value={18}>18px</option>
                        {/* Add more options as needed */}
                    </select>
                    <select className="select-button" onChange={(e) => handleFontFamilyChange(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Verdana">Verdana</option>
                        {/* Add more font family options as needed */}
                    </select>
                </div>
                <textarea
                    placeholder="Enter your message"
                    style={{ ...applyFormatting(), textAlign: alignment, fontSize: `${fontSize}px`, fontFamily }}
                ></textarea>
            </div>
            </div>
            <div className="send-button">
                <button><FontAwesomeIcon icon={faPaperPlane } /> Send</button>
            </div>
      </div>
    </div>
    <div className="options-attachment">
        <div className="options-nav">
            <span>
        Options and attachments
        </span>
        </div>
        <div className="attachment">
            <div className="attachment-button">
                <span>Maximum allowed file size is 32 MB</span>
            <label for="file-input" class="custom-file-upload">
            <FontAwesomeIcon icon={faPaperclip} />
              <i class="fas fa-upload"></i> Attach a File
            </label>
                <input id="file-input" type="file" />
            </div>
            <FontAwesomeIcon icon={faUpload} className="upload" />
        </div>
    </div>
    </>
  );
};

export default Editmsg;
