import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faCopy, faTrash, faBold, faItalic, faAlignCenter, faPlus, faIndent, faPrint } from '@fortawesome/free-solid-svg-icons';
import ReactToPrint from 'react-to-print';
import styles from './styles.module.css';

const MyComponent = () => {
  const [contents, setContents] = useState([]);
  const [selectedContentId, setSelectedContentId] = useState(null);
  const printRef = useRef();

  useEffect(() => {
    const savedContents = localStorage.getItem('contents');
    if (savedContents) {
      setContents(JSON.parse(savedContents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contents', JSON.stringify(contents));
  }, [contents]);

  const generateUniqueId = () => `content-${Date.now()}`;

  const addContent = (newContent, type) => {
    const newId = generateUniqueId();
    setContents(prevContents => [
      ...prevContents,
      { id: newId, html: newContent, plainText: newContent, type }
    ]);
  };

  const handleButtonClick = (type) => {
    let defaultText = '';
    if (type === 'header') {
      defaultText = `John Doe<br><span style="font-weight:normal">• firstlast@gmail.com • (111) 222-3333 • yourwebsite.com </span>`;
    } else if (type === 'section') {
      defaultText = 'Section Heading';
    } else if (type === 'subtitle') {
      defaultText = 'Title';
    } else if (type === 'nonBoldSubtitle') {
      defaultText = `• Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span style="font-weight: bold;">sed do eiusmod </span> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br>• ed do <span style="font-weight: bold;">eisumud tempor incididunt</span> ut labore et dolore magnaed do eiusmod tempor incididunt ut labore et dolore magna<br>• ed do eiusmod tempor incididunt ut labore et dolore magna`;
    }
    addContent(defaultText, type);
  };

  const handlePlusButtonClick = (type, id) => {
    let defaultText = '';
    if (type === 'title') {
      defaultText = 'Description';
    } else if (type === 'sub') {
      defaultText = 'Subtitle Text';
    }

    const index = contents.findIndex(content => content.id === id);
    const newContent = {
      id: generateUniqueId(),
      html: defaultText,
      type
    };

    const newContents = [
      ...contents.slice(0, index + 1),
      newContent,
      ...contents.slice(index + 1)
    ];

    setContents(newContents);
  };

  const handleDeleteContent = (id) => {
    setContents(prevContents => prevContents.filter(content => content.id !== id));
  };

  const handleContentChange = (id, newHtml) => {
    setContents(prevContents =>
      prevContents.map(content =>
        content.id === id ? { ...content, html: newHtml } : content
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };

    const reorderedContents = reorder(contents, result.source.index, result.destination.index);
    setContents(reorderedContents);
  };

  const toggleStyle = (styleType) => {
    if (selectedContentId === null) return;

    const contentEditable = document.getElementById(`contenteditable-${selectedContentId}`);
    const selection = window.getSelection();

    if (selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    if (!selectedText) return;

    const styleMap = {
      'bold': 'font-weight: bold;',
      'italic': 'font-style: italic;',
      'center': 'text-align: center; margin:0px;',
      'indentLeft': 'margin-left:15px;background-color:yellow;text-align:right; flex: 0.2;'
    };

    let contentHtml = contentEditable.innerHTML;
    const currentStyle = styleMap[styleType];

    if (currentStyle) {
      const regex = new RegExp(`(<span style="[^"]*)(${currentStyle})([^"]*">)(.*?)<\/span>`, 'g');
      const newStyle = contentHtml.includes(currentStyle)
        ? contentHtml.replace(regex, '$1$3$4') // Remove style
        : contentHtml.replace(selectedText, `<div style="${currentStyle}">${selectedText}</div>`); // Add style

      contentHtml = newStyle;
      handleContentChange(selectedContentId, contentHtml);

      setTimeout(() => {
        const newSelection = window.getSelection();
        newSelection.removeAllRanges();
        newSelection.addRange(range);
      }, 0);
    }
  };

  const handleAddNewTextbox = () => {
    const newTextboxId = generateUniqueId();
    const defaultText = 'Date #1 - Date #2';
    const newTextboxHtml = `<div style="font-size: 12.5px;line-height: 1;margin-top:-12.5px;margin-bottom:-6px; text-align: right;margin-left:0px">${defaultText}</div>`;

    setContents(prevContents => [
      ...prevContents,
      { id: newTextboxId, html: newTextboxHtml, type: 'textbox' }
    ]);
  };

  const addBulletPoint = () => {
    if (selectedContentId === null) return;

    const bullet = '• ';
    setContents(prevContents =>
      prevContents.map(content =>
        content.id === selectedContentId
          ? { ...content, html: `${content.html}<br>${bullet}` }
          : content
      )
    );
  };

  const selectContent = (id) => {
    setSelectedContentId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => handleButtonClick('header')}>Header</button>
        <button className={styles.button} onClick={() => handleButtonClick('section')}>Section</button>
        <button className={styles.button} onClick={() => handleButtonClick('subtitle')}>Subtitle</button>
        <button className={styles.button} onClick={() => handleAddNewTextbox()}>Date</button>
        <button className={styles.button} onClick={() => handleButtonClick('nonBoldSubtitle')}>Content</button>
        <button className={styles.button} onClick={() => addBulletPoint()}>
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button className={styles.button} onClick={() => toggleStyle('center')}>
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>
        <ReactToPrint
          trigger={() => (
            <button className={styles.button}>
              <FontAwesomeIcon icon={faPrint} />
            </button>
          )}
          content={() => printRef.current}
        />
      </div>
      <div className={styles.displayContainer}>
        <div id="leftContainer" className={styles.leftContainer}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-1">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {contents.map((content, index) => (
                    <Draggable key={content.id} draggableId={content.id} index={index}>
                      {(provided) => (
                        <div
                          className={styles.contentRow}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div
                            id={`contenteditable-${content.id}`}
                            className={styles.editableContent}
                            contentEditable
                            dangerouslySetInnerHTML={{ __html: content.html }}
                            onBlur={(e) => handleContentChange(content.id, e.target.innerHTML)}
                            onClick={() => selectContent(content.id)}
                            tabIndex="0"
                          />
                          <div className={styles.iconContainer}>
                            <button className={`${styles.iconButton} ${styles.trashIcon}`} onClick={() => handleDeleteContent(content.id)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button className={`${styles.iconButton} ${styles.addIcon}`} onClick={() => handlePlusButtonClick('title', content.id)}>
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div id="rightContainer" className={styles.rightContainer} ref={printRef}>
          {contents.map((content) => (
            <div
              key={content.id}
              className={`${styles.nonEditableContent} ${styles[`${content.type}Text`]}`}
              dangerouslySetInnerHTML={{ __html: content.html }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
