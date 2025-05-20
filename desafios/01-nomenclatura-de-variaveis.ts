// Nomenclatura de variáveis

const categoriesByFollowers = [
  {
    title: 'User',
    followers: 5,
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
];

export default async function getUserCategory(req, res) {
  const githubUserName = String(req.query.githubUserName);

  if (!githubUserName) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    });
  }

  const githubApiResponse = await fetch(
    `https://api.github.com/users/${githubUserName}`
  );

  if (githubApiResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUserName}" not found`,
    });
  }

  const userData = await githubApiResponse.json();

  const sortedCategories = categoriesByFollowers.sort(
    (a, b) => b.followers - a.followers
  );

  const userCategory = sortedCategories.find(
    (i) => userData.followers > i.followers
  );

  const userWithCategory = {
    githubUserName,
    userCategory: userCategory.title,
  };

  return userWithCategory;
}

getUserCategory(
  {
    query: {
      githubUserName: 'josepholiveira',
    },
  },
  {}
);
