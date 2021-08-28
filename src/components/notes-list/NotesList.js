import React, { useEffect, useState } from 'react';

function NotesList ({ list, currentFilter }) {
  const [filteredList, setFilteredList] = useState([]);

  const getFilteredList = () => {
    let resultList = null;

    if (currentFilter === 'all') {
      resultList = list;
    } else if (currentFilter === 'active') {
      resultList = list.filter(item => item.status.toLowerCase() == 'active');
    } else if (currentFilter === 'completed') {
      resultList = list.filter(item => item.status.toLowerCase() == 'completed');
    }

    resultList.sort((firstItem, secondItem) => new Date(firstItem.addedOn) - new Date(secondItem.addedOn));
    
    return resultList;
  }

  useEffect(() => {
    const filteredList = getFilteredList();
    setFilteredList(filteredList);
  }, [list, currentFilter])

	return (
    <tbody data-testid="noteList">
      {filteredList.map((note, i) => (
        <tr key={i}>
          <td>{note.title}</td>
          <td>{note.status}</td>
        </tr>
      ))}
    </tbody>
	);
}

export default NotesList;