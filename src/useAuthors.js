import { createClient } from 'contentful';

const useAuthors = () => {
  const client = createClient({
    space: "qjqehubymncq",
    accessToken: "0fu8MhN-4PmgDEl_YJAlgfS_SxYCFLTmxT7tPZysrrI",
    host: "preview.contentful.com"
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "author",
        select: "fields",
        order: "fields.name"
      });

      const entriesFiltered = entries.items.map(({ fields: { name, avatar } }) => ({
        name,
        avatar: avatar.fields
      }));

      return entriesFiltered;
    } catch (error) {
      console.log(`Error fetching authors: ${error}`);
    }
  };

  return { getAuthors };
};

export { useAuthors };