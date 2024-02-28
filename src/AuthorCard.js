const AuthorCard = ({ author }) => {
    return (
        <div style={{ backgroundImage: `url(${author.avatar.file.url})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100px', height: '180px' }}
        className="m-5 rounded-lg border-4 border-black bottom-5">
          <h3 className="text-center bg-stone-900 text-pink-800 ">{author.name}</h3>
        </div>
    );
  };
  
  export default AuthorCard;
  