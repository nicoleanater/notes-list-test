import React, { useEffect, useState } from 'react';

function NotesList ({ list, currentFilter }) {
  const [filteredList, setFilteredList] = useState([]);

  const getFilteredList = () => {

    const activeList = orderArrayByDate(list.filter(item => item.status.toLowerCase() === 'active'));
    const completedList = orderArrayByDate(list.filter(item => item.status.toLowerCase() === 'completed'));
    const restList = orderArrayByDate(list.filter(item => item.status.toLowerCase() !== 'active' && item.status.toLowerCase() !== 'completed'));

    switch (currentFilter) {
      case 'all':
        return [...activeList, ...completedList, ...restList];
      case 'active':
        return activeList;
      case 'completed':
        return completedList;
    }
  }

  const orderArrayByDate = (array) => {
    return array.sort((firstItem, secondItem) => new Date(firstItem.addedOn) - new Date(secondItem.addedOn));
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