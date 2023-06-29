import ClassRoom from './0-classroom.js';

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const classrooms = [];

  for (let i = 0; i < roomSizes.length; i++) {
    const size = roomSizes[i];
    const classroom = new ClassRoom(size);
    classrooms.push(classroom);
  }

  return classrooms;
}

const rooms = initializeRooms();
console.log(rooms);
