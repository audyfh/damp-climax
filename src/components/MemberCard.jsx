const MemberCard = ({ member }) => {
  const { image, name, role, desc } = member;

  return (
    <div className='bg-white rounded-4xl border border-climax-green md:border-none h-80 w-60 md:w-120 md:h-auto shadow-md flex flex-col md:flex-row justify-center items-center md:justify-start'>
      <img src={image} alt={name} className='w-40 md:w-50 h-auto rounded-4xl p-5 md:p-0 md:rounded-none' /> 
      <div className='flex flex-col justify-center items-center md:items-start md:p-5'>
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-climax-green font-medium">{role}</p>
        <p className="text-sm mt-2 text-center">Mahasiswa dengan NIM</p>
        <p className="text-sm  text-center">{desc}</p>
      </div>
    </div>
  );
};

export default MemberCard;
