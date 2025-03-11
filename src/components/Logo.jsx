const Logo = () => {
  return (
    <figure className="max-h-[70px] max-w-[70px] md:max-h-[100px] md:max-w-[100px]">
      <img 
        className="h-full w-full object-contain" 
        src="src/assets/Icon.webp" 
        alt="Healthtracker logo" 
      />
    </figure>
  );
}

export default Logo;
