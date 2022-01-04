export const constructUsers = users => {
  const newUsers = users.map(user => {
    const {
      gender,
      dob: { age },
      email,
      name: { first, last },
      picture,
      location: { coordinates, street, city }
    } = user;
    const name = first.charAt(0) + last;
    return { gender, age, email, name, picture, coordinates, street, city };
  });

  return newUsers;
};
