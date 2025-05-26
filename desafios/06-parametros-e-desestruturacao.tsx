function updateUserRoute({ name, email, password }, { id }) {
  updateUserController({ name, email, password }, { id });
}

function updateUserController({ name, email, password }, { id }) {
  userRepository.update({ name, email, password }, { id });
}

const userRepository = {
  update: ({ name, email, password }, { id }) => {},
};
