type AvatarSize = 'small' | 'medium' |'large';
type Props = {
    image?:string | null;
    size?: AvatarSize
    highlight?: boolean;
};

export default function Avatar({
  image, 
  size = 'large', 
  highlight = false
  
}:Props) {

  return(
    <div className={getContainerStyle(size, highlight)}>
        <img 
        className={` rounded-full object-cover bg-white ${getImageSizeStyle(size)}`} 
        alt="user Profile" 
        src={image ?? undefined}
        referrerPolicy = 'no-referrer'
        />
         
    </div>
  )
}

function getContainerSize(size:AvatarSize):string{
  switch(size){
    case 'small' : return 'w-9 h-9';
    case 'medium' : return 'w-11 h-11';
    case 'large' : return 'w-[68px] h-[68px]'
  }
  
}

function getContainerStyle(size:AvatarSize, highlight:boolean):string{

  const base = 'rounded-full flex justify-center items-center';
  const hightlightStyle= highlight? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300' : '';
  const sizeStyle = getContainerSize(size)
  return `${base} ${hightlightStyle} ${sizeStyle}`;

}

function getImageSizeStyle(size:AvatarSize):string{
  switch(size){
    case 'small' : return 'w-[34px] h-[34px] p-[0.1rem]';
    case 'medium' : return 'w-[42px] h-[42px] p-[0.1rem]';
    case 'large' : return 'w-16 h-16 p-[0.2rem]'
  }

}