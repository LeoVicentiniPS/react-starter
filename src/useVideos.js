import { createClient } from 'contentful';

const useVideos = () => {
    const client = createClient({
      space: "qjqehubymncq",
      accessToken: "0fu8MhN-4PmgDEl_YJAlgfS_SxYCFLTmxT7tPZysrrI",
      host: "preview.contentful.com"
    });
  
    const getVideos = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "videos",
          select: "fields",
          order: "fields.title"
        });

        const videosFiltered = entries.items.map(({ fields: { title, url } }) => ({
          title,
          url
        }));
  
        return videosFiltered
      } catch (error) {
        console.log(`Error fetching videos: ${error}`);
      }
    };
  
    return { getVideos };
  };
  export { useVideos };